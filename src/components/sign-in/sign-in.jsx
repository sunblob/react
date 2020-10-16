import React from 'react';

import './sign-in.styles.scss';

import { auth, signInWithGoogle } from './../../firebase/firebase.utils';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

class SignIn extends React.Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
        };
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch (error) {
            console.log(`Error signing in`, error.messsage);
        }
    };

    handleChange = (e) => {
        const { value, name } = e.target;

        this.setState({ [name]: value });
    };

    render() {
        const { email, password } = this.state;

        return (
            <div className="sign-in">
                <h2 className="title">I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        handleChange={this.handleChange}
                        value={email}
                        label="Email"
                        required
                    />

                    <FormInput
                        name="password"
                        type="password"
                        handleChange={this.handleChange}
                        value={password}
                        label="Password"
                        required
                    />
                    <div className="buttons">
                        <CustomButton type="submit">SIGN IN</CustomButton>
                        <CustomButton
                            onClick={signInWithGoogle}
                            isGoogleSignIn
                            type="button"
                        >
                            SIGN IN WITH GOOGLE
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;
