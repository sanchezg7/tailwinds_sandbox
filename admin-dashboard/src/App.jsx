import React from "react";
import './App.css'
import SideNavBar from "./NavBar.jsx";
import Banner from "./Banner.jsx";
import Cards from "./Cards.jsx";
import SiteBanner from "./SiteBanner.jsx";
import Locations from "./Locations.jsx";
import CommissionsBanner from "./CommissionsBanner.jsx";
import Testimonials from "./Testimonials.jsx";
import ContactUs from "./ContactUs.jsx";
import Footer from "./Footer.jsx";

// flex-1: grow/shrink according to the width

const TopNavBar = () => {
  return (
    <div className="flex bg-white px-2 py-0.5 h-18">
        <div className="flex items-center">
            <img className="w-10 h-10" src="src/assets/person.png" alt="person"/>
            <span className="block ml-2">First Last</span>
        </div>
        <div></div>
    </div>
  );
};
function App() {

  return (
      <body className="bg-green-200">
        <div className="flex">
            <SideNavBar />
            <div className="flex-1">
                <TopNavBar />
            </div>
        </div>
      </body>
  )
}

export default App
