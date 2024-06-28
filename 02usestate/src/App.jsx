import { useState } from 'react';
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  //(0)-> it is the initial value of count, this is important other wise it will give the NaN
  // Use State return value in the term of array,
  // In which first element is the number and the second element is the function
  // Every tym the value of cnt is updated the useState() also changes
  const addvalue = () =>{
    // This will create a patch of values and will tonly return the maximum or the top value
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // This will give the 1 as the output

    // to avoid this we can use the callbacks, so that the new value will be dependent on the previous value
    // We get the value of the updated  state value
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    // This will directly give 4 , when the Addvalue is called
  }

  const removevalue = () =>{
    setCount(count - 1);
  }
  
  // let cnt = 15;

  // const addvalue= ()=>{
  //   cnt = cnt + 1;
  //   console.log(cnt);
  // }

  // const removevalue= ()=>{
  //   cnt = cnt - 1;
  //   console.log(cnt); 
  // }
  return (
    // Here there will be no real time change in the counter value
    // here comes the concept of use state?
    // useState is a React Hook that lets you add a state variable to your component.
    // <>
    //   <h1>React State Module</h1>
    //   <h2>Counter Value : {cnt} </h2> 
    //   <button onClick={addvalue}>Add Value</button>{" "}
    //   <button onClick={removevalue}>Remove Value</button>
    //   <p>footer:{cnt} </p>
    // </>
    <>
       <h1>Working on react use state</h1>
       <h2>Counter Value : {count} </h2>
       <button onClick={addvalue}>Add Value</button>{" "}
       <button onClick={removevalue}>Remove Value</button>
       <p>footer:{count} </p>
    </>

  )
}

export default App
