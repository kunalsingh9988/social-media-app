import React from 'react'
import {auth, provider} from "../config/firebase"
import {signInWithPopup} from "firebase/auth"
import {useNavigate} from "react-router-dom"


const Login = () => {
    
    const navigate = useNavigate();

    const signInGoogle = async() =>{
       const result = await signInWithPopup(auth,provider)
       console.log(result);
       navigate("/");

    }


  return (
    <div>
        <span>This is login page</span>
        <h1>Sign up with google</h1>
        <button onClick={signInGoogle}>Sign in </button>
    </div>
  )
}

export default Login