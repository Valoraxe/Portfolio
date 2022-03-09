import React from "react";
import ReactDOM from "react-dom";

const APPLICATION = (
    <div>
        <h1>This will be a portfolio</h1>
    </div>
)

const APPROOT = document.getElementById("app");

const RENDER = () => ReactDOM.render(APPLICATION, APPROOT);

RENDER();