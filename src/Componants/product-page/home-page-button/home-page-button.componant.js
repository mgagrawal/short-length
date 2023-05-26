import React from 'react';
import { Link } from 'react-router-dom';
import "./home-page-button.scss"

function HomePageButton(props) {
    return (
        <div className='home-page-button-container'>
            <div className='product-page-home-button'>
                <Link className="navbar-link" to='/short-length'>HOME</Link>
            </div>
        </div>
    );
}

export default HomePageButton;