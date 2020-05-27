import React, { Component } from 'react';
import './database.css';
import PostPerson from './PostPerson'


class Person extends Component {

  constructor(props) {
    super(props)
    this.state = {

      documents: []

    }
  }


  componentDidMount() {
    fetch('https://timoschessl-restapi-mongodb.herokuapp.com/get')
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
      <PostPerson/>
    <div><h1 id="header">Person database</h1>
      <br></br>
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


export default Person;