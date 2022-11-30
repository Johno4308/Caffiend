import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose, faCoffee } from "@fortawesome/free-solid-svg-icons";
import Home from "./components/Home";
import Layout from "./components/Layout/index";
import Coffees from "./components/Coffees/index";
import CoffeeDesktopNavigation from "./components/CoffeeDesktopNavigation/index";
import CoffeeMobileNavigation from "./components/CoffeeMobileNavigation/index";
import Contact from "./components/Contact/index";
import Data from "../src/Data/coffeesData";
import Acknowledgements from "./components/Acknowledgements";

function App() {
  const [coffeeList, setCoffeeList] = useState(Data);
  const [openList, setOpenList] = useState(false);

  const coffeHambugerIcon = (
    <FontAwesomeIcon
      icon={faBars}
      color="#684028"
      className="coffeehamburger"
      onClick={() => setOpenList(!openList)}
    />
  );

  const coffeesIcon = (
    <FontAwesomeIcon icon={faCoffee} color="#684028" className="coffeeIcon" />
  );

  const closeIcon1 = (
    <FontAwesomeIcon
      icon={faClose}
      color="#684028"
      className="coffeehamburger"
      onClick={() => setOpenList(!openList)}
    />
  );

  function toggle(idx) {
    setCoffeeList((listItems) => {
      const newArray = [];
      for (let i = 0; i < listItems.length; i++) {
        const listItem = listItems[i];
        if (listItem.id === idx) {
          newArray.unshift(listItem);
        } else {
          newArray.push(listItem);
        }
      }
      return newArray;
    });
  }

  const Coffee = coffeeList.map((data) => {
    for (let x = 0; (x = 1); x++) {
      return (
        <Route
          path="/coffee"
          key={data}
          element={<Coffees key={data.id} data={data} />}
        />
      );
    }
  });

  function closeMenu() {
    setOpenList(!openList);
  }

  const CoffeeList = Data.map((data1) => {
    return (
      <CoffeeMobileNavigation
        key={data1.id}
        data={data1}
        toggle={() => toggle(data1.id)}
        close={() => closeMenu()}
      />
    );
  });

  const DesktopNav = Data.map((data1) => (
    <CoffeeDesktopNavigation
      key={data1.id}
      data={data1}
      toggle={() => toggle(data1.id)}
    />
  ));

  const [showBurger, setShowBurger] = useState(true);

  function handleClick() {
    setShowBurger(false);
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout onClick={() => handleClick()} />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/acknowledge" element={<Acknowledgements />} />
          {Coffee}
        </Route>
      </Routes>
      <div>
        <div
          id="coffee-ham-div"
          style={{ display: showBurger ? "flex" : "none" }}
        >
          <p>other </p>
          {coffeesIcon}
          {openList ? closeIcon1 : coffeHambugerIcon}
        </div>
        {openList && CoffeeList}
      </div>
      {DesktopNav}
    </>
  );
}

export default App;

//onClick={() => handleClick()}
