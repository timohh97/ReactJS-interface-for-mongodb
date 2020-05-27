import React, { Component } from 'react';
import './database.css';
import PostAndroid from './PostAndroid.js';




class Android extends Component {



  constructor(props) {
    super(props)
    this.state = {

      documents: []

    }
  }


  componentDidMount() {
    fetch('https://android-restapi.herokuapp.com/')
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
      <PostAndroid />
      <div><h1 id="header">Android database</h1><br></br>
        {this.state.documents.map(item => {

          return (<div id="document">
            <p>{JSON.stringify(item)}</p>
          </div>
          )

        })}
      </div>
    </div>
    )
  }
}


export default Android;