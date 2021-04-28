import react, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount() {
    //Actual API code
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
          //getting the data from API
          //save data inside app component/ inside astates, so we can reuse it inside the component
        })
      });
  }

  //render method is responsible for producing the output of application
  //after render menthod the componentDidMount method will run
  render() {
    var { isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div>Loading.....</div>;
    }
    else {
      return (
        <div className="App">
          <ul>
            {items.map(item => (
              <li key={item.id}>
                {item.id} Name: {item.name} | Email: {item.email}
              </li>
            ))};
          </ul>
        </div>
      );
    }
  }
}

export default App;