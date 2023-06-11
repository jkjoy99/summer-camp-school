import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaGoogle } from "react-icons/fa";
import Swal from 'sweetalert2';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { app } from '../../Firebase/firebase.config';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth(app);

    const from = location.state?.from?.pathname || "/";

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
    }

    const handelGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
          .then((result) => {
            const loggedUser = result.user;
            console.log(loggedUser);
            if (loggedUser.providerId) {
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            }
          })
          .catch((error) => {
            console.error(error.message);
          });
      };

    return (

        <>
            <Helmet>
                <title> | Login</title>
            </Helmet>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex ">
                    <div className="text-center lg:text-left mr-32">
                        <img src="https://img.freepik.com/free-vector/my-password-concept-illustration_114360-3864.jpg?w=740&t=st=1686383987~exp=1686384587~hmac=ce24bd1d1f658502f0edd4b1f8442c3492dd48ca9962ff48e41b5aa52ac1b429" alt="" />
                    </div>

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mr-10">
                        <h1 className="text-5xl font-bold text-center pt-6">Login now!</h1>
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Your email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                            <button
                                onClick={handelGoogleLogin}
                                className="text font-bold bg-yellow-300 btn mb-4 w-80"
                            >
                                <FaGoogle className="text-2xl mr-2"></FaGoogle>
                                Login with Google
                            </button>
                        </form>
                        <p><small>New Here? <Link to="/signup">Create an account</Link> </small></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;