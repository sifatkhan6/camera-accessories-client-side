import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import google from '../../Images/google.png'
import Loading from '../Loading/Loading';

const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let errorElement;

    let from = location.state?.from?.pathname || "/";

    if (loading) {
        return <Loading></Loading>
    }

    if (error) {
        errorElement = <div>
            <p className='text-danger'>Error: {error.message}</p>
        </div>

    }

    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div>
            <button onClick={() => signInWithGoogle()} className='btn btn-dark  mt-4 mb-3 w-50 mx-auto d-block'>
                <img src={google} alt="" />
            </button>
            {errorElement}
        </div>
    );
};

export default SocialLogin;