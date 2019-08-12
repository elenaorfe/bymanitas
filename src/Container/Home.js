import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionCreators from '../action';
import AMIGURUMISLIST from '../Assets/Data/amigurumis-list.json';
import Amigurumis from './Amigurumis_Grid';
import Contact from './Contact';
import Cookies from '../Component/Cookies_Banner';
import History from '../Component/History';
import Title from '../Component/Title';

class Home extends Component{
    //Initial render call
    componentWillMount() {
        this.props.loginFirebase();
    }

    render(){
        // Define user's language
        const language = (navigator.languages && navigator.languages[0]) ||
            navigator.language ||
            navigator.userLanguage;
        const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];
        const amigurumisList = AMIGURUMISLIST[language] || AMIGURUMISLIST[languageWithoutRegionCode] || AMIGURUMISLIST.en;

        return (
            <div>
                <Cookies/>
                <Title/>
                <History/>
                <Amigurumis amigurumisList={amigurumisList}/>
                {this.props.showContact ? <Contact/> : ''}
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return{
        showContact: state.contactformShowReducer.showContactForm
    };
};

export default connect (mapStateToProps, actionCreators)(Home);
