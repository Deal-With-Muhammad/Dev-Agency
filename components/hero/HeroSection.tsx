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
    // GSAP animations
    const tl = gsap.timeline();

    gsap.set([titleRef.current, subtitleRef.current, buttonsRef.current], {
      opacity: 0,
      y: 50,
    });

    gsap.set(backgroundTextRef.current, { opacity: 0.05, scale: 0.9 });

    tl.to(titleRef.current, {
      duration: 1.2,
      opacity: 1,
      y: 0,
      ease: "power4.out",
    })
      .to(
        subtitleRef.current,
        { duration: 1, opacity: 1, y: 0, ease: "power3.out" },
        "-=0.8"
      )
      .to(
        buttonsRef.current,
        { duration: 1, opacity: 1, y: 0, ease: "back.out(1.7)" },
        "-=0.6"
      );

    ScrollTrigger.create({
      trigger: heroRef.current,
      start: "top top",
      scrub: 1,
      onUpdate: (self) => {
        const p = self.progress;
        gsap.to(backgroundTextRef.current, {
          y: p * 40,
          opacity: 0.05 - p * 0.02,
          duration: 0.3,
        });
      },
    });

    // Three.js particles
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

      const geometry = new THREE.BufferGeometry();
      const count = 500;
      const positions = new Float32Array(count * 3);

      for (let i = 0; i < count * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 10;
      }
      geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );

      const material = new THREE.PointsMaterial({
        color: "#0EA5E9",
        size: 0.02,
      });
      const particles = new THREE.Points(geometry, material);
      scene.add(particles);

      camera.position.z = 3;

      function animate() {
        requestAnimationFrame(animate);
        particles.rotation.y += 0.0008;
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
      {/* Three.js background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Faint background text */}
      <div
        ref={backgroundTextRef}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
      >
        <div className="text-[18vw] font-black opacity-5 text-foreground/10 leading-none">
          CODE
        </div>
      </div>

      <div className="max-w-5xl w-full mx-auto px-6 md:px-12 relative z-10 text-center">
        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-tight bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent"
        >
          Genie<span className="text-primary">Aura</span>
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
