import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
const Navbar = () => {
  const [user] = useAuthState(auth);

  const signUserOut = async () => {
    await signOut(auth);
  };

  return (
    <div className="nav">
      <div className="nav-link">
        <Link to="/">Home</Link>

        {!user ? (
          <Link to="/login">Login</Link>
        ) : (
          <Link to="/createpost">CreatePost</Link>
        )}
      </div>

      <div className="user-data">
        {user && (
          <>
            <img className="user-img" src={user?.photoURL || ""} alt="" />
            <p>Hello! {user?.displayName}</p>
            <button className="logout-btn" onClick={signUserOut}>
              Log Out
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
