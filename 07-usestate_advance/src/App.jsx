import React from 'react';

const App = () => {
  const submitHandler=(e)=>{
    e.preventDefault();
    console.log('submiteddd')
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input type="text" />
        <button>submit</button>
        
      </form>
    </div>
  );
}

export default App;
