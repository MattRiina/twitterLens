import './App.css';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Stock from './Stock';
import Twitter from './Twitter';
import Navbar from './components/Navbar';
import Stockchart from './components/Stockchart';
import SearchBar from './components/Search.js';
import * as serviceWorker from './serviceWorker';
import { Container, Header, List } from "semantic-ui-react";

class App extends Component {
  
  
  render() {
    return (
      <div>
        <SearchBar/>
        <Stock />
        <Stockchart />
        <Twitter />
      </div>
    );
  }
}

export default App;
