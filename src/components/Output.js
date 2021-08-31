import React, { Component } from 'react';
import Footer from './footer/Footer';
import Header from './header/Header';
import Main from './main/main';

class Output extends Component {
    render() { 
        return ( 
            <div>
                <Header />
                <Main />
                <Footer />
            </div>
         );
    }
}
 
export default Output;