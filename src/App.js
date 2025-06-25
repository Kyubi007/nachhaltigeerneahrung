import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

// Import all page components
import HomePage from "./pages/HomePage";
import MeatPage from "./pages/MeatPage";
import VegetarianPage from "./pages/VegetarianPage";
import VeganPage from "./pages/VeganPage";
import CO2CalculatorPage from "./pages/CO2CalculatorPage";
import QuizPage from "./pages/QuizPage";
import ImpressumPage from "./pages/ImpressumPage";
import PrivacyPage from "./pages/PrivacyPage";
import ModernLayoutDemo from "./pages/ModernLayoutDemo";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header/NavBar displayed on all pages */}
      <NavBar />

      {/* Main content area */}
      <div className="flex-grow bg-gray-50 text-gray-800">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/fleisch" element={<MeatPage />} />
          <Route path="/vegetarisch" element={<VegetarianPage />} />
          <Route path="/vegan" element={<VeganPage />} />
          <Route path="/co2-rechner" element={<CO2CalculatorPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/impressum" element={<ImpressumPage />} />
          <Route path="/datenschutz" element={<PrivacyPage />} />
          <Route path="/modern-demo" element={<ModernLayoutDemo />} />
        </Routes>
      </div>

      {/* Simple Footer with Impressum/Datenschutz links */}
      <footer className="bg-green-900 text-green-100 text-sm p-4 text-center">
        <p>
          <a href="/impressum" className="underline hover:text-white">Impressum</a> |{" "}
          <a href="/datenschutz" className="underline hover:text-white">Datenschutzerklärung</a>
        </p>
        <p className="mt-1">© 2025 Nachhaltige Ernährung (Schulprojekt)</p>
      </footer>
    </div>
  );
}

export default App;
