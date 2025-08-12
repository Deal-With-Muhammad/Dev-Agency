"use client";
import { Card, CardBody } from "@heroui/react";
import { Code2, Server, Shield, Brain, Check } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function WhatWeGoodAtSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      icon: <Code2 className="w-8 h-8 text-primary" />,
      title: "Modern Frontend",
      description:
        "We craft interfaces people actually enjoy using, with React, Next.js, and TypeScript under the hood, plus TailwindCSS and Radix UI for that extra polish.",
      features: [
        "Server and client components",
        "Type-safe development",
        "Responsive design systems",
      ],
    },
    {
      icon: <Server className="w-8 h-8 text-primary" />,
      title: "Scalable Backend",
      description:
        "We build the behind-the-scenes magic with Node.js, Express, and database wizardry via MongoDB and MariaDB that keeps everything running smoothly.",
      features: [
        "RESTful API design",
        "Advanced data modeling",
        "Real-time data processing",
      ],
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Security Expertise",
      description:
        "We take security seriously (but not ourselves). From encryption to DNS protection and access control, we keep the bad guys out and your data safe.",
      features: [
        "DDoS mitigation",
        "Anti-piracy solutions",
        "Zero-trust architecture",
      ],
    },
    {
      icon: <Brain className="w-8 h-8 text-primary" />,
      title: "AI & Machine Learning",
      description:
        "We teach computers to see, talk, and predict cool stuff using Python, JavaScript, and a bunch of fancy AI tools (but we promise not to create Skynet).",
      features: [
        "Custom model training",
        "Computer vision systems",
        "Multi-modal AI development",
      ],
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial state - hide elements
      gsap.set([titleRef.current, descriptionRef.current], {
        opacity: 0,
        y: 50,
      });

      gsap.set(".service-card", {
        opacity: 0,
        y: 80,
        scale: 0.9,
      });

      // Create timeline for entrance animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate title and description
      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      })
        .to(
          descriptionRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .to(
          ".service-card",
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
          },
          "-=0.3"
        );

      // Add hover animations for cards
      const cards = document.querySelectorAll(".service-card");
      cards.forEach((card) => {
        const cardElement = card as HTMLElement;

        cardElement.addEventListener("mouseenter", () => {
          gsap.to(cardElement, {
            y: -8,
            scale: 1.02,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        cardElement.addEventListener("mouseleave", () => {
          gsap.to(cardElement, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-primary/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-primary/20 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground"
          >
            What We're Good At
          </h2>
          <p
            ref={descriptionRef}
            className="text-lg md:text-xl text-default-600 max-w-4xl mx-auto leading-relaxed"
          >
            We geek out on cutting-edge tech – from modern frameworks to
            infrastructure tweaks and AI tinkering – all to build stuff that
            works
          </p>
        </div>

        {/* Services Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <Card
              key={index}
              shadow="none"
              className="service-card h-full bg-background/50 backdrop-blur-sm border border-default-200/50 hover:border-primary/30 transition-colors duration-300"
            >
              <CardBody className="p-8">
                <div className="mb-6 p-3 bg-primary/10 rounded-xl w-fit">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-default-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Feature List */}
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start text-sm text-default-600"
                    >
                      <Check className="w-4 h-4 text-success mr-3 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
