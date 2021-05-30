// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationResult: [],
      inputResult:'',

    }

  }

  getWeather = async () => {
    let serverRoute = process.env.REACT_APP_SERVER;
    const url = `${serverRoute}/test`;
    //we need to use axios to send it(request)
    try {

      const testData = await axios.get(url);
      console.log(testData.data);
    }
    catch (error) {

    }
  }

  saveInput=(event)=>{
    
    this.setState({
      inputResult:event.target.value,

    });
    console.log(this.inputResult);
  }


  render() {
    return (
      <div>
        <h1>CITY  EXPLORER </h1>
        {/* <p>to send a request from here(local react app) to our backend(local server)
              then connect them together</p> */}
        {/* <button onClick={this.getWeather}>get weather stats</button> */}

        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            {/* <Form.Label>city name</Form.Label> */}
            <Form.Control type="text" placeholder="city name" onChange={this.saveInput}/>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
  </Button>
        </Form>
      </div>
    )
  }
}

export default App;

//