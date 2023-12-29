import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ProductCategory from "../Pages/ProductCategory/ProductCategory";
import ProductsDetails from "../Pages/ProductsDetails/ProductsDetails";
import Description from "../Pages/ProductsDetails/Description/Description";
import Reviews from "../Pages/ProductsDetails/Reviews/Reviews";
import ShippingAndDelivery from "../Pages/ProductsDetails/ShippingAndDelivery/ShippingAndDelivery";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allProduct/:category",
        element: <ProductCategory></ProductCategory>,
        loader: ({ params }) =>
          fetch(`https://y-rubelrk.vercel.app/allProduct/${params.category}`),
      },
      {
        path: "/productDetails",
        element: <ProductsDetails></ProductsDetails>,
      },
      {
        path: "/productDetails/:id",
        element: <ProductsDetails></ProductsDetails>,
        // loader: ({ params }) =>
        //   fetch(`https://y-rubelrk.vercel.app/productDetails/${params.id}`),
        children: [
          {
            path: "/productDetails/:id",
            element: <Description></Description>,
            // loader: ({ params }) =>
            //   fetch(`https://y-rubelrk.vercel.app/productDetails/${params.id}`),
          },
          {
            path: "/productDetails/:id/reviews",
            element: <Reviews></Reviews>,
            // loader: ({ params }) =>
            //   fetch(`https://y-rubelrk.vercel.app/productDetails/${params.id}`),
          },
          {
            path: "/productDetails/:id/shipping",
            element: <ShippingAndDelivery></ShippingAndDelivery>,
          },
        ],
      },
    ],
  },

  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
