"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShoppingCart, Smartphone, Database, Zap } from "lucide-react";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const SectionKPI = () => {
  const subheadlineBoxRef = useRef();
  const titleRef = useRef();
  const boxRefs = useRef([]);

  // Services data with pricing - removed all gradient references
  const servicesData = [
    {
      title: "Custom E-commerce",
      price: "$15,000",
      priceUnit: "Starting at",
      description:
        "Complete full-stack custom e-commerce websites with payment integration, inventory management, and responsive design for optimal user experience.",
      features: [
        "Payment Gateway Integration",
        "Inventory Management",
        "Mobile Responsive",
        "SEO Optimized",
      ],
      icon: ShoppingCart,
    },
    {
      title: "Cross-Platform Mobile Apps",
      price: "$25,000",
      priceUnit: "Starting at",
      description:
        "Complete full-stack mobile applications for both iOS and Android platforms using React Native, ensuring consistent performance across devices.",
      features: [
        "iOS & Android",
        "Native Performance",
        "Push Notifications",
        "Offline Capability",
      ],
      icon: Smartphone,
    },
    {
      title: "Custom CRM Systems",
      price: "$20,000",
      priceUnit: "Starting at",
      description:
        "Tailored Customer Relationship Management systems designed to streamline your business processes, and enhance every customer interaction for maximum efficiency.",
      features: [
        "Lead Management",
        "Analytics Dashboard",
        "Automation Tools",
        "Third-party Integrations",
      ],
      icon: Database,
    },
  ];

  useEffect(() => {
    // subheadline box animation
    gsap.to(subheadlineBoxRef.current, {
      opacity: 1,
      filter: "blur(0px)",
      duration: 0.5,
      ease: "power1",
      scrollTrigger: { trigger: subheadlineBoxRef.current, start: "top 95%" },
    });

    // headline text animation
    const titleSplit = new SplitText(titleRef.current, { type: "words" });
    gsap.fromTo(
      titleSplit.words,
      {
        willChange: "opacity, transform",
        filter: "blur(8px)",
        opacity: 0,
        yPercent: 100,
      },
      {
        opacity: 1,
        filter: "blur(0px)",
        yPercent: 0,
        stagger: 0.085,
        duration: 1,
        ease: "power2",
        scrollTrigger: { trigger: titleRef.current, start: "top 95%" },
      }
    );

    // Animate each service card
    boxRefs.current.forEach((ref, i) => {
      if (!ref) return;
      gsap.fromTo(
        ref,
        { rotationY: 30, scale: 0.6, opacity: 0 },
        {
          delay: i * 0.2,
          rotationY: 0,
          scale: 1,
          opacity: 1,
          duration: 0.75,
          ease: "power1",
          scrollTrigger: { trigger: ref, start: "top bottom" },
        }
      );
    });
  }, []);

  return (
    <section className="kpi">
      <div className="kpi-content">
        <div className="textbox">
          <div
            ref={subheadlineBoxRef}
            className="subheadline-box opacity-blur"
            style={{ filter: "blur(8px)" }}
          >
            <Zap className="w-4 h-4 subheadline-box-icon" />
            <h2 className="text-sm font-medium small-description grey">
              Our Premium Services
            </h2>
          </div>
          <div className="titlebox">
            <h1 className="subheadline white" ref={titleRef}>
              Solutions That Drive Results
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                className="group relative bg-[#fafafa] bg-gradient-to-b from-[#fafafa]  to-[#eaeaea] border-1 border-[#eaeaea] rounded-4xl p-8 hover:bg-black hover:from-black hover:to-[#363636] hover:text-white transition-colors  duration-500 ease-in-out "
                key={index}
                ref={(el) => (boxRefs.current[index] = el)}
              >
                {/* Icon - changed to simple black background */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black  mb-6">
                  <Icon className="w-6 h-6 text-white " />
                </div>

                {/* Service title - changed to black text with hover white */}
                <h3 className="text-xl font-bold text-black group-hover:text-white mb-2">
                  {service.title}
                </h3>

                {/* Pricing */}
                <div className="mb-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-black group-hover:text-white">
                      {service.price}
                    </span>
                    <span className="text-sm text-gray-600 group-hover:text-gray-300">
                      {service.priceUnit}
                    </span>
                  </div>
                </div>

                {/* Description - changed to gray text */}
                <p className="text-gray-700 group-hover:text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features - removed gradient dots, using simple black dots */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-black group-hover:bg-white" />
                      <span className="text-sm text-gray-600 group-hover:text-gray-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button - changed to simple black button */}
                <button className="w-full py-3 px-4 rounded-xl bg-black text-white font-medium  transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:border group-hover:border-black">
                  Get Started
                </button>

                {/* Decorative grid - changed to black dots */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                  <div className="grid grid-cols-8 gap-1 h-full">
                    {Array.from({ length: 64 }).map((_, i) => (
                      <div
                        key={i}
                        className="bg-black rounded-sm group-hover:bg-white"
                      />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA - changed to black and white theme */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Need a custom solution? Let's discuss your specific requirements.
          </p>
          <button className="px-8 py-4 bg-black text-white font-semibold rounded-xl hover:bg-white hover:text-black hover:border-1 transition-colors duration-300">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
};
