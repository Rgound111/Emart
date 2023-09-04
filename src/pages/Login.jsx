import React from 'react'
import { githubLogo, chromeLogo } from '../assests/index'
import { getAuth, signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { toast, ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {addUser} from '../redux/emartSlice'
import {removeUser} from '../redux/emartSlice'


const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const handleGooglelogin = (e) => {
        e.preventDefault();
        // console.log(auth);
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                // console.log(user)
                dispatch(
                    addUser({
                    _id: user.uid,
                    name: user.displayName,
                    email: user.email,
                    image: user.photoURL,
                })
                )
                setTimeout(() => {
                    navigate("/")
                }, 1500)
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }

    const handleSignout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            toast.success("Log Out SuccessFully");
            dispatch(removeUser());
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <div className='w-full flex flex-col items-center justify-center gap-10 py-10'>
            <div className='w-full flex justify-center items-center gap-10'>
                <div onClick={handleGooglelogin} className='w-60 text-base h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-700 cursor-pointer duration-300'>
                    <img className='w-10' src={chromeLogo} alt="githubLogoImg" />
                    <span className='text-sm text-gray-900'>Sign in With Google</span>
                </div>
                <button onClick={handleSignout} className='text-white text-base px-8 py-3 bg-black rounded-md tracking-wide hover:bg-gray-800 duration-300'> Sign out</button>
            </div>
            <div className='w-full flex justify-center items-center gap-10'>
                <div className='w-60 text-base h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-700 cursor-pointer duration-300'>
                    <img className='w-10' src={githubLogo} alt="githubLogoImg" />
                    <span className='text-sm text-gray-900'>Sign in With github</span>
                </div>
                <button className='text-white text-base px-8 py-3 bg-black rounded-md tracking-wide hover:bg-gray-800 duration-300'> Sign out</button>
            </div>
            <ToastContainer
                position="top-left"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />

        </div>
    )
}

export default Login


