import React from 'react';
import './App.css';
import data from './data'

class App extends React.Component {
  constructor() {
    super();
    this.state={

    }
  }


  render () {
    
    return (
      <body>
        <header className="header">
          <div className="nav-text">Home</div>
        </header>
        <div className="body">
          <div className="box-1">
            <div className="left">
            <div className="name">Marion Santori</div>
            </div>
            <div className="right">
            <div className="counter">1/25</div>
            </div>
          </div>
          <div className="bar">
            <button className="previous">Previous</button>
            <div className="buttons">
              <button className="edit">Edit</button>
              <button className="delete">Delete</button>
              <button className="new">New</button>
            </div>
            <button className="next">Next</button>
          </div>
        </div>
      </body>
  );
}
}

export default App;
