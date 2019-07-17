import React, { Component } from 'react';
import { Segment, Icon, Header, Grid, Container, Divider } from 'semantic-ui-react';

class contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            CError: '',
            CfullName: '',
            Cemail: '',
            Ccountry: '',
            CphoneNumber: '',
            Csubject: '',
            Cmessage: '',
        }
        this.onTextBoxChangeFullName = this.onTextBoxChangeFullName.bind(this);
        this.onTextBoxChangeEmail = this.onTextBoxChangeEmail.bind(this);
        this.onTextBoxChangeCountry = this.onTextBoxChangeCountry.bind(this);
        this.onTextBoxChangePhoneNumber = this.onTextBoxChangePhoneNumber.bind(this);
        this.onTextBoxChangeSubject = this.onTextBoxChangeSubject.bind(this);
        this.onTextBoxChangeMessage = this.onTextBoxChangeMessage.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);

    }
    onTextBoxChangeFullName(event) {
        this.setState({
            CfullName: event.target.value,
        });
    }
    onTextBoxChangeEmail(event) {
        this.setState({
            Cemail: event.target.value,
        });
    }
    onTextBoxChangeCountry(event) {
        this.setState({
            Ccountry: event.target.value,
        });
    }
    onTextBoxChangePhoneNumber(event) {
        this.setState({
            CphoneNumber: event.target.value,
        });
    }
    onTextBoxChangeSubject(event) {
        this.setState({
            Csubject: event.target.value,
        });
    }
    onTextBoxChangeMessage(event) {
        this.setState({
            Cmessage: event.target.value,
        });
    }

    handleSubmit() {
        //Grab the state
        const {
            CfullName,
            Cemail,
            Ccountry,
            CphoneNumber,
            Csubject,
            Cmessage
        } = this.state;
        //post requst to backend
        fetch('/api/accounts/contact', {
            method: 'POST',
            body: JSON.stringify({
                fullName: CfullName,
                email: Cemail,
                country: Ccountry,
                phoneNumber: CphoneNumber,
                subject: Csubject,
                message: Cmessage,
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(res => res.json())
            .then(json => {
                console.log('json', json);
                if (json.success) {
                    this.setState({
                        CError: json.message,
                        isLoading: false,
                        CfullName: '',
                        Cemail: '',
                        Ccountry: '',
                        CphoneNumber: '',
                        Csubject: '',
                        Cmessage: '',
                    });
                } else {
                    this.setState({
                        CError: json.message,
                        isLoading: false,
                    })
                }
            });
    }


    render() {
        const {
            isLoading,
            CfullName,
            Cemail,
            Ccountry,
            CphoneNumber,
            Csubject,
            Cmessage,
            CError
        } = this.state;
        if (isLoading) {
            return (<div><p>Loading.....</p></div>)
        }
        else {
            return (
                <div className="container">
                    <Divider hidden section />
                    <h3 align="center">Your Details</h3>
                    <Container>
                        <div id="contact-form">
                            <div className="ui attached message">
                                <center>
                                    {
                                        (CError) ? (<p>{CError}</p>) : (null)
                                    }
                                </center>
                            </div>
                            <Divider hidden section />
                            <div className="form-group">
                                <input
                                    placeholder="Full Name"
                                    type="text"
                                    className="form-control"
                                    value={CfullName}
                                    onChange={this.onTextBoxChangeFullName}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    placeholder="Email"
                                    type="Email"
                                    className="form-control"
                                    value={Cemail}
                                    onChange={this.onTextBoxChangeEmail}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    placeholder="Country"
                                    type="text"
                                    className="form-control"
                                    value={Ccountry}
                                    onChange={this.onTextBoxChangeCountry}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    placeholder="Phone Number"
                                    type="text"
                                    className="form-control"
                                    value={CphoneNumber}
                                    onChange={this.onTextBoxChangePhoneNumber}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    placeholder="Subject"
                                    type="text"
                                    className="form-control"
                                    value={Csubject}
                                    onChange={this.onTextBoxChangeSubject} />
                            </div>
                            <div className="form-group">
                                <textarea
                                    placeholder="Message"
                                    type="text"
                                    className="form-control"
                                    value={Cmessage}
                                    onChange={this.onTextBoxChangeMessage}
                                />

                            </div>
                            <div className="form-group">
                                <button
                                    className="btn btn-primary"
                                    onClick={this.handleSubmit}
                                >
                                    Send Mail
                                    </button>
                            </div>

                        </div>
                    </Container>
                    <Divider hidden section />
                    <Divider horizontal section> or </Divider>
                    <Divider hidden section />
                    <Container>
                        <Grid columns={3} divided stackable container>
                            <Grid.Row>
                                <Grid.Column>
                                    <Segment raised textAlign="center">
                                        <Header icon>
                                            <Icon name="phone" color="blue" />
                                        </Header>
                                        <Segment.Inline>
                                            <h2>Phone</h2>
                                            <p>+92-3059993330</p>
                                            <p>(042) 36525550-51</p>
                                            <p></p>
                                        </Segment.Inline>
                                    </Segment>
                                </Grid.Column>
                                <Grid.Column>
                                    <Segment raised textAlign="center">
                                        <Header icon>
                                            <Icon name="laptop" color="blue" />
                                        </Header>
                                        <Segment.Inline>
                                            <h2>Email</h2>
                                            <p>info@sealinks.com</p>
                                            <br></br>
                                            <br></br>
                                        </Segment.Inline>
                                    </Segment>
                                </Grid.Column>
                                <Grid.Column>
                                    <Segment raised textAlign="center">
                                        <Header icon>
                                            <Icon name="location arrow" color="blue" />
                                        </Header>
                                        <Segment.Inline>
                                            <h2>Location</h2>
                                            <p>20,Ijaz Plaza, Canal Bank Rd, Ghazi Pul</p>
                                            <p>Muslimabad Tajpura, Lahore, Punjab</p>
                                        </Segment.Inline>
                                    </Segment>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row className="mt-5">
                                <Grid.Column>
                                    <Segment raised textAlign="center">
                                        <Header icon>
                                            <Icon name="whatsapp" color="blue" />
                                        </Header>
                                        <Segment.Inline>
                                            <h2>Whatsapp</h2>
                                            <p> + 92 -3049992228</p>
                                            <br></br>
                                        </Segment.Inline>
                                    </Segment>
                                </Grid.Column>
                                <Grid.Column>
                                    <Segment raised textAlign="center">
                                        <Header icon>
                                            <Icon name="skype" color="blue" />
                                        </Header>
                                        <Segment.Inline>
                                            <h2>Skype</h2>
                                            <p>skype@sealinks.com</p>
                                            <br></br>
                                        </Segment.Inline>
                                    </Segment>
                                </Grid.Column>
                                <Grid.Column>
                                    <Segment raised textAlign="center">
                                        <Header icon>
                                            <Icon name="viber" color="blue" />
                                        </Header>
                                        <Segment.Inline>
                                            <h2>Viber</h2>
                                            <p>skype@sealinks.com</p>
                                            <br></br>
                                        </Segment.Inline>
                                    </Segment>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Container>
                    <Divider hidden section />
                </div>
            )
        }
    }
}
export default contact