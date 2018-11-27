import React, { Component } from "react";
import ImageCard from "./ImageCard";

class JayContainer extends Component {
  // constructor(props) {
  //   super(props);
  //   this.clickHandler = this.clickHandler.bind(this);
  // }

  render() {
    console.log('ffdfsdfs', this.props)
    let arrayOfJay = this.props.jayImages.map(jayObj => {
      return (
        <ImageCard 
          key={jayObj.id}
          jayObj={jayObj}
          clickHandler={this.props.clickHandler}
        />
      );
    });
    return <div className="jay">{arrayOfJay}</div>;
  }
}

export default JayContainer;
