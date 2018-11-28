import React, { Component } from "react";
import Emoji from './Emoji'

class ImageCard extends Component {
  render() {
    return (
      <React.Fragment>{ this.props.beyObj ?

      <div>
        <h2>{this.props.beyObj.name}</h2>
        <img src={this.props.beyObj.img} alt=""/>
        <button onClick={() => this.props.editGif(this.props.beyObj)}>Edit</button>
        <button value="bey" onClick={() => this.props.deleteGif(this.props.beyObj)}>Delete</button>
        <input type="checkbox" name="checkbox" value="checked"  onChange={  (e) => this.props.handleCheckBox(e, this.props.beyObj)  }/><Emoji symbol="✨💖" label="Favoite">Favoite</Emoji>
      </div> 
      :
      <div>
        <h2>{this.props.jayObj.name}</h2>
        <img src={this.props.jayObj.img} alt="" />
        <button onClick={() => this.props.editGif(this.props.jayObj)}>Edit</button>
        <button value="jay"onClick={(e) => this.props.deleteGif(this.props.jayObj)}>Delete</button>
        <input type="checkbox" name="checkbox" value="checked" onChange={(e) => this.props.handleCheckBox(e,this.props.jayObj)} />
        <Emoji symbol=" ✨👌 " label="Favoite"> Favoite</Emoji>
      </div>
      }
      </React.Fragment>
    ); 
  }
}

export default ImageCard;
