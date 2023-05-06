import { useState } from "react";
import ModalComp from "./modal.componant";
import "./modal.scss"

function Modal({isSubmitted, onSubmitted}) {

    console.log(isSubmitted, "rendered")
    const [isOpen, setIsOpen] = useState(true)

    const [formData, setFormData] = useState(
        {
            shopName: "",
            contactInfo: ""
        }
    )
    

    // const handleClick = ()=> {
    //     setIsOpen(true)
    // }

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleClose = () => {
        setIsOpen(false)
        console.log("Closed")

    }

    const handleSubmit = (event)=> {
        event.preventDefault()
        console.log(formData)
        setIsOpen(false)
        onSubmitted()
        console.log(isSubmitted)

    }
    if (isSubmitted){
        return null
    } else {

    return (
        <div>
            {/* <button onClick={handleClick}>Open</button> */}
            <ModalComp isOpen={isOpen} onClose={handleClose}>
                <form onSubmit={handleSubmit}>
                    <section>
                        <p className="modal-contant-heading">MANUFACTURER'S</p>
                        <img className="modal-img" alt="badi-facotry" src="http://badifactory.com/wp-content/uploads/2022/05/name-logo.png"/>
                        <label className="modal-lable">Shop Name</label>
                        <input className="modal-input" type='text' name="shopName" value={formData.shopName} onChange={handleInputChange} placeholder="Shop Name"/>
                        <label className="modal-lable">Contant No</label>
                        <input className="modal-input" type='tel' name="contactInfo" value={formData.contactInfo} onChange={handleInputChange} placeholder="Contact No"/>
                        <button type="submit" className="modal-submit-button">Submit</button>      
                    </section>
                </form>
            </ModalComp>
        </div>
    );
}
}

export default Modal;



