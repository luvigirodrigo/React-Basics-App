import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  render() {
    return (
      <div className="App container-fluid jumbotron">
        <h1>React Applicaiton</h1>
        <button class='btn btn-primary btn-sm'> Learn More</button>
      </div>
    );
  }
}

export default App;
