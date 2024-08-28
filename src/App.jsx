import "./App.css";

document.body.style.backgroundImage = "url('back.png')";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center";
document.body.style.backgroundRepeat = "no-repeat";

function App() {
  return (
    <div className="App">
      <div className="box">
      <div className="logo">
        <img src="logo192.png" alt="EquiSource"/>
      </div>
      <a href="http://equisource.duckdns.org:7099/">Get Started</a>
      </div>
    </div>
  );
}

export default App;
