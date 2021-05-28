import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      locationData: '',
      showMap: false,
      errorMessage:false
    }
  }
  findLocation = async (event) => {
    event.preventDefault();
    // let serverRoute = process.env.REACT_APP_SERVER;
    let locationUrl = `https://eu1.locationiq.com/v1/search.php?key=pk.140fde79aca8d1d7f7b546fd78f7d897&q=${this.state.searchQuery}&format=json`;
    //for location
    // https://eu1.locationiq.com/v1/search.php?key=YOUR_ACCESS_TOKEN&q=SEARCH_STRING&format=json
    try {
      let locationResult = await axios.get(locationUrl);
      this.setState({
        locationData: locationResult.data[0],
        showMap: true
      })
    }
    catch {
      this.setState({
        showMap: false,
        errorMessage: true
      })
    }

  }
  updateSearchQuery = (event) =>{
    this.setState({
      searchQuery: event.target.value
    })
  }

    render() {
      return (
        <div>
          <h1>City explorer</h1>
          <Form onSubmit={this.findLocation}>
            <Form.Group controlId="formBasicEmail" >
              <Form.Label>City Name</Form.Label>
              <Form.Control type="text" placeholder="City name" onChange={this.updateSearchQuery} />
              <Form.Text className="text-muted">
                Type City Name
    </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit" >
              Explore!
    </Button>
          </Form>
          <p>{this.state.locationData.display_name}</p>
          {this.state.showMap &&
            // <img
            //   src={`https://maps.locationiq.com/v3/staticmap?key=pk.140fde79aca8d1d7f7b546fd78f7d897&center=${this.state.locationData.lat},${this.state.locationData.lon}&zoom=<zoom>&size=<width>x<height>&format=<format>&maptype=<MapType>&markers=icon:<icon>|<latitude>,<longitude>&markers=icon:<icon>|<latitude>,<longitude>`} alt=''
            // />
            <img
            src={`https://maps.locationiq.com/v3/staticmap?key=pk.140fde79aca8d1d7f7b546fd78f7d897&center=${this.state.locationData.lat},${this.state.locationData.lon}`} alt=''
            />

          }
        </div>
      )
    }
  }

  export default App;