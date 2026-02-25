import React, { useState } from 'react';

const App = () => {
    const [val,setVal] = useState('');
    const changehandler=(e)=>{
      // console.log(e.target.value);
      setVal(e.target.value);
    }
    
  return (
    <div>

      <div className="flex flex-col justify-center items-center h-screen w-screen gap-5">
        <textarea className='p-6 border-2 rounded-2xl  capitalize' placeholder='Show what are you typing..' cols={25} rows={10} type="text" value={val} />
      <input className='p-5 border-2 rounded-2xl' onChange={(e)=>{changehandler(e)}} type="text" placeholder='typing'  />
      </div>
      
    </div>
  );
}

export default App;
