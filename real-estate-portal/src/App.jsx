import React from "react";
import './App.css'

//mx-auto: keep equal margins on the x axis
// px-4: padding of 4 on the x axis
// max-w: max width of some column size
// h-#: some height
// w-#: some width
// space-x-1: give space of children in flexbox


function App() {

  return (
      <nav className="bg-white shadow-lg">
          <div className="max-w-6xl mx-auto px-4">
              <div className="flex justify-between">
                  <div className="flex space-x-7">
                      <a href="#" className="flex item-center py-4 px-2">
                          <img className="h-8 w-8" src="src/assets/house.png" alt="" />
                          <span className="font-semibold text-gray-500 text-lg">Prime Properties</span>
                      </a>
                  </div>
                  <div className="flex space-x-1">
                      <a href="" className="py-4 px-2 border-green-500 border-b-4 text-green-500 font-semibold">Home</a>
                      <a href="" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-200">Service</a>
                      <a href="" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-200">About</a>
                      <a href="" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-200">Contact</a>
                  </div>
              </div>
          </div>
      </nav>
  )
}

export default App
