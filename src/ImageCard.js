import React, { Component } from "react";

class ImageCard extends Component {
  render() {
    return (
      <React.Fragment>{ this.props.beyObj ?

      <div>
        <h2>{this.props.beyObj.name}</h2>
        <img src={this.props.beyObj.img} alt=""/>
        <button onClick={() => this.props.editGif(this.props.beyObj)}>Edit</button>
        <button onClick={() => this.props.deleteGif(this.props.beyObj)}>Delete</button>
      </div> 
      :
      <div>
        <h2>{this.props.jayObj.name}</h2>
        <img src={this.props.jayObj.img} alt="" />
        <button onClick={() => this.props.editGif(this.props.jayObj)}>Edit</button>
        <button onClick={() => this.props.deleteGif(this.props.jayObj)}>Delete</button>
      </div>
      }
      </React.Fragment>
    );
  }
}

export default ImageCard;
