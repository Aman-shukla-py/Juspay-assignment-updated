import React, { Component } from "react";
import CatSprite from "./CatSprite";
import Draggable from "react-draggable";
import "./PreviewArea.css";


class PreviewArea extends Component {

  state = {
    xoffset: 0,
    yoffset: 0,
    rotationAngle: 0,
    tooltip: "",
    setShow: true,
  };

  componentDidMount() {
    localStorage.setItem('operation', JSON.stringify([]));
  }


  doOperation = () => {
    let operation = JSON.parse(localStorage.getItem('operation'));
    if (!operation) {
      operation = [];
    }
    for (let index = 0; index < operation.length; index++) {
      let task = operation[index];
      // task break color
      let arr = task.split(":");
      let content = arr[0].trim();
      let steps = Number(arr[1]);

      if (content == "Move Steps by") {
        this.setState({ xoffset: this.state.xoffset + steps });
      }
      else if (content == "Change X by") {
        this.setState({ xoffset: this.state.xoffset + steps});
      }
      else if (content == "Change Y by") {
        this.setState({ yoffset: this.state.yoffset + steps});
      }
      else if (content == "Set X to") {
        this.setState({ xoffset: steps});
      }
      else if (content == "Set Y to") {
        this.setState({ yoffset: steps});
      }
      else if (content == "Turn Right by") {
        this.setState({ rotationAngle: this.state.rotationAngle + steps});
      }
      else if (content == "Turn Left by") {
        this.setState({ rotationAngle: this.state.rotationAngle - steps});
      }

      else if (content == "Say Hello!") {
        this.setState({ tooltip: "Hello!" });
      }
      else if (content == "Think Hmm...") {
        this.setState({ tooltip: "Hmm.." });
      }
      else if (content == "Show") {
        this.setState({ setShow: true });
      }
      else if (content == "Hide") {
        this.setState({ setShow: false });
      }
      else if (content == "When green flag clicked") {
        this.setState();
      }

      console.log(this.state.xoffset, this.state.yoffset);
    }

  };

  render() {
    const { isEnabled } = this.state;
    return (
      <div>
        <div>
          <div className="div">
            <div>
              <button className="run-button go-button" onClick={this.doOperation} >
                <img className="goIcon" src="https://scratch.mit.edu/static/assets/2e0c4790f8f9cf28e3c346b9cef0fcb6.svg" alt="GO logo" >
                </img>
                <span className="go-text">Run</span>
              </button>
            </div>
          </div>
        </div>
        <div>
          <Draggable>
            <div className="cat-sprite" style={{
              position: "relative",
              cursor: isEnabled ? "-webkit-grabbing" : "-webkit-grab",
              left: `${this.state.xoffset}px`,
              top: `${this.state.yoffset}px`,
              rotate: `${this.state.rotationAngle}deg`,
              display: this.state.setShow ? "block" : "none",
            }}>
              <tooltip>
                {this.state.tooltip}
              </tooltip>
              <CatSprite />
            </div>
          </Draggable>
        </div>
      </div>
    );
  }
}
export default PreviewArea;