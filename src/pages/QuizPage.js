import React, { useState } from "react";

function QuizPage() {
  const questions = [
    {
      question: "Welchen Anteil an den vom Menschen verursachten Treibhausgasen verursacht die Viehwirtschaft weltweit ungefähr?",
      options: ["Etwa 5 %", "Rund 15 %", "Über 40 %", "Mehr als 60 %"],
      answer: 1, // index der richtigen Antwort ("Rund 15 %")
      explanation: "Die Tierhaltung (Fleisch- und Milchproduktion) ist für ca. 14,5 % der vom Menschen verursachten Treibhausgas-Emissionen verantwortlich (Schätzung der FAO)."
    },
    {
      question: "Wie viel Wasser wird ungefähr benötigt, um 1 kg Rindfleisch zu produzieren?",
      options: ["Rund 150 Liter", "Etwa 1.500 Liter", "Ca. 15.000 Liter", "Über 50.000 Liter"],
      answer: 2, // "Ca. 15.000 Liter"
      explanation: "Für die Produktion von 1 kg Rindfleisch werden im Durchschnitt etwa 15.000 Liter Wasser verbraucht – deutlich mehr als für pflanzliche Lebensmittel."
    },
    {
      question: "Welcher Anteil der globalen Agrarfläche wird für die Tierhaltung (Weide und Futtermittel) genutzt?",
      options: ["Etwa 10 %", "Rund 30 %", "Ca. 50 %", "Über 75 %"],
      answer: 3, // "Über 75 %"
      explanation: "Weltweit werden rund 80 % der landwirtschaftlichen Flächen für die Viehwirtschaft genutzt (Weideland und Futteranbau)."
    },
    {
      question: "Wofür wird der Großteil der weltweiten Sojaernte verwendet?",
      options: ["Zur Herstellung von Tofu und Sojamilch", "Als Biokraftstoff", "Als Tierfutter", "Zur Produktion von Sojasauce"],
      answer: 2, // "Als Tierfutter"
      explanation: "Etwa 70 % des weltweit angebauten Sojas werden als Futtermittel in der Tierhaltung eingesetzt und nicht direkt von Menschen gegessen."
    },
    {
      question: "Um wie viel Prozent geringer sind die Treibhausgas-Emissionen einer veganen Ernährung im Vergleich zu einer fleischreichen Ernährung (laut einer Studie)?",
      options: ["Etwa 10 % geringer", "Rund 25 % geringer", "Ungefähr 50 % geringer", "Etwa 75 % geringer"],
      answer: 3, // "Etwa 75 % geringer"
      explanation: "Eine britische Studie (2023) ergab, dass eine vegane Ernährung rund 75 % weniger Treibhausgase verursacht als eine sehr fleischreiche Ernährungsweise."
    }
  ];

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleOptionClick = (index) => {
    if (showExplanation) return;
    setSelectedOption(index);
    setShowExplanation(true);
    
    const isCorrect = index === questions[current].answer;
    if (isCorrect) {
      setScore(score + 1);
    }
    
    // Save user's answer
    setUserAnswers([...userAnswers, {
      question: questions[current].question,
      userAnswerIndex: index,
      correctAnswerIndex: questions[current].answer,
      isCorrect: isCorrect,
      options: questions[current].options
    }]);
  };

  const handleNext = () => {
    setSelectedOption(null);
    setShowExplanation(false);
    
    // Prüfen, ob das Quiz beendet ist
    if (current >= questions.length - 1) {
      setQuizCompleted(true);
    } else {
      setCurrent(current + 1);
    }
  };

  const restartQuiz = () => {
    setCurrent(0);
    setScore(0);
    setSelectedOption(null);
    setShowExplanation(false);
    setUserAnswers([]);
    setQuizCompleted(false);
  };

  const q = questions[current];

  return (
    <main className="container mx-auto p-6 max-w-2xl">
      <h1 className="text-3xl font-bold mb-4">Quiz: Nachhaltige Ernährung</h1>
      {!quizCompleted ? (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-3">
            Frage {current + 1} von {questions.length}:
          </h2>
          <p className="text-gray-800 mb-4">{q.question}</p>
          <ul>
            {q.options.map((option, index) => (
              <li key={index} className="mb-2">
                <button 
                  onClick={() => handleOptionClick(index)}
                  className={`w-full text-left p-2 rounded border 
                    ${showExplanation 
                        ? index === q.answer 
                          ? "bg-green-100 border-green-500" 
                          : index === selectedOption 
                            ? "bg-red-100 border-red-400" 
                            : "bg-gray-50 border-gray-300"
                        : "bg-gray-50 border-gray-300 hover:bg-gray-100"}`}
                  disabled={showExplanation}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
          {/* Feedback/Explanation */}
          {showExplanation && (
            <div className="mt-4 p-4 rounded bg-gray-100">
              {selectedOption === q.answer ? (
                <p className="text-green-800 font-semibold">Richtig! 🎉</p>
              ) : (
                <p className="text-red-800 font-semibold">
                  Leider nicht richtig. Die richtige Antwort ist: <em>{q.options[q.answer]}</em>.
                </p>
              )}
              <p className="mt-2 text-gray-800 text-sm">{q.explanation}</p>
              <button 
                onClick={handleNext}
                className="mt-4 bg-green-600 text-green-50 px-4 py-2 rounded hover:bg-green-700"
              >
                {current < questions.length - 1 ? "Nächste Frage »" : "Ergebnis anzeigen"}
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3 text-center bg-green-100 py-3 rounded-lg">Dein Quiz-Ergebnis</h2>
          <div className="bg-green-50 p-4 rounded-lg mb-6 text-center">
            <p className="text-gray-800 text-xl mb-2">
              Du hast <strong>{score} von {questions.length}</strong> Fragen richtig beantwortet.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Richtige Antworten:</strong> {score} | <strong>Falsche Antworten:</strong> {questions.length - score}
            </p>
            
            {/* Humorous sustainability rating based on score */}
            <div className="my-4 p-3 rounded-lg bg-white border-2 border-green-400">
              <h3 className="font-bold mb-2 text-green-800">
                {score === 0 && "🌋 Klimakrise-Alarm!"}
                {score === 1 && "🌱 Nachhaltigkeits-Anfänger"}
                {score === 2 && "🌿 Umwelt-Lehrling"}
                {score === 3 && "🌲 Öko-Fortgeschrittene(r)"}
                {score === 4 && "🌳 Nachhaltigkeits-Enthusiast"}
                {score === 5 && "🌍 Öko-Superheld!"}
              </h3>
              <p>
                {score === 0 && "Dein Nachhaltigkeitswissen braucht dringend Dünger! Keine Sorge, auch Bambuspflanzen wachsen langsam am Anfang."}
                {score === 1 && "Du bist wie ein Bio-Keimling – klein aber mit viel Potenzial! Noch etwas mehr Wissen und du wächst zum Umweltschützer heran."}
                {score === 2 && "Du bist auf dem richtigen Weg! Wie eine Jungpflanze brauchst du noch etwas Pflege, aber die Grundlagen stimmen."}
                {score === 3 && "Gut gemacht! Du bist wie ein stabiler Baum mit solidem Umweltwissen – fehlt nur noch die Krone!"}
                {score === 4 && "Fast perfekt! Mutter Erde gibt dir ein High-Five! Du kennst dich wirklich gut aus."}
                {score === 5 && "Absoluter Öko-Champion! Wenn alle so viel wüssten wie du, wäre der Klimawandel gestern schon gelöst worden!"}
              </p>
            </div>
          </div>
          
          {/* Detailed answer review */}
          <h3 className="text-xl font-semibold mb-3">Deine Antworten im Detail:</h3>
          
          {userAnswers.map((answer, index) => (
            <div key={index} className={`mb-4 p-3 rounded-md ${answer.isCorrect ? 'bg-green-100' : 'bg-red-50'}`}>
              <p className="font-medium mb-1">Frage {index + 1}: {answer.question}</p>
              <div className="ml-4">
                <p className="mb-1">
                  <span className="font-medium">Deine Antwort:</span> {answer.options[answer.userAnswerIndex]}
                  {answer.isCorrect ? ' ✓' : ' ✗'}
                </p>
                {!answer.isCorrect && (
                  <p className="text-green-700">
                    <span className="font-medium">Richtige Antwort:</span> {answer.options[answer.correctAnswerIndex]}
                  </p>
                )}
              </div>
            </div>
          ))}
          
          <div className="mt-6 text-center">
            <button 
              onClick={restartQuiz} 
              className="bg-green-500 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-green-600 transition-colors"
            >
              Quiz neu starten
            </button>
          </div>
        </div>
      )}

      <hr className="my-6"/>
      <div className="text-sm text-gray-600">
        <h3 className="font-semibold mb-2">Quellen:</h3>
        <ol className="list-decimal list-inside">
          <li>FAO (2017): Livestock solutions for climate change</li>
          <li>IME (2013): Global Food - Waste Not Want Not (via Guardian)</li>
          <li>WWF Deutschland: Der Appetit auf Fleisch und seine Folgen</li>
          <li>WWF Deutschland: Der Appetit auf Fleisch und seine Folgen</li>
          <li>Studie (University of Oxford, 2023) - vegane vs. fleischreiche Ernährung</li>
        </ol>
      </div>
    </main>
  );
}

export default QuizPage;
