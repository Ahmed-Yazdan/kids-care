import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Register.css'
const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { createUserUsingEmailAndPassword, error } = useFirebase();
    
    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleRegisterButton = (event) => {
        event.preventDefault();
        createUserUsingEmailAndPassword(name, email, password);
    };

    return (
        <div>
            <h1>Register</h1>
            <form className="login-form">
                <input type="text" placeholder="Full name" className="inputs mx-auto" onBlur={handleNameChange} />
                <input type="email" placeholder="email" className="inputs mx-auto" onBlur={handleEmailChange} />
                <input type="password" placeholder="password" className="inputs mx-auto" onBlur={handlePasswordChange} />
                <i className="fas fa-sign-in-alt" /><input type="submit" value="Register" className="my-4 button" onClick={handleRegisterButton} />
                <p style={{color:"red", fontWeight:"bolder"}}>{error}</p>
            </form>
            <p>Also you can sign in with google:</p>
            <button className="button"><i className="fas fa-sign-in-alt" />Google Sign In</button>
            <p className="my-4">Already have an account? <Link to="/login" className="link">Login</Link></p>
        </div>
    );
};

export default Register;