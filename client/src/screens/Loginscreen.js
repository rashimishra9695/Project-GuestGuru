import React, { useState } from 'react'

function Loginscreen() {
    const [email , setemail] = useState('')
    const [password , setpassword] = useState('')
    function Login(){
        const user = {
            email,
            password
        }
    }
    return ( <div className='login'>
        <div className="row justify-content-center mt-1">
          <div className="col-md-3 mt-3 text-left shadow-lg p-3 mb-5 bg-white rounded">
          <h2 className="text-center m-2" style={{ fontSize: "35px" }}>
            Login
          </h2>
  
        <div>
            <input required type="text" placeholder="email" className="form-control mt-1"  value={email} onChange={(e)=>{setemail(e.target.value)}} />
            <input
              type="password"
              placeholder="password"
              className="form-control mt-1"  
              value={password} required onChange={(e)=>{setpassword(e.target.value)}}         
            />
            
            <button className="btn btn-success mt-3 mb-3 rounded-pill">LOGIN</button>
            <br/>
            <a style={{color:'black'}} href="/register" className="mt-2">Click Here To Register</a>
          </div>
    
    </div>
    </div>
    </div>   )
}

export default Loginscreen
