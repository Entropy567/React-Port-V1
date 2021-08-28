import React from 'react';
import ReactDOM from 'react-dom';
import Home from "./Home.jsx";
import About from "./About.jsx";
import Proj from "./Projects.jsx";
import Contact from "./Contact.jsx";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
ReactDOM.render(
<Router>
<div>
<Switch>
<Route path ="/" exact component={Home}/>
<Route path ="/about" component={About}/>
<Route path="/projects" component={Proj}/>
<Route path="/contact" component={Contact}/>
</Switch>
</div>
</Router>
,
  document.getElementById('root')
);
