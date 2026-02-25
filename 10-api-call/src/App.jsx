import React from 'react';
import { useState } from 'react';
import axios from 'axios'
const App = () => {
  const [Data, setData] = useState([])
  // there are two method to api call first is fetch method and othe is axios method and it is easy method
  const getdata = async () => {
    // const res = await fetch("https://picsum.photos/v2/list")
    // const resjson = await res.json()
    // console.log([resjson])
    // setData(resjson)
    const res = await axios.get('https://picsum.photos/v2/list')
    console.log(res.data)
    setData(res.data)
    
  }
  return (
    <div>
      <p>How to api call by fetch(URL of api) asyn await then respose = await json.data then respone.data</p>
      <button onClick={getdata}>Get data</button>
      <div>
        {Data.map((ele, index) => {
          return <p key={index}>hello ,{ele.author}</p>;
        })}
      </div>
    </div>
  );
}

export default App;
