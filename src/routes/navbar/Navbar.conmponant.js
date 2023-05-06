import { Link } from "react-router-dom"
import './navbar.connect.scss'


const Navigationbar = ()=> {

    return (

        <nav>
            <h1><Link className="navbar-link logo" to='/'>LOGO</Link></h1>
            <ul className="menu">
                <li><Link className="navbar-link" to='/'>HOME</Link></li>
                <li><Link className="navbar-link" to='/AboutUs'>ABOUT US</Link> </li>
                <li><Link className="navbar-link">KIDS</Link>
                    <ul className="submenu">
                        <li><Link className="navbar-link">BOYS</Link>
                            <ul className="submenu2">
                                <li><Link className="navbar-link" to='/Shirt'>SHIRT</Link></li>
                                <li><Link className="navbar-link" to='/TShirt'>TSHIRT</Link></li>
                                <li><Link className="navbar-link" to='/Jeans'>JEANSE</Link></li>
                            </ul>
                        </li>
                        <li><Link className="navbar-link">GIRLS</Link>
                            <ul className="submenu2">
                                <li><Link className="navbar-link" to='/Shirt'>SHIRT</Link></li>
                                <li><Link className="navbar-link" to='/TShirt'>TSHIRT</Link></li>
                                <li><Link className="navbar-link" to='/Jeans'>JEANSE</Link></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li><Link className="navbar-link" to='/'>MANS</Link>
                    <ul className="submenu">
                                <li><Link className="navbar-link" to='/Shirt'>SHIRT</Link></li>
                                <li><Link className="navbar-link" to='/TShirt'>TSHIRT</Link></li>
                                <li><Link className="navbar-link" to='/Jeans'>JEANSE</Link></li>
                    </ul>
                </li>
                <li><Link className="navbar-link" to='/'>ENQUIRY</Link>
                    <ul className="submenu">
                                <li><Link className="navbar-link" to='/Shirt'>WHOLESALE INQUIRY</Link></li>
                                <li><Link className="navbar-link" to='/TShirt'>RETAIL INQUIRY</Link></li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
}

export default Navigationbar

