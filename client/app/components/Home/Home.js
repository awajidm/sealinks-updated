import React, { Component } from 'react';
import HomeHeader from './HomeHeader';
import AboutUs from '../About/aboutUS';
import OurBestSeller from './ourBestSeller';
import Book from '../About/bookwithus';
import Team from '../About/ourTeam';
import Feature from "./FeatureTrip";

class Home extends Component {
    render() {
        return (
            <div>
                <HomeHeader />
                <AboutUs />
                <Book />
                <Feature />
                <OurBestSeller />
                <Team />
            </div>
        );
    }
}

export default Home