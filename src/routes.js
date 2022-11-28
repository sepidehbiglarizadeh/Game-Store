import CartPage from "./components/pages/CartPage";
import FavouritesPage from "./components/pages/FavouritesPage";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import SignupPage from "./components/pages/SignupPage";
import StorePage from "./components/pages/StorePage";

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/store", element: <StorePage /> },
  { path: "/cart", element: <CartPage /> },
  { path: "/favourites", element: <FavouritesPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/signup", element: <SignupPage /> },
];

export default routes;
