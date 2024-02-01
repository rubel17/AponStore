import React, { useContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate, useLocation, Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
// import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
// import useTitle from "../../hooks/useTitle";
// import useToken from "../../hooks/useToken";

const Register = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // useTitle("Register");
  const {
    user,
    loading,
    setLoading,
    createUser,
    googleSignIn,
    updateUserProfile,
  } = useContext(AuthContext);
  // const { data: MDSaveUser = [], refetch } = useQuery({
  //   queryKey: [`users/email`],
  //   queryFn: () =>
  //     fetch(`https://apon-store-server-rubelrk.vercel.app/users/${user?.email}`).then((res) =>
  //       res.json()
  //     ),
  // });
  // refetch();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [error, setError] = useState("");
  const [emailData, setEmailData] = useState("");
  // const [token] = useToken(emailData);
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

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        const user = res.user;
        console.log(user);
        const { displayName, email } = user;
        saveUser(displayName, email);
        toast.success("Login Successful");
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const address = form.address.value;
    const phoneNumber = form.number.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        toast.success("Registration Successful");
        handleUpdateUserProfile(name);
        saveUser(name, address, email, phoneNumber);
        setError("");
      })
      .catch((err) => {
        setLoading(false);
        console.error(err.message);
        setError(`${err.message} Email or Password has wrong Creating.`);
      });
  };

  const handleUpdateUserProfile = (name) => {
    const profile = {
      displayName: name,
    };
    updateUserProfile(profile)
      .then((res) => {})
      .catch((err) => console.error(err));
  };
  const saveUser = (name, address, email, phoneNumber) => {
    const user = { name, address, email, phoneNumber };
    fetch(`https://apon-store-server-rubelrk.vercel.app/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Login Successful");
        setEmailData(email);
      });
  };

  return (
    <div>
      {user ? (
        <Navigate to="/"></Navigate>
      ) : (
        <div className="hero bg-white AP-container">
          <div className="hero-content flex-col lg:flex-row-reverse my-5 xl:my-10">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Register now!</h1>
              <p className="py-6">
                Register Your valid Email address and Password
              </p>
              <p className="pb-6 text-start text-sm xl:w-80">
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our privacy policy.
              </p>

              <button
                onClick={handleGoogleSignIn}
                className="btn btn-secondary"
              >
                Google Sign In
              </button>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-white">
              <form onSubmit={handleSubmit} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    required
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="input input-bordered bg-white focus:outline-none"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Phone Number</span>
                  </label>
                  <input
                    required
                    name="number"
                    type="text"
                    placeholder="Your number"
                    className="input input-bordered  bg-white focus:outline-none"
                  />
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="input input-bordered  bg-white focus:outline-none"
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
                    placeholder="Your Password"
                    className="input input-bordered  bg-white focus:outline-none"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Address</span>
                  </label>
                  <input
                    required
                    type="text"
                    name="address"
                    placeholder="(Only DOHS)Your House-0,Road-0 and Avenue-0"
                    className="input input-bordered bg-white focus:outline-none text-xs"
                  />
                </div>
                <Link
                  to="/login"
                  className="text-error label-text-alt link link-hover mt-4 text-start text-base"
                >
                  have an account?
                </Link>

                <div className="form-control mt-2">
                  <div className="text-error mb-4">{error}</div>

                  <button className="btn btn-primary text-white">
                    Registration
                  </button>
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

export default Register;
