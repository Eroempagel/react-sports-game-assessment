import "./App.css";
import Game from "./components/game/Game";
import logoSrc1 from "./assets/images/raccoon.png";
import logoSrc2 from "./assets/images/squirrel.png";
import logoSrc3 from "./assets/images/bunny.png";
import logoSrc4 from "./assets/images/hound.png";

function App(props) {
  const raccoons = {
    name: "Russiaville Raccoons",
    logoSrc: logoSrc1,
  };

  const squirrels = {
    name: "Sheridan Squirrels",
    logoSrc: logoSrc2,
  };

  const bunnies = {
    name: "Burlington Bunnies",
    logoSrc: logoSrc3,
  };

  const hounds = {
    name: "Hammond Hounds",
    logoSrc: logoSrc4,
  };

  return (
    <div className="App">
      <Game
        venue="Union 525 Gem"
        homeTeam={squirrels}
        visitingTeam={raccoons}
      />
      <Game venue="Sheridan Arena" homeTeam={bunnies} visitingTeam={hounds} />
    </div>
  );
}

export default App;
