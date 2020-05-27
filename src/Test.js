import React, { Component } from 'react';
import './database.css';
import PostTest from './PostTest'


class TestData extends Component {

  constructor(props) {
    super(props)
    this.state = {

      documents: []

    }
  }


  componentDidMount() {
    fetch('https://timoschessl-springboot.herokuapp.com/')
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
    return (<div id="container"><br></br>
      
      <PostTest/>
      <div><h1 id="header">Test database</h1><br></br>
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


export default TestData;