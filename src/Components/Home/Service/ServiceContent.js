import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../CSS/Servie.css';

const ServiceContent = ({info}) => {
    return (
        <div className="col-md-4 service-item">
            <div className="service-item-box d-flex justify-content-between">
                <h5>{info.item} </h5>
                <FontAwesomeIcon icon={faArrowRight} />
            </div>
        </div>
    );
};

export default ServiceContent;