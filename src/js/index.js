//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import NavBar from "./component/navbar.jsx";
import Jumbotron from "./component/jumbotron.jsx";
import Cardholder from "./component/cardsholder.jsx";
import Footer from "./component/footer.jsx";


//render your react application
ReactDOM.render([<NavBar />,<Jumbotron />,<Cardholder />,<Footer/>], document.querySelector("#app"));
