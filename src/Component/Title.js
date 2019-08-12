import React from 'react';
import { FormattedMessage }  from 'react-intl';

class Title extends React.Component {
    render(){
        return (
            <section id='sectionTitle' className='bymanitas-title bymanitas-section-fullscreen bymanitas-bg-secondary'>
                <div className='bymanitas-text-align-center'>
                    <img src={require(`../Assets/Images/title.png`)} alt='title'/>
                </div>
                <a href='#sectionHistory' className='is-hidden-mobile'>
                    <span className='bymanitas-scroll-arrow'></span>
                    <span className='bymanitas-scroll-arrow'></span>
                    <span className='bymanitas-scroll-arrow'></span>
                    <FormattedMessage id='bymanitas.scroll'/>
                </a>
            </section>
        );
    }
}
export default Title;
