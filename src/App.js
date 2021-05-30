// import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import React  from 'react';

export class App extends React.Component {


getWeather = async () => {
let serverRoute = process.env.REACT_APP_SERVER;
  const url = `${serverRoute}/test`;
  //we need to use axios to send it(request)
  const testData= await axios.get(url);
  console.log(testData.data);
}

  render() {
    return (
      <div>
            <h1>the front end website </h1>
            <p>to send a request from here(local react app) to our backend(local server)
              then connect them together</p>  
              <button onClick={this.getWeather}>get weather stats</button>      
      </div>
    )
  }
}

export default App;
