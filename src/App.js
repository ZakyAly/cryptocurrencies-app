import React from "react";
import { Switch, Route } from "react-router-dom";
import { Layout } from "antd";

import "./App.css";

import {
  Navbar,
  Homepage,
  Exchanges,
  Cryptocurrencies,
  CryptoDetails,
  News,
  Footer,
} from "./components/index";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Switch>
              <Route exact path="/">
                <Homepage />
              </Route>
              <Route exact path="/exchanges">
                <Exchanges />
              </Route>
              <Route exact path="/cryptocurrencies">
                <Cryptocurrencies />
              </Route>
              <Route exact path="/crypto/:coinId">
                <CryptoDetails />
              </Route>
              <Route exact path="/news">
                <News />
              </Route>
            </Switch>
          </div>
        </Layout>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
