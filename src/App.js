import React, { Component } from 'react';

// Data
import authors from './data';

// Components
import Sidebar from './Sidebar';
import AuthorsList from './AuthorsList';

import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      authorsArray: [],
      loading: true
    }

}
componentDidMount() {
    axios.get('https://the-index-api.herokuapp.com/api/authors/')
      .then(res => res.data)
      .then(function (data) {
        if(data){
          this.setState({authorsArray: data, loading: false});
        }
    })
      .catch(err => console.error(err));
  }

  


  
  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar />
          </div>
          <div className="content col-10">
            {
              this.state.loading ? alert('this page is loading authers list please wait ') + '  this page is loading authers list please wait' : <AuthorsList authors={this.state.authors}/>
            }

          </div>
        </div>
      </div>
    );
  }
}





export default App;
