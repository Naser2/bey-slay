import React, { Component } from "react";
import "./App.css";
import BeyContainer from "./BeyContainer";
import JayContainer from "./JayContainer";
import Form from "./Form";
// import BeyImages from "./beyImages";


class App extends Component {
  state = {
    beyImages: [],
    jayImages: []
  };

  componentDidMount() {
    fetch("http://localhost:3000/jay")
      .then(res => res.json())
      .then(jayRes => {

        fetch("http://localhost:3000/bey")
        .then(res => res.json())
        .then(beyRes => {

          this.setState({
            beyImages: beyRes,

            jayImages: jayRes});

        }).catch(err => console.log('errr occured', err))
      }).catch(err => console.log('some err occured'))
  }



  clickHandler = beyObj => {
    //Go into our Bey Array and remove the beyObj that was clicked on
    //Delete
    //Options: slice/splice, filter
    // let copyArr = [...this.state.beyImages];
    let copyArr = [...this.state.beyImages].filter(copyBeyObj => {
      return copyBeyObj !== beyObj;
    });
    console.log(copyArr);
    this.setState({
      beyImages: copyArr
    });
  };

  submitHandler = obj => {
    let copyArr = [...this.state.beyImages, obj];
    this.setState({
      beyImages: copyArr
    });
  };


  submitHandler = () => {

  }

  handleChange= () => {
    
  }

  handleCheckBox= () => {}

  render() {
    return (
      <div>
      <div className="bey-container">
        <Form 
        submitHandler={this.submitHandler} 
        handleChange={this.handleChange}
        handleCheckBox={this.handleCheckBox}


         />
        <BeyContainer
          beyImages={this.state.beyImages}
          clickHandler={this.clickHandler}
        />
      </div>

       <div className="jay-container">
       <JayContainer
          jayImages={this.state.jayImages}
          clickHandler={this.clickHandler}
        />
        </div>
      </div>
    );
  }
}

export default App;
