import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';
import { Divider } from 'semantic-ui-react';
import {
    getFromStorage,
    setInStorage
} from "../utills/storage";
class account extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            token: '',
            signUpError: '',
            signInError: '',
            signInEmail: '',
            signInPasssword: '',
            signUpFullName: '',
            signUpEmail: '',
            signUpPassword: '',
            signUpDateOfBirth: '',
            signUpCountry: '',
            signUpPhoneNumber: '',
            signUpGender: '',
        }
        this.onTextBoxChangesignUpFullName = this.onTextBoxChangesignUpFullName.bind(this);
        this.onTextBoxChangesignUpEmail = this.onTextBoxChangesignUpEmail.bind(this);
        this.onTextBoxChangesignUpPassword = this.onTextBoxChangesignUpPassword.bind(this);
        this.onTextBoxChangesignUpDOB = this.onTextBoxChangesignUpDOB.bind(this);
        this.onTextBoxChangesignUpCountry = this.onTextBoxChangesignUpCountry.bind(this);
        this.onTextBoxChangesignUpPhoneNumber = this.onTextBoxChangesignUpPhoneNumber.bind(this);
        this.onTextBoxChangesignUpGender = this.onTextBoxChangesignUpGender.bind(this);
        this.onTextBoxChangeSignInEmail = this.onTextBoxChangeSignInEmail.bind(this);
        this.onTextBoxChangeSignInPassword = this.onTextBoxChangeSignInPassword.bind(this);

        this.onSignIn = this.onSignIn.bind(this);
        this.onSignUp = this.onSignUp.bind(this);
    }
    componentDidMount() {
        const obj = getFromStorage('the_main_app');
        if (obj && obj.token) {
            const { token } = obj;
            //varify token
            fetch('/api/accounts/verify?token' + token)
                .then(res => res.json())
                .then(json => {
                    if (json.success) {
                        this.setState({
                            token,
                            isLoading: false
                        });
                    } else {
                        this.setState({
                            isLoading: false
                        });
                    }
                });
        } else {
            this.setState({
                isLoading: false,
            });
        }
    }
    onTextBoxChangesignUpFullName(event) {
        this.setState({
            signUpFullName: event.target.value,
        });
    }
    onTextBoxChangesignUpEmail(event) {
        this.setState({
            signUpEmail: event.target.value,
        });
    }
    onTextBoxChangesignUpPassword(event) {
        this.setState({
            signUpPassword: event.target.value,
        });
    }
    onTextBoxChangesignUpDOB(event) {
        this.setState({
            signUpDateOfBirth: event.target.value,
        });
    }
    onTextBoxChangesignUpCountry(event) {
        this.setState({
            signUpCountry: event.target.value,
        });
    }
    onTextBoxChangesignUpPhoneNumber(event) {
        this.setState({
            signUpPhoneNumber: event.target.value,
        });
    }
    onTextBoxChangesignUpGender(event) {
        this.setState({
            signUpGender: event.target.value,
        });
    }
    onTextBoxChangeSignInEmail(event) {
        this.setState({
            signInEmail: event.target.value,
        });
    }
    onTextBoxChangeSignInPassword(event) {
        this.setState({
            signInPasssword: event.target.value,
        });
    }

    //SignUP requst for backend
    onSignUp() {
        //Grab the state
        const {
            signUpFullName,
            signUpEmail,
            signUpPassword,
            signUpDateOfBirth,
            signUpCountry,
            signUpPhoneNumber,
            signUpGender,
        } = this.state;
        //post requst to backend
        fetch('/api/accounts/signup', {
            method: 'POST',
            body: JSON.stringify({
                fullName: signUpFullName,
                email: signUpEmail,
                password: signUpPassword,
                dateOfBirth: signUpDateOfBirth,
                country: signUpCountry,
                phoneNumber: signUpPhoneNumber,
                gender: signUpGender,
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(res => res.json())
            .then(json => {
                console.log('json', json);
                if (json.success) {
                    this.setState({
                        signUpError: json.message,
                        isLoading: false,
                        signUpFullName: '',
                        signUpEmail: '',
                        signUpPassword: '',
                        signUpDateOfBirth: '',
                        signUpCountry: '',
                        signUpPhoneNumber: '',
                        signUpGender: '',
                    });
                } else {
                    this.setState({
                        signUpError: json.message,
                        isLoading: false,
                    })
                }
            });
    }
    //SignIN requst for backend
    onSignIn() {
        //Grab the state
        const {
            signInEmail,
            signInPasssword,
        } = this.state;
        //post requst to backend
        fetch('/api/accounts/signin', {
            method: 'POST',
            body: JSON.stringify({
                email: signInEmail,
                password: signInPasssword,
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(res => res.json())
            .then(json => {
                console.log('json', json);
                if (json.success) {
                    setInStorage('the_main_app', { token: json.token });
                    this.setState({
                        signInError: json.message,
                        isLoading: false,
                        signInEmail: '',
                        signInPassword: '',
                        token: json.token,
                    });
                } else {
                    this.setState({
                        signInError: json.message,
                        isLoading: false,
                    })
                }
            });
    }


    render() {
        const {
            isLoading,
            token,
            signInError,
            signInEmail,
            signInPasssword,
            signUpFullName,
            signUpError,
            signUpEmail,
            signUpPassword,
            signUpDateOfBirth,
            signUpCountry,
            signUpPhoneNumber,
            signUpGender,
        } = this.state;
        if (isLoading) {
            return (<div><p>Loading.....</p></div>)
        }
        if (!token) {
            return (
                <div>
                    <Divider hidden section />
                    <Container className="contact-form-section">
                        <Row>
                            <Col sm={{ size: 6 }}>
                                {
                                    (signInError) ? (<p>{signInError}</p>) : (null)
                                }
                                <div className="ui attached message">
                                    <center><h2 className="section-title" id="heading">Login</h2></center>
                                </div>
                                <div className="ui form attached fluid segment">
                                    <div className="field">
                                        <label>Email</label>
                                        <input
                                            placeholder="Email"
                                            type="Email"
                                            value={signInEmail}
                                            onChange={this.onTextBoxChangeSignInEmail}
                                        />
                                    </div>
                                    <div className="field">
                                        <label>Password</label>
                                        <input type="password"
                                            placeholder="Password"
                                            value={signInPasssword}
                                            onChange={this.onTextBoxChangeSignInPassword}
                                        />
                                    </div>
                                    <center>
                                        <button className="btn btn-primary"
                                            onClick={this.onSignIn}
                                        >
                                            Login
                                        </button>
                                    </center>
                                </div>
                            </Col>
                            <Col className="" sm={{ size: 6 }}>
                                {
                                    (signUpError) ? (<p>{signUpError}</p>) : (null)
                                }
                                <div className="ui attached message">
                                    <center><h2 className="section-title" id="heading">Sign Up</h2></center>
                                </div>
                                <div className="ui form attached fluid segment">
                                    <div className="field">
                                        <label>Full Name</label>
                                        <input placeholder="Full Name"
                                            type="text"
                                            value={signUpFullName}
                                            onChange={this.onTextBoxChangesignUpFullName}
                                        />
                                    </div>
                                    <div className="field">
                                        <label>Email</label>
                                        <input placeholder="Email"
                                            type="email"
                                            value={signUpEmail}
                                            onChange={this.onTextBoxChangesignUpEmail}
                                        />
                                    </div>
                                    <div className="field">
                                        <label>Password</label>
                                        <input type="password"
                                            placeholder="Password"
                                            value={signUpPassword}
                                            onChange={this.onTextBoxChangesignUpPassword}
                                        />
                                    </div>
                                    <div className="two fields">
                                        <div className="field">
                                            <label>Date of Birth</label>
                                            <input type="text"
                                                value={signUpDateOfBirth}
                                                onChange={this.onTextBoxChangesignUpDOB}
                                            />
                                        </div>
                                        <div className="field">
                                            <label>Country</label>
                                            <input type="text"
                                                placeholder="Country"
                                                value={signUpCountry}
                                                onChange={this.onTextBoxChangesignUpCountry}
                                            />
                                        </div>
                                    </div>
                                    <div className="two fields">
                                        <div className="field">
                                            <label>Phone Number</label>
                                            <input type="text"
                                                placeholder="Phone Number"
                                                value={signUpPhoneNumber}
                                                onChange={this.onTextBoxChangesignUpPhoneNumber}
                                            />
                                        </div>
                                        <div className="field">
                                            <label>Gender</label>
                                            <input type="text"
                                                placeholder="Gander"
                                                value={signUpGender}
                                                onChange={this.onTextBoxChangesignUpGender}
                                            />
                                        </div>
                                    </div>
                                    <center>
                                        <button className="btn btn-primary"
                                            onClick={this.onSignUp}
                                        >
                                            Sign Up
                                        </button>
                                    </center>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <Divider hidden section />
                </div>
            );
        }
        return (
            <React.Fragment>
                <p>Account</p>
            </React.Fragment >

        )
    }
}
export default account;