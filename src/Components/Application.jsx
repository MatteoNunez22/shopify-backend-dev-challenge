import React from "react";
import { Router } from "@reach/router";
import Homepage from "./Homepage";
import Cars from "./Cars";
import Mountains from "./Mountains";
import Sea from "./Sea";

function Application() {
    return (
        <div>
            <Router>
                <Homepage path="/" />
                <Cars path="cars" />
                <Mountains path="mountains" />
                <Sea path="sea" />
            </Router>
        </div>
    );
}

export default Application;