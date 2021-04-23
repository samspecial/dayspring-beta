import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import ProductPage from "./components/pages/ProductPage";
import AboutPage from "./components/pages/AboutPage";
import NotFound from "./components/pages/NotFound";

export default function App({ hideLoader }) {
  useEffect(() => {
    hideLoader();
  });
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/our-products" component={ProductPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={Contact} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

App.propTypes = {
  hideLoader: PropTypes.func.isRequired,
};
