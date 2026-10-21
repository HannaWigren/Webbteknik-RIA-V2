import React, { Component } from 'react';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0
    };
  }

  handleLike = () => {
    this.setState({ likes: this.state.likes + 1 });
  };

  render() {
    return (
      <main>
        <section className="hero">
          <h1>POMODORA</h1>
          <p>Restaurang & Pizzeria</p>
          <button 
              onClick={this.handleLike} 
              style={{ margin: '20px auto', display: 'block', padding: '10px 20px', cursor: 'pointer', backgroundColor: '#e74c3c', color: 'white', border: 'none', borderRadius: '5px' }}
          >
            ❤️ Gilla pizzerian! ({this.state.likes})
          </button>
        </section>

        <section className="gallery">
          <h2>Våra populära pizzor</h2>
          <img src="/margherita.avif" alt="Pizza Margherita" className="pizza-image" />
          <img src="/vesuvio.avif" alt="Pizza Vesuvio" className="pizza-image" />
          <img src="/hawaii.avif" alt="Pizza Hawaii" className="pizza-image" />
          <img src="/capricciosa.avif" alt="Pizza Capricciosa" className="pizza-image" />
          <img src="/opera.avif" alt="Pizza Opera" className="pizza-image" />
          <img src="/bolognese.avif" alt="Pizza Bolognese" className="pizza-image" />
        </section>

        <section className="info-section">
          <h2>Öppettider</h2>
          <ul>
            <li>Måndag till Torsdag: 11:00 till 22:00</li>
            <li>Fredag till Lördag: 11:00 till 23:00</li>
            <li>Söndag: 12:00 till 21:00</li>
          </ul>
          <h2>Kontakt</h2>
          <p>Telefon: <a href="tel:060-123456">060-123456</a></p>
          <p>E-post: <a href="mailto:info@pomodoro.se">info@pomodoro.se</a></p>
          <p>Adress: Storgatan 1, 891 33 Örnsköldsvik</p>
        </section>
      </main>
    );
  }
}