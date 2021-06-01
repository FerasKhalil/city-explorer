// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Weather from './components/weather';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationResult: [],
      inputResult:'',
      weatherResult:[],
      errorMessage:false,

    }

  }

  // getWeather = async () => {
  //   let serverRoute = process.env.REACT_APP_SERVER;
  //   const url = `${serverRoute}/test`;
  //   console.log(serverRoute);
  //   //we need to use axios to send it(request)
  //   try {

  //     const testData = await axios.get(url);
  //     console.log(testData.data);
  //   }
  //   catch (error) {

  //   }
  // }

  saveInput=(event)=>{
    
    this.setState({
      inputResult:event.target.value,

    });
    console.log(this.state.inputResult);
  }

  submission = async (event) =>{ 
    
    event.preventDefault();
      let serverRoute = process.env.REACT_APP_SERVER;
      console.log(serverRoute);
      const url2 = `${serverRoute}/weather?cityName=${this.state.inputResult}`;
      const weatherData = await axios.get(url2);
      this.setState({weatherResult:weatherData.data,
      }); 
    }
    
  render() {
    return (
      <div>
        <h1>CITY  EXPLORER </h1>
        {/* <p>to send a request from here(local react app) to our backend(local server)
              then connect them together</p> */}
        {/* <button onClick={this.getWeather}>get weather stats</button> */}

        <Form onSubmit={this.submission}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            {/* <Form.Label>city name</Form.Label> */}
            <Form.Control type="text" placeholder="city name" onChange={this.saveInput}/>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
  </Button>
        </Form>

              {this.state.weatherResult.map((element,index)=>{
                return <Weather
                key = {index}
                date={element.date}
                description={element.description}
                />
              })}

      </div>
    )
  }
}

export default App;

//