import React, { useState,useEffect } from 'react'
import axios from "axios";


function Loginscreen() {
    const [email , setemail] = useState('');
    const [password , setpassword] = useState('');
    const[loading, setloading]=useState(false)
    const[error, seterror]=useState(false)
    const[success, setsuccess]=useState(false) 
    useEffect(() => {

      if(localStorage.getItem('currentUser'))
      {
        
      }
    
}, [])

   async function login(){
        const user = {
            email,
            password
        }
        try {
          
          setloading(true)
          const result = await (await axios.post('/api/users/login',user)).data
          setemail('')
          setpassword('')
          console.log(result);
          localStorage.setItem('currentUser',JSON.stringify(result))
          window.location.href='/home'
        } catch (error) {
          seterror(true)
          setloading(false)
          console.log(error);
          
        }
      }
         
    
    return ( <div className='login'>
        <div className="row justify-content-center mt-5">
          <div className="col-md-3 mt-3 text-left shadow-lg p-3 mb-5 bg-white rounded">
          <h2 className="text-center m-2" style={{ fontSize: "35px" }}>
            Login
          </h2>

          {loading && (<h1>Loading...</h1>)} 
          {error && (<h1>Invalid Credentials</h1>)}
          {success && (<h1>User Login Successfull</h1> )}
  
        <div>
            <input required type="text" placeholder="email" className="form-control mt-1"  value={email} onChange={(e)=>{setemail(e.target.value)}} />
            <input
              type="password"
              placeholder="password"
              className="form-control mt-1"  
              value={password} required onChange={(e)=>{setpassword(e.target.value)}}         
            />
          
            {<button className="btn btn-success mt-3 mb-3 rounded-pill" onClick={login}>LOGIN</button> }
            <br/>
            <a style={{color:'black'}} href="/register" className="mt-2">Click Here To Register</a>
          </div>
    
    </div>
    </div>
    </div>   )
}

export default Loginscreen
