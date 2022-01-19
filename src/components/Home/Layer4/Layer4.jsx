import React from 'react'
import Airbnb from "../../../images/Airbnb Logo.png";
import Hubspot from "../../../images/Hubspot Logo.png";
import Google from "../../../images/Google Logo.png";
import Microsoft from "../../../images/Microsoft Logo.png";
import Walmart from "../../../images/Walmart Logo.png";
import FedEx from "../../../images/FedEx Logo.png";
import "./Layer4.css";

export default function Layer4() {
    return (
        <div className='l4all'>
            <div>
                <hr className="l4b" />
            </div>

            <div className="l4w">
                <h2 className='l4h'>Our Clients</h2>
                <p className='l4p'>We have been working with some Fortune 500 clients</p>
            </div>

            <div className="container-fluid">
                <div className="l4allimg row">
                    <div className="col-xl-2 col-md-6 col-sm-12">
                        <img className="l4im" src={Airbnb} alt="Airbnb" />
                    </div>

                    <div className="col-xl-2 col-md-6 col-sm-12">
                        <img className="l4im" src={Hubspot} alt="Hubspot" />
                    </div>

                    <div className="col-xl-2 col-md-6 col-sm-12">
                        <img className="l4im" src={Google} alt="Google" />
                    </div>
                    <div className="col-xl-2 col-md-6 col-sm-12">
                        <img className="l4im" src={Microsoft} alt="Microsoft" />
                    </div>
                    <div className="col-xl-2 col-md-6 col-sm-12">
                        <img className="l4im" src={Walmart} alt="Walmart" />
                    </div>

                    <div className="col-xl-2 col-md-6 col-sm-12">
                        <img className="l4im" src={FedEx} alt="FedEx" />
                    </div>
                </div>
            </div>

            <div>
                <hr className="l4b2" />
            </div>
        </div>
    )
}
