import React, { Component } from 'react';
import './database.css';
import PostMessenger from './PostMessenger'


class Messenger extends Component {

  constructor(props) {
    super(props)
    this.state = {

      documents: []

    }
  }


  componentDidMount() {
    fetch('https://restapits.herokuapp.com/')
      .then(response => response.json())
      .then(data =>
        this.setState({
          documents: data
        }
        )
        
      );
  }

  render() {
    console.log(this.state)
    return (<div id="container">
     <br></br>
      <PostMessenger />
      
      <div><h1 id="header">Messenger database</h1><br></br>
        {this.state.documents.map(item => {

          return (<div id="document">
            <p>{JSON.stringify(item)}</p>
          </div>
          )
          
        })}<br></br>
      </div>
    </div>
    )
  }
}


export default Messenger;