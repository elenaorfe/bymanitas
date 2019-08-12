import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionCreators from '../action';

class Amigurumis extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classLiked: 'is-highlighted-red',
            showContactForm: false
        }
        this.onItemLikeClick = this.onItemLikeClick.bind(this);
        this.onItemContactClick = this.onItemContactClick.bind(this);
    }

    componentDidMount() {
        var element = null;
        var likedItems = JSON.parse(sessionStorage.getItem('bymanitas-likes'));
        if(likedItems){
            for(var i=0; i < likedItems.length; i++){
                element = document.getElementById(likedItems[i]);
                element.classList.add(this.state.classLiked);
            }
        }
    }

    onItemLikeClick(id, event){
        var currentLikedItem = document.getElementById(id);
        var addLikedClass = currentLikedItem.classList.value.indexOf(this.state.classLiked) === -1;
        if(addLikedClass){
            currentLikedItem.classList.add(this.state.classLiked);
        }else{
            currentLikedItem.classList.remove(this.state.classLiked);
        }
        //Save in database the clicked liked item
        this.props.updateLikeItem(id, addLikedClass);
    }

    onItemContactClick(){
        this.props.showContactForm(true);
        this.setState({ showContactForm: true });
    }

    render(){
        return (
            <section id='sectionAmigurumis' className='container bymanitas-section'>
                <div className='is-fluid'>
                    <div className='columns is-multiline is-mobile'>
                        {this.props.amigurumisList.amigurumis.map(item => {
                            return <div key={item.id} className='column is-half-mobile is-one-third-tablet is-one-quarter-desktop is-one-quarter-widescreen is-one-quarter-fullhd by-manitas-img-grid-wrapper'>
                                <div className='bymanitas-box'>
                                    <img src={require(`../Assets/Images/amigurumis/${item.id}.png`)} className="by-manitas-img-grid" alt='amigurumi'/>
                                    <div className='bymanitas-container'>
                                        <span className='is-capitalized has-text-weight-bold'>{item.details.name}</span>
                                        <br/>
                                        <span className='bymanitas-text-description'>{item.details.description1}</span>
                                        <br/>
                                    </div>
                                    <div className='columns is-multiline is-mobile is-centered margin-medium'>
                                        <div className='column is-narrow'>
                                            <a onClick={(evt) => this.onItemLikeClick(item.id, evt)} id={item.id}>
                                                <i className='far fa-heart fa-lg'></i>
                                            </a>
                                        </div>
                                        <div className='column is-narrow'>
                                            <a onClick={this.onItemContactClick}>
                                                <i className='far fa-file-alt fa-lg'></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </section>
        );
    }
}


const mapStateToProps=(state)=>{
    return state
};

export default connect (mapStateToProps, actionCreators)(Amigurumis);
