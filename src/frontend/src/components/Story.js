import React, { useState } from 'react';
import Good from './Good';
import Evil from './Evil';
import ChosenPath from './ChosenPath';

function Story() {
  const [usersChoice, setUsersChoice] = useState(null);
  const [userHasChosen, setUserHasChosen] = useState(false);
  
  if (!userHasChosen) {
    return (
      <div>
        <p>Choose wisely</p>
        <button onClick={() => setUsersChoice(true)}>Good Boy</button>
        <button onClick={() => setUsersChoice(false)}>Darkside</button>
        {renderGoodOrEvil()}
      </div>
    );
    }
  if (userHasChosen) {
    return <ChosenPath usersChoice={usersChoice}/>
  }

  function renderGoodOrEvil() {
    if (usersChoice === true) {
      return (
      <>
        <Good />
        <button onClick={() => setUserHasChosen(true)}>Are you certain</button>
      </>
      )
    } 
    if (usersChoice === false) {
      return (
      <>
        <Evil />
        <button onClick={() => setUserHasChosen(true)}>Are you certain</button>
      </>
      )
    }
  }
}

export default Story;