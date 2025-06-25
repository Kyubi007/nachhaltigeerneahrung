import React from "react";

function ImpressumPage() {
  return (
    <main className="container mx-auto p-6 text-gray-800">
      <h1 className="text-2xl font-bold mb-4">Impressum</h1>
      <p className="mb-2"><strong>Angaben gemäß § 5 TMG:</strong></p>
      <p className="mb-4">
        Philipp, Tyler, Fatih, Niklas, Claude<br/>
        Gewerbliche Schulen Dillenburg<br/>
        Dillebursch<br/>
        Deutschland
      </p>
      <p className="mb-4">
        <strong>Kontakt:</strong><br/>
        Telefon: +49 (0)123 456789<br/>
        E-Mail: unseremail@mail.com
      </p>
      <p className="mb-4">
        <strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</strong><br/>
        Philipp, Tyler, Fatih, Niklas, Claude, Adresse wie oben
      </p>
      <p className="mb-4 text-sm">
        <em>Hinweis:</em> Dies ist ein Schulprojekt. Die dargestellten Inhalte dienen ausschließlich Bildungszwecken. Produkt- und Firmennamen, sofern erwähnt, dienen nur der Illustration. 
      </p>
      <p className="text-sm">
        Haftungsausschluss: Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
      </p>
    </main>
  );
}

export default ImpressumPage;
