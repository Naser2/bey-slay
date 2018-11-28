import React, { Component } from "react";
import ImageCard from "./ImageCard";

class JayContainer extends Component {

  render() {
    //console.log('propssss', this.props)
    let arrayOfJay = this.props.jayImages.map(jayObj => {
      return (
        <ImageCard 
          key={jayObj.id}
          jayObj={jayObj}
          editGif={this.props.editGif}
          deleteGif={this.props.deleteGif}
        />
      );
    });
    return <div className="jay">{arrayOfJay}</div>;
  }
}

export default JayContainer;
