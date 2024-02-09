import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Orders.css";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Orders = () => {
  const { user } = useContext(AuthContext);
  //Place Order call to MongoDB
  const { data: userOrder = [], refetch } = useQuery({
    queryKey: [`userOrder`],
    queryFn: () =>
      fetch(
        `https://apon-store-server-rubelrk.vercel.app/orders/${user?.email}`
      ).then((res) => res.json()),
  });
  refetch();
  return (
    <div>
      <div className="w-52 md:w-96 md:ml-6 lg:ml-0 lg:w-full">
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-left text-sm font-light">
                  <thead className="border-b font-medium dark:border-neutral-500">
                    <tr>
                      <th scope="col" className="px-6 md:px-8 xl:px-12 py-4">
                        ORDER
                      </th>
                      <th scope="col" className="px-6 md:px-8 xl:px-12 py-4">
                        DATE
                      </th>
                      <th scope="col" className="px-6 py-4">
                        STATUS
                      </th>
                      <th scope="col" className="px-6 py-4">
                        TOTAL
                      </th>
                      <th scope="col" className="px-6 md:px-8 xl:px-40 py-4">
                        ACTIONS
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {userOrder?.map((orderList, ids) => (
                      <tr
                        key={ids}
                        className="border-b dark:border-neutral-500"
                      >
                        <td className="flex items-center whitespace-nowrap px-6 md:px-8 xl:px-12 py-4 font-medium">
                          #{orderList?.orderNumber}
                        </td>
                        <td className="whitespace-nowrap px-6 md:px-8 xl:px-12 py-4 font-medium">
                          {orderList?.orderDate}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-green-700 font-bold ">
                          {orderList?.orderStatus}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-bold">
                          <span className="text-orange-900 mr-1">
                            {orderList?.FTotal}
                          </span>
                          for
                          <span className="text-orange-900 ml-1">
                            {orderList?.Product?.length}
                          </span>
                          <span className="ml-1"> items</span>
                        </td>
                        <td className="whitespace-nowrap px-6 md:px-8 xl:px-40 py-4 font-semibold text-orange-900">
                          <Link className="bg-green-700 text-white p-2">
                            VIEW
                          </Link>
                          <Link className="bg-green-700 text-white p-2 ml-2">
                            INVOICE
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
