import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Ul from './components/Ul'

function App() {
  // This uses a usestate to set the state and update the state of the input field
  const [input, setInput] = useState("");

  
  // This uses a usestate to set the state and update the state of the array
  const [todo, setToDo] = useState([]);
  

  // This is use to get dynamic input for the input useState 
  function nameChange(name) {
    // This is the method that set the state of the input useState
    setInput(name)
  }

  // This is use to ensure that on click of the submit button it does
  // not submit an empty string
  function addToArray() {
    if (input.length > 0) {
      // This is a setState method called setToDo that copies all the value in
      // the todo array and adds the input and pushs back the todo array
      setToDo([...todo, input])
      // This is a  setState method called setInput that reset the input back to an
      // empty string
      setInput("")
    }
    console.log(todo);
  }

  // This is a parameterized function that takes in a parameter
  // which is the index and then uses a splice method to remove the
  // item by index and replaces it with the prompt
  function editArray(index){
    
  // create a prompt to get new values for the input
    let prompt = window.prompt("Edit Todo")

    // This creates an array and copies the todo array into it
    let array = [...todo]
    // Then the splice method takes in the index, the no of 
    // items to delete and the value to replace it which is the
    // propmt
    array.splice(index, 1, prompt)

    // This sets the array state to the new array created
    setToDo([...array])
  }
  

  // This is a parameterized function that takes in a parameter
  // which is the index and then uses a splice method to remove the
  // item by index 
  function deleteArray(index){
    let array = [...todo]
    array.splice(index, 1 )
    setToDo([...array])
  }

  const currentDate = new Date();
  const currentDate1 = currentDate.getDay();

  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const dDate = dayNames[currentDate1];

  console.log(dDate);

  let type = "A weekday";
  let adv = "Keep Bombing!";

if (currentDate1 === 0 || currentDate1 === 6){
    type = "A weekend";
    adv = "Rest";
}

  return (
    <>
      <Header cDate={dDate} value={input} change={() => nameChange(event.target.value)} btnFunc={addToArray} advice={adv}>Hey, today is, </Header>
      {
        todo.map((item, index) => {
          return(<p>{item} <button onClick={()=>editArray(index)}>Edit</button><button onClick={()=>deleteArray(index)}>Delete</button></p>)

        })
      }
    </>
  )
}

export default App

