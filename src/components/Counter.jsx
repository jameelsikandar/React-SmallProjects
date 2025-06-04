import React, { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0);

    const increment = ()=> {
       setCount(prevCount => {
        if(prevCount < 20) {
            return prevCount +1;
        } else {
            return prevCount;
        }
       })
    }

    const decrement = ()=> {
        if(count > 0) {
        setCount(count - 1)

        }
    };


    

  return (
    <>
        <h1 className='text-3xl text-center text-red-500'>Counter</h1>

        <p className='text-center text-2xl'>{count}</p>

        <div className='text-center items-center text-2xl space-x-2.5'>
            <button className='bg-yellow-400 m-2 p-3 rounded-2xl cursor-crosshair' 
            onClick={increment}
            >Increment</button>

            <button className='bg-yellow-400 m-2 p-3 rounded-2xl cursor-crosshair'
            onClick={decrement
            }
            >Decrement</button>
        </div>
        
    </>
  )
}

export default Counter