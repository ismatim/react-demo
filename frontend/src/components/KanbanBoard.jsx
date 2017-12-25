import React, { Component } from 'react';
import List from './List';

class KanbanBoard extends Component {
  render(){

    if (!this.props.cards || !this.props.cards.length){
      console.log("cards " + typeof(this.props.cards));
      return(
        <div className="app">
          <h2> No Hay Datos </h2>
          </div>
      );
    }

    return (

     <div className="app">
      <List id='todo' title="To Do" cards={
        this.props.cards.filter((card) => card.status === "todo")
      } />
      <List id='in-progress' title="In Progress" cards={
        this.props.cards.filter((card) => card.status === "in-progress")
      } />
      <List id='done' title='Done' cards={
        this.props.cards.filter((card) => card.status === "done")
      } />
      </div> );
 }
}

export default KanbanBoard;

