import React from "react";

import Navbar from '../Navbar/Navbar.jsx';

import Footer from "../Footer/Footer.jsx";


export default class Activities extends React.Component{
    render(){
        return(
            <div>
            <Navbar active={"Activities"} />
            <br/>
            <br/>
            <h1 style = {{"height" : "250px"}}   className = "text-center">Coming Soon....</h1>
            <Footer/>
            </div>
        )
    }
}