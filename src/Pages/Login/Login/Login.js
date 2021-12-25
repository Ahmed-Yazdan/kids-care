import userEvent from '@testing-library/user-event';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';

import './Login.css';
const Login = () => {
    const { signInUsingEmailAndPassword, signInUsingGoogle, error, } = useFirebase();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let history = useHistory();
    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLoginButton = (event) => {
        event.preventDefault();
        signInUsingEmailAndPassword(name,email,password);
        email && history.push("/");
    };
    return (
        <div>
            <h1>Login</h1>
            <form className="login-form">
                <input type="text" placeholder="Full name" className="inputs mx-auto" onBlur={handleNameChange}/>
                <input type="email" placeholder="email" className="inputs mx-auto" onBlur={handleEmailChange} />
                <input type="password" placeholder="password" className="inputs mx-auto" onBlur={handlePasswordChange} />
                <i className="fas fa-sign-in-alt" /><input type="submit" value="Login" className="my-4 button" onClick={handleLoginButton} />
                <p style={{color:"red", fontWeight:"bolder"}}>{error}</p>
            </form>
            <p>Also you can sign in with google:</p>
            <button onClick={signInUsingGoogle} className="button"><i className="fas fa-sign-in-alt" />Google Sign In</button>
            <p className="my-4">New to Kids Care? <Link to="/register" className="link">Register</Link></p>
        </div>
    );
};

export default Login;