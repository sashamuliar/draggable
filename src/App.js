import React, { Component } from 'react';

import './App.css';

let a = undefined;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dragged: undefined
    };
  }


  dragStart = e => this.setState({dragged: e.currentTarget});

  onDrop = e => {
    e.preventDefault();
    let el = this.state.dragged;
    let current = this.returnParent(e.target, 'droppableZone');
    let dragParrent = el.parentElement;
    let dropChild = current.children[0];
    this.mountNode(current, el);
    this.mountNode(dragParrent, dropChild);
    this.hideDroppableZone(current);
  }

  onDrag = e => {
    e.preventDefault();
    let el = this.returnParent(e.target, 'droppableZone');
    this.showDroppableZone(el);
  }

  onLeave = e => {
    e.preventDefault();
    let current = this.returnParent(e.target, 'droppableZone')
    this.hideDroppableZone(current);
  }

  showDroppableZone = el => {
    el.style.backgroundColor = "rgba(98, 163, 49, .3)";
    el.style.borderColor = "green";
  }

  hideDroppableZone = el => {
    el.style.backgroundColor = "rgba(123,123,123,0.5)";
    el.style.borderColor = "rgba(255,255,255,0)";
  } 

  mountNode = (dropEl, dragEl) => dropEl.appendChild(dragEl);

  returnParent = (el, parentClass) => {
    while (!el.className.includes(parentClass)){
      el = el.parentElement
    }
    return el
  }

  render() {
    return (
      <div className="App">
        <ul>
          <div className="droppableZone" onDragOver={this.onDrag} onDragLeave={this.onLeave} onDrop={this.onDrop }>
            <div className="draggable" onDragStart={this.dragStart} onDragEnd={this.dragEnd} draggable>
              <p>The content</p>
            </div>
          </div>
          <div className="container">
            <div className="droppableZone" onDragOver={this.onDrag} onDragLeave={this.onLeave} onDrop={this.onDrop}>
              <div className="draggable" onDragStart={this.dragStart} onDragEnd={this.dragEnd} draggable>
                <p>child</p>
              </div>
            </div>
            <div className="droppableZone" onDragOver={this.onDrag} onDragLeave={this.onLeave} onDrop={this.onDrop}>
              <div className="draggable" onDragStart={this.dragStart} onDragEnd={this.dragEnd} draggable>
                <p>child</p>
              </div>
            </div>
            <div className="droppableZone" onDragOver={this.onDrag} onDragLeave={this.onLeave} onDrop={this.onDrop}>
              <div className="draggable" onDragStart={this.dragStart} onDragEnd={this.dragEnd} draggable>
                <p>child</p>
              </div>
            </div>
            <div className="droppableZone" onDragOver={this.onDrag} onDragLeave={this.onLeave} onDrop={this.onDrop}>
              <div className="draggable" onDragStart={this.dragStart} onDragEnd={this.dragEnd} draggable>
                <p>child</p>
              </div>
            </div>
          </div>
        </ul>
      </div>
    );
  }
}

export default App;
