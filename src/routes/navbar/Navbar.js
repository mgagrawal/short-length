import { Fragment } from "react"
import { Outlet, Link } from "react-router-dom"

import navbarConnectData from "./navbar.connect.data"
import NavbarConnect from "./navbar.connect.componant"

const Navbar = ()=> {
    return (
        <Fragment>
            <div className="navbar-connet">
                {
                navbarConnectData.map( (data)=> {
                const {id, prefix, symbol, text} = data
                return (<span key={id}> <NavbarConnect prefix={prefix} text={text} symbol={symbol}/> </span>)
                })
                }

            </div>
            <div className="navbar-contant">
                <span>Logo  </span>
                <Link to='/'>Home </Link>
                <Link to='/AboutUs'>About us </Link>
                <Link to='/Shirt'>Shirt </Link>
                <Link to='/TShirt'>TShirt </Link>
                <Link to='/Jeans'>Jeans </Link>
                <Outlet />
            </div>
        </Fragment>
    )
    }

export default Navbar


// {
//     navbarConnectData.map( (data)=> {
//       const {id, prefix, symbol, text} = data
//       return (<div key={id}> <NavbarConnect prefix={prefix} text={text} symbol={symbol}/> </div>)
//     })
//   }