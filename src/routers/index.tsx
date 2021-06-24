import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from '../pages/Home';
import { NewRoom } from '../pages/NewRoom';
import { Room } from '../pages/Room';
import { Rooms } from '../pages/Rooms';
import { AdminRoom } from '../pages/AdminRoom';
import { NotFound } from '../pages/NotFound';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/rooms" exact component={Rooms} />
        <Route path="/rooms/new" exact component={NewRoom} />
        <Route path="/rooms/:id" component={Room} />
        <Route path="/admin/rooms/:id" component={AdminRoom} />
        <Route path="*" component={NotFound} />
      </Switch> 
    </BrowserRouter>
  )
}