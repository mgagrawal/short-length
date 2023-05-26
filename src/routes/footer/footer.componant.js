import { Fragment } from "react";
import NavbarConnect from "../navbar/navbar.connect.componant";
import {navbarConnectDataCon, navbarConnectDataSM} from "./footer.data"
import "./footer.scss"

const Footer = ()=> {
    
    
    return (
        <Fragment>
        <div className="footer-top-container">
            <div>
                <h4>About Us</h4>
                <p>
                www.badifactory.com is a B2B and BCB online platform that is a sampling and introduction platform that provides all types of garments to retailers directly from factories. www.badifactory.com always believes in providing perfection in the buyer-seller working process..
                </p>
            </div>
            <div className="footer-middle-container">
                <h4>Quick Links</h4>
                    <ul>
                        <li> {">"} Home</li>
                        <li> {">"} About us</li>
                        <li> {">"} Kids</li>
                        <li> {">"} Men</li>
                        <li> {">"} FAQs</li>
                    </ul>

            </div>
            <div>
                <h4>Contact Info</h4>
                    {
                navbarConnectDataCon.map( (data)=> {
                const {id, prefix, symbol, text} = data
                return (<p key={id} className="footer-connect"> <NavbarConnect prefix={prefix} text={text} symbol={symbol}/> </p>)
                })
                }
                <div className="footer-social-media-connect">
                {navbarConnectDataSM.map((icon, iconIndex)=> (
                    (
                    <div key={iconIndex} className="footer-social-media-componant"><i className={icon.symbol} aria-hidden="true"></i></div>
                    )
                ))}
                </div>

            </div>
        </div>

        <div className="footer-bottom-container">
            <p>© Copyright 2023 Badi Factory. All Rights Reserved</p>
            <p>Designed and Promote By PM Tech</p>
        </div>
        </Fragment>
        )
    
}

export default Footer;