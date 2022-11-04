import React from "react";
import "./App.scss";
import Login from "./app/components/auth/Login";
import Layout from "./app/components/layout/Layout";

function App() {
  return (
    <div className="col col-12">
      <Layout>
        <Login />
      </Layout>
    </div>
  );
}

export default App;
