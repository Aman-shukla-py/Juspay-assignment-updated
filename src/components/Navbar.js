import React from "react";
import  "./NavbarStyle.css";


function Navbar()
{
    return (
        <div className="navbar">
            <button>
                <img style={{width:"88px", height:"36px", fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif", display:"inline",fontSize: "0.75rem",fontWeight: "bold", padding:"0px 12px 0px 12px", verticalAlign:"middle", }} src="https://scratch.mit.edu/static/assets/1e9652bec24bcaacf5285be19746a750.svg"></img>
            </button>
            <button className="Navbar-button-file">
                File
            </button>
            <button className="Navbar-button-edit">
                Edit
            </button>
            <button className="Navbar-button-tut">
                Tutorials
            </button>
            <button className="Navbar-button-join">
                Join Scratch
            </button>
            <button className="Navbar-button-signin">
                Sign In
            </button>
        </div>
    ) ;     
}
export default Navbar;

