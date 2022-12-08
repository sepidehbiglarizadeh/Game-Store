import CartPage from "./pages/CartPage";
import FavouritesPage from "./pages/FavouritesPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import SignupPage from "./pages/SignupPage";
import StorePage from "./pages/StorePage";

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/store", element: <StorePage /> },
  { path: "/cart", element: <CartPage /> },
  { path: "/favourites", element: <FavouritesPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/signup", element: <SignupPage /> },
  { path: "/profile", element: <ProfilePage /> },
];

export default routes;
