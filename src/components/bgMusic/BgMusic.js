import React, { Component } from "react";
import myMusic1 from "../../assets/audio/practice.mp3";

// moved this outside game.js because this would get duplicated for both games when using games state
// downfall reset will no longer turn off music

class BgMusic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      play: false,
    };
    this.myMusic = new Audio(myMusic1);
  }
  handleMusic = (event) =>
    this.setState(
      {
        play: !this.state.play,
      },
      () => {
        this.state.play ? this.myMusic.play() : this.myMusic.pause();
      }
    );
  render() {
    return (
      <div>
        <span>
          <strong>Background Music: </strong>
        </span>
        <button className="BgMusic" onClick={this.handleMusic}>
          {this.state.play ? "Pause" : "Play"}
        </button>
      </div>
    );
  }
}

export default BgMusic;
