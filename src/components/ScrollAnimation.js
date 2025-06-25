import React from "react";
import { motion } from "framer-motion";

// Komponente für Scroll-getriggerte Animationen
function ScrollAnimation({ 
  children, 
  animation = "fadeIn", // Standard-Animation
  delay = 0,
  duration = 0.6,
  className = "",
  threshold = 0.2, // Wieviel vom Element sichtbar sein muss, um Animation auszulösen
  once = true // Animation nur einmal oder bei jedem Scroll ins Sichtfeld abspielen
}) {
  // Verschiedene Animations-Varianten
  const animations = {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: { duration, delay } 
      }
    },
    fadeInUp: {
      hidden: { opacity: 0, y: 50 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { 
          duration, 
          delay,
          type: "spring",
          stiffness: 100
        } 
      }
    },
    fadeInDown: {
      hidden: { opacity: 0, y: -50 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { 
          duration, 
          delay,
          type: "spring",
          stiffness: 100
        } 
      }
    },
    fadeInLeft: {
      hidden: { opacity: 0, x: -50 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: { 
          duration, 
          delay,
          type: "spring",
          stiffness: 100
        } 
      }
    },
    fadeInRight: {
      hidden: { opacity: 0, x: 50 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: { 
          duration, 
          delay,
          type: "spring",
          stiffness: 100
        } 
      }
    },
    zoomIn: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { 
        opacity: 1, 
        scale: 1,
        transition: { 
          duration, 
          delay,
          type: "spring",
          stiffness: 70
        } 
      }
    },
    bounce: {
      hidden: { opacity: 0, y: 50 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { 
          duration, 
          delay,
          type: "spring",
          stiffness: 300,
          damping: 10
        } 
      }
    }
  };

  // Die ausgewählte Animation verwenden
  const selectedAnimation = animations[animation] || animations.fadeIn;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
      variants={selectedAnimation}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default ScrollAnimation;
