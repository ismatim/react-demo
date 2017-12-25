import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import App from './app';
import About from './components/About';
import Kanban from './components/KanbanBoard';
import KanbanBoardContainer from './components/KanbanBoardContainer';
import 'styles/index.scss';

const Routes = () => (
  <Router>
  <div>
  <Route exact path="/" component={App}/>
  <Route path="/about" component={About}/>
  <Route path="/board" component={KanbanBoardContainer}/>
  </div>
  </Router>
);

export default Routes;
