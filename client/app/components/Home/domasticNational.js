import React, { Component } from 'react';
import { Row, Col, Container, Input } from 'reactstrap';
import { Divider } from 'semantic-ui-react';
import Header from './HomeHeader';
class domasticNational extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            domasticError: '',
            domasticnAreas: '',
            domasticdays: '',
            domasticnOfAdults: '',
            domasticnOfInfants: '',
            domasticbudget: '',
            nationalError: '',
            nationalcountry: '',
            nationalcity: '',
            nationalduration: '',
            nationalnOfAdults: '',
            nationalnOfInfants: '',
            nationaladultsPassportNumbers: '',
            nationaldateOfDeparture: '',
            nationaldateOfReturn: '',
            nationalbudget: '',
        }
        this.onTextBoxChangedomasticnAreas = this.onTextBoxChangedomasticnAreas.bind(this);
        this.onTextBoxChangedomasticdays = this.onTextBoxChangedomasticdays.bind(this);
        this.onTextBoxChangedomasticnOfAdults = this.onTextBoxChangedomasticnOfAdults.bind(this);
        this.onTextBoxChangedomasticnOfInfants = this.onTextBoxChangedomasticnOfInfants.bind(this);
        this.onTextBoxChangedomasticbudget = this.onTextBoxChangedomasticbudget.bind(this);
        this.onTextBoxChangenationalcountry = this.onTextBoxChangenationalcountry.bind(this);
        this.onTextBoxChangenationalcity = this.onTextBoxChangenationalcity.bind(this);
        this.onTextBoxChangenationalduration = this.onTextBoxChangenationalduration.bind(this);
        this.onTextBoxChangenationalnOfAdults = this.onTextBoxChangenationalnOfAdults.bind(this);
        this.onTextBoxChangenationalnOfInfants = this.onTextBoxChangenationalnOfInfants.bind(this);
        this.onTextBoxChangenationaladultsPassportNumbers = this.onTextBoxChangenationaladultsPassportNumbers.bind(this);
        this.onTextBoxChangenationaldateOfDeparture = this.onTextBoxChangenationaldateOfDeparture.bind(this);
        this.onTextBoxChangenationaldateOfReturn = this.onTextBoxChangenationaldateOfReturn.bind(this);
        this.onTextBoxChangenationalbudget = this.onTextBoxChangenationalbudget.bind(this);


        this.onDomastic = this.onDomastic.bind(this);
        this.onNational = this.onNational.bind(this);
    }
    onTextBoxChangedomasticnAreas(event) {
        this.setState({
            domasticnAreas: event.target.value,
        });
    }
    onTextBoxChangedomasticdays(event) {
        this.setState({
            domasticdays: event.target.value,
        });
    }
    onTextBoxChangedomasticnOfAdults(event) {
        this.setState({
            domasticnOfAdults: event.target.value,
        });
    }
    onTextBoxChangedomasticnOfInfants(event) {
        this.setState({
            domasticnOfInfants: event.target.value,
        });
    }
    onTextBoxChangedomasticbudget(event) {
        this.setState({
            domasticbudget: event.target.value,
        });
    }
    onTextBoxChangenationalcountry(event) {
        this.setState({
            nationalcountry: event.target.value,
        });
    }
    onTextBoxChangenationalcity(event) {
        this.setState({
            nationalcity: event.target.value,
        });
    }
    onTextBoxChangenationalduration(event) {
        this.setState({
            nationalduration: event.target.value,
        });
    }
    onTextBoxChangenationalnOfAdults(event) {
        this.setState({
            nationalnOfAdults: event.target.value,
        });
    }
    onTextBoxChangenationalnOfInfants(event) {
        this.setState({
            nationalnOfInfants: event.target.value,
        });
    }
    onTextBoxChangenationaladultsPassportNumbers(event) {
        this.setState({
            nationaladultsPassportNumbers: event.target.value,
        });
    }
    onTextBoxChangenationaldateOfDeparture(event) {
        this.setState({
            nationaldateOfDeparture: event.target.value,
        });
    }
    onTextBoxChangenationaldateOfReturn(event) {
        this.setState({
            nationaldateOfReturn: event.target.value,
        });
    }
    onTextBoxChangenationalbudget(event) {
        this.setState({
            nationalbudget: event.target.value,
        });
    }

    //Domastic requst for backend
    onDomastic() {
        //Grab the state
        const {
            domasticnAreas,
            domasticdays,
            domasticnOfAdults,
            domasticnOfInfants,
            domasticbudget,
        } = this.state;
        //post requst to backend
        fetch('/api/customSearch/Domastic', {
            method: 'POST',
            body: JSON.stringify({
                nAreas: domasticnAreas,
                days: domasticdays,
                nOfAdults: domasticnOfAdults,
                nOfInfants: domasticnOfInfants,
                budget: domasticbudget,
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(res => res.json())
            .then(json => {
                if (json.success) {
                    this.setState({
                        domasticError: json.message,
                        isLoading: false,
                        //clear state
                        domasticnAreas: '',
                        domasticdays: '',
                        domasticnOfAdults: '',
                        domasticnOfInfants: '',
                        domasticbudget: '',
                    });
                } else {
                    this.setState({
                        domasticError: json.message,
                        isLoading: false,
                    })
                }
            });
    }
    //National requst for backend
    onNational() {
        //Grab the state
        const {
            nationalcountry,
            nationalcity,
            nationalduration,
            nationalnOfAdults,
            nationalnOfInfants,
            nationaladultsPassportNumbers,
            nationaldateOfDeparture,
            nationaldateOfReturn,
            nationalbudget,
        } = this.state;
        //post requst to backend
        fetch('/api/customSearch/national', {
            method: 'POST',
            body: JSON.stringify({
                country: nationalcountry,
                city: nationalcity,
                duration: nationalduration,
                nOfAdults: nationalnOfAdults,
                nOfInfants: nationalnOfInfants,
                adultsPassportNumbers: nationaladultsPassportNumbers,
                dateOfDeparture: nationaldateOfDeparture,
                dateOfReturn: nationaldateOfReturn,
                budget: nationalbudget,
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(res => res.json())
            .then(json => {
                if (json.success) {
                    this.setState({
                        nationalError: json.message,
                        isLoading: false,
                        //clear state
                        nationalcountry: '',
                        nationalcity: '',
                        nationalduration: '',
                        nationalnOfAdults: '',
                        nationalnOfInfants: '',
                        nationaladultsPassportNumbers: '',
                        nationaldateOfDeparture: '',
                        nationaldateOfReturn: '',
                        nationalbudget: '',
                    });
                } else {
                    this.setState({
                        nationalError: json.message,
                        isLoading: false,
                    })
                }
            });
    }
    render() {
        const {
            isLoading,
            domasticError,
            domasticnAreas,
            domasticdays,
            domasticnOfAdults,
            domasticnOfInfants,
            domasticbudget,
            nationalError,
            nationalcountry,
            nationalcity,
            nationalduration,
            nationalnOfAdults,
            nationalnOfInfants,
            nationaladultsPassportNumbers,
            nationaldateOfDeparture,
            nationaldateOfReturn,
            nationalbudget,
        } = this.state;
        if (isLoading) {
            return (<div><p>Loading.....</p></div>)
        }
        return (
            <div>
                <Header />
                <Divider hidden section />
                <Container className="contact-form-section">
                    <Row>
                        <Col sm={{ size: 6 }}>
                            <div className="ui attached message">
                                <center><h2 className="section-title" id="heading">Domastic Search</h2></center>
                            </div>
                            <div className="ui form attached fluid segment">
                                <div className="field">
                                    <label>Northern Areas</label>
                                    <input placeholder="eg: Naran, Kaghan"
                                        type="text"
                                        value={domasticnAreas}
                                        onChange={this.onTextBoxChangedomasticnAreas}
                                    />
                                </div>
                                <div className="field">
                                    <label>Days</label>
                                    <input placeholder="eg: 7"
                                        type="number"
                                        value={domasticdays}
                                        onChange={this.onTextBoxChangedomasticdays}
                                    />
                                </div>
                                <div className="two fields">
                                    <div className="field">
                                        <label>No. of Adults</label>
                                        <input type="number"
                                            placeholder="eg: 5"
                                            value={domasticnOfAdults}
                                            onChange={this.onTextBoxChangedomasticnOfAdults}
                                        />
                                    </div>
                                    <div className="field">
                                        <label>No. of Infants</label>
                                        <input type="number"
                                            placeholder="eg: 2"
                                            value={domasticnOfInfants}
                                            onChange={this.onTextBoxChangedomasticnOfInfants}
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <label>Budget</label>
                                    <input type="number"
                                        placeholder="eg: 15000"
                                        value={domasticbudget}
                                        onChange={this.onTextBoxChangedomasticbudget}
                                    />
                                </div>
                                <center>
                                    <button className="btn btn-primary"
                                        onClick={this.onDomastic}
                                    >
                                        Send Query
                                        </button>
                                </center>
                                <div className="ui attached message">
                                    <center>
                                        {
                                            (domasticError) ? (<p>{domasticError}</p>) : (null)
                                        }
                                    </center>
                                </div>

                            </div>
                        </Col>
                        <Col className="" sm={{ size: 6 }}>

                            <div className="ui attached message">
                                <center><h2 className="section-title" id="heading">National Search</h2></center>
                            </div>
                            <div className="ui form attached fluid segment">
                                <div className="two fields">
                                    <div className="field">
                                        <label>Country</label>
                                        <input placeholder="eg: China"
                                            type="text"
                                            value={nationalcountry}
                                            onChange={this.onTextBoxChangenationalcountry}
                                        />
                                    </div>
                                    <div className="field">
                                        <label>City</label>
                                        <input placeholder="eg: Anshan, Beijing"
                                            type="text"
                                            value={nationalcity}
                                            onChange={this.onTextBoxChangenationalcity}
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <label>Duration</label>
                                    <input type="number"
                                        placeholder="eg: 40"
                                        value={nationalduration}
                                        onChange={this.onTextBoxChangenationalduration}
                                    />
                                </div>
                                <div className="two fields">
                                    <div className="field">
                                        <label>No. of Adults</label>
                                        <input type="number"
                                            placeholder="eg: 7"
                                            value={nationalnOfAdults}
                                            onChange={this.onTextBoxChangenationalnOfAdults}
                                        />
                                    </div>
                                    <div className="field">
                                        <label>NO. of Infants</label>
                                        <input type="number"
                                            placeholder="eg: 2"
                                            value={nationalnOfInfants}
                                            onChange={this.onTextBoxChangenationalnOfInfants}
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <label>Passport Number</label>
                                    <input type="number"
                                        placeholder="eg: 789456213457"
                                        value={nationaladultsPassportNumbers}
                                        onChange={this.onTextBoxChangenationaladultsPassportNumbers}
                                    />
                                </div>
                                <div className="two fields">
                                    <div className="field">
                                        <label>Date Of Departure</label>
                                        <input type="date"
                                            value={nationaldateOfDeparture}
                                            onChange={this.onTextBoxChangenationaldateOfDeparture}
                                        />
                                    </div>
                                    <div className="field">
                                        <label>Date Of Return</label>
                                        <input type="date"
                                            value={nationaldateOfReturn}
                                            onChange={this.onTextBoxChangenationaldateOfReturn}
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <label>Budget</label>
                                    <input type="Number"
                                        placeholder="eg: 150000"
                                        value={nationalbudget}
                                        onChange={this.onTextBoxChangenationalbudget}
                                    />
                                </div>
                                <center>
                                    <button className="btn btn-primary"
                                        onClick={this.onNational}
                                    >
                                        Send Query
                                        </button>
                                </center>
                                <div className="ui attached message">
                                    <center>
                                        {
                                            (nationalError) ? (<p>{nationalError}</p>) : (null)
                                        }
                                    </center>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Divider hidden section />
            </div >
        );
    }
}
export default domasticNational;
