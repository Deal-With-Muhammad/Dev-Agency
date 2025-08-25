"use client";
import { useState, useRef, useEffect } from "react";
import "../works/works.css";
import gsap from "gsap";
import { SectionFooter } from "../Main/SectionFooter";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const titleRef = useRef();
  const subtitleRef = useRef();
  const formRef = useRef();
  const contactCardsRef = useRef();
  const ctaRef = useRef();
  const [focusedField, setFocusedField] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    // Create a timeline for coordinated animations
    const tl = gsap.timeline();

    // Animate title letters one by one (without SplitText)
    const titleText = titleRef.current.textContent;
    titleRef.current.innerHTML = titleText
      .split("")
      .map(
        (char) =>
          `<span style="display: inline-block;">${
            char === " " ? "&nbsp;" : char
          }</span>`
      )
      .join("");

    const titleChars = titleRef.current.querySelectorAll("span");

    tl.fromTo(
      titleChars,
      {
        opacity: 0,
        y: 50,
        filter: "blur(8px)",
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.75,
        stagger: 0.02,
        ease: "power2.out",
      }
    )
      // Animate subtitle
      .fromTo(
        subtitleRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.3"
      )
      // Animate form container
      .fromTo(
        formRef.current,
        {
          opacity: 0,
          x: -50,
          scale: 0.95,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.5"
      );
    // Animate contact cards

    // Animate bottom CTA

    // Animate form fields on mount
    const formFields = formRef.current.querySelectorAll(".form-field");
    gsap.fromTo(
      formFields,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        delay: 1.2,
        ease: "power2.out",
      }
    );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Button animation on submit
    const button = e.target;
    gsap.to(button, {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut",
    });

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", company: "", message: "" });
    }, 2000);
  };

  // Add hover animations for input focus
  const handleInputFocus = (fieldName) => {
    setFocusedField(fieldName);
    const field = document.querySelector(
      `input[name="${fieldName}"], textarea[name="${fieldName}"]`
    );
    if (field) {
      gsap.to(field, {
        scale: 1.02,
        duration: 0.2,
        ease: "power2.out",
      });
    }
  };

  const handleInputBlur = (fieldName) => {
    setFocusedField("");
    const field = document.querySelector(
      `input[name="${fieldName}"], textarea[name="${fieldName}"]`
    );
    if (field) {
      gsap.to(field, {
        scale: 1,
        duration: 0.2,
        ease: "power2.out",
      });
    }
  };

  return (
    <div className="min-h-screen relative pt-[10vh] overflow-hidden">
      <div className="relative px-4 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="inline-block">
              <h1 className="headline white" ref={titleRef}>
                Let's Create Magic
              </h1>
            </div>
            <p
              ref={subtitleRef}
              className="text-2xl text-black max-w-3xl mx-auto leading-relaxed font-light"
            >
              Transform your vision into extraordinary digital experiences.
              <span className="font-medium">
                {" "}
                We're here to make it happen.
              </span>
            </p>
          </div>

          <div className="">
            {/* Contact Form - Takes 3/5 of the space */}
            <div className="">
              <div
                ref={formRef}
                className=" rounded-3xl shadow-2xl p-10 border border-gray-100 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-black via-gray-600 to-black"></div>

                <h2 className="text-3xl font-bold text-black mb-8 flex items-center">
                  <span className="w-3 h-3 bg-black rounded-full mr-4 animate-pulse"></span>
                  Start Your Project
                </h2>

                <div className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="group form-field">
                      <label className="block text-sm font-semibold text-black mb-3 transition-all duration-300">
                        Full Name *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => handleInputFocus("name")}
                          onBlur={() => handleInputBlur("name")}
                          className="w-full px-6 py-2 border-2 border-gray-200 rounded-xl focus:border-black text-black placeholder-gray-400 transition-all duration-300 bg-gray-50 focus:bg-white focus:shadow-lg"
                          placeholder="John Doe"
                        />
                        {focusedField === "name" && (
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-black rounded-full animate-ping"></div>
                        )}
                      </div>
                    </div>

                    <div className="group form-field">
                      <label className="block text-sm font-semibold text-black mb-3">
                        Email Address *
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => handleInputFocus("email")}
                          onBlur={() => handleInputBlur("email")}
                          className="w-full px-6 py-2 border-2 border-gray-200 rounded-xl focus:border-black text-black placeholder-gray-400 transition-all duration-300 bg-gray-50 focus:bg-white focus:shadow-lg"
                          placeholder="john@company.com"
                        />
                        {focusedField === "email" && (
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-black rounded-full animate-ping"></div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="group form-field">
                    <label className="block text-sm font-semibold text-black mb-3">
                      Company
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        onFocus={() => handleInputFocus("company")}
                        onBlur={() => handleInputBlur("company")}
                        className="w-full px-6 py-2 border-2 border-gray-200 rounded-xl focus:border-black text-black placeholder-gray-400 transition-all duration-300 bg-gray-50 focus:bg-white focus:shadow-lg"
                        placeholder="Your Amazing Company"
                      />
                      {focusedField === "company" && (
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-black rounded-full animate-ping"></div>
                      )}
                    </div>
                  </div>

                  <div className="group form-field">
                    <label className="block text-sm font-semibold text-black mb-3">
                      Tell us about your dream project *
                    </label>
                    <div className="relative">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => handleInputFocus("message")}
                        onBlur={() => handleInputBlur("message")}
                        rows="6"
                        className="w-full px-6 py-2 border-2 border-gray-200 rounded-xl focus:border-black text-black placeholder-gray-400 transition-all duration-300 bg-gray-50 focus:bg-white focus:shadow-lg resize-none"
                        placeholder="Describe your vision, goals, timeline, and what success looks like to you..."
                      />
                      {focusedField === "message" && (
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-black rounded-full animate-ping"></div>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitted}
                    className="group w-full bg-black text-white py-4 px-8 rounded-xl font-bold text-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-xl relative overflow-hidden disabled:opacity-50 form-field"
                  >
                    <span
                      className={`transition-opacity duration-300 ${
                        isSubmitted ? "opacity-0" : "opacity-100"
                      }`}
                    >
                      Send Message ✨
                    </span>
                    {isSubmitted && (
                      <span className="absolute inset-0 flex items-center justify-center text-white">
                        Message Sent! 🚀
                      </span>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 group-hover:translate-x-full transition-all duration-1000"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <SectionFooter />
        </div>
      </div>
    </div>
  );
}
