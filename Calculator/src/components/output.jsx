import React from 'react';

import OutputRow from './outputRow.js';

  function Output(props) {
  return (
    <div className="screen">
      <OutputRow value = {props.question}/>
      <OutputRow value = {props.answer}/>
    </div>
  )
}

export default Output;