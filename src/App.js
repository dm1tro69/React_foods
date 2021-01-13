import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react'
import './index.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Category from "./pages/Category";
import Recipe from "./pages/Recipe";

function App() {
  return (
    <>
    <Router>
    <Header/>
    <main className="container content">
       <Switch>
         <Route exact path={'/'} component={Home}/>
         <Route path={'/about'} component={About}/>
         <Route path={'/contacts'} component={Contact}/>
         <Route path={'/meal/:id'} component={Recipe}/>
         <Route path={'/category/:name'} component={Category}/>
         <Route component={NotFound}/>
       </Switch>


    </main>

    <Footer/>
    </Router>
    </>
  );
}
export default App

