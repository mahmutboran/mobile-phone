import React, { useState } from 'react'

const Filter = ({onFilter ,filterText}) => {




  return (
    <div>
        <input type="text" name="filterInput" id="filterInput"
        placeholder='Filter Contact'
        value={filterText} 
        onChange={onFilter}/>

    </div>
  )
}

export default Filter