import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <main>
        <section className="hero">
          <h1>POMODORA</h1>
          <p>Restaurang & Pizzeria</p>
        </section>
        <section className="about">
          <h2>Om oss</h2>
          <p>Pomodoro Pizzeria har serverat autentisk italiensk pizza i Örnsköldsvik sedan 1985. Vi använder endast de finaste ingredienserna och följer traditionella italienska recept som har gått i arv genom generationer.</p>
          <h3>Vår historia</h3>
          <p>Det började med en dröm om att sprida den äkta italienska pizzan till Sverige. Vår grundare, Giuseppe Rossi, kom till Örnsköldsvik från Napoli med sina hemliga recept och passion för matlagning.</p>
          <h3>Våra värderingar</h3>
          <ul>
            <li>Färska ingredienser varje dag</li>
            <li>Traditionella italienska metoder</li>
            <li>Vänlig och professionell service</li>
            <li>Miljövänliga förpackningar</li>
          </ul>
          <div className="video-column">
            <h3>Se oss arbeta</h3>
            <video controls>
              <source src="/pizzavideo.mp4" type="video/mp4" />
              Din webbläsare stödjer inte video.
            </video>
          </div>
          <h3>Hitta oss</h3>
          <p>Vi ligger mitt i Örnsköldsviks centrum, lätt att hitta och med bra parkeringsmöjligheter.</p>
          <a href="https://maps.app.goo.gl/wFTH4oUjfj4u2DtQ8" className="map-link" target="_blank" rel="noreferrer">Visa på karta</a>
        </section>
      </main>
    );
  }
}