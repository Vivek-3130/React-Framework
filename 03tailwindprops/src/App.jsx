import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  const person = {
    name: 'John Doe',
    age: 30,
    address: {
      city: 'Anytown',
      state: 'Anystate',
      country: 'USA'
    }
  };

 let Arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // for passing it into html as an array


  return (
    // For passing an array we cannot directly pass the myArr=[1,2,3]
    // That is wrong way, here the right one: myArr = {[1,2,3]}
    // That was wrong as jxs takes every thing in a batch therefore]
    // 1,2,3 will be pass together that will give error
    <>
      <h1 className='text-3xl bg-yellow-500 p-3 rounded-md'>Vite with Tailwind</h1>
      <Card  myArr={Arr} userName='Messi' userCountry='Argentina' userProfession='Football' imgSrc='https://www.shutterstock.com/shutterstock/photos/2228357113/display_1500/stock-vector-bandung-indonesia-november-dani-alves-soccer-players-world-cup-vector-image-2228357113.jpg'/>
      <br />  
      <Card myArr={Arr}/>
      <br />
      <Card myArr={Arr} userName='Ronaldo' userCountry='Portugal' userProfession='Football' imgSrc=' https://www.shutterstock.com/shutterstock/photos/2367530295/display_1500/stock-vector-bandung-indonesia-september-christiano-ronaldo-al-nassr-soccer-players-vector-image-2367530295.jpg'/>

    </>
  )
}

export default App

