import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  // Maus-Position aktualisieren
  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  // Event-Listener für Hover-Effekte
  useEffect(() => {
    const handleLinkHoverStart = () => setCursorVariant("link");
    const handleLinkHoverEnd = () => setCursorVariant("default");

    // Alle anklickbaren Elemente auswählen
    const hoverableElements = document.querySelectorAll('a, button, [role="button"]');
    
    hoverableElements.forEach((el) => {
      el.addEventListener("mouseenter", handleLinkHoverStart);
      el.addEventListener("mouseleave", handleLinkHoverEnd);
    });

    return () => {
      hoverableElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleLinkHoverStart);
        el.removeEventListener("mouseleave", handleLinkHoverEnd);
      });
    };
  }, []);

  // Verschiedene Cursor-Varianten
  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: "rgba(30, 213, 0, 0.2)",
      border: "1px solid rgba(30, 213, 0, 0.5)",
      transition: {
        type: "spring",
        mass: 0.5,
        stiffness: 100,
        damping: 15,
      },
    },
    link: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      height: 48,
      width: 48,
      backgroundColor: "rgba(30, 213, 0, 0.3)",
      border: "2px solid rgba(30, 213, 0, 0.7)",
      transition: {
        type: "spring",
        mass: 0.6,
        stiffness: 200,
        damping: 20,
      },
    },
  };

  // Nur für Desktop-Geräte anzeigen
  const [isDesktop, setIsDesktop] = useState(false);
  
  useEffect(() => {
    // Nur auf nicht-Touch-Geräten aktivieren
    if (window.matchMedia("(hover: hover)").matches) {
      setIsDesktop(true);
      // Normalen Cursor ausblenden
      document.body.style.cursor = "none";
    }
    
    return () => {
      document.body.style.cursor = "auto";
    };
  }, []);

  if (!isDesktop) return null;

  return (
    <motion.div
      className="custom-cursor fixed top-0 left-0 rounded-full pointer-events-none z-50"
      variants={variants}
      animate={cursorVariant}
    />
  );
}

export default CustomCursor;
