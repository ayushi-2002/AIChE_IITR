import {BrowserRouter as Router,Route } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Blogs from "./components/Blogs/Blogs.jsx";

import Team from "./components/Team/Team.jsx";

import Activities from "./components/Activities/Activities.jsx";


import './index.css';


function App(){
  return <Router>
         <Route exact path = "/" component ={Home} />
         <Route exact path = "/Blogs" component ={Blogs} />
         <Route exact path = "/Activities" component ={Activities} />         
         <Route exact path = "/Team" component ={Team} />
        </Router>
}
export default App;



