import React from 'react'


const person = (props) => {
  return (
    <div className="Person">
      <h1>im a {props.name} and im {props.age}</h1>
      <input type="text" onChange={props.changeName}/>
      <button onClick={props.click}>click</button>
    </div>
  )
};


export default person