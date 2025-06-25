import React from "react";
import { motion } from "framer-motion";
import { Bar } from "react-chartjs-2";
import ScrollAnimation from "../components/ScrollAnimation";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function VegetarianPage() {
  // Daten für das Wasserverbrauch-Diagramm
  const waterData = {
    labels: ["Rindfleisch", "Schweinefleisch", "Hähnchen", "Gemüse (Kartoffeln)"],
    datasets: [
      {
        label: "Wasserverbrauch (Liter/kg)",
        data: [15415, 5988, 4325, 287],
        backgroundColor: ["#84cc16", "#65a30d", "#4d7c0f", "#a3e635"]
      }
    ]
  };
  const waterOptions = {
    responsive: true,
    scales: {
      y: { beginAtZero: true }
    },
    plugins: {
      legend: { display: false }
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1 
        className="text-3xl font-bold mb-2 text-green-500 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Vegetarische Ernährung
      </motion.h1>
      
      <motion.div 
        className="w-full max-w-2xl mx-auto mb-6 overflow-hidden rounded-lg shadow-lg"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <img 
          src="/pics/vegetarisch_basiert.webp" 
          alt="Vielfältige vegetarische Mahlzeit mit frischem Gemüse" 
          className="w-full h-auto"
        />
      </motion.div>

      <motion.div 
        className="mb-8 bg-green-50 p-5 rounded-lg shadow-sm"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <motion.h2 
          className="text-2xl font-semibold mb-4 text-green-600 border-b-2 border-green-300 pb-2 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >Grundlagen der vegetarischen Ernährung</motion.h2>
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="md:w-1/2">
            <p className="mb-4 text-right pr-4 border-r-4 border-green-400 italic">
              Vegetarische Ernährung bezeichnet eine Ernährungsweise, die auf den Konsum von Fleisch
              und Fisch verzichtet. Die meisten Vegetarier konsumieren jedoch weiterhin tierische Produkte
              wie Milch, Eier und Honig.
            </p>
          </div>
          <div className="md:w-1/2">
            <p className="bg-white p-4 rounded-md shadow-sm text-green-700 font-medium">
              Diese Form der Ernährung ist aus Nachhaltigkeitssicht deutlich
              umweltfreundlicher als eine fleischbasierte Ernährung und reduziert den ökologischen Fußabdruck erheblich.
            </p>
          </div>
        </div>
      </motion.div>
      
      <motion.p 
        className="text-lg mb-6 bg-white p-4 rounded-md shadow-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        Indem Fleisch durch pflanzliche Lebensmittel ersetzt wird, sinken viele negative Umweltwirkungen erheblich. Einige Vorteile einer vegetarischen Ernährung im Überblick:
      </motion.p>
      <ul className="list-disc list-inside ml-4 mb-6">
        <li className="mb-2">
          <strong>Weniger Treibhausgase:</strong> Wer vegetarisch lebt, verursacht deutlich weniger CO₂. Studien zufolge liegen die ernährungsbedingten Emissionen bei Vegetarier*innen um bis zu <strong>47&nbsp;% niedriger</strong> als bei einer durchschnittlichen Mischkost (<a href="https://greenpeace.at/news/blog-klimaschutz-und-ernaehrung/" target="_blank" rel="noopener noreferrer">Greenpeace Studie</a>).
        </li>
        <li className="mb-2">
          <strong>Geringerer Flächenbedarf:</strong> Für eine pflanzliche Ernährung wird weniger Ackerfläche benötigt. Laut WWF würde der landwirtschaftliche Flächenverbrauch pro Person um etwa <strong>46&nbsp;%</strong> sinken, wenn alle vegetarisch essen würden (<a href="https://albert-schweitzer-stiftung.de/aktuell/studie-ernaehrung-flaechenbedarf-klima" target="_blank" rel="noopener noreferrer">WWF-Studie</a>). Weniger Fläche für Futtermittel bedeutet z.&nbsp;B. mehr Raum für Wälder.
        </li>
        <li className="mb-2">
          <strong>Schonung der Ressourcen:</strong> Pflanzliche Lebensmittel benötigen generell viel weniger Wasser und Energie als tierische. Zum Beispiel haben Gemüse, Getreide und Hülsenfrüchte einen deutlich kleineren Wasser-Fußabdruck als Fleisch. Eine rein pflanzliche Ernährung schont somit Wasserreserven und trägt zum Erhalt der Biodiversität bei.
        </li>
      </ul>

      <motion.h2 
        className="text-2xl font-semibold mb-3"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >Rezeptideen</motion.h2>
      <motion.p 
        className="mb-4 text-gray-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        Vegetarisch Kochen bietet eine bunte Vielfalt an Gerichten – von herzhaft bis leicht, ohne dass etwas fehlt. Zwei Anregungen:
      </motion.p>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.9 }}
      >
        {/* Recipe 1 */}
        <div className="bg-white rounded shadow-md overflow-hidden">
          <img 
            src="/pics/Gemuesecurry.jpg" 
            alt="Gemüsecurry mit Reis" 
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Buntes Gemüsecurry</h3>
            <p className="text-gray-700 text-sm">
              Ein cremiges Curry mit saisonalem Gemüse, Kichererbsen und Kokosmilch. Voller Geschmack ganz ohne Fleisch – und reich an Protein durch Hülsenfrüchte.
            </p>
          </div>
        </div>
        {/* Recipe 2 */}
        <div className="bg-white rounded shadow-md overflow-hidden">
          <img 
            src="/pics/mediterranegemüsepasta.jpg" 
            alt="Vegetarische Pasta mit Gemüse" 
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Mediterrane Gemüse-Pasta</h3>
            <p className="text-gray-700 text-sm">
              Vollkornnudeln mit einer Sauce aus Tomaten, Zucchini, Paprika und frischen Kräutern. Käse oder veganer Parmesan als Topping nach Belieben.
            </p>
          </div>
        </div>
      </motion.div>

      <ScrollAnimation>
        <motion.div 
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <motion.h2 
            className="text-2xl font-semibold mb-4 text-green-600 text-center bg-green-50 py-2 rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >Wasserverbrauch im Vergleich</motion.h2>
        
          <div className="bg-gradient-to-r from-white to-green-50 p-5 rounded-lg mb-6">
            <p className="mb-5 text-center text-lg font-medium text-green-700">
              Ein wichtiger Aspekt der Nachhaltigkeit ist der Wasserverbrauch in der Lebensmittelproduktion.
              Die folgende Grafik zeigt den durchschnittlichen Wasserverbrauch pro Kilogramm verschiedener 
              Lebensmittel:
            </p>

            <div className="p-4 bg-white rounded-lg shadow-md">
              <div className="h-80 mb-4">
                <Bar 
                  data={waterData}
                  options={waterOptions}
                  aria-label="Wasserverbrauch verschiedener Lebensmittel im Vergleich"
                />
              </div>
              <p className="text-center text-sm text-gray-500 mt-3">
                Quelle: Water Footprint Network, 2023
              </p>
            </div>
          </div>
        </motion.div>
      </ScrollAnimation>
      
      <ScrollAnimation>
        <motion.div 
          className="mb-10 bg-green-50 p-6 rounded-lg shadow-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.h2 
            className="text-2xl font-semibold mb-4 text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >Video: Warum vegetarisch?</motion.h2>
          <div className="aspect-w-16 aspect-h-9 mb-4">
            <iframe 
              className="w-full h-96 rounded-lg shadow-md"
              src="https://www.youtube.com/embed/soK-WTjTm1U" 
              title="Warum vegetarisch? Ein kurzer Überblick"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
          <p className="text-sm text-gray-500 mt-2 text-center">
            Ein kurzer Überblick über die wichtigsten Gründe für eine vegetarische Ernährung.
          </p>
        </motion.div>
      </ScrollAnimation>
      
      <ScrollAnimation>
        <motion.div 
          className="border-t border-green-200 pt-4 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-sm text-gray-500">
            <strong>Quellenangaben:</strong>
          </p>
          <ul className="text-xs text-gray-500 list-decimal pl-5 space-y-1">
            <li>Poore, J., & Nemecek, T. (2018). Reducing food's environmental impacts through producers and consumers. Science, 360(6392), 987-992.</li>
            <li>Water Footprint Network. (2023). Water footprint of crop and animal products: a comparison.</li>
            <li>WWF. (2021). Fleischkonsum und Flächenverbrauch – globale Zusammenhänge und Auswirkungen.</li>
          </ul>
        </motion.div>
      </ScrollAnimation>
    </div>
  );
}

export default VegetarianPage;
