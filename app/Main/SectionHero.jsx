"use client";

/* eslint-disable react/jsx-key */
import { Suspense, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import Marquee from "react-fast-marquee";
import { ArrowUpRight } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { Environment, Float, OrbitControls } from "@react-three/drei";
import { Item3 } from "./HeroModel/Coins";

gsap.registerPlugin(SplitText, ScrollTrigger);

const TechLogos = {
  React: () => (
    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
      <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89s-.84 1.89-1.87 1.89c-1.03 0-1.87-.84-1.87-1.89s.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.37 1.95-1.47-.84-1.63-3.05-1.01-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1.01-5.63 1.46-.84 3.45.12 5.37 1.95 1.92-1.83 3.91-2.79 5.37-1.95z" />
    </svg>
  ),
  JavaScript: () => (
    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
      <path d="M3 3h18v18H3V3zm16.525 13.707c-.131-.821-.666-1.511-2.252-2.155-.552-.259-1.165-.438-1.349-.854-.068-.248-.078-.382-.034-.529.113-.484.687-.629 1.137-.495.293.09.563.315.732.676.775-.507.775-.507 1.316-.844-.203-.314-.304-.451-.439-.586-.473-.528-1.103-.798-2.126-.77l-.528.067c-.507.124-.991.395-1.283.754-.855.968-.608 2.655.427 3.354 1.023.765 2.521.933 2.712 1.653.18.878-.652 1.159-1.475 1.058-.607-.136-.945-.439-1.316-1.002l-1.372.788c.157.359.337.517.607.832 1.305 1.316 4.568 1.249 5.153-.754.021-.067.18-.528.056-1.237l.034.049zm-6.737-5.434h-1.686c0 1.453-.007 2.898-.007 4.354 0 .924.047 1.772-.104 2.033-.247.517-.886.451-1.175.359-.297-.146-.448-.349-.623-.641-.047-.078-.082-.146-.095-.146l-1.368.844c.229.473.563.879.994 1.137.641.383 1.502.507 2.404.305.588-.17 1.095-.519 1.358-1.059.384-.697.302-1.553.299-2.509.008-1.541 0-3.083 0-4.635l.003-.042z" />
    </svg>
  ),
  NextJS: () => (
    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
      <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747C19.146 4.318 16.006.5 11.572 0z" />
    </svg>
  ),
  TypeScript: () => (
    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
      <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
    </svg>
  ),
  Tailwind: () => (
    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zM6.001 12c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
    </svg>
  ),
  Stripe: () => (
    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
      <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.274 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.57 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z" />
    </svg>
  ),
  PayPal: () => (
    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
      <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.926-.774l.038-.247.732-4.64.047-.267c.077-.44.466-.774.926-.774h.582c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z" />
    </svg>
  ),
};

const techLogos = [
  { name: "React", component: TechLogos.React },
  { name: "JavaScript", component: TechLogos.JavaScript },
  { name: "Next.js", component: TechLogos.NextJS },
  { name: "TypeScript", component: TechLogos.TypeScript },
  { name: "Tailwind CSS", component: TechLogos.Tailwind },
  { name: "Stripe", component: TechLogos.Stripe },
  { name: "PayPal", component: TechLogos.PayPal },
];

export const SectionHero = () => {
  // REFS
  const titleRef = useRef();
  const descriptionRef = useRef();
  const buttonRef1 = useRef();
  const buttonCircleRef1 = useRef();
  const buttonRef2 = useRef();
  const logosWrapperRef = useRef();
  const cursor = useRef();
  const [showCursor, setShowCursor] = useState(false);

  // GSAP ANIMATIONS
  useEffect(() => {
    gsap.set(titleRef.current, { opacity: 1 });

    const titleSplit = new SplitText(titleRef.current, { type: "chars" });
    gsap.fromTo(
      titleSplit.chars,
      {
        "will-change": "opacity, transform",
        filter: "blur(8px)",
        opacity: 0,
        yPercent: 50,
      },
      {
        delay: 0.4,
        opacity: 1,
        filter: "blur(0px)",
        yPercent: 0,
        stagger: 0.02,
        duration: 0.75,
        ease: "power1",
      }
    );

    // description text animation
    gsap.to(descriptionRef.current, {
      opacity: 1,
      filter: "blur(0px)",
      duration: 1,
      delay: 0.9,
    });

    // buttons animation
    gsap.to(buttonRef1.current, {
      delay: 1.1,
      opacity: 1,
      filter: "blur(0px)",
      duration: 0.5,
      ease: "power1",
    });
    gsap.to(buttonRef2.current, {
      delay: 1.4,
      opacity: 1,
      filter: "blur(0px)",
      duration: 0.5,
      ease: "power1",
    });

    // logos wrapper animation
    gsap.to(logosWrapperRef.current, {
      opacity: 1,
      filter: "blur(0px)",
      duration: 1,
      delay: 0.9,
    });
  }, []);

  // FOLLOWING CURSOR
  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    const speed = 0.05;

    const handleMouseMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    const animate = () => {
      const distX = mouseX - cursorX;
      const distY = mouseY - cursorY;

      cursorX += distX * speed;
      cursorY += distY * speed;

      if (cursor.current) {
        cursor.current.style.left = `${cursorX}px`;
        cursor.current.style.top = `${cursorY}px`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (showCursor) {
      gsap.to(cursor.current, {
        autoAlpha: 1,
        scale: 1,
        duration: 0.3,
        ease: "power3.out",
      });
    } else {
      gsap.to(cursor.current, {
        autoAlpha: 0,
        scale: 0,
        duration: 0.3,
        ease: "power3.in",
      });
    }
  }, [showCursor]);

  const handleMouseEnter = () => {
    setShowCursor(true);
  };

  const handleMouseLeave = () => {
    setShowCursor(false);
  };

  return (
    <section className="hero">
      <div className="hero-background-element-small" />
      <div className="hero-background-element-grid-small" />
      <div className="hero-content">
        <div className="hero-content-row">
          <div className="hero-content-left">
            <div className="hero-textbox">
              <div className="hero-titlebox">
                <div className="hero- " />
                <h1 className="headline hero-headline white" ref={titleRef}>
                  Crafting Digital <br /> Masterpieces
                </h1>
              </div>
              <p
                className="big-description grey opacity-blur"
                ref={descriptionRef}
              >
                Harnessing Cutting-Edge Visualization Technology to Transform
                Vision into Tailored Digital Reality
              </p>
            </div>
            <div className="hero-buttons-row">
              <button
                className="button button-transparent-border opacity-blur"
                ref={buttonRef1}
              >
                <div className="button-content">
                  <span className="small-description">See More</span>
                  <span className="small-description">See More</span>
                </div>
                <div className="button-circle" ref={buttonCircleRef1}>
                  <ArrowUpRight className="button-icon button-icon-180" />
                </div>
              </button>
              <button
                className="button button-transparent-border opacity-blur"
                ref={buttonRef2}
              >
                <div className="button-content">
                  <span className="small-description">Get In Touch</span>
                  <span className="small-description">Get In Touch</span>
                </div>
                <div className="button-circle">
                  <ArrowUpRight className="button-icon" />
                </div>
              </button>
            </div>
          </div>
          <div
            className="hero-content-right"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Canvas
              style={{
                pointerEvents: "auto",
                width: "100%",
                height: "100%",
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 1,
              }}
              camera={{ position: [2, 0, 10], fov: 35 }}
            >
              <Suspense fallback>
                <Float rotationIntensity={0.5} floatIntensity={2} speed={2}>
                  <Item3 />
                </Float>
                <Environment preset="sunset" />
                <OrbitControls
                  maxPolarAngle={Math.PI / 2}
                  enableZoom={false}
                  enableRotate={true}
                  enablePan={false}
                />
              </Suspense>
            </Canvas>
          </div>
        </div>
        <div className="hero-content-bottom opacity-blur" ref={logosWrapperRef}>
          <Marquee
            gradient={true}
            gradientColor={[0, 0, 0]} // RGB array, no alpha
            gradientWidth={100}
            speed={40}
            pauseOnHover={true}
          >
            {techLogos.map((logo, i) => (
              <div
                className="flex items-center justify-center mx-4 p-2 px-4 rounded-full bg-black/5 backdrop-blur-sm border border-black/10 hover:bg-black/10 transition-all duration-300 group"
                key={i}
              >
                <div className="text-black/70 group-hover:text-black transition-colors duration-300">
                  {logo.component()}
                </div>
                <span className="ml-3 text-sm font-medium text-black/60 group-hover:text-black/90 transition-colors duration-300">
                  {logo.name}
                </span>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
      <div className="hover-cursor" ref={cursor}>
        <p className="small-description text-black">Drag</p>
      </div>
    </section>
  );
};
