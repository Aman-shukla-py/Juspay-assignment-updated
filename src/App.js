import React from "react";
import Sidebar from "./components/Sidebar";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";
import Navbar from "./components/Navbar";
import Code from "./components/Code";
import Footer from "./components/Footer";

export default function App() {

  return (
    <div>
    <Navbar></Navbar>
    <Code></Code>
    <div className="bg-blue-100 pt-6 font-sans" style={{padding:"0px"}}>
      <div className="h-screen overflow-hidden flex flex-row">
        <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
          <Sidebar/> 
          <MidArea/>
        </div>
        <div className="w-1/3 h-screen overflow-hidden flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
          <PreviewArea/>
        </div>
      </div>
    </div>
    <Footer></Footer>
    </div>
  );
}
