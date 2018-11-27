import React from 'react'

export default function Form(props) {


  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        props.submitHandler(props.action, );
      }}>
        <input name="name" value={props.name} onChange={props.handleChange}/>
        <input name="image" value={props.img} onChange={props.handleChange}/>
        <input type="checkbox" name="favorite" checked={props.favorite} onChange={props.handleCheckBox} />
        <button > {props.action} bey </button>
      </form>
    </div>
  )
}
