import React from 'react';
import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import Heading from './components/Heading';
import Oscar from './components/Oscar';
import Button from './components/Button';
import Input from './components/Input';
import Container from './components/Container';

function App() {
  const personName = {
    first:"Deepanshu",
    last:"Gupta"
  }
  const personListArray = [
    {
      first:"Deepanshu",
      last:"Gupta"
    },
    {
      first:"Nishu",
      last:"Gupta"
    },
    {
      first:"Tanuja",
      last:"Gupta"
    }
  ]
  return (
    <div className="App">
          <Greet name='Deepanshu' messageCount={10} isLoggedIn={true}/>
          <Person name={personName}/>
          <PersonList names={personListArray}/>
          <Status status='success'/>
          <Heading>
            Hello World!
          </Heading>
          <Heading>
            <Oscar/>
          </Heading>
          <Greet name='Deep' isLoggedIn={true}/>
          <Button handleClick={(event,id)=>{
            alert("Hello Deep");
            console.log('event',event,id)
          }}/>
          <Input value='' handleChange={(event)=>{console.log(event)}}/>
          <Container styles={{border:"2px solid black",padding:'1rem',margin:"20px auto" ,width:"max-content"}}/>
    </div>
  );
}

export default App;


