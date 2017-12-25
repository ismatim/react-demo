import { applyMiddleware, createStore } from "redux";
import ticketReducer from "../reducers/ticketReducer";
import { createLogger }from "redux-logger"
import thunk from "redux-thunk";
import * as ticketActions from '../actions/ticketActions';

//If Redux Thunk middleware is enabled, any time you attempt to dispatch a function instead of an action object, the middleware will call that function with dispatch method itself as the first argument.
const middleware = applyMiddleware(thunk, createLogger({collapsed: true}));
const store = createStore(ticketReducer, middleware);

store.subscribe( () => {
  console.log("store changed:" + JSON.stringify(store.getState()));
})

store.dispatch((dispatch) => {

  dispatch({type: "GET_TICKETS", cards: {} });
  ticketActions.getTickets(dispatch);

});


export default store;

