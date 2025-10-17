import React, { useEffect, useRef } from "react";
import "./OfficeBearers.css";
import chairperson from "../assets/vishwa.jpg";
import generalsecretary from "../assets/kalai.jpg";
import programsecretary from "../assets/pavi.jpg";
import jointtreasurer from "../assets/sanjay.jpg";
import eventcoordinator from "../assets/karthi.jpg";
import vicechairperson from "../assets/chocku.jpg";
import headofpr from "../assets/praveen.jpg";
import headofreport from "../assets/mano.jpg";
import jointsecretary from "../assets/tharun.jpg";
import headofediting from "../assets/madesh.jpg";
import pgrep from "../assets/vasanth.jpg"

const bearers = [
  { role: "Chairperson", name: "Vishwa R", img:chairperson },
  { role: "General Secretary", name: "Kalaiselvan L", img: generalsecretary},
  { role: "Program Secretary", name: "Pavithra G", img: programsecretary},
  { role: "Joint Treasurer", name: "Sanjaykumar A", img: jointtreasurer},
  { role: "Event Coordinator", name: "Karthikeyan M", img: eventcoordinator },
  { role: "Vice Chairperson", name: "Chockalingam M", img: vicechairperson },
  { role: "Head of Public Relations", name: "Praveen D", img: headofpr },
  { role: "Head of Report Team", name: "Manotheetha Amirthini S", img: headofreport },
  { role: "Joint Secretary", name: "Tharun Kumar V", img: jointsecretary },
  { role: "Head of Editing Team", name: "Madesh D", img: headofediting },
  { role: "PG Representative", name: "Vasanth K", img: pgrep }
];

const AUTO_SCROLL_INTERVAL_MS = 16; // ~60fps feel (small step each tick)
const AUTO_SCROLL_STEP = 0.6; // pixels per tick (tweak for speed)
const RESUME_AFTER_MS = 1000; // resume auto-scroll after 2s of inactivity

const OfficeBearers: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const autoIntervalRef = useRef<number | null>(null);
  const resumeTimeoutRef = useRef<number | null>(null);
  const isInteractingRef = useRef(false);
  const directionRef = useRef(1);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    // Auto-scroll function (bounces at edges)
    const doAutoScroll = () => {
      if (!container) return;
      // if content is not overflowing, do nothing
      if (container.scrollWidth <= container.clientWidth) return;

      // move
      container.scrollLeft += directionRef.current * AUTO_SCROLL_STEP;

      // when reaching an edge, reverse direction smoothly
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 1) {
        directionRef.current = -1;
      } else if (container.scrollLeft <= 0) {
        directionRef.current = 1;
      }
    };

    // Start auto-scroll interval
    const startAuto = () => {
      // avoid duplicate intervals
      if (autoIntervalRef.current != null) return;
      autoIntervalRef.current = window.setInterval(doAutoScroll, AUTO_SCROLL_INTERVAL_MS);
    };

    const stopAuto = () => {
      if (autoIntervalRef.current != null) {
        clearInterval(autoIntervalRef.current);
        autoIntervalRef.current = null;
      }
    };

    // Pause auto-scroll while user interacts; resume after idle
    const handleUserInteractionStart = () => {
      isInteractingRef.current = true;
      stopAuto();
      if (resumeTimeoutRef.current != null) {
        clearTimeout(resumeTimeoutRef.current);
        resumeTimeoutRef.current = null;
      }
    };

    const handleUserInteractionEnd = () => {
      // mark not interacting, restart resume timer
      isInteractingRef.current = false;
      if (resumeTimeoutRef.current != null) clearTimeout(resumeTimeoutRef.current);
      resumeTimeoutRef.current = window.setTimeout(() => {
        // only start if user hasn't interacted
        if (!isInteractingRef.current) startAuto();
      }, RESUME_AFTER_MS);
    };

    // Events that constitute interaction
    const onPointerDown = () => handleUserInteractionStart();
    const onTouchStart = () => handleUserInteractionStart();
    const onWheel = () => {
      // wheel indicates manual scroll; treat as interaction
      handleUserInteractionStart();
      // and schedule resume after user stops wheel
      handleUserInteractionEnd();
    };
    const onPointerUp = () => handleUserInteractionEnd();
    const onTouchEnd = () => handleUserInteractionEnd();

    // If visibility changes (tab hidden), pause
    const onVisibilityChange = () => {
      if (document.hidden) {
        stopAuto();
      } else {
        // resume after small delay
        if (!isInteractingRef.current) {
          if (resumeTimeoutRef.current != null) clearTimeout(resumeTimeoutRef.current);
          resumeTimeoutRef.current = window.setTimeout(startAuto, 500);
        }
      }
    };

    // Add listeners
    container.addEventListener("pointerdown", onPointerDown, { passive: true });
    container.addEventListener("pointerup", onPointerUp, { passive: true });
    container.addEventListener("touchstart", onTouchStart, { passive: true });
    container.addEventListener("touchend", onTouchEnd, { passive: true });
    container.addEventListener("wheel", onWheel, { passive: true });

    document.addEventListener("visibilitychange", onVisibilityChange);

    // If user drags the scrollbar (mousedown on scrollbar), pointer events cover it.
    // Start auto-scroll initially
    startAuto();

    // Clean up
    return () => {
      stopAuto();
      if (resumeTimeoutRef.current != null) {
        clearTimeout(resumeTimeoutRef.current);
        resumeTimeoutRef.current = null;
      }
      container.removeEventListener("pointerdown", onPointerDown);
      container.removeEventListener("pointerup", onPointerUp);
      container.removeEventListener("touchstart", onTouchStart);
      container.removeEventListener("touchend", onTouchEnd);
      container.removeEventListener("wheel", onWheel);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  return (
    <section id="office bearers" className="office-section">
      <h2 className="office-title">Office Bearers</h2>
      <div className="office-carousel" ref={scrollRef}>
        {bearers.map((b, i) => (
          <div className="office-card" key={i}>
      
            <img src={b.img} alt={b.role} className="office-img" />
           
            <div className="office-role">{b.role}</div>
            <div className="office-name">{b.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OfficeBearers;