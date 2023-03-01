import React from "react";
import './App.css'
import Banner from "./Banner.jsx";
import Cards from "./Cards.jsx";
import SiteBanner from "./SiteBanner.jsx";
import Locations from "./Locations.jsx";
import CommissionsBanner from "./CommissionsBanner.jsx";
import Testimonials from "./Testimonials.jsx";
import ContactUs from "./ContactUs.jsx";
import Footer from "./Footer.jsx";

//mx-auto: keep equal margins on the x axis
// px-4: padding of 4 on the x axis
// max-w: max width of some column size
// h-#: some height
// w-#: some width
// space-x-1: give space of children in flexbox

const NavBar = () => {
  return (
    <div className="bg-indigo-900 w-64">
        <div className="bg-indigo-800">
            <div className="uppercase text-gray-200 p-5 font-bold text-xl">Super Corps</div>
        </div>
    </div>
  );
};


function App() {

  return (
      <body className="bg-green-200">
        <div className="flex">
            <NavBar />
            <div>
                Main content area
            </div>
        </div>
      </body>
  )
}

export default App
