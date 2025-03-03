"use client";

import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./navigation/Header";
import SideNav from "./navigation/SideNav";
import Dashboard from "./components/Dashboard";
import About from "./components/About";

function App() {
  return (
    <>
      <Header/>
      <SideNav/>
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">          
            <Routes>                   
                <Route path="about" element={<About />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="/" element={<Home />}>
                  <Route index element={<Home />} />
                </Route>
            </Routes>
        </div>
      </div>

     

    </>
  );
}

export default App;
