import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
// import logo from '../../../images/logo.png';
import './SignIn.css';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { FcGoogle } from 'react-icons/fc';
import { FaUserAlt } from 'react-icons/fa';

const SignIn = () => {
    const { googleSignIn, setUser, user, setIsLoading } = useAuth();

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const [error, setError] = useState('');

    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                setUser(result.user);
                history.push(redirect_url);
            }).finally(() => setIsLoading(false))
            .catch(error => {

            })
    }

    const auth = getAuth();

    const handleSignIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                history.push(redirect_url);
            }).finally(() => setIsLoading)
            .catch(error => {
                setError(error.message);
            })
    }

    return (
        <>

            <div className="signin-area my-4 ">
                {
                    error && <div className="alert alert-danger m-3" role="alert">
                        {error}
                    </div>
                }
                <div className="text-center p-3">
                    <img width="200px" src={<FaUserAlt />} alt="" />
                </div>
                <form onSubmit="" className="form text-center border-dark">
                    <h2>Please Sign In</h2>
                    <input onBlur={(e) => setEmail(e.target.value)} type="email" placeholder="Email" required /><br /><br />
                    <input onBlur={(e) => setPassword(e.target.value)} type="password" placeholder="Password" required /><br /><br />
                    <button onClick={handleSignIn} className="btn btn-danger w-100">Sign In</button>
                    <div className="pt-3 link">
                        <Link to="/signup">Don't have an account?</Link>
                    </div>
                    <p>--------------- or -------------</p>
                    <div className="text-center py-2">
                        <button onClick={handleGoogleSignIn} className="m-0 g-btn"><FcGoogle /> SignIn Using Google</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default SignIn;