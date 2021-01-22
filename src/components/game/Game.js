import React, { Component } from "react";
import Team from "../../components/team/Team";
import ScoreBoard from "../../components/scoreboard/ScoreBoard";
import shotSound1 from "../../assets/audio/arrow.mp3";
import scoreSound1 from "../../assets/audio/arrow-wall.mp3";
import winSound1 from "../../assets/audio/win.wav";
import logoSrc5 from "../../assets/images/goron.png";
class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      resetCount: 0,
      homeTeamStats: {
        shots: 0,
        score: 0,
      },
      visitingTeamStats: {
        shots: 0,
        score: 0,
      },
    };

    this.shotSound = new Audio(shotSound1);
    this.scoreSound = new Audio(scoreSound1);
    this.winSound = new Audio(winSound1);
  }

  shoot = (team) => {
    const teamStatsKey = `${team}TeamStats`;
    let score = this.state[teamStatsKey].score;
    this.shotSound.play();

    if (Math.random() > 0.5) {
      score += 1;

      setTimeout(() => {
        this.scoreSound.play();
      }, 100);
    }

    this.setState((state, props) => ({
      [teamStatsKey]: {
        shots: state[teamStatsKey].shots + 1,
        score,
      },
    }));
  };

  resetGame = () => {
    this.setState((state, props) => ({
      resetCount: state.resetCount + 1,
      homeTeamStats: {
        shots: 0,
        score: 0,
      },
      visitingTeamStats: {
        shots: 0,
        score: 0,
      },
    }));
    if (this.state.visitingTeamStats.score > this.state.homeTeamStats.score) {
      alert("Team One Wins!");
      this.winSound.play();
    } else if (
      this.state.homeTeamStats.score > this.state.visitingTeamStats.score
    ) {
      alert("Team Two Wins!");
      this.winSound.play();
    } else {
      alert("It's a Tie!");
      this.winSound.play();
    }
  };

  render() {
    return (
      <div className="Game">
        <ScoreBoard
          visitingTeamStats={this.state.visitingTeamStats}
          homeTeamStats={this.state.homeTeamStats}
        />

        <h1>Welcome to {this.props.venue}</h1>
        <div className="stats">
          <Team
            name={this.props.visitingTeam.name}
            logo={this.props.visitingTeam.logoSrc}
            stats={this.state.visitingTeamStats}
            shotHandler={() => this.shoot("visiting")}
          />

          <div className="versus">
            <span>
              <img height="160px" src={logoSrc5} alt="goron holding a target" />
              <img height="160px" src={logoSrc5} alt="goron holding a target" />
              <img height="160px" src={logoSrc5} alt="goron holding a target" />
            </span>

            <div>
              <strong>Resets:</strong> {this.state.resetCount}
              <button onClick={this.resetGame}>Reset Game</button>
            </div>
          </div>

          <Team
            name={this.props.homeTeam.name}
            logo={this.props.homeTeam.logoSrc}
            stats={this.state.homeTeamStats}
            shotHandler={() => this.shoot("home")}
          />
        </div>
      </div>
    );
  }
}

export default Game;
