import React, { useState, useEffect } from 'react';
import './App.css';
import Loading from 'react-loading';

document.body.style.backgroundImage = "url('back.png')";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center";
document.body.style.backgroundRepeat = "no-repeat";

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
];

function getRandom_DYK(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
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
          <h1>EquiSource</h1>
          <div className="box">
            <div className="logo">
              <img src="logo192.png" alt="EquiSource"/>
            </div>
            <a href="http://equisource.duckdns.org:7099/">Get Started</a>
          </div>
          <h2>Read our policy before getting started:</h2>
          <div className="policy">
            <a href="http://equisource.duckdns.org:7099/policy">Policy</a>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
