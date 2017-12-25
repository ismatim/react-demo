import React, { Component } from 'react';
import KanbanBoard from './KanbanBoard';
import { connect } from 'react-redux';

@connect((store) => {
  return {
    cards: store.cards
  }
})
class KanbanBoardContainer extends Component { 
  constructor(){
    super(...arguments);
    console.log('this.props.cards:' + JSON.stringify(this.props.cards));
  }

  addTask(cardId, taskName){

  }

  deleteTask(cardId, taskId, taskIndex){

  }

  toggleTask(cardId, taskId, taskIndex){

  }
  render() {

    return <KanbanBoard cards={this.props.cards} />
} }
export default KanbanBoardContainer;

