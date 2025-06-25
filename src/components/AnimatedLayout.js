import React from "react";
import { motion } from "framer-motion";
import CustomCursor from "./CustomCursor";
import MagneticButton from "./MagneticButton";

// Animation variants für die Übergangseffekte
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  in: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  out: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

// Staggered Animation für Listen-Elemente
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function AnimatedLayout({ children }) {
  return (
    <div className="relative overflow-hidden">
      <CustomCursor />
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        className="min-h-screen"
      >
        {children}
      </motion.div>
      
      {/* Hero-Section Beispiel mit Magnetic Button */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Nachhaltige Ernährung für eine bessere Zukunft
              </h1>
              <p className="text-lg text-gray-600">
                Entdecken Sie, wie Ihre Ernährung nicht nur Ihre Gesundheit, sondern auch unseren Planeten positiv beeinflussen kann.
              </p>
              <div className="pt-4">
                <MagneticButton 
                  href="/quiz"
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-medium transition-all"
                >
                  Starten Sie das Quiz
                </MagneticButton>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="rounded-xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://source.unsplash.com/800x600/?sustainable,food,organic" 
                alt="Nachhaltige Ernährung"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Features-Section mit Scroll-Animationen */}
      <section className="py-16 bg-green-50 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Vorteile nachhaltiger Ernährung</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Entdecken Sie die positiven Auswirkungen einer nachhaltigen Ernährung auf Ihre Gesundheit und die Umwelt.
            </p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Umweltschutz",
                description: "Reduzierter CO₂-Fußabdruck und weniger Wasserverbrauch durch bewusste Ernährungsentscheidungen.",
                icon: "🌍"
              },
              {
                title: "Gesundheitsförderung",
                description: "Mehr Vitalität und ein verringertes Risiko für ernährungsbedingte Krankheiten.",
                icon: "❤️"
              },
              {
                title: "Ressourcenschonung",
                description: "Effiziente Nutzung von Anbauflächen und natürlichen Ressourcen für zukünftige Generationen.",
                icon: "🌱"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariant}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default AnimatedLayout;
