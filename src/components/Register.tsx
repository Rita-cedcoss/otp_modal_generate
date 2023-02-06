import React, { useRef, useState } from 'react'

const Register = () => {
    const inpRef=useRef<HTMLInputElement>(null);
    const [number,setNumber]=useState();
    const[message,setmessage]=useState<string>("");
    const inpNum=(e:any)=>{
        if(e.target.value.match(/^[4-8]$/))
                {          
                    setNumber(e.target.value);
                    setmessage("")             
    }
    else{
        if(e.target.value=='')
        setNumber(e.target.value);
        setmessage("number between 4 to 8");
    }
    }
    const otpGenerate=()=>{
        if(number==4)
        {
            
        }
    }
  return (
    <div>
        {/* <button>Validate Otp</button> */}
        <br></br>
        <input type="text" ref={inpRef} value={number} maxLength={1} onChange={(e)=>inpNum(e)}/>
        <p>{message}</p>
        <button onClick={otpGenerate}>Validate otp</button>
    </div>
  )
}

export default Register