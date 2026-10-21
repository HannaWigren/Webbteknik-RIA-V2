import React, { Component } from 'react';

export default class Reviews extends Component {
  render() {
    return (
      <main>
        <h1>Recensioner</h1>
        <p>Här kan du läsa vad våra kunder tycker om oss och lämna din egen recension.</p>
        <table>
          <thead>
            <tr>
              <th>Namn</th>
              <th>Betyg</th>
              <th>Recension</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Anna Svensson</td>
              <td>★★★★★</td>
              <td>Bästa pizzan i stan! Autentisk italiensk smak och färska ingredienser. Rekommenderar varmt!</td>
            </tr>
            <tr>
              <td>Erik Johansson</td>
              <td>★★★★☆</td>
              <td>Snabb och trevlig service. Pizzan var riktigt bra, speciellt Vesuvio. Enda minuset är att det kan vara lite trångt vid lunchtid.</td>
            </tr>
            <tr>
              <td>Maria Andersson</td>
              <td>★★★★★</td>
              <td>Fantastisk glutenfri pizza! Som celiakpatient är det svårt att hitta bra pizza, men här får jag samma kvalitet som alla andra.</td>
            </tr>
            <tr>
              <td>Lars Nilsson</td>
              <td>★★★★☆</td>
              <td>Mycket bra pizza och rimliga priser. Personalen är alltid vänlig och hjälpsam. Kommer definitivt tillbaka!</td>
            </tr>
          </tbody>
        </table>
        <form action="mailto:recensioner@pomodoro.se" method="post" encType="text/plain">
          <label htmlFor="namn">Namn:</label>
          <input type="text" id="namn" name="namn" required />
          
          <label htmlFor="recension">Din recension:</label>
          <textarea id="recension" name="recension" required></textarea>
          
          <button type="submit">Skicka</button>
        </form>
      </main>
    );
  }
}