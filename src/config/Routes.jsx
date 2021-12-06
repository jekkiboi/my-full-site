import React from 'react';
import HomePage from '../pages/HomePage';
import { Switch, Route } from 'react-router-dom';
import About from '../pages/About';

import Work from '../pages/Work';
import Hscredit from '../pages/Hscredit';
import Lizzie from '../pages/Lizzie';
import Tamagotchi from '../pages/Tamagotchi';
import Contact from '../pages/Contact';

function Routes(props){
  
    return(
     <Switch>
        <Route exact path='/my-full-site' component={HomePage}/>
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/work' component={Work} />
        <Route exact path='/hscredit' component={Hscredit} />
        <Route exact path='/lizzie' component={Lizzie} />
        <Route exact path='/tamagotchi' component={Tamagotchi} />
      </Switch>
        
    )
}

export default Routes;