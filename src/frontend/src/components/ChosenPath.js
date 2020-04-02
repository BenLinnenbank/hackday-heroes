import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

function ChosenPath(props) {
  const path = props.usersChoice;
  const [heroName, setHeroName] = useState('');
  const [heroLastName, setHeroLastName] = useState('');
  const [superPower, setSuperPower] = useState('');
  const [gender, setGender] = useState('');
  const [isFormSent, setIsFormSent] = useState(false);
  const [characterUrl, setCharacterUrl] = useState(null);

  if (!isFormSent) {
    return (
      <div>
        <h1>
          You've chosen the {goodOrEvil(path)}.
        </h1>
        <Form onSubmit={async (e) => {
          console.log('Submitted form!');
          e.preventDefault();
          await getCharacter();
        }}>
          <FormGroup>
            <Label>
              name?
            </Label>
            <Input placeholder="name" onChange={(e) => { setHeroName(e.currentTarget.value) }} />
          </FormGroup>
          <FormGroup>
            <Label>
              what is your lastname?
            </Label>
            <Input placeholder="lastname" onChange={(e) => { setHeroLastName(e.currentTarget.value) }} />
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">gender</Label>
            <Input onChange={(e) => { setGender(e.currentTarget.value) }} type="select" name="select" id="exampleSelect">
              <option>What's your gender</option>
              <option>male</option>
              <option>female</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">super power</Label>
            <Input onChange={(e) => { setSuperPower(e.currentTarget.value) }} type="select" name="select" id="exampleSelect">
              <option>Pick a power</option>
              <option>Flying</option>
              <option>Super strength</option>
              <option>Invisibility</option>
              <option>Element bender</option>
            </Input>
          </FormGroup>
          <Button
            type="submit"
            className="btn btn-primary btn-xl text-uppercase rounded-0"
          > Submit </Button>
        </Form>
      </div>
    );
  }
  if (isFormSent && characterUrl) {
    return (
      <div>
        <p>
          Don't waste time {heroName} {heroLastName}, the world needs you!
        </p>
        <img src={characterUrl} alt="character" />
      </div>
    )
  }

  function goodOrEvil(path) {
    if (path === true) {
      return "path of light";
    }
    if (path === false) {
      return "dark side";
    }
  }

  async function getCharacter() {
    const body = {
      gender: gender,
      superPower: superPower,
      path: path,
    };
    const result = await fetch('/api/characters', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    const image = await result.blob();
    const url = URL.createObjectURL(image)
    setCharacterUrl(url);
    setIsFormSent(true);
  }
}

export default ChosenPath;