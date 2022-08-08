import React from "react";
import NavBar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Cardholder from "./cardsholder.jsx";
import Footer from "./footer.jsx";


//create your first component
const Home = ()=>{
	return <div className="container-fluid"><NavBar/><Jumbotron/><Cardholder/><Footer/></div>
}

export default Home;
