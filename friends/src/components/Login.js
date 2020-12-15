import React, { useState } from "react";
import axios from "axios";

const Login = (props) => {

    const [credentials, setCredentials] = useState({ 
        name: '',
        password: ''
    })

    const handleChanges = (e) => {
        e.preventDefault();
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const login = (e) => {
        axios
            .post("http://localhost:5000/api/login", credentials)
            .then((res) => {
                console.log(res);
                localStorage.setItem("token", res.data.payload);
                props.history.push('/protected');
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <>
        <form onSubmit={login}>
            <label for="user">User:</label>
            <input type="text" id="user" name="user" value={credentials.name} onChange={handleChanges}></input>
            <label for="pass">Pass:</label>
            <input type="text" id="pass" name="pass" value={credentials.password} onChange={handleChanges}></input>
            <button>Log-in</button>
        </form>
        </>
    );
}

export default Login