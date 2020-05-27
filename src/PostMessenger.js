import React, {Component} from 'react';
import axios from 'axios';


export default class PostMessenger extends Component{

    constructor(props)
    {
        super(props)

        this.state ={
            username:'',
            email:'',
            password:'',
            repeat:''
        }
    }

   changeHandler = (e)=>
   {
        this.setState({[e.target.name]: e.target.value})
   }

   submitHandler = e =>{
       e.preventDefault()
       console.log(this.state)
       axios.post('https://restapits.herokuapp.com/',this.state)

   }

    render()
    {
        const {username,email,password,repeat} = this.state

        return(

            <div>
            <form onSubmit={this.submitHandler}>
               
                <input type="text" name="username" placeholder="New username" value={username} onChange={this.changeHandler}></input>
                <br></br>
                <input type="text" name="email" placeholder="Email" value={email} onChange={this.changeHandler}></input>
                <br></br>
                <input type="password" name="password" placeholder="Password" value={password} onChange={this.changeHandler}></input>
                 <br></br>
                <input type="password" name="repeat" placeholder="Repeat password" value={repeat} onChange={this.changeHandler}></input>
                <br></br>
                <button type="submit">Put into database</button>    
            </form>
            </div>
        )
    }
}