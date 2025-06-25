import React, { useState } from "react";
import { motion } from "framer-motion";
import ScrollAnimation from "../components/ScrollAnimation";
import MagneticButton from "../components/MagneticButton";

function CO2CalculatorPage() {
  const [beef, setBeef] = useState("");
  const [pork, setPork] = useState("");
  const [poultry, setPoultry] = useState("");
  const [dairy, setDairy] = useState("");
  const [vegMeals, setVegMeals] = useState("");
  const [result, setResult] = useState(null);

  const handleCalculate = (e) => {
    e.preventDefault();
    // Emissionsfaktoren pro Portion (ungefähre Werte in kg CO2e pro Portion)
    const CO2_PER_BEEF_MEAL = 4.0;     // z.B. 150g Rind ~4 kg CO2
    const CO2_PER_PORK_MEAL = 1.8;     // 150g Schwein ~1.8 kg
    const CO2_PER_POULTRY_MEAL = 0.9;  // 150g Geflügel ~0.9 kg
    const CO2_PER_DAIRY_SERVING = 0.5; // z.B. Glas Milch oder Käseportion ~0.5 kg
    const CO2_PER_VEG_MEAL = 0.3;      // rein pflanzliche Mahlzeit ~0.3 kg
    
    // Sicherstellen, dass alle Werte als Zahlen behandelt werden
    const beefVal = parseFloat(beef) || 0;
    const porkVal = parseFloat(pork) || 0;
    const poultryVal = parseFloat(poultry) || 0;
    const dairyVal = parseFloat(dairy) || 0;
    const vegMealsVal = parseFloat(vegMeals) || 0;

    console.log('Berechnete Werte:', { beefVal, porkVal, poultryVal, dairyVal, vegMealsVal });

    // Wöchentliche Emissionen berechnen (kg CO2e)
    const weeklyCO2 = 
      beefVal * CO2_PER_BEEF_MEAL +
      porkVal * CO2_PER_PORK_MEAL +
      poultryVal * CO2_PER_POULTRY_MEAL +
      dairyVal * CO2_PER_DAIRY_SERVING +
      vegMealsVal * CO2_PER_VEG_MEAL;
    
    console.log('Wöchentliche CO2 Emissionen:', weeklyCO2);
    
    // Jahresemissionen (hochgerechnet)
    const annualCO2 = weeklyCO2 * 52;
    console.log('Jährliche CO2 Emissionen:', annualCO2);
    
    setResult(Math.round(annualCO2));  // gerundetes Ergebnis in kg CO2/Jahr
  };

  return (
    <main className="container mx-auto p-6 max-w-2xl">
      <ScrollAnimation animation="fadeInUp" className="mb-8 text-center">
        <motion.h1 
          className="text-3xl md:text-4xl font-bold mb-4 text-green-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          CO₂-Rechner: Dein Ernährungs-Fußabdruck
        </motion.h1>
        <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
        <p className="mb-6 text-gray-800 max-w-lg mx-auto">
          Hier kannst du überschlagen, wie viel CO₂-Emissionen durch deine Ernährung ungefähr pro Jahr verursacht werden. Gib an, wie häufig du verschiedene Lebensmittel konsumierst:
        </p>
      </ScrollAnimation>
      <ScrollAnimation animation="fadeIn" delay={0.2}>
        <form onSubmit={handleCalculate} className="bg-white p-6 rounded-xl shadow-lg mb-8 border border-gray-100">
        <div className="mb-5">
          <label htmlFor="beef" className="block text-gray-700 font-medium mb-2">
            Fleisch (Rind/Lamm) – Mahlzeiten pro Woche:
          </label>
          <motion.input 
            type="number" id="beef" min="0" max="21" value={beef} 
            onChange={(e) => setBeef(e.target.value)} 
            className="w-24 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all duration-200"
            whileFocus={{ scale: 1.02, boxShadow: "0 0 0 2px rgba(94, 194, 105, 0.2)" }}
            placeholder="0"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="pork" className="block text-gray-700 font-medium mb-2">
            Fleisch (Schwein) – Mahlzeiten pro Woche:
          </label>
          <motion.input 
            type="number" id="pork" min="0" max="21" value={pork} 
            onChange={(e) => setPork(e.target.value)} 
            className="w-24 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all duration-200"
            whileFocus={{ scale: 1.02, boxShadow: "0 0 0 2px rgba(94, 194, 105, 0.2)" }}
            placeholder="0"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="poultry" className="block text-gray-700 font-medium mb-2">
            Fleisch (Geflügel) – Mahlzeiten pro Woche:
          </label>
          <motion.input 
            type="number" id="poultry" min="0" max="21" value={poultry} 
            onChange={(e) => setPoultry(e.target.value)} 
            className="w-24 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all duration-200"
            whileFocus={{ scale: 1.02, boxShadow: "0 0 0 2px rgba(94, 194, 105, 0.2)" }}
            placeholder="0"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="dairy" className="block text-gray-700 font-medium mb-2">
            Milchprodukte (Portionen pro Woche):
          </label>
          <motion.input 
            type="number" id="dairy" min="0" max="50" value={dairy} 
            onChange={(e) => setDairy(e.target.value)} 
            className="w-24 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all duration-200"
            whileFocus={{ scale: 1.02, boxShadow: "0 0 0 2px rgba(94, 194, 105, 0.2)" }}
            placeholder="0"
          />
          <small className="block text-gray-500 mt-1">z.B. Glas Milch, Joghurt, Käse etc.</small>
        </div>
        <div className="mb-8">
          <label htmlFor="vegMeals" className="block text-gray-700 font-medium mb-2">
            Rein pflanzliche Mahlzeiten pro Woche:
          </label>
          <motion.input 
            type="number" id="vegMeals" min="0" max="21" value={vegMeals} 
            onChange={(e) => setVegMeals(e.target.value)} 
            className="w-24 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all duration-200"
            whileFocus={{ scale: 1.02, boxShadow: "0 0 0 2px rgba(94, 194, 105, 0.2)" }}
            placeholder="0"
          />
          <small className="block text-gray-500 mt-1">Mahlzeiten ohne Fleisch und ohne Milch/Ei</small>
        </div>
        <MagneticButton 
          type="submit" 
          className="bg-green-600 text-green-50 font-medium px-6 py-3 rounded-lg hover:bg-green-700 shadow-md w-full md:w-auto flex justify-center items-center"
          onClick={handleCalculate}
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
          </svg>
          CO₂-Fußabdruck berechnen
        </MagneticButton>
        </form>
      </ScrollAnimation>

      {result !== null && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-6 rounded-xl shadow-lg border border-green-100 mb-8"
        >
          <h2 className="text-2xl font-bold mb-4 text-green-700 flex items-center">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            Dein Ergebnis
          </h2>
          
          <div className="mb-6 bg-green-50 p-4 rounded-lg">
            <p className="text-gray-800 text-lg">
              Dein ernährungsbedingter CO₂-Fußabdruck beträgt ungefähr:
            </p>
            <p className="text-3xl font-bold text-green-800 my-3 text-center">
              {result} kg CO₂ pro Jahr
            </p>
          </div>
          
          <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
            <span className="text-sm text-gray-700">
              Deutscher Durchschnitt: 
              <span className="font-medium">1750 kg CO₂/Jahr</span>
            </span>
            
            <div className="relative h-6 w-64 bg-gray-200 rounded-full overflow-hidden">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-green-500"
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(100, (result/1750)*100)}%` }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>
          </div>
          
          <p className="text-sm text-gray-600 mt-5">
            Diese Berechnung basiert auf durchschnittlichen Emissionswerten der verschiedenen Lebensmittelkategorien.
            Individuelle Werte können variieren je nach konkreten Produkten und deren Herkunft.
          </p>
        </motion.div>
      )}
    </main>
  );
}

export default CO2CalculatorPage;
