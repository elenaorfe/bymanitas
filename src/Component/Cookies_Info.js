import React from 'react';
import { FormattedMessage }  from 'react-intl';

class History extends React.Component {
    render(){
        return (
            <section className='bymanitas-bg-secondary'>
                <div className='bymanitas-image-align-center'>
                    <img src={require(`../Assets/Images/title.png`)} alt='title'/>
                </div>
                <div className='container margin-bottom-medium'>
                    <span className='is-capitalized has-text-weight-bold'><FormattedMessage id='cookies.info.intro.title'/></span>
                    <br/>
                    <span><FormattedMessage id='cookies.info.intro.lastUpdated'/> 04.12.2018</span>
                    <br/>
                    <span><FormattedMessage id='cookies.info.intro.use'/></span>
                    <br/>
                    <span><FormattedMessage id='cookies.info.intro.description'/></span>
                </div>
                <div className='container margin-bottom-medium'>
                    <span className='has-text-weight-bold'><FormattedMessage id='cookies.info.what.title'/></span>
                    <br/>
                    <span><FormattedMessage id='cookies.info.what.description'/></span>
                </div>
                <div className='container margin-bottom-medium'>
                    <span className='has-text-weight-bold'><FormattedMessage id='cookies.info.how.title'/></span>
                    <br/>
                    <span><FormattedMessage id='cookies.info.how.description1'/></span>
                    <br/>
                    <span><FormattedMessage id='cookies.info.how.description2'/></span>
                    <br/>
                    <span><FormattedMessage id='cookies.info.how.description3'/></span>
                </div>
                <div className='container margin-bottom-medium'>
                    <span className='has-text-weight-bold'><FormattedMessage id='cookies.info.others.title'/></span>
                    <br/>
                    <span><FormattedMessage id='cookies.info.others.description'/></span>
                </div>
                <div className='container margin-bottom-medium'>
                    <span className='has-text-weight-bold'><FormattedMessage id='cookies.info.remove.title'/></span>
                    <br/>
                    <span><FormattedMessage id='cookies.info.remove.description1'/></span>
                    <br/>
                    <span><FormattedMessage id='cookies.info.remove.description2'/></span>
                </div>
                <div className='container margin-bottom-medium'>
                    <span className='has-text-weight-bold'><FormattedMessage id='cookies.info.thirdparty.title'/></span>
                    <br/>
                    <ul>
                        <li>
                            <span><FormattedMessage id='cookies.info.thirdparty.bullet1'/> <a>http://www.allaboutcookies.org/</a></span>
                        </li>
                        <li>
                            <span><FormattedMessage id='cookies.info.thirdparty.bullet2'/> <a>http://www.networkadvertising.org/</a></span>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}
export default History;
