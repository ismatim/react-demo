import axios from "axios";
import { map } from 'lodash';

const API_URL = 'http://localhost:3000/tasks';

export const getTickets = function(dispatch){

  let tickets = [];
  axios.get(API_URL).then((response) =>{
    console.log("response:" + JSON.stringify(response));
    map(response.data, (ticket) => {

      tickets.push( {
          'id' : ticket._id,
          'title': ticket.name,
          'description': ticket.name,
          'status': "todo",
          tasks:[]
      });
    });

    dispatch({type: "RECEIVED_TICKETS", cards: tickets});
  }).catch((e)=>{
    console.log(e);
  });

  console.log("tickets:" + JSON.stringify(tickets));
  return {cards:{}};
};

