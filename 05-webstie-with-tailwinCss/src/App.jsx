import React from 'react';
import Section1 from './components/section1/Section1';
import Section2 from './components/section2/Section2';
import Navbar from './components/navbar/Navbar';


const App = () => {
  return (
    <>
      <Navbar />
      <Section1 />
      <Section2 />
    </>
  );
}

export default App;
