import React, { useState } from 'react';
import Universe from './Universe';
import Story from './Story'

function Renderer() {
  const [userReady, setUserReady] = useState(false);

  if (userReady) {
    return (
      <Story />
    )
  } else {
    return (
      <Universe handleClick={handleClick} />
    )
  }

  function handleClick() {
    setUserReady(true);
  }
}

export default Renderer;