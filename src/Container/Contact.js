import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import classnames from 'classnames';

import * as actionCreators from '../action';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            errors: {},
            showMessage: false,
            messageType: 'success',
            showModal: true
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleValidation = this.handleValidation.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onCloseClick = this.onCloseClick.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleValidation(event){
        let inputName = event.target.name;
        let inputValue = event.target.value;
        let errors = this.state.errors;
        let formIsValid = true;

        //Validate Name
        if(inputName === 'name' && !inputValue.match(/^[a-zA-Z ]+$/)){
            formIsValid = false;
            errors["name"] = "errorInvalid";
        } else {
            formIsValid = true;
            errors["name"] = null;
        }

        //Validate Email
        if(inputName === 'email'){
            let lastAtPos = inputValue.lastIndexOf('@');
            let lastDotPos = inputValue.lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && inputValue.indexOf('@@') === -1 && lastDotPos > 2 && (inputValue.length - lastDotPos) > 2)) {
                formIsValid = false;
                errors["email"] = "errorInvalid";
            } else {
                formIsValid = true;
                errors["email"] = null;
            }
        }

        this.setState({errors: errors});
        return formIsValid;
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.submitContactForm(this.state.message, this.state.name, this.state.email);
        this.onCloseClick();
    }

    onCloseClick(){
        this.props.showContactForm(false);
        this.setState({showModal: false});
    }

    render(){
        let messageClass = classnames('message', {'bymanitas-hidden': !this.state.showMessage}, {'is-success': this.state.messageType === 'success'}, {'is-danger': this.state.messageType === 'danger'});
        let inputNameClass = classnames('input', {'by-manitas-input-error': this.state.errors['name']});
        let inputNameTextClass = classnames({'bymanitas-hidden': !this.state.errors['name']}, {'by-manitas-text-error': this.state.errors['name']});
        let inputEmailClass = classnames('input', {'by-manitas-input-error': this.state.errors['email']});
        let inputEmailTextClass = classnames({'bymanitas-hidden': !this.state.errors['email']}, {'by-manitas-text-error': this.state.errors['email']});
        return (
            <div className={this.state.showModal ? 'modal is-active' : 'modal'}>
                <div className='modal-background'></div>
                <div className='modal-content'>
                    <div className='box'>
                        <section className='container bymanitas-section-small'>
                            <form>
                                <div className="field">
                                    <label className="label"><FormattedMessage id="contact.form.label.name"/> *</label>
                                    <div className="control">
                                        <input className={inputNameClass} type="text" name="name" value={this.state.name} onChange={this.handleInputChange} onBlur={this.handleValidation}/>
                                        {this.state.errors.name ? <p className={inputNameTextClass}><FormattedMessage id={`contact.form.label.name.${this.state.errors.name}`}/></p> : null}
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label"><FormattedMessage id="contact.form.label.email"/> *</label>
                                    <div className="control has-icons-left has-icons-right">
                                        <input className={inputEmailClass} type="email" name="email" value={this.state.email} onChange={this.handleInputChange} onBlur={this.handleValidation}/>
                                        <span className="icon is-small is-left">
                                      <i className="fas fa-envelope"></i>
                                    </span>
                                        {this.state.errors.email ? <p className={inputEmailTextClass}><FormattedMessage id={`contact.form.label.email.${this.state.errors.email}`}/></p> : null}
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label"><FormattedMessage id="contact.form.label.message"/> *</label>
                                    <div className="control">
                                        <textarea className="textarea" name="message" value={this.state.message} onChange={this.handleInputChange}></textarea>
                                    </div>
                                </div>

                                <div className="field is-grouped">
                                    <div className="control">
                                        <button className="button is-link" type="submit" onClick={this.handleSubmit} disabled={!this.state.name || !this.state.email || !this.state.message}><FormattedMessage id={`contact.form.button.send`}/></button>
                                    </div>
                                </div>
                            </form>
                            {this.state.showMessage ?
                                <article className={messageClass}>
                                    <div className="message-body">
                                        {this.state.messageType === 'success' ? <FormattedMessage id="contact.form.submit.success"/> : <FormattedMessage id="contact.form.submit.error"/>}
                                    </div>
                                </article>
                                : null
                            }
                        </section>
                    </div>∫
                </div>
                <button className='modal-close is-large' aria-label='close' onClick={this.onCloseClick}></button>
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return state
};

export default connect (mapStateToProps, actionCreators)(Contact);
