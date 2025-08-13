import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Cone, Globe, User, Zap } from "lucide-react";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const SectionKPI = () => {
  const subheadlineBoxRef = useRef();
  const titleRef = useRef();
  const boxRefs = useRef([]);

  // Dynamic KPI data
  const kpiData = [
    {
      number: "250",
      unit: "Thousand",
      description: "of data processed by our models every single month",
      icon: Globe,
    },
    {
      number: "$100",
      unit: "Million",
      description:
        "client revenue driven by our tailored solutions and strategies.",
      icon: User,
    },
    {
      number: "500",
      unit: "Million",
      description:
        "users continuously running our photo enhancement software plugin.",
      icon: Cone,
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

    // Animate each KPI card
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
          <div ref={subheadlineBoxRef}>
            <Zap className="subheadline-box-icon" />
            <h2 className="small-description grey">
              Key Performance Indicators
            </h2>
          </div>
          <div className="titlebox">
            <h1 className="subheadline white" ref={titleRef}>
              Numbers That Just Make Sense
            </h1>
          </div>
        </div>

        <div className="kpi-content-row">
          {kpiData.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                className="kpi-content-item"
                key={index}
                ref={(el) => (boxRefs.current[index] = el)}
              >
                <div className="kpi-item-textbox">
                  <div className="kpi-item-textbox-top">
                    <div className="kpi-item-textbox-number">
                      <h2 className="headline kpi-item-textbox-number-text white">
                        {item.number}
                      </h2>
                      <div className="kpi-item-textbox-number-gradient" />
                    </div>
                    <h3 className="small-subheadline kpi-item-textbox-top-text white">
                      {item.unit}
                    </h3>
                  </div>
                  <p className="description grey">{item.description}</p>
                </div>
                <div className="kpi-item-button">
                  <Icon className="kpi-item-button-icon" />
                </div>
                <div className="kpi-item-grid" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
