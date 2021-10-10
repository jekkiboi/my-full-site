import React from 'react';
import HomePage from '../pages/HomePage';
import Websites from '../pages/Websites';
import Design from '../pages/Design';
import NotFound from '../pages/NotFound';
import AboutMe from '../pages/AboutMe';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


function Routes(props){
  
    return(
        <BrowserRouter>
        <Switch>

        <Route exact path='/' component={HomePage}/>
           
        <Route path='/websites' component={Websites} />

        <Route exact path='/design' component={Design}/>

        <Route exact path='/aboutme' component={AboutMe} />

        <Route path="*" component={NotFound}/>

      </Switch>
      </BrowserRouter>
    )
}

export default Routes;