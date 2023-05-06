import { createPortal } from "react-dom";
import "./modal.scss"

function ModalComp({isOpen, children, onClose}) {
    if(!isOpen) {
        return null
    } else {
    return createPortal(   
        <div>
           <div className="overlay-build"></div>
           <div className="modal-build">
                <div>
                    <span className="close-button" onClick={onClose}>X</span>
                    <div className="model-content">{children}</div>
                </div>
           </div>
        </div>,
        document.getElementById('modal')
    )};
}

export default ModalComp;