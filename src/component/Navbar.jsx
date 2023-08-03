import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div className="fixed top-0 left-0 w-full list-none flex justify-center items-center gap-4 bg-orange-500 px-5 py-5">
            <Link to="main"><li>Main</li></Link>
            <Link to="input"><li>Input</li></Link>
            
            
            
        </div>
    )
}

export default Navbar