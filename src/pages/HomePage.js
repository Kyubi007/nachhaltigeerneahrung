import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ScrollAnimation from "../components/ScrollAnimation";
import MagneticButton from "../components/MagneticButton";
import InteractiveCard from "../components/InteractiveCard";

function HomePage() {
  return (
    <main className="container mx-auto p-6 overflow-hidden">
      <section className="text-center my-8 py-12">
        <ScrollAnimation animation="fadeInUp" className="mb-6">
          <motion.h1 
            className="text-3xl md:text-5xl font-bold mb-4 text-green-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Nachhaltige Ernährung
          </motion.h1>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
        </ScrollAnimation>
        
        <ScrollAnimation animation="fadeInUp" delay={0.3} className="max-w-2xl mx-auto">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Nachhaltig essen – was bedeutet das eigentlich? Es geht darum, Lebensmittel so auszuwählen und zu produzieren, dass Umwelt, Klima und Ressourcen geschont werden. Im Alltag heißt das vor allem: <strong className="text-green-700">mehr pflanzliche Kost</strong>, regionale und saisonale Produkte, und bewussterer Konsum.
          </p>
          <p className="text-lg md:text-xl text-gray-700 mt-4">
            Experten empfehlen beispielsweise, maximal ca. 300&nbsp;g Fleisch pro Woche zu verzehren, um eine nachhaltige Ernährung zu gewährleisten (<a href="https://www.umweltbundesamt.de/umweltatlas/umwelt-landwirtschaft/mein-handeln/nachhaltige-ernaehrung/was-macht-eine-nachhaltige-ernaehrung-aus-0" className="text-green-600 hover:text-green-800 underline" target="_blank" rel="noopener noreferrer">Quelle: UBA/EAT-Lancet</a>).
          </p>
        </ScrollAnimation>
      </section>

      {/* Section: Overview of diet types with buttons */}
      <section className="my-12 py-10 bg-gray-50 rounded-xl px-4">
        <ScrollAnimation animation="fadeInDown">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center text-green-800">Ernährungsformen im Überblick</h2>
        </ScrollAnimation>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Fleischbasiert */}
          <ScrollAnimation animation="fadeInLeft" delay={0.1}>
            <InteractiveCard
              title="Fleischbasierte Ernährung"
              description="Die traditionelle Mischkost mit regelmäßigem Fleischkonsum. Welche Auswirkungen hat sie auf Umwelt und Klima?"
              imageSrc="/pics/fleischbasiert.jpg"
              linkTo="/fleisch"
              category="Fleisch"
            />
          </ScrollAnimation>
          {/* Card 2: Vegetarisch */}
          <ScrollAnimation animation="fadeInUp" delay={0.3}>
            <InteractiveCard
              title="Vegetarische Ernährung"
              description="Ohne Fleisch, aber mit Eiern und Milchprodukten – wie trägt vegetarische Ernährung zu mehr Nachhaltigkeit bei?"
              imageSrc="/pics/vegetarisch_basiert.webp"
              linkTo="/vegetarisch"
              category="Vegetarisch"
            />
          </ScrollAnimation>
          {/* Card 3: Vegan */}
          <ScrollAnimation animation="fadeInRight" delay={0.5}>
            <InteractiveCard
              title="Vegane Ernährung"
              description="Verzicht auf alle tierischen Produkte. Welche Vorteile hat das für Klima und Umwelt im Vergleich zu anderen Ernährungsweisen?"
              imageSrc="/pics/vegan_basiert.jpg"
              linkTo="/vegan"
              category="Vegan"
            />
          </ScrollAnimation>
        </div>
      </section>

      {/* Section: Call-to-action links (CO2 calculator and Quiz) */}
      <section className="my-16 py-16 text-center bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
        <ScrollAnimation animation="fadeIn">
          <span className="inline-block px-3 py-1 text-sm font-semibold bg-green-100 text-green-700 rounded-full mb-4">
            Interactive Tools
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-green-800">Entdecke mehr</h2>
          <p className="text-gray-700 mb-8 max-w-lg mx-auto">
            Finde heraus, wie groß dein eigener Ernährungs-Fußabdruck ist, oder teste dein Wissen rund um nachhaltige Lebensmittel!
          </p>
        </ScrollAnimation>
        
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <ScrollAnimation animation="fadeInLeft" delay={0.2}>
            <MagneticButton 
              href="/co2-rechner" 
              className="bg-green-600 hover:bg-green-700 text-green-50 px-8 py-4 rounded-lg text-lg font-medium shadow-md flex items-center justify-center"
            >
              <span className="mr-2 text-xl">♻️</span> CO₂-Rechner
            </MagneticButton>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fadeInRight" delay={0.4}>
            <MagneticButton 
              href="/quiz" 
              className="bg-green-600 hover:bg-green-700 text-green-50 px-8 py-4 rounded-lg text-lg font-medium shadow-md flex items-center justify-center"
            >
              <span className="mr-2 text-xl">❓</span> Quiz starten
            </MagneticButton>
          </ScrollAnimation>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
