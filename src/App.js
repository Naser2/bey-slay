import React, { Component } from "react";
import "./App.css";
import BeyContainer from "./BeyContainer";
import JayContainer from "./JayContainer";
import Form from "./Form";
// import BeyImages from "./beyImages";


class App extends Component {
  state = {
    beyImages: [],
    jayImages: [],
    slayOwner: '',
    name: "",
    image: "",
    favorite: false,
    action: 'create'
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

              jayImages: jayRes
            });

          }).catch(err => console.log('errr occured', err))
      }).catch(err => console.log('some err occured'))
  }



  // clickHandler = beyObj => {
  //   //Go into our Bey Array and remove the beyObj that was clicked on
  //   //Delete
  //   //Options: slice/splice, filter
  //   // let copyArr = [...this.state.beyImages];
  //   let copyArr = [...this.state.beyImages].filter(copyBeyObj => {
  //     return copyBeyObj !== beyObj;
  //   });
  //   console.log(copyArr);
  //   this.setState({
  //     beyImages: copyArr
  //   });
  // };

  submitHandler = (action) => {
    const {name, image,favorite} = this.state 


  
    const newSlay = {name, img:image, favorite}
    if (action === "create") {
      fetch(`http://localhost:3000/${this.state.slayOwner}`,{
        method: "POST",
        headers:{
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body:JSON.stringify(newSlay)
      }).then(res => res.json())
        .then(console.log)
      
        
    }
    if (action === "edit") {
      fetch()
        .then()
        .then()
    }
    if (action === "delete") {
      fetch()
        .then()
        .then()
    }
    if (action === "sort") {
      fetch()
        .then()
        .then()
    }

  };


  // submitHandler = (data) => {
  //  console.log(data)
  // }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value 
      // slayOwner: jay 
    })
  }

  handleCheckBox = () => { }

  render() {
    const { name, image, favorite, action, slayOwner} = this.state;
     console.log('all statesss', this.state)
    return (
      <div>
        <div className="bey-container">
          <Form
            submitHandler={this.submitHandler}
            handleChange={this.handleChange}
            handleCheckBox={this.handleCheckBox}
            name={name}
            image={image}
            favorite={favorite}
            action={action}
            slayOwner={slayOwner}
          />

          <BeyContainer
            beyImages={this.state.beyImages}
          />
        </div>

        <div className="jay-container">
          <JayContainer
            jayImages={this.state.jayImages}
          />
        </div>
      </div>
    );
  }
}

export default App;
