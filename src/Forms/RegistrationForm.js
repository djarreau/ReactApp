import React, { Component } from 'react'
import axios from 'axios';

export default class RegistrationForm extends Component {

    url = `https://5f46c004aaaf9a00161510ef.mockapi.io/api/v1/users`

    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            username: '',
            password: ''
        }
    }

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post(this.url, this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
        this.setState({
            firstName: "",
            lastName: "",
            email: "",
            username: "",
            password: ""
        })
    }

    render() {
        const { firstName, lastName, email, username, password } = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
            <div className="w-50">
               <div className="p-3 shadow-lg mr-20 ml-20 w-50 mt-2">
                   <input 
                       type="text" 
                       name="firstName" 
                       placeholder="First Name"
                       value={firstName}
                       onChange={this.change}
                   />
               </div>
               <div className="p-3 shadow-lg mr-20 ml-20 w-50 mt-2">
                   <input 
                       name="lastName"
                       placeholder="Last Name" 
                       value={lastName} 
                       onChange={this.change} 
                   />
               </div>
               <div className="p-3 shadow-lg mr-20 ml-20 w-50 mt-2">
                   <input 
                       name="email"
                       placeholder="Email" 
                       value={email} 
                       onChange={this.change} 
                   />
               </div>
               <div className="p-3 shadow-lg mr-20 ml-20 w-50 mt-2">
                   <input 
                       name="username"
                       placeholder="Username" 
                       value={username} 
                       onChange={this.change} 
                   />
               </div>
               <div className="p-3 shadow-lg mr-20 ml-20 w-50 mt-2">
                   <input 
                       name="password"
                       placeholder="Password" 
                       type="password"
                       value={password} 
                       onChange={this.change} 
                   />
               </div>
           </div >
           <div className="p-3">
           <button className="p-3 bg-gray-500 rounded mt-2 shadow-lg block mr-20 ml-20 w-50mt-2 w-40 border-1px-solic-black" 
           type="submit">Sign Up</button>
           </div>
        </form>
            </div>
        )
    }
}