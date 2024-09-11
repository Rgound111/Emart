import React from 'react';
import { githubLogo, chromeLogo } from '../assests/index'; // Corrected import
import { getAuth, signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { toast, ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser, removeUser } from '../redux/emartSlice'; // Corrected import

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const handleGoogleLogin = (e) => {
        e.preventDefault();
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                dispatch(
                    addUser({
                        _id: user.uid,
                        name: user.displayName,
                        email: user.email,
                        image: user.photoURL,
                    })
                );
                toast.success("Logged in successfully!");
                setTimeout(() => navigate("/"), 1500);
            })
            .catch((error) => {
                console.error("Error during sign-in:", error.message);
                toast.error("Failed to sign in. Please try again.");
            });
    };

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                toast.success("Logged out successfully!");
                dispatch(removeUser());
            })
            .catch((error) => {
                console.error("Error during sign-out:", error.message);
                toast.error("Failed to sign out. Please try again.");
            });
    };

    return (
        <div className='w-full flex flex-col items-center justify-center gap-8 py-10 px-4 sm:px-6 lg:px-8'>
            <div className='w-full flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-8'>
                <div
                    onClick={handleGoogleLogin}
                    className='w-full max-w-xs text-base h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-700 cursor-pointer duration-300'
                >
                    <img className='w-8 h-8 sm:w-10 sm:h-10' src={chromeLogo} alt="Google Logo" />
                    <span className='text-sm text-gray-900'>Sign in With Google</span>
                </div>
                <button
                    onClick={handleSignOut}
                    className='w-full max-w-xs text-base px-6 py-2 bg-black rounded-md text-white tracking-wide hover:bg-gray-800 duration-300'
                >
                    Sign Out
                </button>
            </div>
            <div className='w-full flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-8'>
                <div
                    className='w-full max-w-xs text-base h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-700 cursor-pointer duration-300'
                >
                    <img className='w-8 h-8 sm:w-10 sm:h-10' src={githubLogo} alt="GitHub Logo" />
                    <span className='text-sm text-gray-900'>Sign in With GitHub</span>
                </div>
                <button
                    className='w-full max-w-xs text-base px-6 py-2 bg-black rounded-md text-white tracking-wide hover:bg-gray-800 duration-300'
                >
                    Sign Out
                </button>
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
    );
};

export default Login;
