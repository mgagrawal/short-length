import { Fragment } from "react"
import Navigationbar from './Navbar.conmponant';
import NavbarConnect from "./navbar.connect.componant";
import {navbarConnectDataCon, navbarConnectDataSM} from "./navbar.connect.data";
import './navbar.connect.scss'



const Navbar1 = ()=> {
    

    return (
        <Fragment>
            <div className="navbar-connect">
            <div className="navbar-connect-conventional">
            {
                navbarConnectDataCon.map( (data)=> {
                const {id, prefix, symbol, text} = data
                return (<span key={id}> <NavbarConnect className='navbar-coonect-data' prefix={prefix} text={text} symbol={symbol}/> </span>)
                })
                }
            </div>
            <div className="navbar-connet-social-media">
                {
                navbarConnectDataSM.map( (data)=> {
                const {id, prefix, symbol, text} = data
                return (<span key={id}> <NavbarConnect className='navbar-coonect-data' prefix={prefix} text={text} symbol={symbol}/> </span>)
                })
                }
              </div>
             </div>   

            <Navigationbar />
         </Fragment>
     )
    }

export default Navbar1