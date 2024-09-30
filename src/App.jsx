import { useState } from 'react'
import './App.css'

function App() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  const [mode, setMode] = useState("light")

 


  const changeMode = () => {
    if (mode !== "light") 
      {setMode("light");
        document.body.className = "light"

    }
    else {
      setMode("dark");
       document.body.className = "dark"
    }
};
  



  return (
    <>
<div className='content'>
   
 <h1>We have 2 nums, and you can increase them,  to apply the calculations </h1>

 <button onClick={()=> setCount1(count1 + 1)}>Set The first Num to {count1}</button>
  <button onClick={()=> setCount1(count1 - 1)}>Decrease The first Num to {count1}</button>

  <button onClick={()=> setCount2(count2 + 1)}>Set The second Num to {count2}</button>
  <button onClick={()=> setCount2(count2 - 1)}>decrese The second Num to {count2}</button>


    <p>Sum Operation = {count1 + count2} </p>

    <p>Sustraction Operation = {count1 - count2}</p>

    <p>Multiplication Operation = {count1 * count2}</p>

    <p> Reminder Operation = {count1 % count2}</p>


<button  onClick={changeMode}>Would you change to light/ Dark mode ?</button>

</div>
    </>
  )
}

export default App
