import React from 'react';

const App = () => {
  // **** basic **//

  // localStorage.clear()  *** to clear the localStorage
  // localStorage.setItem('user','Rahul') ** to set the value and ey in local storage 
  // localStorage.setItem('value','19') 
  // localStorage.setItem('age','21')
  // const user =localStorage.getItem('user') ** to get the items form the localstorage
  // const age =localStorage.getItem('age')
  // console.log(user)
  // console.log(age)
  // localStorage.removeItem('value') ** to remove the particular the setitem in localStorage
  // localStorage.removeItem('age')



  // ****************** array storage in local storage
  const user ={
    username: "Rahul Kumar",
    age: 21,
    city:"Patna"
  }
  // console.log(user)
  localStorage.setItem('user',JSON.stringify(user))
  // localStorage.clear()
  const usname =JSON.parse(localStorage.getItem('user'))
  console.log((usname))

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}

export default App;
