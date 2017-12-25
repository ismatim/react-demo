import update from 'react-addons-update';
import * as ticketActions from '../actions/ticketActions';

const ticketReducer = (state={}, action) =>{

  switch (action.type){
    case "FETCH_TICKETS":
      break;
    case "GET_TICKETS":
      break;
    case "RECEIVED_TICKETS":
      console.log("REDUCER: RECEIVED_TICKETS:" + JSON.stringify(action.cards));
      return { 'cards': action.cards};
      break;
    default: console.log("NO ACTION SELECTED");
  }

  return state;
};

export default ticketReducer;

