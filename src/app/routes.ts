import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import ProductListing from "./pages/ProductListing";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ProfilePage from "./pages/ProfilePage";
import { Root } from "./pages/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "search",
        Component: ProductListing,
      },
      {
        path: "cart",
        Component: CartPage,
      },
      {
        path: "checkout",
        Component: CheckoutPage,
      },
      {
        path: "profile",
        Component: ProfilePage,
        children: [
          { path: "purchases", Component: ProfilePage },
          { path: "settings", Component: ProfilePage },
        ]
      },
    ],
  },
]);
