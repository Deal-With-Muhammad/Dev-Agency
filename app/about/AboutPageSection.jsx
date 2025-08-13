"use client";
import React, { useEffect, useRef } from "react";
import { ReactLenis } from "lenis/react";
import { SectionFooter } from "../Main/SectionFooter";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { SplitText, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(SplitText, ScrollTrigger, TextPlugin);

export const AboutPageSection = ({}) => {
  const titleRef = useRef();
  const titleRef2 = useRef();
  const descriptionRef = useRef();
  const lineRef = useRef();
  const itemRefs = useRef([]);
  const stickyRefs = useRef([]);

  // ✅ Example dynamic structure
  // You could also fetch this from Supabase, Contentful, etc.
  const { headline, description, teamMembers, whyUs, stickySections } =
    aboutData;

  useEffect(() => {
    // Headline animation
    const titleSplit = new SplitText(titleRef.current, { type: "chars" });
    gsap.fromTo(
      titleSplit.chars,
      { filter: "blur(8px)", opacity: 0, yPercent: 50 },
      {
        opacity: 1,
        filter: "blur(0px)",
        yPercent: 0,
        stagger: 0.02,
        duration: 0.75,
        ease: "power1",
      }
    );

    gsap.to(descriptionRef.current, {
      opacity: 1,
      filter: "blur(0px)",
      duration: 1,
      delay: 0.6,
    });

    gsap.fromTo(
      lineRef.current,
      { opacity: 0, filter: "blur(8px)" },
      { opacity: 1, filter: "blur(0px)", duration: 0.5, delay: 0.5 }
    );

    const titleSplit2 = new SplitText(titleRef2.current, { type: "words" });
    gsap.fromTo(
      titleSplit2.words,
      { opacity: 0, filter: "blur(8px)" },
      {
        opacity: 1,
        filter: "blur(0px)",
        stagger: 0.025,
        ease: "sine",
        scrollTrigger: {
          trigger: titleRef2.current,
          start: "top 95%",
          scrub: true,
        },
      }
    );

    itemRefs.current.forEach((item, index) => {
      gsap.fromTo(
        item,
        { yPercent: 100, opacity: 0, filter: "blur(8px)" },
        {
          yPercent: 0,
          opacity: 1,
          filter: "blur(0px)",
          delay: index * 0.2,
          ease: "power3",
          scrollTrigger: {
            trigger: ".five-content",
            start: "top bottom",
          },
        }
      );
    });

    stickyRefs.current.forEach((el, index) => {
      const isLast = index === stickyRefs.current.length - 1;
      gsap
        .timeline({
          scrollTrigger: {
            trigger: el,
            start: "center center",
            end: "350%",
            scrub: true,
          },
        })
        .to(el, {
          filter: isLast ? "blur(0px)" : "blur(3px)",
          scale: isLast ? 1 : 0.55,
          yPercent: isLast ? 0 : -45,
          ease: "none",
        });
    });
  }, []);

  return (
    <ReactLenis root>
      <section className="about">
        <div className="about-content">
          {/* Top Section */}
          {/* <div className="about-content-top">
            <div className="about-content-textbox">
              <h1 className="  text-white" ref={titleRef}>
                {headline}
              </h1>
              <p className="  text-white opacity-blur" ref={descriptionRef}>
                {description}
              </p>
            </div>
            <div className="about-divider" ref={lineRef} />
          </div> */}

          {/* Team Section */}
          {/* <div className="about-team">
            <div className="about-team-container">
              {teamMembers.map((member, index) => (
                <div
                  className="about-team-item"
                  key={index}
                  ref={(el) => (itemRefs.current[index] = el)}
                >
                  <p className="description white">{member.name}</p>
                  <p className="description white">{member.title}</p>
                </div>
              ))}
            </div>
          </div> */}

          {/* Why Us */}
          <div className="about-divider" />
          <div className="about-whyus">
            <p className="description grey">Why us</p>
            <p className="subheadline white" ref={titleRef2}>
              {whyUs}
            </p>
          </div>

          {/* Sticky Sections */}
          <div className="about-divider" />
          <div className="about-sticky-container">
            {stickySections.map((section, i) => (
              <div
                className="about-sticky-item"
                key={i}
                ref={(el) => (stickyRefs.current[i] = el)}
              >
                <div className="about-sticky-item-left">
                  <div className="about-sticky-item-left-textbox">
                    <h1 className=" text-7xl font-bold text-white">
                      {section.title}
                    </h1>
                    <p className=" text-xl text-white">{section.description}</p>
                  </div>
                  <h1 className="text-7xl text-white font-black">
                    ({String(i + 1).padStart(2, "0")})
                  </h1>
                </div>
                <div className="about-sticky-item-right">
                  <img
                    src={section.image}
                    className="about-sticky-item-right-image rounded-2xl"
                    alt={section.title}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <SectionFooter />
    </ReactLenis>
  );
};
export const aboutData = {
  headline: "A Global Network Of Talent",
  description:
    "We've assembled a team of dedicated professionals from diverse backgrounds who share the same passion for your brand as you do.",
  teamMembers: [
    { name: "Idan Zeidman", title: "Co-CEO & Co-Founder" },
    { name: "Lorenzo Noya", title: "Co-CEO & Co-Founder" },
    { name: "Matvey Vasilyev", title: "COO & Co-Founder" },
    { name: "Rainer Ahi", title: "CTO" },
    { name: "Romet Kriks", title: "Motion Graphics Designer" },
    { name: "Sardor Xujamov", title: "Visualization Expert" },
  ],
  whyUs:
    "At Genie Aura, we embrace the creator’s mindset — curious, bold, and driven to make a real impact. We don’t just build digital products; we work side-by-side with our clients to spark ideas, shape visions, and transform industries through fresh, meaningful experiences. From elevating brands to unlocking growth, every project is our chance to push boundaries, deliver with excellence, and leave something unforgettable behind.",
  stickySections: [
    {
      title: "Web Development",
      description:
        "Your website should be more than functional—it should resonate. We craft bespoke digital experiences that merge innovation with creativity, delivering intuitive, visually stunning platforms that captivate audiences, reflect your brand's essence, and adapt to future opportunities.",
      image:
        "https://cdn.dribbble.com/userupload/16992356/file/original-049acea0cb3b604de901dc87f7599cdd.png?resize=1504x1128&vertical=center",
    },
    {
      title: "App Development",
      description:
        "We design and develop mobile applications that blend performance, usability, and visual appeal. Whether for iOS, Android, or cross-platform, our apps are built to engage users, solve real problems, and adapt as your business grows—ensuring a seamless experience across all devices.",
      image:
        "https://cdn.dribbble.com/userupload/16779043/file/original-f0fa9e97854c1b322ef711072fb0af9e.png?resize=1504x1128&vertical=center",
    },
    {
      title: "Design",
      description:
        "Design is your brand's voice. We craft visuals and layouts that communicate purpose, inspire trust, and connect emotionally. By harmonizing artistry with intent, our designs transform user interactions into meaningful, memorable experiences that align with your identity.",
      image:
        "https://cdn.dribbble.com/userupload/43761533/file/original-baf87adce93177903189e8b859ae7246.png?resize=1504x1128&vertical=center",
    },
    {
      title: "Software Development",
      description:
        "We build custom software that evolves with your business. By addressing unique challenges, our tailored solutions streamline workflows, eliminate inefficiencies, and foster innovation—empowering you to scale, adapt, and maintain a competitive edge in an ever-changing landscape.",
      image:
        "https://cdn.dribbble.com/userupload/13938052/file/original-e154238d1518af202edd1a06323eba77.png?resize=1504x1128&vertical=center",
    },
    {
      title: "AI Automation",
      description:
        "Harness the potential of artificial intelligence to streamline your workflows, predict trends, and unlock new growth opportunities. From intelligent chatbots to predictive analytics, we integrate AI seamlessly into your processes—making them smarter, faster, and more adaptive.",
      image:
        "https://cdn.dribbble.com/userupload/17922532/file/original-d82d086e0aecdc408f71b055633e9d57.png?resize=1504x1128&vertical=center",
    },
  ],
};
