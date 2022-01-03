import React, { Component } from 'react'

import Contact_us_Modal from "../Contact_us_modal/Contact_us_modal.jsx";



var $ = window.$;

class NavigationBar extends Component {

    render() {
        const routes = [
            "Home",
            "Blogs",
            "Activities",
            "Team"
        ]

        return (
            <div className="Navbar">
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
                    <a className="navbar-brand" href="/"
                    >
                        <img
                            alt=""
                            src={`../aiche_logo.png`}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                    &nbsp;AIChE IIT Roorkee </a
                    >
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto" >
                            {routes.map(r => {
                                if (this.props.active == r) {
                                    return (
                                        <li className="nav-item active">
                                            {r != "Home" && <a class="nav-link" href={"/" + r}>{r}</a>}
                                            {r == "Home" && <a class="nav-link" href={"/"}>{r}</a>}
                                        </li>
                                    )
                                }
                                else {
                                    return (
                                        <li className="nav-item">
                                        {r != "Home" && <a class="nav-link" href={"/" + r}>{r}</a>}
                                        {r == "Home" && <a class="nav-link" href={"/"}>{r}</a>}
                                        </li>
                                    )
                                }
                            })}
                            <a style = {{"color" : "rgb(156 148 148)", "marginTop" : "9px"}} href="#myModal" role="button" data-toggle="modal">Contact Us</a>
                        </ul>
                    </div>
                </nav>
                <Contact_us_Modal/>
            </div>
        )
    }
}


export default NavigationBar
