import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const AccountDetails = () => {
  const { user } = useContext(AuthContext);
  const { data: MDBuser = [] } = useQuery({
    queryKey: [`MDuser`],
    queryFn: () =>
      fetch(
        ` https://apon-store-server-rubelrk.vercel.app/users/${user?.email}`
      ).then((res) => res.json()),
  });
  return (
    <div className="w-52 md:w-11/12 mt-8">
      <div className="px-8 rounded  w-full">
        <form className="mb-10">
          <div className="mb-4">
            <div className="md:flex md:mr-2">
              <div className="w-full">
                <label className="block text-sm font-medium text-gray-600 text-left">
                  First Name <span className="text-orange-800">*</span>
                </label>
                <input
                  defaultValue={user?.displayName || MDBuser?.name}
                  id="name"
                  type="text"
                  className="mt-1 p-2 w-full border bg-white"
                  placeholder="First Name"
                />
              </div>
              <div className="w-full">
                <label className="block text-sm font-medium text-gray-600 text-left md:ml-2">
                  Last Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="mt-1 md:ml-2 p-2 w-full border bg-white"
                  placeholder="Last Name"
                />
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600 text-start"
            >
              Display name <span className="text-orange-800">*</span>
            </label>
            <input
              defaultValue={user?.displayName || MDBuser?.name}
              id="email"
              type="email"
              className="mt-1 p-2 w-full border bg-white"
              placeholder="Display name"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600 text-start"
            >
              Email address <span className="text-orange-800">*</span>
            </label>
            <input
              defaultValue={user?.email || MDBuser?.email}
              id="email"
              type="email"
              className="mt-1 p-2 w-full border bg-white"
              placeholder="Email address"
            />
          </div>
        </form>

        <form className="md:w-10/12 mx-auto border p-5 mb-5">
          <h1 className="text-left -mt-9 font-bold text-xl mb-5">
            Password change
          </h1>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600 text-start"
            >
              Current password (leave blank to leave unchanged)
            </label>
            <input
              id="email"
              type="email"
              className="mt-1 p-2 w-full border bg-white"
              placeholder="Current password"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600 text-start"
            >
              New password (leave blank to leave unchanged)
            </label>
            <input
              id="email"
              type="email"
              className="mt-1 p-2 w-full border bg-white"
              placeholder="New password"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600 text-start"
            >
              Confirm new password
            </label>
            <input
              id="email"
              type="email"
              className="mt-1 p-2 w-full border bg-white"
              placeholder="Confirm new password"
            />
          </div>
          <Link className="bg-green-600 p-1 md:p-3 md:w-32 text-white hover:bg-green-700 flex ">
            <p className="text-sm"> SAVE</p>
            <span className="ml-1 text-sm">CHANGES</span>
          </Link>
        </form>
        <div className="my-10 md:flex justify-evenly">
          <div className="text-left">
            <div className="flex">
              <h1 className="md:text-2xl font-semibold">BILLING DETAILS</h1>
              <Link to="/my-account/accountDetails/billing">Edit</Link>
            </div>
            <p className="text-gray-300">Name</p>
            <p className="text-gray-300">Address</p>
            <p className="text-gray-300">Email</p>
            <p className="text-gray-300">Number</p>
          </div>
          <div className="text-left mt-5 md:mt-0">
            <div className="flex">
              <h1 className="md:text-2xl font-semibold"> SHIPPING DETAILS</h1>
              <Link to="/my-account/accountDetails/shipping">Edit</Link>
            </div>
            <p className="text-gray-300">Name</p>
            <p className="text-gray-300">Address</p>
            <p className="text-gray-300">Email</p>
            <p className="text-gray-300">Number</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
