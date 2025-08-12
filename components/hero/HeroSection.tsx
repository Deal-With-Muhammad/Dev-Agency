"use client";

import { useEffect, useRef } from "react";
import { Button } from "@heroui/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const backgroundTextRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // --- GSAP Intro Animation ---
    const tl = gsap.timeline();

    gsap.set(titleRef.current, {
      opacity: 0,
      scale: 2.2, // Zoomed in at start
      y: 100,
    });
    gsap.set([subtitleRef.current, buttonsRef.current], {
      opacity: 0,
      y: 50,
    });
    gsap.set(backgroundTextRef.current, { opacity: 0.05, scale: 1.1 });

    tl.to(titleRef.current, {
      duration: 1.4,
      opacity: 1,
      scale: 1,
      y: 0,
      ease: "power4.out",
    })
      .to(
        subtitleRef.current,
        { duration: 1, opacity: 1, y: 0, ease: "power3.out" },
        "-=0.6"
      )
      .to(
        buttonsRef.current,
        { duration: 0.8, opacity: 1, y: 0, ease: "back.out(1.7)" },
        "-=0.4"
      );

    ScrollTrigger.create({
      trigger: heroRef.current,
      start: "top top",
      scrub: 1,
      onUpdate: (self) => {
        const p = self.progress;
        gsap.to(backgroundTextRef.current, {
          y: p * 50,
          opacity: 0.05 - p * 0.03,
          duration: 0.3,
        });
      },
    });

    // --- Three.js Particles ---
    if (canvasRef.current) {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      const renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current,
        alpha: true,
      });
      renderer.setSize(window.innerWidth, window.innerHeight);

      // Particle geometry
      const geometry = new THREE.BufferGeometry();
      const count = 800;
      const positions = new Float32Array(count * 3);

      for (let i = 0; i < count * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 12;
      }
      geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );

      const material = new THREE.PointsMaterial({
        color: "#0EA5E9",
        size: 0.025,
      });

      const particles = new THREE.Points(geometry, material);
      scene.add(particles);

      camera.position.z = 5;

      // Mouse interaction
      let mouseX = 0;
      let mouseY = 0;

      window.addEventListener("mousemove", (e) => {
        mouseX = (e.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
      });

      function animate() {
        requestAnimationFrame(animate);

        // Smooth rotation toward mouse position
        particles.rotation.y += (mouseX * 0.2 - particles.rotation.y) * 0.05;
        particles.rotation.x += (mouseY * 0.2 - particles.rotation.x) * 0.05;

        renderer.render(scene, camera);
      }
      animate();
    }
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-[90vh] flex items-start justify-center pt-32 overflow-hidden"
    >
      {/* Three.js Particles */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Hero Content */}
      <div className="max-w-5xl w-full mx-auto px-6 md:px-12 relative z-10 text-center">
        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-tight "
        >
          {"< "}Genie<span className="text-primary">Aura {"/>"}</span>
        </h1>

        <p
          ref={subtitleRef}
          className="mt-6 text-lg md:text-2xl text-foreground/80 max-w-3xl mx-auto leading-relaxed"
        >
          Pioneering{" "}
          <span className="text-primary font-semibold">App Development</span>,
          AI-driven solutions, and modern web experiences that help your
          business dominate the digital space.
        </p>

        <div
          ref={buttonsRef}
          className="mt-10 flex gap-6 flex-wrap justify-center"
        >
          <Button
            size="lg"
            color="primary"
            radius="full"
            className="px-8 shadow-lg hover:scale-105 transition"
          >
            Start Your Project
          </Button>
          <Button
            size="lg"
            color="primary"
            variant="bordered"
            radius="full"
            className="px-8 hover:bg-primary hover:text-white transition"
          >
            View Our Work
          </Button>
        </div>
      </div>
    </section>
  );
}
