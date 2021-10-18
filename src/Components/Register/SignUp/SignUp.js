import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './SignUp.css';
import { updateProfile, createUserWithEmailAndPassword } from 'firebase/auth';


const Signup = () => {

    const {
        auth,
        setUser,
        googleSignIn,
    } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home'

    const signInGoogle = () => {
        googleSignIn()
            .then(res => {
                setUser(res.user);
                history.push(redirect_url);
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const createUser = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then(res => {
                setSuccess(true);
                updateName();
            })
            .catch(error => {
                setSuccess(false);
                setError(error.message);
            })
    }

    const updateName = () => {
        updateProfile(auth.currentUser, {
            displayName: name
        })
            .then(res => {

            })
            .catch(error => {
                setError(error.message);
            })
    }

    // console.log(user);

    return (
        <div>
            <div className="signup-page">
                <div className="signup-area">
                    {
                        error ? <div className="alert alert-danger" role="alert">
                            {error}
                        </div> : ''
                    }
                    {
                        success && <div className="alert alert-success" role="alert">
                            User sign up successfully! Now user can sign in.
                        </div>
                    }
                    <div className="text-center mb-2">
                        {/* <img width="200px" src={logo} alt="" /> */}
                    </div>
                    <h2>Please Sing Up</h2>
                    <form onSubmit={createUser} className="form text-center pt-3">
                        <input onBlur={(e) => setName(e.target.value)} type="text" placeholder="Name" required /><br /><br />
                        <input onBlur={(e) => setEmail(e.target.value)} type="email" placeholder="Email" required /><br /><br />
                        <input onBlur={(e) => setPassword(e.target.value)} type="password" placeholder="Password" required /><br /><br />
                        <button className="btn btn-danger w-100">Sign Up</button>
                        <div className="pt-3 link">
                            <Link to="/signin">Already have an account?</Link>
                        </div>
                    </form>
                    <p>---------------------- or ----------------------</p>
                    <div className="text-center m-0">
                        <button onClick={signInGoogle} className="m-0 g-btn"><i className="fab fa-google"></i> Sign In With Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;