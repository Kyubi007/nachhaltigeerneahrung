import React from "react";
import { motion } from "framer-motion";
import ScrollAnimation from "../components/ScrollAnimation";
import MagneticButton from "../components/MagneticButton";
import InteractiveCard from "../components/InteractiveCard.js";

function MeatPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <ScrollAnimation animation="fadeInDown" className="mb-10 text-center">
        <motion.h1 
          className="text-4xl font-bold mb-2 text-green-600"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Fleischhaltige Ernährung
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
            src="/pics/fleischbasiert.jpg" 
            alt="Fleischgerichte auf einem rustikalen Holztisch" 
            className="w-full h-auto"
          />
        </motion.div>
      </ScrollAnimation>

      <ScrollAnimation animation="fadeIn" delay={0.2}>
        <div className="mb-8 bg-green-50 p-6 rounded-xl shadow-md border border-green-100">
          <h2 className="text-2xl font-semibold mb-4 text-green-600 border-b-2 border-green-300 pb-2">Grundlagen</h2>
          <p className="mb-4 text-lg">
            Eine fleischhaltige Ernährung beinhaltet den regelmäßigen Konsum von Fleisch- und Tierprodukten.
            In Deutschland liegt der durchschnittliche Fleischkonsum bei etwa 60 kg pro Person pro Jahr.
          </p>
          <div className="flex justify-center my-6">
            <div className="bg-white p-4 rounded-md border-l-4 border-green-500 max-w-2xl shadow-sm">
              <p className="italic text-center">
                Aus ernährungsphysiologischer Sicht liefert Fleisch wichtige Nährstoffe wie hochwertiges Protein,
                Vitamin B12, Eisen und Zink in gut verfügbarer Form.
              </p>
            </div>
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation animation="fadeInLeft" delay={0.3}>
        <h2 className="text-2xl font-semibold mb-3 text-green-700 flex items-center">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          Vorteile
        </h2>
        <ul className="list-disc list-inside ml-4 mb-6">
        <li className="mb-2">
          <strong>Hoher Nährwert:</strong> Fleisch liefert hochwertiges Protein, Eisen und Vitamin B12. Tierische Produkte tragen weltweit zu etwa 34&nbsp;% der aufgenommenen Proteinmenge bei (<a href="https://www.fao.org/family-farming/detail/en/c/1634679/" target="_blank" rel="noopener noreferrer">FAO</a>).
        </li>
        <li className="mb-2">
          <strong>Sozioökonomische Bedeutung:</strong> Viehhaltung und Fleischproduktion sind Teil vieler ländlicher Wirtschaftssysteme und Traditionen. Rinder und Schafe auf der Weide können z.&nbsp;B. zur Landschaftspflege beitragen und Kulturlandschaften erhalten.
        </li>
      </ul>

      </ScrollAnimation>
      
      <ScrollAnimation animation="fadeInUp" delay={0.3}>
        <div className="mb-10 bg-gradient-to-r from-green-50 to-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-green-600 text-center">Praktische Tipps für nachhaltigeren Fleischkonsum</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm border-t-2 border-green-400">
            <h3 className="font-bold text-green-600 text-center mb-2">Qualität statt Quantität</h3>
            <p className="text-center">Weniger, dafür hochwertiges Fleisch aus artgerechter Haltung wählen</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm border-t-2 border-green-400">
            <h3 className="font-bold text-green-600 text-center mb-2">Regionale Produkte</h3>
            <p className="text-center">Kurze Transportwege reduzieren den CO₂-Fußabdruck</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm border-t-2 border-green-400">
            <h3 className="font-bold text-green-600 text-center mb-2">Bio-Siegel beachten</h3>
            <p className="text-center">Höhere Standards in der Tierhaltung und umweltschonendere Produktion</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm border-t-2 border-green-400">
            <h3 className="font-bold text-green-600 text-center mb-2">Nose-to-Tail</h3>
            <p className="text-center">Möglichst das ganze Tier verwerten, nicht nur die Edelteile</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm border-t-2 border-green-400 md:col-span-2 lg:col-span-1">
            <h3 className="font-bold text-green-600 text-center mb-2">Fleischfreie Tage</h3>
            <p className="text-center">Ein oder mehrere Tage pro Woche bewusst vegetarisch ernähren</p>
          </div>
        </div>
      </div>
      </ScrollAnimation>

      <ScrollAnimation animation="fadeInRight" delay={0.4}>
        <h2 className="text-2xl font-semibold mb-3 text-green-700 flex items-center">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
          </svg>
          Nachteile
        </h2>
        <ul className="list-disc list-inside ml-4 mb-6">
        <li className="mb-2">
          <strong>Hohe Treibhausgas-Emissionen:</strong> Die Tierhaltung verursacht einen großen Anteil der vom Menschen ausgestoßenen Klimagase. Schätzungen der FAO zufolge entfallen rund <strong>14,5&nbsp;%</strong> der globalen Treibhausgas-Emissionen auf die Viehwirtschaft (<a href="https://www.fao.org/family-farming/detail/en/c/1634679/" target="_blank" rel="noopener noreferrer">FAO-Bericht</a>). Das entspricht über 7 Gigatonnen CO₂-Äquivalent pro Jahr.
        </li>
        <li className="mb-2">
          <strong>Hoher Landverbrauch:</strong> Für Weideflächen und Futtermittel wird enorm viel Land benötigt. Etwa <strong>80&nbsp;%</strong> der globalen Agrarfläche werden für die Tierhaltung (Weiden und Futteranbau) genutzt (<a href="https://www.wwf.de/themen-projekte/landwirtschaft/ernaehrung-konsum/fleisch/der-appetit-auf-fleisch-und-seine-folgen" target="_blank" rel="noopener noreferrer">WWF</a>). Dies geht oft auf Kosten von Wäldern (z.&nbsp;B. wird ein Großteil der abgeholzten Amazonas-Fläche als Weideland genutzt).
        </li>
        <li className="mb-2">
          <strong>Wasser- und Ressourcenverbrauch:</strong> Die Produktion von Fleisch ist äußerst wasserintensiv. Für 1&nbsp;kg Rindfleisch werden etwa <strong>15.000&nbsp;Liter</strong> Wasser verbraucht, wohingegen 1&nbsp;kg Kartoffeln nur rund 300&nbsp;Liter benötigt (<a href="https://www.theguardian.com/news/datablog/2013/jan/10/how-much-water-food-production-waste" target="_blank" rel="noopener noreferrer">The Guardian</a>). Auch der Energieaufwand und Einsatz von Futtermitteln (wie Soja, wofür Regenwald gerodet wird) sind erheblich.
        </li>
      </ul>
      </ScrollAnimation>

      <ScrollAnimation animation="fadeInUp" delay={0.4}>
        <h2 className="text-2xl font-semibold mb-3 text-green-700">Rezeptideen</h2>
        <p className="mb-6 text-gray-800">
          Trotz der Umweltwirkungen muss Fleischgenuss nicht vollständig tabu sein. Wichtig ist der bewusste Konsum – z.&nbsp;B. kleinere Mengen, hohe Qualität oder seltenere Fleischmahlzeiten. Hier ein paar beispielhafte Gerichte:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Recipe 1 */}
          <InteractiveCard
            imageSrc="/pics/fleischbasiert.jpg"
            title="Gegrilltes Steak mit Gemüse"
            description="Ein hochwertiges Rindersteak aus Weidehaltung, serviert mit saisonalem Grillgemüse. Tipp: Kleine Portionen genießen und viel Gemüse dazu."
            category="Rezept"
          />
          {/* Recipe 2 */}
          <InteractiveCard
            imageSrc="/pics/fleischbasiert.jpg"
            title="Hähnchenbrust auf Salatbett"
            description="Mageres Geflügelfleisch wie Huhn hat eine bessere CO₂-Bilanz als rotes Fleisch. Hier mariniert und gebraten, auf frischem Gartensalat angerichtet."
            category="Rezept"
          />
        </div>
      </ScrollAnimation>

      <ScrollAnimation animation="fadeIn" delay={0.5}>
        <h2 className="text-2xl font-semibold mb-3 text-green-700">Umweltbelastung im Überblick</h2>
        <p className="mb-4 text-gray-800">
          Die folgende Tabelle vergleicht beispielhaft die Umweltwirkungen verschiedener Lebensmittel:
        </p>
        <table className="w-full bg-white text-left mb-6">
        <thead className="bg-green-700 text-green-50">
          <tr>
            <th className="px-4 py-2">Lebensmittel</th>
            <th className="px-4 py-2">CO₂-Emissionen<br/>(kg CO₂e/kg)</th>
            <th className="px-4 py-2">Wasserverbrauch<br/>(Liter/kg)</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="px-4 py-2">Rindfleisch</td>
            <td className="px-4 py-2">27–60 <span className="text-xs text-gray-600">(hohe Spannbreite je nach Haltung)</span></td>
            <td className="px-4 py-2">~15.400</td>
          </tr>
          <tr className="border-b bg-gray-50">
            <td className="px-4 py-2">Schweinefleisch</td>
            <td className="px-4 py-2">5–12</td>
            <td className="px-4 py-2">~6.000</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">Hähnchenfleisch</td>
            <td className="px-4 py-2">~6</td>
            <td className="px-4 py-2">~4.300</td>
          </tr>
          <tr className="border-b bg-gray-50">
            <td className="px-4 py-2">Tofu (Soja)</td>
            <td className="px-4 py-2">~3</td>
            <td className="px-4 py-2">~2.000</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Kartoffeln</td>
            <td className="px-4 py-2">&lt; 0,5</td>
            <td className="px-4 py-2">~300</td>
          </tr>
        </tbody>
        </table>
        <p className="text-xs text-gray-600 mb-6">
          <em>Quellen:</em> Emissionsdaten aus Poore et al. 2018 (Science) und FAO; Wasserverbrauchsdaten nach IME 2013 (via Guardian).
        </p>
      </ScrollAnimation>

      <ScrollAnimation animation="fadeInUp" delay={0.6}>
        <h2 className="text-2xl font-semibold mb-3 text-green-700">Erklärvideo</h2>
        <p className="mb-4 text-gray-800">
          Warum ist unser Fleischkonsum problematisch für das Klima? Das folgende Video gibt einen Überblick:
        </p>
        <div className="w-full aspect-w-16 mb-8">
          <iframe 
            className="w-full h-96" 
            src="https://www.youtube.com/embed/q6YkYx7-Y_k" 
            title="Fleischkonsum und Klimaschutz (Erklärvideo)" 
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen 
          ></iframe>
        </div>
      </ScrollAnimation>
      
      <ScrollAnimation animation="fadeIn" delay={0.7}>
        <div className="mt-12 text-center">
          <MagneticButton className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow-md transition-colors duration-300">
            <a href="/co2-calculator" className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
              </svg>
              CO₂-Fußabdruck berechnen
            </a>
          </MagneticButton>
        </div>
      </ScrollAnimation>

      {/* Quellenangaben Fußzeile */}
      <div className="mt-16 pt-8 border-t border-green-200">
        <h3 className="text-sm font-semibold text-gray-500 mb-2">Quellenangaben</h3>
        <ul className="text-xs text-gray-400 space-y-1">
          <li>• Poore J. et al. (2018): "Reducing food's environmental impacts through producers and consumers", Science 360:6392</li>
          <li>• FAO (2023): "The state of food and agriculture - Livestock sector transformation and the environment"</li>
          <li>• Institute for Mechanical Engineers (IME): "Global Food: Waste Not, Want Not" (2013)</li>
          <li>• Umweltbundesamt: "Die Umweltwirkungen unserer Ernährung" (2022)</li>
          <li>• WWF Deutschland: "Der Appetit auf Fleisch und seine Folgen" (2021)</li>
          <li>• Heinrich Böll Stiftung: "Fleischatlas 2021 - Daten und Fakten über Tiere als Nahrungsmittel"</li>
        </ul>
      </div>
    </div>
  );
}

export default MeatPage;
