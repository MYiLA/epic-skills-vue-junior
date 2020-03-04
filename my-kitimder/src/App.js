import React, {Component} from 'react';
import './App.css';
import Button from './Button.js';
import List from './List.js';


class App extends Component {
  state = {
    cats: [
      'https://images.app.goo.gl/9PbYM4XvhDYEwC5v9',
      'https://images.app.goo.gl/3cx8ATQZocooRdfEA',
      'https://focus.ua/storage/pub/images/2017/65042.jpg',
      'https://g1.delphi.lv/images/pix/676x385/qOgzGluBhgU/kakis-koz-46290695.jpg',
      'https://trendymen.ru/images/article1/126316/attachments/11.jpg',
    ],
    indexOfCurrentCat: 0,
    rightColumn: [],
    leftColumn: [],
  }

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
