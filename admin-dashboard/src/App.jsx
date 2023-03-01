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

const navigations = [
    {
        name: "Dashboard",
        icon: "src/assets/dashboard.png"
    },
    {
        name: "Customers",
        icon: "src/assets/customers.png"
    },
    {
        name: "Orders",
        icon: "src/assets/orders.png"
    },
    {
        name: "Campaigns",
        icon: "src/assets/campaign.png"
    },
    {
        name: "Messages",
        icon: "src/assets/messages.png"
    }
];

const NavBar = () => {
  return (
    <div className="bg-indigo-900 w-64">
        <div className="bg-indigo-800">
            <div className="uppercase text-gray-200 p-5 font-bold text-xl">Super Corps</div>
        </div>
        <div>
            <div className="p-5 text-gray-200 uppercase text-xs font-bold">PAGES</div>
            <div className="flex flex-col">
                {navigations.map(nav => {
                    return (
                        <div className="flex mt-2 m-5">
                            <div>
                                <img className="h-5 w-5" src={nav.icon} alt="icon"/>
                            </div>
                            <div className="mx-3 text-sm text-gray-100">{nav.name}</div>
                        </div>
                    );
                })}
            </div>
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
