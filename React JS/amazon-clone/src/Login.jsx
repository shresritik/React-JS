import React, { useState } from 'react'
import './Login.css'
import { auth } from './firebase'
import { Link, useHistory } from 'react-router-dom'

function Login() {
    const history = useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const signin = (e) => {
        e.preventDefault()

        auth.signInWithEmailAndPassword(email, password).then((auth) => history.push("/")).catch((error) => { alert(error.message) })

    }
    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then((auth) => { console.log(auth) }).catch((error) => { alert(error.message) })
        if (auth) {
            history.push("/")
        }
    }

    return (
        <div className="login">
            <Link to="/">
                <img className="login_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="amazon logo" />
            </Link>
            <div className="login_container">
                <h1 className="login_signin"> Sign-in</h1>
                <form>
                    <h5>Email</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button className="login_signinButton" disabled={!email || !password} onClick={signin} type="submit">Login</button>

                </form>
                <p>
                    By signing-in you agree to the AMAZON CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>
                <button className="login_accountButton" disabled={!email || !password} onClick={register}>Create an account</button>
            </div>
        </div>
    )
}

export default Login
