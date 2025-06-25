import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function MagneticButton({ children, className, href, onClick }) {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    if (!buttonRef.current) return;
    
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Berechne die Entfernung vom Mauszeiger zum Mittelpunkt des Buttons
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    
    // Berechne den magnetischen Effekt (stärker in der Nähe, schwächer weiter weg)
    const magnetStrength = 0.3; // Stärke des Effekts (0-1)
    
    setPosition({
      x: distanceX * magnetStrength,
      y: distanceY * magnetStrength,
    });
  };

  const handleMouseLeave = () => {
    // Button zur Ausgangsposition zurücksetzen
    setPosition({ x: 0, y: 0 });
  };

  const buttonContent = (
    <motion.div
      ref={buttonRef}
      className={`inline-block ${className}`}
      animate={{
        x: position.x,
        y: position.y,
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 15,
        mass: 0.1,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.div>
  );

  // Button als Link oder als Button rendern
  if (href) {
    // Prüfen, ob es ein externer Link ist
    if (href.startsWith("http")) {
      return (
        <a href={href} className="inline-block">
          {buttonContent}
        </a>
      );
    }
    // Interner Link mit React Router
    return <Link to={href}>{buttonContent}</Link>;
  }

  // Als Button rendern
  return (
    <button type="button" onClick={onClick} className="inline-block">
      {buttonContent}
    </button>
  );
}

export default MagneticButton;
