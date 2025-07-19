import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Provider } from "react-redux";
import Home from "./pages/Home";
import ProductCard from "./components/ProductCard";
import ProductDetails from "./pages/ProductDetails";
import {store} from "./store/store"

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { path: "", Component: Home},
      { path: "products", Component: ProductCard },
      { path: "productDetails/:product_id", Component: ProductDetails },
    ],
  },
  { path: "signup", Component: Signup },
  { path: "login", Component: Login },
  // { path: "productDetails/:product_id", Component: ProductDetails },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
