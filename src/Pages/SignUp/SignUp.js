import React from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import './SignUp.css'

const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }

    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        navigate('/home')
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        console.log(name, email, password)

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        navigate('/home');
    }
    return (
        <div className='signUp'>
            <h2 className='mt-4 text-center'>Please Sign Up</h2>
            <form className='mt-4' onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name' />

                <input type="email" name="email" id="" placeholder='Your Email address' required />

                <input type="password" name="password" id="" placeholder='Password' required />
                <input className='w-50 mx-auto d-block btn btn-dark mt-4' type="submit" value="Sign Up" />

            </form>
            <p className='text-center'>Already user? <Link to="/login" className='text-primary text-decoration-none' onClick={navigateLogin}> Login</Link></p>
        </div>
    );
};

export default SignUp;