import './ErrorPage.css';
import React from 'react'
import { Link } from 'react-router-dom';

/**
 * Create a component
 * @returns { JSX }
 */

// Error page
function Errorpage() {
    return (
    <div className='error-page'>
        <div className="bl-errorpage">
            <span className='error-number'>404</span>
            <p className='message-errorpage'>Oops!, the page you requested does not exist.</p>
        </div>
        <div className="btn-return">
            <Link to="/Home" className='link-return-home'>Return to the home page</Link>
        </div>

    </div>
    )

}

export default Errorpage