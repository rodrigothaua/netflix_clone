import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Company from './components/pages/Company';
import NewProject from './components/pages/NewProject';

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Home }  path="/" exact />
           <Route component = { Contact }  path="/contato" />
           <Route component = { Company }  path="/empresa" />
           <Route component = { NewProject }  path="/novoprojeto" />
       </BrowserRouter>
   )
}

export default Routes;