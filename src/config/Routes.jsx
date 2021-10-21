import React from 'react';
import HomePage from '../pages/HomePage';
import { Switch, Route } from 'react-router-dom';
import About from '../pages/About';

import Work from '../pages/Work';
import Wayfarer from '../pages/Wayfarer';
import Claude from '../pages/Claude';
import Lizzie from '../pages/Lizzie';
import OfTheEarth from '../pages/OfTheEarth';
import EnGayged from '../pages/EnGayged';
import Contact from '../pages/Contact';

function Routes(props){
  
    return(
     <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/work' component={Work} />
        <Route exact path='/wayfarer' component={Wayfarer} />
        <Route exact path='/claude9' component={Claude} />
        <Route exact path='/lizzie' component={Lizzie} />
        <Route exact path='/oftheearth' component={OfTheEarth} />
        <Route exact path='/engayged' component={EnGayged} />
      </Switch>
        
    )
}

export default Routes;