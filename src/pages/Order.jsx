import React, { Component } from 'react';

export default class Order extends Component {
  render() {
    return (
      <main>
        <h1>Beställ</h1>
        <form action="mailto:bestallning@pomodoro.se" method="post" encType="text/plain">
          <label htmlFor="namn">Namn:</label>
          <input type="text" id="namn" name="namn" required />
          
          <label htmlFor="telefon">Telefon:</label>
          <input type="tel" id="telefon" name="telefon" required />
          
          <label htmlFor="adress">Adress:</label>
          <input type="text" id="adress" name="adress" required />
          
          <label htmlFor="bestallning">Din beställning:</label>
          <textarea id="bestallning" name="bestallning" required></textarea>
          
          <button type="submit">Skicka</button>
        </form>
      </main>
    );
  }
}