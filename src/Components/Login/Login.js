import React, { useState } from "react";
import "../Login/Login.css";
import { Link , useNavigate } from "react-router-dom";
import { auth} from "../firebase/firebase"; 
import { signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth";



const Login = () => {
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const navigate = useNavigate();

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) =>{
            if (userCredential)
            navigate("/");
            
        })
      .catch((error)=> alert(error.message));
    };


    const register = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential)=> {
            if(userCredential)
            navigate("/");
           //signed in 
            //const user = userCredential .user;

        })
        .catch((error) =>{
            const errorMessage = error.message;
            alert(errorMessage);
        
        })
    }
   
  return (

    <div className="login">
    <Link to="/"> 
      <img
        className="login__logo"
        src="https://www.austinchronicle.com/binary/2047/amazon.png"
        alt=""
      />
      </Link>
      
      <div className="login__container">
        <h1> sign-in</h1>
        <form>
          <h5> E-mail</h5>
          <input
            type="text"
             value={email}
            onChange={(e) => setEmail(e.target.value)}//to track same bady when log in using 
                                                        // his email adderes wecan see that email using this method 
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            onClick={signIn}
            className="login_signInButton"
          >
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditins of Use &
          SAle. Please see our Privacy Notice, our Cookies and our
          interest-Based Ads Notice
        </p>
        <button onClick={register} className="login__resgistration">
          Create your Amazone Account
        </button>
      </div>
    </div>
  );
};

export default Login;
