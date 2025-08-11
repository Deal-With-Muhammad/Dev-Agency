"use client";
import { Card, CardBody } from "@heroui/react";
import { Code2, Server, Shield, Brain, Check } from "lucide-react";

export default function WhatWeGoodAtSection() {
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

  return (
    <section className="py-16 px-4 ">
      <div className=" mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-7xl font-bold mb-4 text-foreground">
            What We're Good At
          </h2>
          <p className="text-md text-default-600 max-w-4xl mx-auto leading-relaxed">
            We geek out on cutting-edge tech – from modern frameworks to
            infrastructure tweaks and AI tinkering – all to build stuff that
            works
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} shadow="none" className="h-full">
              <CardBody className="p-6">
                {/* Icon */}
                <div className="mb-4">{service.icon}</div>

                {/* Title */}
                <h3 className="text-md font-semibold mb-3 text-foreground">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-default-600 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Feature List */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-default-600"
                    >
                      <Check className="w-4 h-4 text-success mr-2 flex-shrink-0" />
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
