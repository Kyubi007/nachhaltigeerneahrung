import React from "react";
import { Bar } from "react-chartjs-2";
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
      <h1 className="text-3xl font-bold mb-2 text-green-500 text-center">Vegetarische Ernährung</h1>
      
      <div className="w-full max-w-2xl mx-auto mb-6 overflow-hidden rounded-lg shadow-lg">
        <img 
          src="/pics/vegetarisch_basiert.webp" 
          alt="Vielfältige vegetarische Mahlzeit mit frischem Gemüse" 
          className="w-full h-auto"
        />
      </div>

      <div className="mb-8 bg-green-50 p-5 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold mb-4 text-green-600 border-b-2 border-green-300 pb-2 text-center">Grundlagen der vegetarischen Ernährung</h2>
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
      </div>

      <p className="mb-6 text-gray-800">
        Bei der <strong>vegetarischen Ernährung</strong> wird auf Fleisch verzichtet, erlaubt sind jedoch tierische Produkte wie Milch, Eier oder Käse. Diese Ernährungsweise ist zunehmend beliebt – doch wie nachhaltig ist sie? Hier zeigen wir, wie eine fleischfreie Kost Umwelt und Klima entlasten kann.
      </p>

      <h2 className="text-2xl font-semibold mb-3">Beitrag zur Nachhaltigkeit</h2>
      <p className="mb-4 text-gray-800">
        Indem Fleisch durch pflanzliche Lebensmittel ersetzt wird, sinken viele negative Umweltwirkungen erheblich. Einige Vorteile einer vegetarischen Ernährung im Überblick:
      </p>
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

      <h2 className="text-2xl font-semibold mb-3">Rezeptideen</h2>
      <p className="mb-4 text-gray-800">
        Vegetarisch Kochen bietet eine bunte Vielfalt an Gerichten – von herzhaft bis leicht, ohne dass etwas fehlt. Zwei Anregungen:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
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
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-green-600 text-center bg-green-50 py-2 rounded-lg">Wasserverbrauch im Vergleich</h2>
        
        <div className="bg-gradient-to-r from-white to-green-50 p-5 rounded-lg mb-6">
          <p className="mb-5 text-center text-lg font-medium text-green-700">
            Ein wichtiger Aspekt der Nachhaltigkeit ist der Wasserverbrauch in der Lebensmittelproduktion.
            Die folgende Grafik zeigt den durchschnittlichen Wasserverbrauch pro Kilogramm verschiedener 
            Lebensmittel:
          </p>

          <div className="p-4 bg-white rounded-lg shadow-md">
            <div className="h-80 mb-4">
              <Bar 
                data={{
                  labels: ['Rindfleisch', 'Schweinefleisch', 'Geflügel', 'Eier', 'Milch', 'Käse', 'Tofu', 'Hülsenfrüchte'],
                  datasets: [
                    {
                      label: 'Wasserverbrauch in Liter pro kg',
                      data: [15400, 6000, 4300, 3300, 1000, 5000, 2000, 250],
                      backgroundColor: [
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(255, 159, 64, 0.6)',
                        'rgba(255, 205, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(153, 102, 255, 0.6)',
                        'rgba(34, 197, 94, 0.6)',
                        'rgba(22, 163, 74, 0.6)',
                      ],
                      borderWidth: 1,
                    },
                  ],
                }}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      display: false,
                    },
                    title: {
                      display: true,
                      text: 'Wasserverbrauch in der Lebensmittelproduktion',
                    },
                  },
                }}
              />
            </div>
            
            <p className="text-sm text-gray-600 mb-2 text-center italic">
              <strong>Quelle:</strong> Durchschnittswerte basierend auf verschiedenen Studien, u.a. Water Footprint Network
            </p>
          </div>
          
          <div className="mt-6 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
            <p className="text-left">
              Wie man deutlich erkennen kann, benötigt die Produktion von Rindfleisch mit Abstand am meisten Wasser,
              während Hülsenfrüchte (wie Bohnen und Linsen) sehr wassereffizient sind. <span className="font-bold">Auch vegetarische Proteinquellen
              wie Tofu haben einen deutlich geringeren Wasserbedarf als tierische Produkte.</span>
            </p>
          </div>
        </div>
      </div>

      <p className="mb-4 text-gray-800">
        Wie im Abschnitt oben erwähnt, unterscheiden sich die Wassermengen für verschiedene Lebensmittel erheblich. Das folgende Diagramm vergleicht den durchschnittlichen Wasserverbrauch bei der Produktion von Fleisch vs. pflanzlichen Produkten:
      </p>
      <div className="bg-white p-4 shadow-md mb-8" style={{ height: "400px" }}>
        <Bar data={waterData} options={waterOptions} />
      </div>
      <p className="text-xs text-gray-600 mb-6">
        <em>Quelle:</em> IME (Institution of Mechanical Engineers) Bericht 2013 – zitiert im Guardian Datablog.
      </p>

      <h2 className="text-2xl font-semibold mb-3">Erklärvideo</h2>
      <p className="mb-4 text-gray-800">
        Mehr zum Zusammenhang von Ernährung und Nachhaltigkeit zeigt dieses Video:
      </p>
      <div className="aspect-w-16 mb-8">
        <iframe 
          className="w-full h-96" 
          src="https://www.youtube.com/embed/hIsKzAzaIZc" 
          title="Vegetarische Ernährung - Gesund und klimafreundlich (Erklärvideo)" 
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>

      {/* Quellenangaben Fußzeile */}
      <div className="mt-16 pt-8 border-t border-green-200">
        <h3 className="text-sm font-semibold text-gray-500 mb-2">Quellenangaben</h3>
        <ul className="text-xs text-gray-400 space-y-1">
          <li>• Greenpeace Österreich: "Klimaschutz und Ernährung - die Auswirkungen verschiedener Ernährungsstile" (2022)</li>
          <li>• IME (Institution of Mechanical Engineers): "Global Food: Waste Not, Want Not" (2013)</li>
          <li>• The Lancet: "Food in the Anthropocene: the EAT-Lancet Commission on healthy diets from sustainable food systems" (2019)</li>
          <li>• Bundesministerium für Ernährung und Landwirtschaft: "Vegetarische Ernährung - Positionspapier" (2021)</li>
          <li>• Environmental Research Letters: "Climate benefits of changing diet" (2019)</li>
          <li>• The Guardian Datablog: "How much water is needed to produce food and how much do we waste?" (2013)</li>
        </ul>
      </div>
    </div>
  );
}

export default VegetarianPage;
