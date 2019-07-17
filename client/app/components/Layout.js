import React, { Component } from 'react';
import NavBar from './NavBar/NavBar';
import Header from './Header/Header';
import Footer from './Footer/Footer';

class Layout extends Component {

    render() {
        return (
            <div>
                <Header />
                <NavBar />
                <main>
                    {this.props.children}
                </main>
                <Footer />
            </div>
        );
    }
}
export default Layout
