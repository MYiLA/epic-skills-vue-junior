import React, {Component} from 'react';
import './App.css';
import Button from './Button.js';
import List from './List.js';


class App extends Component {
  render() {
    return (
      <div
      className='App'>
        <img
        alt = 'meuw!'>
        </img>
        <div>
          <Button></Button>
          <Button></Button>
        </div>
        <div>
          <List></List>
          <List></List>
        </div>
      </div> 
    );
  }
}
// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   );
// }

export default App;
