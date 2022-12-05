import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import CartProvider from "./Providers/CartProvider";
import routes from "./routes";

function App() {
  return (
    <CartProvider>
      <Layout>
        <Routes>
          {routes.map((route) => {
            return <Route key={Date.now()} {...route} />;
          })}
        </Routes>
      </Layout>
    </CartProvider>
  );
}

export default App;
