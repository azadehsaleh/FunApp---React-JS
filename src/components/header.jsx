import React from "react";
import Navigation from "./navigation";
import 'bootstrap/dist/css/bootstrap.css';

const Header=()=>{
    return (
        <header className="navbar navbar-dark bg-dark">
            <a class="navbar-brand mb-0 h1 p-3" href="#">FUNapp</a>
            <Navigation />
        </header>
    )
}

export default Header;