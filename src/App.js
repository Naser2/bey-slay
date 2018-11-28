import React, { Component } from "react";
import "./App.css";
import BeyContainer from "./BeyContainer";
import JayContainer from "./JayContainer";
import Form from "./Form";
import Search from "./Search"
const images_Url = "http://localhost:3000"

class App extends Component {
  state = {
    beyImages: [],
    jayImages: [],
    slayOwner: '',
    name: "",
    img: "",
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


  submitHandler = (action, data) => {
    const { name, img, favorite, slayOwner } = this.state //got these attr from state 
    const newSlay = { name, img: img, favorite, type: slayOwner }//prepare my new obj for a post
    if (action === "create") {
      fetch(`http://localhost:3000/${slayOwner}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(newSlay)
      }).then(res => res.json())
        .then(console.log)
    }

    if (action === "update") {
      console.log('dffffff', action, data.id)
        fetch(`${images_Url}/${data.type}/${this.state.slayId}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify(newSlay)
        }).then(res => res.json())
          .then(res => {
            console.log('updated slayyyy', res);
            const slay = res.type;
            const beyOrJayImgs = this.state[`${slay}Images`]
            const slayToReplace = beyOrJayImgs.find(slay => slay.id === this.state.slayId);
            const slayToReplaceIndex = beyOrJayImgs.indexOf(slayToReplace);
            beyOrJayImgs.splice(slayToReplaceIndex, 1, res);
            this.setState({
              name: "",
              img: "",
              favorite: false,
              slayOwner: "",
              [`${slay}Images`]: beyOrJayImgs
          })
        })         
    }
    if (action === "delete") {
      console.log("delete action called:", action, "data received:", data, this.slayOwner)
      fetch(`image_Url${data.type}/${data.id}`,{method: "DELETE"})
      .then(res => res.json())
      .then(res => console.log("back from delete fetch:", res))  
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
    this.setState({
      action: "update",
      name: data.name,
      img: data.img,
      favorite: data.favorite,
      slayOwner: data.type,
      slayId: data.id
    });
  }
  deleteGif = (data) => {
    this.setState({
      action: "delete"
    }, () => this.submitHandler(this.state.action, data))
    
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
    const { name, img, favorite, action, slayOwner } = this.state;
    //console.log('statesss', this.state)
    return (
      <div>
        <div className="main">
          <Form
            submitHandler={this.submitHandler}
            handleChange={this.handleChange}
            handleCheckBox={this.handleCheckBox}

            name={name}
            img={img}
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
          />
        </div>

        <div className="jay">
          <JayContainer
            jayImages={this.state.jayImages}
            editGif={this.editGif}
            deleteGif={this.deleteGif}
            handleChange={this.handleChange}
            handleCheckBox={this.handleCheckBox}
  
          />
        </div>
      </div>
    );
  }
}

export default App;
