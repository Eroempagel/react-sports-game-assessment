import "./App.css";
import Game from "./components/game/Game";
import BgMusic from "./components/bgMusic/BgMusic";
import logoSrc1 from "./assets/images/linkwithbow.jpg";
import logoSrc2 from "./assets/images/linkwithcrossbow.jpg";
import logoSrc3 from "./assets/images/revaliwithbow.jfif";
import logoSrc4 from "./assets/images/hyrulianarcher.jpg";

function App(props) {
  const blueTeam = {
    name: "Blue Tunic Link",
    logoSrc: logoSrc1,
  };

  const greenTeam = {
    name: "Green Tunic Link",
    logoSrc: logoSrc2,
  };

  const revaliArchers = {
    name: "Revali Archer",
    logoSrc: logoSrc3,
  };

  const hyrulianArchers = {
    name: "Hyrulian Archer",
    logoSrc: logoSrc4,
  };

  return (
    <div className="App">
      <BgMusic />
      <Game
        venue="Link's Archery Challenge"
        homeTeam={greenTeam}
        visitingTeam={blueTeam}
      />
      <Game
        venue="Hyrulian Warriors Arena"
        homeTeam={revaliArchers}
        visitingTeam={hyrulianArchers}
      />
    </div>
  );
}

export default App;
