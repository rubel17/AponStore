import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ProductCategory from "../Pages/ProductCategory/ProductCategory";
import ProductsDetails from "../Pages/ProductsDetails/ProductsDetails";
import Description from "../Pages/ProductsDetails/Description/Description";
import Reviews from "../Pages/ProductsDetails/Reviews/Reviews";
import ShippingAndDelivery from "../Pages/ProductsDetails/ShippingAndDelivery/ShippingAndDelivery";
import ViewCart from "../Pages/ViewCart/ViewCart";
import CheckOut from "../Pages/CheckOut/CheckOut";
import MyAccount from "../Pages/MyAccount/MyAccount";
import Orders from "../Pages/MyAccount/Orders/Orders";
import AccountDetails from "../Pages/MyAccount/AccountDetails/AccountDetails";
import Wishlist from "../Pages/MyAccount/Wishlist/Wishlist";
import YourProfile from "../Pages/MyAccount/YourProfile/YourProfile";
import Billing from "../Pages/MyAccount/AccountDetails/Billing/Billing";
import Shipping from "../Pages/MyAccount/AccountDetails/Shipping/Shipping";
import About from "../Pages/Footer/About/About";
import ContactUs from "../Pages/Footer/ContactUs/ContactUs";
import TermsAndConditions from "../Pages/Footer/TermsAndConditions/TermsAndConditions";
import FAQ from "../Pages/Footer/FAQ/FAQ";
import Login from "../Pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import Register from "../Pages/Register/Register";
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
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/Shop/:categories",
        element: <ProductCategory></ProductCategory>,
        loader: ({ params }) =>
          fetch(
            `https://apon-store-server-rubelrk.vercel.app/Shop/${params.categories}`
          ),
      },
      {
        path: "/productDetails/:id",
        element: <ProductsDetails></ProductsDetails>,
        loader: ({ params }) =>
          fetch(
            `https://apon-store-server-rubelrk.vercel.app/productDetail/${params.id}`
          ),
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
      {
        path: "/viewCart",
        element: (
          <PrivateRoute>
            <ViewCart></ViewCart>
          </PrivateRoute>
        ),
      },
      {
        path: "/viewCart/checkOut",
        element: (
          <PrivateRoute>
            <CheckOut></CheckOut>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-account",
        element: <MyAccount></MyAccount>,
        children: [
          {
            path: "/my-account",
            element: <YourProfile></YourProfile>,
            // loader: ({ params }) =>
            //   fetch(`https://y-rubelrk.vercel.app/productDetails/${params.id}`),
          },
          {
            path: "/my-account/orders",
            element: <Orders></Orders>,
            // loader: ({ params }) =>
            //   fetch(`https://y-rubelrk.vercel.app/productDetails/${params.id}`),
          },
          {
            path: "/my-account/accountDetails",
            element: <AccountDetails></AccountDetails>,
            // loader: ({ params }) =>
            //   fetch(`https://y-rubelrk.vercel.app/productDetails/${params.id}`),
          },
          {
            path: "/my-account/accountDetails/billing",
            element: <Billing></Billing>,
          },
          {
            path: "/my-account/accountDetails/shipping",
            element: <Shipping></Shipping>,
          },
          {
            path: "/my-account/wishlist",
            element: <Wishlist></Wishlist>,
            // loader: ({ params }) =>
            //   fetch(`https://y-rubelrk.vercel.app/productDetails/${params.id}`),
          },
        ],
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact-us",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/terms-and-conditions",
        element: <TermsAndConditions></TermsAndConditions>,
      },
      {
        path: "/faq",
        element: <FAQ></FAQ>,
      },
    ],
  },

  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
