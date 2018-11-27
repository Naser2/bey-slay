import React, { Component } from "react";
import ImageCard from "./ImageCard";
import Form from './Form'


class BeyContainer extends Component {
  // constructor(props) {
  //   super(props);
  //   this.clickHandler = this.clickHandler.bind(this);
  // }

  render() {
    let arrayOfBey = this.props.beyImages.map(beyObj => {
      return (
        <React.Fragment>
        <ImageCard 
          key={beyObj.id}
          beyObj={beyObj}
          clickHandler={this.props.clickHandler}
        />
        <Form
         submitHandler={props.submitHandler}
         handleChange={props.handleChange}
         handleCheckBox={props.handleCheckBox}
         name={this.state.name}
         image={this.state.img}
         action={this.state.action}
         />
        </React.Fragment>
      );
    });
    return <div className="bey">{arrayOfBey}</div>;
  }
}

export default BeyContainer;
