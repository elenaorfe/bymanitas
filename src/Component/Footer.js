import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-123752865-1');


class Footer extends Component {
	constructor(props) {
		super(props);
		this.onLinkClick = this.onLinkClick.bind(this);
	}

	onLinkClick(type){
		var actionName = 'link_clicked_' + type;
		ReactGA.event({
			category: 'Link Type',
			action: actionName
		});
	}

	render(){
		return (
			<footer className='bymanitas-bg-primary'>
				<div className='columns is-multiline is-mobile is-centered'>
					<div className='column is-narrow'>
						<a className="bymanitas-link-primary" href='https://www.facebook.com/bymanitas/' target='_blank' rel="noopener noreferrer" onClick={this.onLinkClick.bind(this, 'facebook')}>
							<i className='fab fa-facebook-f fa-lg'></i>
						</a>
					</div>
					<div className='column is-narrow'>
						<a className="bymanitas-link-primary" href='https://www.instagram.com/bymanitas/' target='_blank' rel="noopener noreferrer" onClick={this.onLinkClick.bind(this, 'instagram')}>
							<i className='fab fa-instagram fa-lg'></i>
						</a>
					</div>
					<div className='column is-narrow'>
						<a className="bymanitas-link-primary" href='mailto:elenaorfe@gmail.com' onClick={this.onLinkClick.bind(this, 'email')}>
							<i className='far fa-envelope fa-lg'></i>
						</a>
					</div>
					<div className='column is-narrow'>
						<a className="bymanitas-link-primary" href='https://www.linkedin.com/in/elenaorfe/' target='_blank' rel="noopener noreferrer" onClick={this.onLinkClick.bind(this, 'linkedin')}>
							<i className='fas fa-user fa-lg'></i>
						</a>
					</div>
				</div>
				<div className='bymanitas-text-footer'>
					<p className='no-margin'>{(new Date().getFullYear())} | <FormattedMessage id="footer.label.developer"/> Elena Ortega Fernández | <a className="bymanitas-link-primary" href='mailto:elenaorfe@gmail.com'>elenaorfe@gmail.com</a></p>
				</div>
			</footer>
		)}
}

export default Footer;
