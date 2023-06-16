import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { app } from '../../Firebase/firebase.config';

const Login = () => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
  
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
  
    const from = location.state?.from?.pathname || "/";
  
    const handelLogin = (event) => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      // console.log(email, password);
      signIn(email, password)
        .then((result) => {
          const user = result.user;
          // console.log(user);
  
          navigate(from, { replace: true });
        })
        .catch((error) => {
          console.log(error);
        });
    };
  
    const logInWithGoogle = () => {
      signInWithPopup(auth, googleProvider)
        .then((result) => {
          const loggedUser = result.user;
  
          const addUser = {
            email: loggedUser.email,
            name: loggedUser.displayName,
            image: loggedUser.photoURL,
            role: "student",
          };
          fetch("https://summer-camp-school-server-jkjoy99.vercel.app/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(addUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
              }
            });
  
          // console.log(loggedUser);
          navigate(from, { replace: true });
        })
        .catch((error) => {
          console.log(error.message);
        });
    };
           

    return (

        <>
        <Helmet>
        <title>Music Instrument | Login</title>
      </Helmet>
        <div className="relative">
          <img
            className="absolute inset-0 object-cover w-full h-full"
            src="https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
          <div className="hero bg py-16 relative bg-gray-950 bg-opacity-75 text-white">
            <div className="md:w-full lg:w-[30%] ">
              <div className="card shadow-2xl btn-shadow">
                <form onSubmit={handelLogin} className="card-body">
                  <div className="form-control text-black">
                    <label className="label">
                      <span className="label-text text-white">Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="email"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control text-black">
                    <label className="label">
                      <span className="label-text text-white">Password</span>
                    </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      className="input input-bordered"
                    />
                    <label className="label">
                      <a
                        href="#"
                        className="label-text-alt link link-hover text-white"
                      >
                        Forgot password?
                      </a>
                    </label>
                  </div>
                  <div className="form-control text-black mt-6">
                    <input
                      className="btn btn-primary uppercase"
                      type="submit"
                      value="Login"
                    />
                  </div>
                  <div className="divider">OR</div>
                  <p className="text-center text-xl">
                    <small>
                      New Here?{" "}
                      <Link className="text-red-600" to="/signup">
                        Create an Account
                      </Link>
                    </small>
                  </p>
                  <div className="text-center">
                    <button
                      onClick={logInWithGoogle}
                      className="btn btn-circle btn-outline text-2xl bg-white"
                    >
                      G
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default Login;