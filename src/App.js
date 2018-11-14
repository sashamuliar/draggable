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
  
  onDrag = (e) => e.preventDefault()

  start = (e) => {
    // console.log(e.target)
  }

  onDrop = (e) => {
    // let data = e.dataTransfer.getData('d')
    // e.currentTarget.appendChild(a)
    console.log(e.currentTarget)
  }
  dragStart = e => {
    this.setState({dragged: e.currentTarget});
    // e.target.style.boxShadow = "5px 5px 7px rgba(0,0,0,.3)";
    // e.target.style.cursor = "all-scroll";
    // e.target.style.opacity = "0";
  }
  
  dragEnd = e => {
    // e.target.style.boxShadow = "none";
    // e.target.style.cursor = "default";
    // e.target.style.opacity = "1";
  }
  onDrop = e => {
    e.preventDefault();
    let el = this.state.dragged;
    let dragParrent = el.parentElement;
    let dropChild = e.currentTarget.children[0];
    this.mountNode(e.currentTarget, el)
    this.mountNode(dragParrent, dropChild)
    // console.log(dragParrent, 'parrent')
    // console.log(dropChild, 'child')
    this.hideDroppableZone(e.currentTarget);
    this.setState({dragged: undefined});
  }

  onDrag = e => {
    e.preventDefault();
    e.stopPropagation();
    // var el
    // if (e.target.className.includes('droppableZone')){
    //   el = e.target
    // } else {
    //   el = this.returnParent(e.target, 'droppableZone')
    // }


    this.showDroppableZone(e.currentTarget)
    // console.log(e.currentTarget)
    // console.log(e.target)
  }

  onLeave = e => {
    e.preventDefault();
    this.hideDroppableZone(e.currentTarget)
  }

  showDroppableZone = el => {
    el.style.backgroundColor = "rgba(98, 163, 49, .3)";
    el.style.borderColor = "green";
  }

  hideDroppableZone = el => {
    el.style.backgroundColor = "rgba(123,123,123,0.5)";
    el.style.borderColor = "rgba(255,255,255,0)";
  } 

  mountNode = (dropEl, dragEl) => {
    // if (dropEl.id.includes('child')) {
    //   dropEl.parentNode.appendChild(dragEl)
    // } else{
      dragEl.parentElement.removeChild(dragEl)
      dropEl.appendChild(dragEl);
    // }
    // this.hideDroppableZone(dropEl);
  }
  returnParent = (el, parentClass) => {
    while (!el.className.includes(parentClass)){
      el = el.parentElement
    }
    console.log(el)
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
