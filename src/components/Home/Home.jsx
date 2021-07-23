import React from "react";
import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";


import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CarouselComponent from "./carousel.component.jsx";
import Aboutus from "./aboutus.jsx";


// import Team from "../Team/Team.jsx";
export default class Home extends React.Component{
    render(){
        return(
            <div className = "Home">
                <Navbar active = {"Home"}/>
                <CarouselComponent/>
                <Aboutus/>
                <Footer/>
            </div>
        )
    }
}