import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import CustomCursor from "../components/CustomCursor";
import MagneticButton from "../components/MagneticButton";
import ScrollAnimation from "../components/ScrollAnimation";
import InteractiveCard from "../components/InteractiveCard";

function ModernLayoutDemo() {
  // Parallax-Effekt für den Hero-Bereich
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* Hero-Bereich mit Parallax-Effekt */}
      <section 
        ref={ref}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <motion.div 
          style={{ y, opacity }} 
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://source.unsplash.com/1600x900/?nature,green" 
            alt="Hero Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-green-800 bg-opacity-60" />
        </motion.div>

        <div className="container mx-auto px-4 z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl mx-auto text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Nachhaltig leben, <br/>
              <span className="text-green-300">besser essen.</span>
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              Entdecken Sie, wie Ihre Ernährungsentscheidungen die Umwelt 
              beeinflussen und was Sie tun können, um nachhaltiger zu leben.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <MagneticButton 
                href="/quiz" 
                className="bg-green-500 hover:bg-green-400 text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg"
              >
                Quiz starten
              </MagneticButton>
              <MagneticButton 
                href="/co2-rechner" 
                className="bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm text-white border border-white border-opacity-40 px-8 py-3 rounded-full font-bold text-lg"
              >
                CO₂-Rechner
              </MagneticButton>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "150%"]) }}
          className="absolute bottom-0 left-0 right-0 z-10 flex justify-center pb-10"
        >
          <button 
            className="text-white animate-bounce focus:outline-none"
            onClick={() => {
              window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth"
              })
            }}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-10 w-10" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </svg>
          </button>
        </motion.div>
      </section>

      {/* Ernährungsstile-Abschnitt mit Karten */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fadeInUp" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Entdecken Sie verschiedene Ernährungsstile</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Lernen Sie die Vor- und Nachteile verschiedener Ernährungsweisen kennen und finden Sie heraus, 
              welche am besten zu Ihnen und Ihrem nachhaltigen Lebensstil passt.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollAnimation animation="fadeInLeft" delay={0.1}>
              <InteractiveCard
                title="Fleischbasierte Ernährung"
                description="Traditionelle fleischbasierte Ernährung mit Fokus auf Nachhaltigkeit, Tierwohl und bewusster Auswahl."
                imageSrc="/pics/fleischbasiert.jpg"
                linkTo="/fleisch"
                category="Fleisch"
              />
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInUp" delay={0.3}>
              <InteractiveCard
                title="Vegetarische Ernährung"
                description="Eine pflanzenbetonte Ernährung ohne Fleisch, die Umweltvorteile und gesundheitliche Aspekte verbindet."
                imageSrc="/pics/vegetarisch_basiert.webp"
                linkTo="/vegetarisch"
                category="Vegetarisch"
              />
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInRight" delay={0.5}>
              <InteractiveCard
                title="Vegane Ernährung"
                description="Vollständig pflanzliche Ernährung ohne tierische Produkte für maximale Nachhaltigkeitseffekte."
                imageSrc="/pics/vegan_basiert.jpg"
                linkTo="/vegan"
                category="Vegan"
              />
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Features mit Mikro-Interaktionen */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <ScrollAnimation animation="fadeIn" className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-sm font-semibold bg-green-100 text-green-700 rounded-full mb-4">
              Interaktive Tools
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Entdecken Sie unsere interaktiven Funktionen
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nutzen Sie unsere Tools, um Ihren eigenen CO₂-Fußabdruck zu berechnen, 
              Ihr Wissen in einem Quiz zu testen und mehr über nachhaltige Ernährung zu lernen.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="fadeInLeft">
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="https://source.unsplash.com/800x600/?environment,data" 
                  alt="CO₂-Rechner" 
                  className="w-full h-auto"
                />
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInRight" className="space-y-6">
              <h3 className="text-2xl font-bold">CO₂-Rechner</h3>
              <p className="text-gray-600">
                Mit unserem interaktiven CO₂-Rechner können Sie den ökologischen 
                Fußabdruck Ihrer Ernährung berechnen und vergleichen, wie verschiedene 
                Lebensmittel die Umwelt beeinflussen.
              </p>
              <ul className="space-y-3">
                {["Personalisierte Berechnungen", "Vergleich verschiedener Ernährungsstile", "Praktische Tipps zur Reduktion"].map((item, i) => (
                  <motion.li 
                    key={i}
                    className="flex items-start"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
              <MagneticButton 
                href="/co2-rechner" 
                className="mt-2 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium inline-flex items-center"
              >
                Zum CO₂-Rechner
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </MagneticButton>
            </ScrollAnimation>
          </div>

          <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="fadeInLeft" className="space-y-6 order-2 md:order-1">
              <h3 className="text-2xl font-bold">Wissensquiz</h3>
              <p className="text-gray-600">
                Testen Sie Ihr Wissen über nachhaltige Ernährung in unserem interaktiven 
                Quiz und entdecken Sie spannende Fakten und Zusammenhänge.
              </p>
              <ul className="space-y-3">
                {["Lehrreiche Fragen zu Nachhaltigkeit", "Sofortiges Feedback", "Personalisierte Ergebnisse"].map((item, i) => (
                  <motion.li 
                    key={i}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
              <MagneticButton 
                href="/quiz" 
                className="mt-2 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium inline-flex items-center"
              >
                Quiz starten
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </MagneticButton>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInRight" className="order-1 md:order-2">
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="https://source.unsplash.com/800x600/?quiz,knowledge" 
                  alt="Wissensquiz" 
                  className="w-full h-auto"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Call-to-Action-Bereich */}
      <section className="py-24 bg-gradient-to-br from-green-500 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimation animation="zoomIn" className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Bereit, Ihre Ernährung nachhaltiger zu gestalten?
            </h2>
            <p className="text-xl mb-10 text-green-50">
              Starten Sie jetzt Ihre Reise zu einem umweltbewussteren Lebensstil.
            </p>
            <MagneticButton 
              href="/" 
              className="bg-white text-green-600 px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              Jetzt loslegen
            </MagneticButton>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}

export default ModernLayoutDemo;
