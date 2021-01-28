import React from "react";
// import { Router } from "@reach/router";
import NavBar from "./NavBar";
import Homepage from "./Homepage";
import Footer from "./Footer";

function Application() {
    return (
        <div>
            <NavBar />
            <Homepage />
            <Footer />
        </div>
    );
}

export default Application;