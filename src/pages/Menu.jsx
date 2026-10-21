import React from 'react';

export default function Menu() {
  return (
    <main>
      <h1>Meny</h1>
      <p>Alla våra pizzor går att få glutenfria för 25 kr+</p>
      <section className="menu-group">
        <div className="menu-column">
          <h2>Klassiska pizzor</h2>
          <ul>
            <li><strong>Margherita</strong> - 100 kr<br /><span>tomat, ost, basilika</span></li>
            <li><strong>Vesuvio</strong> - 110 kr<br /><span>tomat, ost, skinka</span></li>
            <li><strong>Capricciosa</strong> - 120 kr<br /><span>tomat, ost, skinka, champinjoner, oliver</span></li>
            <li><strong>Hawaii</strong> - 115 kr<br /><span>tomat, ost, skinka, ananas</span></li>
            <li><strong>Opera</strong> - 125 kr<br /><span>tomat, ost, skinka, tonfisk, räkor</span></li>
          </ul>
        </div>
        <div className="menu-column">
          <h2>Specialpizzor</h2>
          <ul>
            <li><strong>Bolognese</strong> - 130 kr<br /><span>tomat, ost, köttfärssås, lök</span></li>
            <li><strong>Quattro Stagioni</strong> - 140 kr<br /><span>tomat, ost, skinka, champinjoner, oliver, artischock</span></li>
            <li><strong>Vegetariana</strong> - 120 kr<br /><span>tomat, ost, paprika, lök, champinjoner, oliver</span></li>
            <li><strong>Pepperoni</strong> - 115 kr<br /><span>tomat, ost, pepperoni</span></li>
            <li><strong>Kebabpizza</strong> - 135 kr<br /><span>tomat, ost, kebabkött, lök, tomat, feferoni</span></li>
          </ul>
        </div>
      </section>
      <section className="other-menu">
        <h2>Andra rätter</h2>
        <h3>Pasta</h3>
        <ul>
          <li><strong>Spaghetti Bolognese</strong> - 95 kr</li>
          <li><strong>Penne Arrabbiata</strong> - 85 kr</li>
        </ul>
        <h3>Sallader</h3>
        <ul>
          <li><strong>Caesar Sallad</strong> - 90 kr</li>
          <li><strong>Grekisk Sallad</strong> - 85 kr</li>
        </ul>
      </section>
    </main>
  );
}