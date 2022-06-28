import React from 'react';

  function OutputRow(props) {
    return (
      <div className="screen-row">
        <input type="text" readOnly value = {props.value}/>
      </div>
    )
  }

export default OutputRow;