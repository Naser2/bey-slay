import React, { Component } from "react";
import ImageCard from "./ImageCard"

class BeyContainer extends Component {

  render() {
    //console.log('bey propssss', this.props)
    let arrayOfBey = this.props.beyImages.map(beyObj => {
      return (
        <React.Fragment>
        <ImageCard 
          key={beyObj.id}
          beyObj={beyObj}
          editGif={this.props.editGif}
          deleteGif={this.props.deleteGif}
          handleChange={this.props.handleChange}
          handleCheckBox={this.props.handleCheckBox}
          slayOwner={this.props.slayOwner}
        />
        </React.Fragment>
      );
    });
    return <div className="bey">{arrayOfBey}</div>;
  }
}

export default BeyContainer;
