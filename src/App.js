import React, { Component } from "react";
import "./App.css";
import BeyContainer from "./BeyContainer";
import JayContainer from "./JayContainer";
import Form from "./Form";
import Search from "./Search"


class App extends Component {
  state = {
    beyImages: [],
    jayImages: [],
    slayOwner: '',
    name: "",
    image: "",
    favorite: false,
    searchTerm: "",
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
              beyImages: beyRes, rerenderBeys: beyRes,
              jayImages: jayRes, rerenderJays: jayRes
            });

          }).catch(err => console.log('errr occured', err))
      }).catch(err => console.log('some err occured'))
  }


  submitHandler = ( action) => {
    const { name, image, favorite } = this.state //got these attr from state 
    const newSlay = { name, img: image, favorite }//prepare my new obj for a post
    if (action === "create") {
      fetch(`http://localhost:3000/${this.state.slayOwner}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(newSlay)
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
    if (action === "filter") {
      fetch()
        .then()
        .then()
    }

  };
  handleCheckBox = (e, obj) => {
    console.log('Form changes', e.target.name)
    this.setState({
      favorite: !this.state.favorite
    })
    if(e.target.name === "checkbox"){
      console.log('Card changes', e.target.name)
      fetch(`http://localhost:3000/${this.state.slayOwner}`,{

      })
      // obj.favorite !== this.state.favorite
      // this.setState({
        
      // })
    }
  }

  editGif = (data) => {
    console.log("hello edit", data)
  }
  deleteGif = (data) => {
    console.log("Hello Delete", data)
  }


  handleChange = (e, obj) => {
    // console.log(e.target.value)
    const targetElement = e.target.name;
    this.setState({
      [e.target.name]: e.target.value
    }, () => {

      if (targetElement === 'searchTerm') {
        if (this.state.searchTerm) {
          const regex = new RegExp(this.state.searchTerm.trim(), 'i');
          this.setState({
            beyImages: this.state.rerenderBeys.filter(img => regex.test(img.name.trim())),
            jayImages: this.state.jayImages.filter(img => regex.test(img.name.trim()))
          });
        } else {
          this.setState({
            beyImages: this.state.rerenderBeys,
            jayImages: this.state.rerenderJays
          })
        // }if (e.target === "checkbox"){
        //   const favorited = this.handleCheckBox(obj)
        //   console.log(favorited)
   
       }
        
      }

    })
  }

  render() {
    const { name, image, favorite, action, slayOwner } = this.state;
    //console.log('statesss', this.state)
    return (
      <div>
        <div className="main">
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
        </div>
        <div className="search">
          <Search searchTerm={this.state.searchTerm} handleChange={this.handleChange} />
        </div>
        <div >
          <BeyContainer className="bey"
            beyImages={this.state.beyImages}
            editGif={this.editGif}
            deleteGif={this.deleteGif}
            handleChange={this.handleChange}
            handleCheckBox={this.handleCheckBox}
            slayOwner={slayOwner}
          />
        </div>

        <div className="jay">
          <JayContainer
            jayImages={this.state.jayImages}
            editGif={this.editGif}
            deleteGif={this.deleteGif}
            handleChange={this.handleChange}
            handleCheckBox={this.handleCheckBox}
            slayOwner={slayOwner}
          />
        </div>
      </div>
    );
  }
}

export default App;
