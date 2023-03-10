import React from "react";
import './App.css'
import SideNavBar from "./NavBar.jsx";
import TopNavBar from "./TopNavBar.jsx";
import Banner from "./Banner.jsx";
import Cards from "./Cards.jsx";

// flex-1: grow/shrink according to the width
function App() {

  return (
      <body className="bg-green-200">
        <div className="flex">
            <SideNavBar />
            <div className="flex-1">
                <TopNavBar />
                <Banner />
                <Cards />
            </div>
        </div>
      </body>
  )
}

export default App
