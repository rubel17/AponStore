import React, { useContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate, useLocation, Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
// import useTitle from "../../hooks/useTitle";
// import useToken from "../../hooks/useToken";

const Login = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // useTitle("Login");
  const [error, setError] = useState("");
  const { user, loading, setLoading, logInUser, googleSignIn } =
    useContext(AuthContext);
  const [loginEmail, setLoginEmail] = useState();
  // const [token] = useToken(loginEmail);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // if (token) {
  //   navigate(from, { replace: true });
  // }

  if (loading) {
    return (
      <div className="text-center m-56">
        <button className="btn btn-square loading"></button>
      </div>
    );
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    logInUser(email, password)
      .then((result) => {
        toast.success("Login Successful");
        const user = result.user;
        setLoginEmail(user.email);
        setError("");
        form.reset();
      })
      .catch((err) => {
        setLoading(false);
        console.error(err.message);
        setError(`Email or Password don't Match. ${err.message} `);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        const user = res.user;
        const { displayName, email } = user;
        // saveUser(displayName, email);
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
      });
  };

  // const saveUser = (name, email) => {
  //   const user = { name, email };
  //   fetch(`${process.env.REACT_APP_API}/users`, {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(user),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setLoginEmail(email);
  //       toast.success("Login Successful");
  //     });
  // };

  return (
    <div>
      {user ? (
        <Navigate to="/"></Navigate>
      ) : (
        <div className="hero bg-white AP-container">
          <div className="hero-content flex-col lg:flex-row-reverse my-5 xl:my-10">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <p className="py-6">
                Login Your valid Account with Your Email address and Password
              </p>
              <button onClick={handleGoogleSignIn} className="btn btn-accent">
                Google Sign In
              </button>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-white">
              <form onSubmit={handleSubmit} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered bg-white focus:outline-none"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    required
                    name="password"
                    type="password"
                    placeholder="password"
                    className="input input-bordered bg-white focus:outline-none"
                  />
                  <label className="label">
                    <Link to="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </Link>
                  </label>
                </div>
                <Link
                  to="/register"
                  className="text-error label-text-alt link link-hover"
                >
                  Create a new account?
                </Link>

                <div className="form-control mt-6">
                  <div className="text-error mb-4">{error}</div>
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
              <Toaster></Toaster>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
