import React from 'react';
import { FormattedMessage }  from 'react-intl';
import { Link } from 'react-router-dom';

class CookiesBanner extends React.Component {
    constructor(props) {
        super(props);
        this.onItemCookieClick = this.onItemCookieClick.bind(this);
    }

    onItemCookieClick(){
        document.cookie = "cookieconsent=true";
        this.setState({ cookieconsent: true });
    }

    //Initial render call
    componentWillMount() {
        var hasAcceptedCookies = this.getCookie();
        this.setState({ cookieconsent: hasAcceptedCookies });
    }

    getCookie(){
        var name = 'cookieconsent=';
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    render(){
        return (
            <article className={this.state.cookieconsent ? 'hidden': 'bymanitas-bg-primary'}>
                <div className='message-body columns is-multiline is-mobile'>
                    <div className='column is-three-quarters bymanitas-text-banner'>
                        <FormattedMessage id="cookies.text.info"/>
                        <br/>
                        <Link to="/cookies" target="_blank" className="is-text" onClick={this.handleClick}><FormattedMessage id="cookies.btn.moreinfo"/></Link>
                    </div>
                    <div className='column'>
                        <button className="button float-right cookie-banner" onClick={this.onItemCookieClick}><FormattedMessage id="cookies.btn.ok"/></button>
                    </div>
                </div>
            </article>
        );
    }
}
export default CookiesBanner;
