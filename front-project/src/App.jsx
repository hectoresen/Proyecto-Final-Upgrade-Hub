import {
  Accessories,
  ManClothesPage,
  ManShoesPage,
  WomanClothesPage,
  WomenShoesPage,
  CartPage,
  Access,
  Profile,
} from "./pages";
import {
  Footer,
  Header,
  PrivateRoute,
  Chat,
  Cookies,
  AdminSettings,
} from "./components";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../src/Contexts/ThemeContext";
import { connect } from "react-redux";
import Home from "./pages/Home/Home";
import LanguageSelector from "./components/LanguageSelector/LanguageSelector";
import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import WorkwithUS from "./pages/WorkwithUs/WorkwithUS";

import "./App.scss";
import Navbar from "./components/Header/Navbar/Navbar";
import { checkUserSession } from "./redux/actions/authActions";
import Map from "./components/GoogleMaps/Map";
import PrivateRouteAdmin from "./components/PrivateRouteAdmin/PrivateRouteAdmin";

function App({ user, error, dispatch }) {
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);

  //CART
  const buyProducts = localStorage.getItem("products")
    ? JSON.parse(localStorage.getItem("products"))
    : [];
  const [cart, setCart] = useState([]);

  //CheckSession
  useEffect(() => {
    dispatch(checkUserSession());
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="App"
      style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
    >
      <Header />
      <Navbar user={user} />
      <Cookies />
      <Routes>
        <Route path="/">
          <Route path="/" element={<Home />} />
          <Route
            path="/accessories"
            element={<Accessories cart={cart} setCart={setCart} />}
          />
          <Route
            path="/man"
            element={<ManClothesPage cart={cart} setCart={setCart} />}
          />
          <Route
            path="/manshoes"
            element={<ManShoesPage cart={cart} setCart={setCart} />}
          />
          <Route
            path="/women"
            element={<WomanClothesPage cart={cart} setCart={setCart} />}
          />
          <Route
            path="/womenshoes"
            element={<WomenShoesPage cart={cart} setCart={setCart} />}
          />
          <Route
            path="/cart"
            element={<CartPage cart={cart} setCart={setCart} />}
          />
          <Route path="/access" element={<Access />} />
          <Route
            path="/profile"
            element={<PrivateRoute component={<Profile />} />}
          >
            {" "}
          </Route>
          <Route path="/work" element={<WorkwithUS />} />
          <Route
            path="/admin"
            element={
              <PrivateRouteAdmin user={user} component={<AdminSettings />} />
            }
          >
            {" "}
          </Route>
        </Route>
      </Routes>
      <Chat />
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
  error: state.auth.error,
});

export default connect(mapStateToProps)(App);
