import React from 'react';

function Universe(props) {
  return (
    <>
      <div onClick={props.handleClick}>
        <img src={require("../assets/universe.png")} className="App-logo" alt="universe" />
      </div>
      <p>
            Welcome human, you have traversed to a place between time and space because we need you to bring balance to planet Earth.
      </p>
    </>
  )
}

export default Universe;