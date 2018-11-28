import React from 'react'

export default function Search(props) {
  return (
    <div>
      Enter a search term: <input placeholder="enetrrrrr" name="searchTerm" type="text" value={props.searchTerm} onChange={props.handleChange}/>
    </div>
  )
}
