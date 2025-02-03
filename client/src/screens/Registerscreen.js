import React from 'react'
import { useState} from 'react';

function RegisterScreen () {
    const [name , setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [cpassword, setcpassword] = useState('')

    function register(){
        if(password==cpassword){
        const user={
            name,
            email,
            password,
            cpassword
        }
        console.log(user);
    }
    else{
        alert('Password not matched')
    } 
    }
    return (
        <div className='register'>
      <div className="row justify-content-center mt-5">
        <div className="col-md-3 mt-3 text-left shadow-lg p-3 mb-5 bg-white rounded">

      
          <h2 className="text-center m-2" style={{ fontSize: "35px" }}>
            Register
          </h2>
          <div>
            <input required type="text" placeholder="name" className="form-control mt-1"  value={name} onChange={(e)=>{setname(e.target.value)}}/>
            <input required type="text" placeholder="email" className="form-control mt-1" value={email} onChange={(e)=>{setemail(e.target.value)}} />
            <input required type="phone" placeholder="phone" className="form-control mt-1"  />
            <input required type="text" placeholder="location" className="form-control mt-1"  /> <input
              type="password"
              placeholder="password"
              className="form-control mt-1"
              value={password} onChange={(e)=>{setpassword(e.target.value)}}
              
            />
            <input
              type="text"
              placeholder="confirm password"
              className="form-control mt-1"
              value={cpassword} onChange={(e)=>{setcpassword(e.target.value)}}
              
            />
           
            <button className="btn btn-primary rounded-pill mt-3 mb-3" onClick={register}>REGISTER</button>
            <br/>
            <a style={{color:'black'}} href="/login">Click Here To Login</a>
          </div>
        </div>
      </div>
    </div>
    )
}

export default RegisterScreen
