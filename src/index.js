import React from "react";
import ReactRoot from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Counters from "./components/counters";

// const container = document.getElementById("root");
// const root = CreateRoot(container);
// root.render(<Counter/>);

ReactRoot.render(<Counters/>, document.getElementById("root"));