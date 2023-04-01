import React from 'react'
import {Link} from "react-router-dom"
import {auth} from "../config/firebase"
import {useAuthState} from "react-firebase-hooks/auth"
import {signOut} from "firebase/auth"
const Navbar = () => {
  const[user] = useAuthState(auth);

  const signUserOut = async()=>{
     await signOut(auth)
  }


  return (
    <div>
      <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      </div>
       

       <div className="user-data">
        {user && 
        <>
       <p>{user?.displayName}</p>
       <img src={user?.photoURL || ""} width="100px" height="100px" alt=""/>
       <button onClick={signUserOut}>Log Out</button>
       </>
      }
       </div>
      
      
      
    </div>
  )
}

export default Navbar