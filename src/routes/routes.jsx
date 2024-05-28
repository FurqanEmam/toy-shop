import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import AllToys from "../pages/AllToys/AllToys";
import ToysDetails from "../pages/ToysDetails/ToysDetails";
import Checkout from "../pages/Checkout/Checkout";
import Cart from "../pages/Cart/Cart";
import PrivateRoute from "./PrivateRoute";
import Blogs from "../pages/Blogs/Blogs";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AddToy from "../pages/AddToy/AddToy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/alltoys",
        element: <AllToys></AllToys>,
      },
      {
        path: "toysdetails/:id",
        element: (
          <PrivateRoute>
            <ToysDetails></ToysDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://toy-shop-server-production.up.railway.app/products/${params.id}`
          ),
      },
      {
        path: "cart",
        element: (
          <PrivateRoute>
            <Cart></Cart>
          </PrivateRoute>
        ),
      },
      {
        path: "/addtoy",
        element: (
          <PrivateRoute>
            <AddToy></AddToy>
          </PrivateRoute>
        ),
      },

      {
        path: "checkout/:id",
        element: <Checkout></Checkout>,
        loader: ({ params }) =>
          fetch(
            `https://toy-shop-server-production.up.railway.app/products/${params.id}`
          ),
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
