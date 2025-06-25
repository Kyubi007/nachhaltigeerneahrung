import React from "react";
import { motion } from "framer-motion";
import ScrollAnimation from "../components/ScrollAnimation";
import MagneticButton from "../components/MagneticButton";
import InteractiveCard from "../components/InteractiveCard.js";

function VeganPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <ScrollAnimation animation="fadeInDown" className="mb-10 text-center">
        <motion.h1 
          className="text-4xl font-bold mb-2 text-green-600"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Vegane Ernährung
        </motion.h1>
        <div className="w-24 h-1 bg-green-500 mx-auto mb-4"></div>
        
        <motion.div
          className="w-full max-w-2xl mx-auto mb-8 overflow-hidden rounded-lg shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          whileHover={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
        >
          <img 
            src="/pics/vegan_basiert.jpg" 
            alt="Vielseitige vegane Lebensmittel und Gerichte" 
            className="w-full h-auto"
          />
        </motion.div>
      </ScrollAnimation>

      <ScrollAnimation animation="fadeIn" delay={0.2}>
        <div className="mb-10 bg-gradient-to-b from-green-50 to-white rounded-xl shadow-md overflow-hidden border border-green-100">
          <div className="bg-green-600 py-3">
            <h2 className="text-2xl font-semibold text-white text-center flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Grundlagen des Veganismus
            </h2>
          </div>
          
          <motion.div 
            className="p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <motion.blockquote 
              className="border-l-4 border-green-500 pl-4 italic mb-6 text-lg"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Vegane Ernährung verzichtet vollständig auf tierische Produkte, einschließlich Fleisch, Fisch, 
              Milchprodukte, Eier und Honig.
            </motion.blockquote>
            
            <div className="flex justify-center mb-6">
              <motion.div 
                className="bg-white shadow-md rounded-lg p-5 max-w-2xl border-t-4 border-green-500"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <p className="text-center">
                  Diese Ernährungsform ist durch eine ausschließlich pflanzliche 
                  Kost definiert und hat in Bezug auf Nachhaltigkeit die <span className="font-bold text-green-600">geringste Umweltbelastung</span> aller 
                  Ernährungsformen.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation animation="fadeIn" delay={0.3}>
        <div className="mb-6 p-5 bg-white rounded-lg shadow-md border-l-4 border-green-500">
          <p className="text-gray-800">
            <strong>Vegan</strong> zu leben bedeutet, komplett auf tierische Produkte zu verzichten – also kein Fleisch, Fisch, keine Milchprodukte, Eier oder Honig. Diese rein pflanzliche Ernährungsweise hat die geringsten direkten Umweltwirkungen aller vorgestellten Kostformen, stellt aber auch Anforderungen an die Ernährungsplanung (z.&nbsp;B. Vitamin-B12-Zufuhr).
          </p>
        </div>
      </ScrollAnimation>

      <ScrollAnimation animation="fadeInRight" delay={0.4}>
        <h2 className="text-2xl font-semibold mb-3 text-green-700 flex items-center">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
          </svg>
          Umweltauswirkungen im Vergleich
        </h2>
      </ScrollAnimation>
      
      <ScrollAnimation animation="fadeIn" delay={0.5}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <motion.div 
            className="p-4 bg-green-50 rounded-lg shadow-sm"
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-green-700 mb-2">CO₂-Fußabdruck</h3>
            <p className="text-gray-800">
              Im Vergleich zu fleischhaltiger Kost fällt der <strong>CO₂-Fußabdruck</strong> bei veganer Ernährung am niedrigsten aus. Schätzungen zufolge gehen in Deutschland rund <strong>69&nbsp;%</strong> der ernährungsbedingten Emissionen auf tierische Lebensmittel zurück – fast die Hälfte könnte man durch eine pflanzliche Ernährung einsparen (<a href="https://www.wwf.de/themen-projekte/landwirtschaft/ernaehrung-konsum/essen-wir-das-klima-auf" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">WWF</a>).
            </p>
            <div className="mt-2 text-right">
              <span className="inline-block bg-green-600 text-white text-sm py-1 px-3 rounded-full font-bold">
                75% weniger Emissionen
              </span>
            </div>
          </motion.div>
          
          <motion.div 
            className="p-4 bg-green-50 rounded-lg shadow-sm"
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-green-700 mb-2">Flächenverbrauch</h3>
            <p className="text-gray-800">
              Auch der Ressourcenverbrauch sinkt deutlich: Laut WWF benötigt eine vegane Ernährung fast <strong>50&nbsp;% weniger</strong> landwirtschaftliche Fläche als die derzeitige Durchschnittskost. Weniger Weide- und Ackerflächen für Tierprodukte bedeuten weniger Abholzung und mehr Lebensraum für wildlebende Arten.
            </p>
            <div className="mt-2 text-right">
              <span className="inline-block bg-green-600 text-white text-sm py-1 px-3 rounded-full font-bold">
                50% weniger Fläche
              </span>
            </div>
          </motion.div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation animation="fadeIn" delay={0.5}>
        <div className="mb-10">
          <motion.h2 
            className="text-2xl font-semibold mb-4 text-green-700 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Kreative Rezeptideen
          </motion.h2>
          
          <div className="flex justify-center mb-6">
            <motion.p 
              className="max-w-2xl text-center py-3 bg-green-50 px-8 rounded-full shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Vegane Ernährung ist vielfältig und kreativ. Hier sind einige einfache und nährstoffreiche Inspirationen:
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <InteractiveCard
              imageSrc="/pics/rote-linsen-curry.jpg"
              title="Linsen-Curry"
              description="Rote Linsen mit Kokosmilch, Tomaten und Curry-Gewürzen. Reich an Proteinen und Ballaststoffen."
              category="15 min"
            />
            
            <InteractiveCard
              imageSrc="/pics/asiapfanne_gemuese_reis_tofu_1350.jpg"
              title="Gemüse-Tofu-Pfanne"
              description="Gebratener Tofu mit buntem saisonalem Gemüse und Tamari-Sauce. Liefert wichtige Proteine und Vitamine."
              category="20 min"
            />

            <InteractiveCard
              imageSrc="/pics/Kichererbsen-Cacio-e-Pepe-Bowl-8249.jpg"
              title="Kichererbsen-Bowl"
              description="Geröstete Kichererbsen mit Quinoa, Avocado und hausgemachtem Tahini-Dressing. Perfekte Mischung aus gesunden Fetten und Proteinen."
              category="25 min"
            />
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation animation="fadeIn" delay={0.5}>
        <div className="mb-10">
          <motion.h2 
            className="text-2xl font-semibold mb-4 text-green-700 text-center bg-green-50 py-2 rounded-lg shadow-sm"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="inline-flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path>
              </svg>
              Umweltauswirkungen
            </span>
          </motion.h2>
          
          <div className="flex justify-center mb-6">
            <motion.p 
              className="max-w-2xl text-lg text-center p-4 bg-white shadow-md rounded-lg border-b-4 border-green-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              Die vegane Ernährung hat den <span className="font-bold text-green-600">niedrigsten ökologischen Fußabdruck</span> aller Ernährungsformen.
              Im Vergleich zur durchschnittlichen Mischkost werden folgende Einsparungen erreicht:
            </motion.p>
          </div>
        
        <motion.div 
            className="overflow-hidden rounded-lg shadow-lg mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-green-600 text-white">
                <th className="py-3 px-6 text-left">Kategorie</th>
                <th className="py-3 px-6 text-left">Einsparung im Vergleich zur Mischkost</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-green-50 border-b transition-colors duration-200">
                <td className="py-4 px-6 font-medium">CO₂-Ausstoß</td>
                <td className="py-4 px-6 text-green-600 font-bold">Bis zu 75% weniger Treibhausgasemissionen</td>
              </tr>
              <tr className="hover:bg-green-50 border-b bg-gray-50 transition-colors duration-200">
                <td className="py-4 px-6 font-medium">Landflächennutzung</td>
                <td className="py-4 px-6 text-green-600 font-bold">Bis zu 76% weniger landwirtschaftliche Fläche</td>
              </tr>
              <tr className="hover:bg-green-50 transition-colors duration-200">
                <td className="py-4 px-6 font-medium">Wasserverbrauch</td>
                <td className="py-4 px-6 text-green-600 font-bold">Bis zu 54% weniger Süßwassernutzung</td>
              </tr>
            </tbody>
          </table>
        </motion.div>

        <motion.div 
          className="p-5 bg-yellow-50 rounded-lg border-l-4 border-yellow-400 text-right shadow-sm"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          whileHover={{ x: -5, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}
        >
          <p>
            Diese erheblichen Einsparungen resultieren aus dem Verzicht auf ressourcenintensive 
            Tierhaltung, die sowohl direkt (Emissionen der Tiere) als auch indirekt (Anbau von 
            Futtermitteln) die Umwelt belastet.
          </p>
        </motion.div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation animation="fadeInUp" delay={0.4}>
        <motion.div 
          className="mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2 
            className="text-2xl font-semibold mb-3 text-green-700 flex items-center"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"></path>
            </svg>
            Erklärvideo
          </motion.h2>
          
          <motion.p 
            className="mb-4 text-gray-800 bg-green-50 p-3 rounded-lg inline-block"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Welche Auswirkungen hat eine vegane Ernährung auf die Umwelt? Das folgende Video liefert verständliche Erklärungen und Beispiele:
          </motion.p>
          
          <motion.div 
            className="aspect-w-16 mb-8 rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            whileHover={{ scale: 1.01, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
          >
            <iframe 
              className="w-full h-96" 
              src="https://www.youtube.com/embed/PL94GNnPits" 
              title="Vegane Ernährung - Einfluss auf Umwelt (Erklärvideo)" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </motion.div>
        </motion.div>
      </ScrollAnimation>

      <ScrollAnimation animation="fadeInUp" delay={0.6}>
        <div className="mt-10 mb-10 text-center">
          <MagneticButton 
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg shadow-lg transition-colors duration-300 inline-flex items-center"
          >
            <a href="/co2-calculator" className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
              </svg>
              Berechne deinen CO₂-Fußabdruck
            </a>
          </MagneticButton>
        </div>
      </ScrollAnimation>

      {/* Quellenangaben Fußzeile */}
      <div className="mt-16 pt-8 border-t border-green-200">
        <h3 className="text-sm font-semibold text-gray-500 mb-2">Quellenangaben</h3>
        <ul className="text-xs text-gray-400 space-y-1">
          <li>• Albert Schweitzer Stiftung für unsere Mitwelt: "Vegane Ernährung: Auswirkungen auf die Umwelt" (2023)</li>
          <li>• Deutscher Bundestag, Wissenschaftliche Dienste: "Klimawirkungen veganer und vegetarischer Ernährung" (2022)</li>
          <li>• Umweltbundesamt: "Umweltwirkungen von Ernährungsgewohnheiten" (2021)</li>
          <li>• The Lancet: "Health and nutritional aspects of sustainable diet strategies" (2021)</li>
          <li>• FAO: "Animal Production and Health - Greenhouse Gas Emissions and Climate Change" (2022)</li>
          <li>• WWF Deutschland: "Fleisch frisst Land - Flächenverbrauch verschiedener Ernährungsstile" (2021)</li>
        </ul>
      </div>
    </div>
  );
}

export default VeganPage;
