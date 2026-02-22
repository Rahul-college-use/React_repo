import React from 'react';
import { useState } from 'react';

const App = () => {

  let [num , setNum]=useState(10);
  function changeval(){
    console.log(num)
    console.log('setNum the store and render the update value ')
    let a=num+1;
    console.log(a)
    //effect show SetNum
    setNum(a)
  }

  //counter 
  let[count,setCount]=useState(0);
  function increase(){

   setCount(++count) 
  }
  function decrease(){
   if(count>0)   
   setCount(--count) 
  }

  return (
    <div>
      <h1>the usestate change the value</h1>
      <h3>The current num is {num} after the cutton click change the value a/c to function define.</h3>
      <button onClick={changeval}>click me </button>

      <h1>Counter</h1>
      <h2>Count {count}</h2>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>decrease</button>
    </div>
  );
}

export default App;
<h1></h1>