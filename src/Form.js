import React from 'react'
import Emoji from './Emoji'

export default function Form(props) {


  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault()
        props.submitHandler(props.action, {
          name: props.name, img: props.img, favorite: props.favorite, type: props.slayOwner 
        });
      }}>
        <input name="name" value={props.name} onChange={props.handleChange}/>
        <input name="img" value={props.img} onChange={props.handleChange}/>
        <input type="checkbox" name="favorite" checked={props.favorite} onChange={props.handleCheckBox} />
        <select name="slayOwner" value={props.slayOwner} onChange={props.handleChange} >
          <option>Select one</option>
          <option value="bey">Bey</option>
          <option value="jay">Jay</option>
        </select>
        <button > {props.action} New Slay </button>
      </form>
    </div>
  )
}
