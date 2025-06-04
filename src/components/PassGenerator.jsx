import React, { useCallback, useEffect, useRef, useState } from 'react'

const PassGenerator = () => {

    const [length, setLength] = useState(8);
    const [numAllowed, setNumAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);

    const [password, setPassword] = useState("")

    const passRef = useRef(null)

    const passwordGenerator = useCallback( ()=> {

        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        if(numAllowed) str += "0123456789";

        if(charAllowed) str += "!@#$%^&*()/_?{}[]';:~";

        for (let i = 1; i <= length; i++) {
            
            let char = Math.floor(Math.random() * str.length + 1)

            pass += str.charAt(char)
            
        }


        setPassword(pass)


    }, [length, numAllowed, charAllowed, setPassword])


    const copyPassToClipboard = useCallback( ()=> {
        passRef.current?.select();
        window.navigator.clipboard.writeText(password)
    }, [password] )



    useEffect( ()=>{
        passwordGenerator()

    }, [length, numAllowed, charAllowed, passwordGenerator] )


  return (
    <>
        <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 py-5 text-orange-500 bg-gray-400'>

            <h1 className='text-white text-center'>Password Generator</h1>

            <div className='flex shadow rounded-lg overflow-hidden mb-4'>
                <input type="text" value={password} className='outline-none w-full py-1 px-3 mt-1.5 rounded-2xl bg-white'
                placeholder='password' readOnly ref={passRef}
                />
                <button className='cursor-copy bg-blue-500 outline-none text-white px-3 py-0.5 shrink-0'
                onClick={copyPassToClipboard}
                >Copy</button>


            </div>

            <div className='flex text-sm gap-x-2'>
                <div className='flex items-center gap-x-1 '>

                    <input type="range" name='' id=''
                    min={8}
                    max={100}
                    value={length}
                    className='cursor-pointer'
                    onChange={(e)=> {setLength(e.target.value)}}
                    />

                    <label>Length: {length}</label>

                </div>

                <div className='flex items-center gap-x-1'>
                    <input type="checkbox" name="" 
                    id="numberInput"
                    onChange={(e)=> {
                        setNumAllowed((prev) => !prev);
                    }} 
                    defaultChecked={numAllowed}
                    

                    />

                    <label>Numbers</label>
                </div>

                <div className='flex items-center gap-x-1'>
                    <input type="checkbox" name="" id="charInput" 
                     defaultChecked={charAllowed}
                     onChange={ ()=> {
                        setCharAllowed((prev)=> !prev)
                     }}   
                    />
                    <label htmlFor="charInput">Characters</label>
                </div>




            </div>




        </div>
    
    </>
  )
}

export default PassGenerator