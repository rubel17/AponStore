import React, { useContext } from "react";
import "./MyAccount.css";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import myAccount from "../../assets/image/premium product bg.png";
const MyAccount = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <>
      <header className="">
        <div className="relative">
          <img className="w-screen h-64 -mt-2" src={myAccount} alt="" />
          <div
            style={{
              left: "40%",
              top: "35%",
            }}
            className="absolute text-white"
          >
            <h1 className="text-3xl xl:text-6xl font-semibold">My account</h1>
            <p className=" text-sm xl:font-medium">HOME / MY ACCOUNT</p>
          </div>
        </div>
      </header>
      {user && (
        <div className="flex AP-container">
          {/* Sidebar */}
          <div className="w-60 xl:w-80 border-e-2 pr-2 xl:pr-8">
            <h3 className="font-medium xl:text-lg border-b-2 py-4 text-start">
              <span className="ml-3"> MY ACCOUNT</span>
            </h3>

            {/* only user View */}

            <div>
              <Link to="/my-account">
                <p className="text-start font-semibold text-base hover:bg-gray-100 active:bg-gray-100 py-3 mt-3">
                  <span className="ml-3"> Dashboard</span>
                </p>
              </Link>
              <Link to="/my-account/orders">
                <p className="text-start font-semibold text-base hover:bg-gray-100 py-3">
                  <span className="ml-3"> Orders</span>
                </p>
              </Link>
              <Link to="/my-account/accountDetails">
                <p className="text-start font-semibold text-base hover:bg-gray-100 py-3">
                  <span className="ml-3"> Account details</span>
                </p>
              </Link>
              <Link to="/my-account/wishlist">
                <p className="text-start font-semibold text-base hover:bg-gray-100 py-3">
                  <span className="ml-3"> Wishlist</span>
                </p>
              </Link>
              <Link to="/" onClick={handleSignOut}>
                <p className="text-start font-semibold text-base hover:bg-gray-100 py-3">
                  <span className="ml-3"> Logout</span>
                </p>
              </Link>
            </div>
          </div>
          {/* Main Content */}
          <Outlet></Outlet>
        </div>
      )}
    </>
  );
};

export default MyAccount;
