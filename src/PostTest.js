import React, {Component} from 'react';
import axios from 'axios';


export default class PostTest extends Component{

    constructor(props)
    {
        super(props)

        this.state ={
            firstName:'',
            lastName:'',
            age:'',
            job:'',
            description:''
        }
    }

   changeHandler = (e)=>
   {
        this.setState({[e.target.name]: e.target.value})
   }

   submitHandler = e =>{
       e.preventDefault()
       console.log(this.state)
       axios.post('https://timoschessl-springboot.herokuapp.com/post',this.state)

   }

    render()
    {
        const {firstName,lastName,age,job,description} = this.state

        return(

            <div>
            <form onSubmit={this.submitHandler}>
               
                <input type="text" name="firstName" placeholder="First name" value={firstName} onChange={this.changeHandler}></input>
                <br></br>
                <input type="text" name="lastName" placeholder="Last name" value={lastName} onChange={this.changeHandler}></input>
                <br></br>
                <input type="text" name="age" placeholder="Age" value={age} onChange={this.changeHandler}></input>
                 <br></br>
                <input type="text" name="job" placeholder="Job" value={job} onChange={this.changeHandler}></input>
                <br></br>
                <input type="text" name="description" placeholder="Description" value={description} onChange={this.changeHandler}></input>
                <br></br>
                <button type="submit">Put into database</button>    
            </form>
            </div>
        )
    }
}