const express = require('express');

function character(req, res) {
  const body = req.body;
  if (body.gender === 'male') {
    if (body.path) {
      if (body.superPower === 'Flying') {
        res.status(200).sendFile('/Users/benlinnenbank/Desktop/salt/Superhero-Project/src/backend/assets/flygoodman.png');
      }
      if (body.superPower === 'Super strength') {
        res.status(200).sendFile('/Users/benlinnenbank/Desktop/salt/Superhero-Project/src/backend/assets/stronggoodman.png');
      }
      if (body.superPower === 'Extreme stretch') {
        res.status(200).sendFile('/Users/benlinnenbank/Desktop/salt/Superhero-Project/src/backend/assets/stretchgoodman.png');
      }
      if (body.superPower === 'Element bender') {
        res.status(200).sendFile('/Users/benlinnenbank/Desktop/salt/Superhero-Project/src/backend/assets/bendergoodman.png');
      }
    }
    if (!body.path) {
      if (body.superPower === 'Flying') {
        res.status(200).sendFile('/Users/benlinnenbank/Desktop/salt/Superhero-Project/src/backend/assets/flyevilman.png');
      }
      if (body.superPower === 'Super strength') {
        res.status(200).sendFile('/Users/benlinnenbank/Desktop/salt/Superhero-Project/src/backend/assets/strongevilman.png');
      }
      if (body.superPower === 'Extreme stretch') {
        res.status(200).sendFile('/Users/benlinnenbank/Desktop/salt/Superhero-Project/src/backend/assets/stretchevilman.png');
      }
      if (body.superPower === 'Element bender') {
        res.status(200).sendFile('/Users/benlinnenbank/Desktop/salt/Superhero-Project/src/backend/assets/benderevilman.png');
      }
    }
  } else if (body.gender === 'female') {
    if (body.path) {
      if (body.superPower === 'Flying') {
        res.status(200).sendFile('/Users/benlinnenbank/Desktop/salt/Superhero-Project/src/backend/assets/flygoodgirl.png');
      }
      if (body.superPower === 'Super strength') {
        res.status(200).sendFile('/Users/benlinnenbank/Desktop/salt/Superhero-Project/src/backend/assets/stronggoodgirl.png');
      }
      if (body.superPower === 'Extreme stretch') {
        res.status(200).sendFile('/Users/benlinnenbank/Desktop/salt/Superhero-Project/src/backend/assets/stretchgoodgirl.png');
      }
      if (body.superPower === 'Element bender') {
        res.status(200).sendFile('/Users/benlinnenbank/Desktop/salt/Superhero-Project/src/backend/assets/bendergoodgirl.png');
      }
    } else if (!body.path) {
      if (body.superPower === 'Flying') {
        res.status(200).sendFile('/Users/benlinnenbank/Desktop/salt/Superhero-Project/src/backend/assets/flyevilgirl.png');
      }
      if (body.superPower === 'Super strength') {
        res.status(200).sendFile('/Users/benlinnenbank/Desktop/salt/Superhero-Project/src/backend/assets/strongevilgirl.png');
      }
      if (body.superPower === 'Extreme stretch') {
        res.status(200).sendFile('/Users/benlinnenbank/Desktop/salt/Superhero-Project/src/backend/assets/stretchevilgirl.png');
      }
      if (body.superPower === 'Element bender') {
        res.status(200).sendFile('/Users/benlinnenbank/Desktop/salt/Superhero-Project/src/backend/assets/benderevilgirl.png');
      }
    }
  }
}

module.exports.character = character;