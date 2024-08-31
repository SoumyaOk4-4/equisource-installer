import React, { useState, useEffect } from 'react';
import './App.css';
import Loading from 'react-loading';

const dyk = "Did You Know: ";
const DYK_arr = [
  dyk + "Selling / Buying from EquiSource is better than WhatsApp! 🎧",
  dyk + "For all your college needs you can get the best products from EquiSource! ✨",
  dyk + "We almost had our idea of EquiSource stolen. We managed it somehow! 😭",
  dyk + "We take ZERO commition from our sellers. We only want the DEV tag! 🧑🏻‍💻",
  dyk + "Even we Devs use EquiSource to sell or put on rent our products! 🗣️",
  dyk + "Read Policy first then take your next steps! 📃",
  dyk + "You can find us Devs in About page! 🤓",
  dyk + "You can call us if you have any specific questions! Numbers on About page! 📞",
  dyk + "This 4 sec loading screen is intentional to help you read these messages! ☃️",
  dyk + "You can hear a voice if you click the right place in this page. Hint- Below copyright button! 🎈"
];

function getRandom_DYK(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function getRandomAudio() {
  const audioFiles = [
    '/audio/man.mp3',
    '/audio/woman.mp3'
  ];
  const randomIndex = Math.floor(Math.random() * audioFiles.length);
  return audioFiles[randomIndex];
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delayTime = 4000;
    const delayLoading = setTimeout(() => {
      setLoading(false);
    }, delayTime);
    return () => clearTimeout(delayLoading);
  }, []);

  const handlePlayAudio = () => {
    const audio = new Audio(getRandomAudio());
    audio.play();
  };

  return (
    <div className="App">
      {loading ? (
        <center>
          <img src="logo192.png" alt="EquiSource"/>
          <Loading type="bars" color="rgb(255, 65, 65)" />
          <br /><br /><br />
          <h4 className='did-you-know'>{getRandom_DYK(DYK_arr)}</h4>
        </center>
      ) : (
        <>
          <div className="box">
            <div className="logo">
              <img src="logo192.png" alt="EquiSource"/>
              <h1>EquiSource</h1>
            </div>
            <br />
            <div className="start">
              <a href="http://equisource.duckdns.org:7099/">Get Started</a>
            </div>
          </div>
          <h3>Read our policy before getting started:</h3>
          <div className="policy">
            <a href="http://equisource.duckdns.org:7099/policy" className="policy-link">Policy</a>
            <a href="http://equisource.duckdns.org:7099/v1/price" className="policy-link">Price Chart</a>
          </div>
<div className="server-down">SERVER DOWN!</div>
          <div className="footer">
            <a href="https://forms.gle/9yVeABXfT887n1Hz8" className="highlight-link">Become An EquiSource Seller</a>
            <br/>
            <div className="terms">
              <p>EquiSource © 2024 | All Rights Reserved</p>
            </div>
              <div className="play-audio" >
                <button className="invisible-button" onClick={handlePlayAudio}></button>
              </div>
              <br />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
