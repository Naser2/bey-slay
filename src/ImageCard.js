import React, { Component } from "react";

class ImageCard extends Component {
  render() {
    return (
      <div>{this.props.beyObj ?
      <div>
        <h2>{this.props.beyObj.name}</h2>
        <img
          src={this.props.beyObj.img}
          alt=""
          onClick={() => this.props.clickHandler(this.props.beyObj)}
        />
      </div> :
        <div>
          <h2>{this.props.jayObj.name}</h2>
          <img
            src={this.props.jayObj.img}
            alt=""
            onClick={() => this.props.clickHandler(this.props.jayObj)}
          />
        </div>}
      </div>

    );
  }
}

export default ImageCard;

// let anonFunc = () => {
//this.props.clickHandler()
// }()

//anonFunc()
