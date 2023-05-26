import { Fragment} from "react";

import Offer from "../../Componants/offer-section/offer.componant";
import Carousel from "../../Componants/carousel/carousel";
import CardContainer from "../../Componants/card-container/card-container.componant";
import Feedback from "../../Componants/feedback-section/feedback.componant";
import Specialization from "../../Componants/specialization/specialization.componant";
import CounterUp from "../../Componants/counterup/counterup";

import Modal from "../../Componants/modal/modal";


const Homepage = ({isSubmitted, onSubmitted})=> {
    

    return (
        <Fragment>
            <Carousel />
            <Offer />
            <CardContainer />
            <Feedback />
            <CounterUp/>
            <Specialization />
            <Modal isSubmitted={isSubmitted} onSubmitted={onSubmitted}/>
        </Fragment>
    )
}

export default Homepage