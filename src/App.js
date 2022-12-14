import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import CartProvider from "./Providers/CartProvider";
import routes from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "./Providers/AuthProvider";
import FavProvider from "./Providers/FavProvider";

function App() {
  return (
    <AuthProvider>
      <FavProvider>
        <CartProvider>
          <ToastContainer />
          <Layout>
            <Routes>
              {routes.map((route) => {
                return <Route key={Date.now()} {...route} />;
              })}
            </Routes>
          </Layout>
        </CartProvider>
      </FavProvider>
    </AuthProvider>
  );
}

export default App;
