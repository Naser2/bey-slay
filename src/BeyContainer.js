import React, { Component } from "react";
import ImageCard from "./ImageCard"

class BeyContainer extends Component {

  render() {
    //console.log('bey propssss', this.props)
    let arrayOfBey = this.props.beyImages.map(beyObj => {
      return (
        <React.Fragment key={beyObj.id}>
        <ImageCard 
    
          beyObj={beyObj}
          editGif={this.props.editGif}
          deleteGif={this.props.deleteGif}
          handleChange={this.props.handleChange}
          handleCheckBox={this.props.handleCheckBox}
        />
        </React.Fragment>
      );
    });
    return <div className="bey">{arrayOfBey}</div>;
  }
}

export default BeyContainer;
