import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import routes from "./routes";

function App() {
  return (
    <Layout>
      <Routes>
        {routes.map((route)=>{
          return <Route key={Date.now()} {...route} />
        })}
      </Routes>
    </Layout>
  );
}

export default App;
