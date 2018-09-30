import React from 'react';
import mainLogo from '../images/ansira-logo.png';
import './bottomBar.css';

export default function BottomBar(props) {
    return (
        <div className='bottomBar'>
    
            <div className='bottomBar-logo'>
                <img className='bottomBar-image' src={mainLogo} alt='mainlogo' />
            </div>
            <div className='bottomBar-terms'>
                <div className='bottomBar-termsItem'>CONTACT US</div>
                <div className='bottomBar-conditions'>{`TERMS & CONDITIONS`}</div>
                <div className='bottomBar-termsItem'>PRIVACY</div>
            </div>
            <div className='bottomBar-links'>
                <div className='links'>
                    <div className='link'><i className="fab fa-facebook-f"></i></div>
                    <div className='link'><i className="fab fa-twitter"></i></div>
                    <div className='link'><i className="fab fa-youtube"></i></div>
                    <div className='link'><i className="fab fa-google-plus-g"></i></div>
                </div>
            </div>
        </div>

    )
}