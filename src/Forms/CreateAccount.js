import React, { Component } from 'react'

const formValid = formErrors => {
    let valid = true;

    Object.values(formErrors).forEach(val => val.length > 0
        && (valid = false));

    return valid;
}

class CreateAccount extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName: null,
            lastName: null,
            email: null,
            password: null,
            formErrors: {
                firstName: "",
                lastName: "",
                email: "",
                password: ""
            }
        }
    }

    handleSubmit = e => {
        e.preventDefault();

        if(formValid(this.state.formErrors)){
            console.log(this.state.firstName)
            console.log(`
            Submitting Form
            ${this.state.firstName} 
            ${this.state.lastName}
            ${this.state.email}
            ${this.state.password}
            `)
        }
        else {
            console.error('Error submitting form.')
        }
    }

    handleChange = e => {
        e.preventDefault();

        

        const {name, value} = e.target;
        let formErrors = this.state.formErrors;

        switch(name) {
            case 'firstName':
                formErrors.firstName = value.length < 3
                && value.length > 0 ? 'minimum 3 characters required'
                : "";
            break;
            case 'lastName':
                formErrors.lastName = value.length < 3
                && value.length > 0 ? 'minimum 3 characters required'
                : "";
            break; 
            case 'email':
                formErrors.email = value.length < 3
                && value.length > 0 ? 'minimum 3 characters required'
                : "";
            break; 
            case 'password':
                formErrors.password = value.length < 3
                && value.length > 0 ? 'minimum 3 characters required'
                : "";
            break;  
            default:
            break;
        }

        this.setState({formErrors, [name]: value}
            // , () => console.log(this.state)
            )
    }


    render() {
        const { formErrors } = this.state;
        return (
            <div className="wrapper">
                <div className="form-wrapper">
                    <h1 className="font-bold text-xl p-3">Create Account</h1>
                        <form onSubmit={this.handleSubmit} noValidate>
                            <div className="firstName"></div>
                                <label htmlFor="firstName"></label>
                                    <input 
                                    type="text" 
                                    className="p-3 w-1/2 border-b-2 border-gray-500 rounded flex items-center justify-center shadow-lg" 
                                    placeholder="First Name" 
                                    name="firstName" 
                                    id="firstName"
                                    onChange={this.handleChange}  
                                    noValidate />
                                    {formErrors.firstName.length > 0 
                                    && (<span className="errorMessage">
                                        {formErrors.firstName}</span>)}
                            <div className="lastName"></div>
                                <label htmlFor="lastName"></label>
                                    <input 
                                    type="text" 
                                    className="p-3 w-1/2 border-b-2 border-gray-500 rounded flex items-center justify-center shadow-lg" 
                                    placeholder="Last Name" 
                                    name="lastName" 
                                    id="lastName"
                                    onChange={this.handleChange}  
                                    noValidate />
                                    {formErrors.lastName.length > 0
                                    && (<span className="errorMessage">
                                        {formErrors.lastName}
                                    </span>)}
                            <div className="email"></div>
                                <label htmlFor="email"></label>
                                    <input 
                                    type="email" 
                                    className="p-3 w-1/2 border-b-2 border-gray-500 rounded flex items-center justify-center shadow-lg" 
                                    placeholder="Email" 
                                    name="email" 
                                    id="email"
                                    onChange={this.handleChange}  
                                    noValidate />
                                    {formErrors.email.length > 0
                                    && (<span className="errorMessage">
                                        {formErrors.email}
                                    </span>)}
                            <div className="password"></div>
                                <label htmlFor="password"></label>
                                    <input 
                                    type="password" 
                                    className="p-3 w-1/2 border-b-2 border-gray-500 rounded flex items-center justify-center shadow-lg" 
                                    placeholder="Password" 
                                    name="password" 
                                    id="password"
                                    onChange={this.handleChange}  
                                    noValidate />
                                    {formErrors.password.length > 0
                                    && (<span className="errorMessage">
                                        {formErrors.password}
                                    </span>)}
                            <div className="createAccount">
                                `<button 
                                    className="bg-gray-500 text-black p-3 flex items-center justify-center w-60"
                                    type="submit">Create Account
                                </button>`
                                <small>Already Have an Account?</small>
                            </div>      
                        </form>
                    </div>
                </div>
            )
        }
}

export default CreateAccount