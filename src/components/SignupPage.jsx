import React, { Component } from 'react'
import PostSignupMessage from './PostSignupMessage';

export class SignupPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            nationality: '',
            emailValidation: '',
            passwordValidation: '',
            showMessage: false,
        }
    }

    handleInput = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value,
        })
    }

    validatePassword = (password) => {
        const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
        if (!regex.test(password)) {
            return 'Your password is too weak.'
        };
        
        return 'Your password is strong.';
    }

    validateEmail = (email) => {
        const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!regex.test(email)) {
            return  'You typed an invalid email.'
        }
        return 'You typed a valid email.'
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { email, password } = this.state; 

        if(email.length > 0 && password.length > 0) {
            this.setState({
                emailValidation: this.validateEmail(email),
                passwordValidation: this.validatePassword(password),
                showMessage: !this.state.showMessage,
            })
        } else {
            return alert('Please fill all the fields to sign up!')
        }
    }

    render() {
        const { email, password, nationality, emailValidation, passwordValidation, showMessage } = this.state;
        return (
        <div className="flex flex-col w-full">
            <form className="flex flex-col w-2/4">
                <label className="mb-2 text-lg">Email</label>
                <input 
                    className="mb-2 border-2 rounded-md p-2" 
                    type="text" 
                    name="email" 
                    value={email}
                    onChange={this.handleInput}
                    placeholder="Your Email Address"
                 />
                { emailValidation.length > 0  && emailValidation.includes('You typed a valid email') && <span className="text-green-500 mb-2">{emailValidation}</span>}
                { emailValidation.length > 0  && emailValidation.includes('invalid') && <span className="text-red-500 mb-2">{emailValidation}</span>}

                <label className="mb-2 text-lg">Password</label>
                <input 
                    className="mb-2 border-2 rounded-md p-2" 
                    type="password" 
                    name="password" 
                    value={password}
                    onChange={this.handleInput}
                    placeholder="Your Password"
                />
                { passwordValidation.length > 0  && passwordValidation.includes('strong') && <span className="text-green-500 mb-2">{passwordValidation}</span>}
                { passwordValidation.length > 0  && passwordValidation.includes('weak') && <span className="text-red-500 mb-2">{passwordValidation}</span>}

                <label className="mb-2 text-lg">Nationality</label>
                <select 
                    className="mb-4 border-2 rounded-md p-2"
                    value={nationality} 
                    onChange={this.handleInput} 
                    name="nationality"
                >
                    <option value="en">English</option>
                    <option value="de">German</option>
                    <option value="fr">French</option>
                </select>

                <button className="mb-2 border-2 rounded-md p-2 bg-blue-200" type="submit" onClick={this.handleSubmit}>Sign up</button>
            </form>
            { showMessage && <PostSignupMessage nationality={nationality} email={email} />}
        </div>
        )
    }
}

export default SignupPage
