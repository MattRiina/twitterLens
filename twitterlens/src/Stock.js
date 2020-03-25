import React, {Component} from 'react';
/*import Button from 'react-bootstrap/Button';*/
/*import Form from 'react-bootstrap/Form';*/
import {Row} from 'react-bootstrap';
import axios from 'axios';

class Stock extends Component {
  constructor() {
    super();
    this.state = {
      term:null,
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    
  }

  handleChange(e) {
    this.setState( {
      change_value: e.target.value
    });
  }

  handleClick(e) {
    if (e) e.preventDefault();
    this.setState ({
      value: '',
      term: this.state.value
    })
    ;

    let term = this.state.value;
    const api_key = '${process.env.REACT_APP_STOCK_API_KEY}';
    console.log(term);
    
    const stock_api = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=${api_key}';
    console.log(stock_api)
    
    
    axios.get(stock_api)
    .then(res => {
      console.log(res.data);
    })
    .catch(error => console.log(error))
  }

  render() {
    let stock_data = this.state.stock_data;
    const value = this.state.value;

    return (
      <div className="App">
        <header className="App-header">
          <p>
            Welcome to the TwitterLens Stock Analytics Page
          </p>
            <Row>
                <form className = "search_bar">
                  <input className="search_input"
                    defaultValue = {this.state.value}
                    onChange={this.handleChange}/>
                    <button className="search_button" onClick={this.handleClick}>Stock Search</button>
                </form>
            </Row>
        </header>
      </div>
    );
  }
}

export default Stock;