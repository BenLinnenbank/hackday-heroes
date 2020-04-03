import React, { useState } from 'react';
import Good from './Good';
import Evil from './Evil';
import ChosenPath from './ChosenPath';
import desktopImage from '../assets/goodnevil.png';

function Story() {
  const [usersChoice, setUsersChoice] = useState(null);
  const [userHasChosen, setUserHasChosen] = useState(false);

  if (!userHasChosen) {
    return (
      <div id="background" style={{ backgroundImage: `url(${desktopImage})` }}>
        <div className="filler"></div>
        <div class="font-weight-bold">
          <h1>Become a Hero</h1>
          <p>
            The world is in peril! The Corona virus is tormenting humanity.
          </p>
          <p>
            Climate change is about to bring a global catastrophe.
          </p>
          <p>
            Now more than ever is the time for a Hero to rise.
          </p>
          <h3>Choose wisely:</h3>
          <button onClick={() => setUsersChoice(true)}>Path of Justice</button>
          <button onClick={() => setUsersChoice(false)}>The Darkside</button>
          {renderGoodOrEvil()}
        </div>
      </div>
    );
  }
  if (userHasChosen) {
    return <ChosenPath usersChoice={usersChoice} />
  }

  function renderGoodOrEvil() {
    if (usersChoice === true) {
      return (
        <>
          <Good />
          <button onClick={() => setUserHasChosen(true)}>I've made my choice</button>
        </>
      )
    }
    if (usersChoice === false) {
      return (
        <>
          <Evil />
          <button onClick={() => setUserHasChosen(true)}>I've made my choice</button>
        </>
      )
    }
  }
}

export default Story;