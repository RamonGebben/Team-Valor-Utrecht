import React from 'react';
import goLogo from '../../images/pokemon_go_logo.png';

function App(props) {
    return (
        <div className="app">
          <div className="top row">
            <img src={goLogo} />
          </div>
          <div className="row">
            <div className="block">
              <h1 className="team-name">Team Valor Utrecht</h1>
              <p>
                Woon jij in Utrecht en speel je Pokemon Go of denk je er over om Pokemon Go te gaan spelen?
                Blijf dan niet in je eentje rond lopen maar maak gebruikt van de rest van je team.
              </p>
              <p>
                Momenteel gebruiken we een Whatsapp groep om op de hoogte te blijven van elkaar, maar hopelijk komt Nianic nog met een in game kanaal hier voor.
                Wil je mee praten, spelen of op de hoogte blijven van groep events, klik dan de join the fight button hier onder.
              </p>
            </div>
            <div className="block">
              <iframe width="100%" height="315" src="https://www.youtube.com/embed/SWtDeeXtMZM" frameBorder="0" allowFullScreen></iframe>
            </div>
          </div>
          <a
            href="http://goo.gl/forms/6Bmc5A48qzbXpTIf2"
            className="button">
              Join the fight!
            </a>
        </div>
    );
}

export default App;
