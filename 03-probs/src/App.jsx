import React from 'react';
import Cards from './components/Cards';

const App = () => {
  return (
    <>
      <div className="parant">
       <Cards user="Prince Kumar" age={29} img="https://images.unsplash.com/photo-1760563368807-ce05c0d30726?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
       <Cards user="Rahul Kumar" age={22} img="https://images.unsplash.com/photo-1743105351262-3f9e6944920a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
       <Cards user="Ankit Kumar" age={23} img="https://plus.unsplash.com/premium_photo-1764695440099-2c5e152e950a?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
       <Cards user="Gauri Shankar" age={22} img="https://plus.unsplash.com/premium_photo-1765796096836-bd2f76886191?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      
             
      </div>


    </>
  );
}

export default App;
