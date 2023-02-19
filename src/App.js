import "./App.css";
import React from "react";
import { DataProvider } from "./dataContext";
import data from "./data";
import { Routes, Route } from "react-router-dom";

//pages
import Home from "./pages/Home/Home";
import Rent from "./pages/Rent/Rent";
import Sell from "./pages/Sell/Sell";
import Buy from "./pages/Buy/Buy";
import Error from "./pages/404/404";
import Auth from "./pages/Auth/Auth";

//components
import Navbar from "./layout/Navbar/Navbar";
import Footer from "./layout/Footer/Footer";

function App() {
  return (
    <DataProvider value={data}>
      <div className="App absolute h-[100%] flex flex-col">
        <Navbar />
        <div className="flex flex-col flex-1 justify-between w-[100vw]  overflow-scroll">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/rent" element={<Rent />} />
            <Route exact path="/sell" element={<Sell />} />
            <Route exact path="/buy" element={<Buy />} />
            <Route exact path="/auth/:type" element={<Auth />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </DataProvider>
  );
}

export default App;
