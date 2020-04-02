import React from 'react';

function ChosenPath(props) {
  const path = props.usersChoice;
  console.log(path);
  return (
    <div>
      <p>
        You've chosen the {goodOrEvil(path)}.
      </p>
    </div>
  );

  function goodOrEvil(path) {
    if (path === true) {
      return "good side";
    }
    if (path === false) {
      return "dark side";
    }
  }
}

export default ChosenPath;