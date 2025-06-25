import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function InteractiveCard({
  title,
  description,
  imageSrc,
  linkTo,
  category = "Artikel",
  className = ""
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`overflow-hidden rounded-xl shadow-lg relative ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Link to={linkTo} className="block h-full">
        <div className="relative">
          <motion.div
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.4 }}
            className="h-48 overflow-hidden"
          >
            <img 
              src={imageSrc} 
              alt={title} 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
          
          <motion.span
            className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 text-xs font-medium rounded-full"
            animate={{ 
              scale: isHovered ? 1.05 : 1,
              backgroundColor: isHovered ? "#4ade80" : "#22c55e"  
            }}
            transition={{ duration: 0.2 }}
          >
            {category}
          </motion.span>
        </div>
        
        <motion.div 
          className="p-5"
          animate={{ 
            backgroundColor: isHovered ? "rgba(239, 250, 235, 0.9)" : "rgba(255, 255, 255, 0.9)" 
          }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="font-bold text-lg mb-2 text-gray-900">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
          
          {/* Mehr erfahren Link wurde entfernt */}
        </motion.div>
      </Link>
    </motion.div>
  );
}

export default InteractiveCard;
