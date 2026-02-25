import React, { useEffect, useState } from 'react';
import axios from 'axios'

const App = () => {

  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const getData = async () => {
    // console.log('clicked')
    const res = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=15`)
    // console.log(res.data)
    setData(res.data)
    // console.log(data)
  }

  useEffect(function () {
    getData();
    // console.log(page)
  }, [page])

  const error = "Loading..."

  return (
    <>

      <div className='h-screen'>
        <h1 className='text-center font-bold text-3xl p-5'>Gallery App</h1>
        <div className='flex h-auto flex-wrap justify-between flex-col items-center'>
          {/* <h1 className='absolute fixed p-4 bg-amber-700 font-medium'>{page}</h1> */}
          <div className='flex flex-wrap m-5 justify-center items-center gap-6 overflow-hidden'>
            {data.length === 0 ? <h1 className='m-20 p-15 font-mono text-3xl font-bold text-center'>Loading...</h1> : data.map((ele, idx) => {
              return (
                <div key={idx} className='h-95 w-90 rounded'>
                  <a href={ele.url} target='_blank' title={ele.author} ><img className='object-cover h-[90%] w-full overflow-hidden rounded' src={ele.download_url} alt="image" /></a>
                  <p className='p-2 lg font-bold font-medium text-center '>{ele.author}</p>
                </div>

              )

            })}
          </div>
          <div className='flex flex-wrap flex-col'>
            <p className='p-5 font-bold text-center'>Page no - {page}</p>
            <div className='m-5 cursor-pointer gap-5 flex justify-center items-center'>
              <button onClick={() => {
                if (page > 1) {
                  setData([]),
                    setPage(page - 1)
                }

              }
              }
                className='bg-amber-300 py-4 px-5 rounded active:scale-95'
              >Prev
              </button>
              <button
                onClick={() => {
                  setData([]),
                    setPage(page + 1)
                }
                }
                className='bg-amber-300 cursor-pointer py-4 px-5 rounded active:scale-95'
              >Next
              </button>

            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
