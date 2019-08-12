import React from 'react';
import { FormattedMessage }  from 'react-intl';

class History extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMobile: false
        }
    }
    componentDidMount() {
        window.addEventListener('resize', () => {
            this.setState({
                isMobile: window.innerWidth < 1200
            });
        }, false);
    }

    render(){
        const classNameSection = this.state.isMobile ? 'bymanitas-history bymanitas-section-halfscreen bymanitas-bg-primary' : 'bymanitas-history bymanitas-section-fullscreen bymanitas-bg-primary';
        return (
            <section id="sectionHistory" className={classNameSection}>
                <div className='bymanitas-text-align-center'>
                    <div className='bymanitas-text-subtitle'>
                        <FormattedMessage id='bymanitas.home.subtitle1'/>
                    </div>
                    <div className='bymanitas-text-subtitle'>
                        <FormattedMessage id='bymanitas.home.subtitle2'/>
                    </div>
                    <div className='bymanitas-text-subtitle'>
                        <FormattedMessage id='bymanitas.home.subtitle3'/>
                    </div>
                </div>
                <a href='#sectionAmigurumis' className='is-hidden-mobile'>
                    <span className='bymanitas-scroll-arrow'></span>
                    <span className='bymanitas-scroll-arrow'></span>
                    <span className='bymanitas-scroll-arrow'></span>
                    <FormattedMessage id='bymanitas.scroll'/>
                </a>
            </section>
        );
    }
}
export default History;
