import React from 'react'
import Laptop from '../../../images/Group 111.png'
import Html from '../../../images/html-1 1.png'
import Rea from '../../../images/react-2 1.png'
import Javascript from '../../../images/javascript-1 1.png'
import Nodejs from '../../../images/nodejs-icon 1.png'
import Mobile from '../../../images/Mobile.png'
import Pc from '../../../images/Pc.png'
import S from '../../../images/Group 112.svg'
import "./Layer2os.css";

export default function Layer2os() {
    return (
        <div>

            <div className="container l2osall">

                <div className="row justify-content-md-center">
                    <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <img className='big-image' width="550" height="auto" src={Laptop} alt="Laptop" />
                    </div>
                    <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12 mt-5">
                        <h3 className="p-2">Web Development</h3>
                        <p className="p-2">In this day and age, websites are synonymous with business visiting cards. We create websites that convey stories while being the face of your company. We create seamless, interactive websites with the latest technology stack customized specifically to your branding and requirements.</p>
                        <img className="p-2 img-fluid" src={Html} alt="Html" />
                        <img className="p-2 img-fluid" src={Rea} alt="React" />
                        <img className="p-2 img-fluid" src={Javascript} alt="Javascript" />
                        <img className="p-2 img-fluid" src={Nodejs} alt="Nodejs" />
                    </div>
                </div>

                <div className="row justify-content-md-center mt-5">
                    <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12 mt-5">
                        <h3 className="p-2">Application Development</h3>
                        <p className="p-2">We create apps across platforms for clientele across a range of industries from financial service management to content streaming platforms. We design apps that are robust and offer extensive utility to client requirements.</p>
                        <img className="p-2 img-fluid" src={Html} alt="Html" />
                        <img className="p-2 img-fluid" src={Rea} alt="React" />
                        <img className="p-2 img-fluid" src={Javascript} alt="Javascript" />
                        <img className="p-2 img-fluid" src={Nodejs} alt="Nodejs" />
                    </div>
                    <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <img className='big-image mob' width="550" height="auto" src={Mobile} alt="Mobile" />
                    </div>
                </div>

                <div className="row justify-content-md-center">
                    <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <img className='big-image pc' width="550" height="auto" src={Pc} alt="Pc" />
                    </div>
                    <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12 mt-5">
                        <h3 className="p-2">ERP Development</h3>
                        <p className="p-2">Our company develops cutting-edge ERP software to manage your business effectively while acting as a central brain to your entire workflow and management.</p>
                        <img className="p-2 img-fluid" src={Html} alt="Html" />
                        <img className="p-2 img-fluid" src={Rea} alt="React" />
                        <img className="p-2 img-fluid" src={Javascript} alt="Javascript" />
                        <img className="p-2 img-fluid" src={Nodejs} alt="Nodejs" />
                    </div>
                </div>

                <div className="row justify-content-md-center mt-5">
                    <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12 mt-5">
                        <h3 className="p-2">AR/VR Development</h3>
                        <p className="p-2">Augment your experience and make virtual synonymous to real with our latest services in building Augmented Reality apps for education, training, retail.</p>
                        <img className="p-2 img-fluid" src={Html} alt="Html" />
                        <img className="p-2 img-fluid" src={Rea} alt="React" />
                        <img className="p-2 img-fluid" src={Javascript} alt="Javascript" />
                        <img className="p-2 img-fluid" src={Nodejs} alt="Nodejs" />
                    </div>
                    <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <img className='big-image' width="550" height="auto" src={S} alt="S" />
                    </div>
                </div>

            </div>












            {/* <div className="container l2osall">

                <div className="row justify-content-md-center">
                    <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <img width="550" height="auto" src={Laptop} alt="Laptop" />
                    </div>
                    <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12 mt-5">
                        <h3 className="p-2">Web Development</h3>
                        <p className="p-2">In this day and age, websites are synonymous with business visiting cards. We create websites that convey stories while being the face of your company. We create seamless, interactive websites with the latest technology stack customized specifically to your branding and requirements.</p>
                        <img className="p-2" src={Html} alt="Html" />
                        <img className="p-2" src={Rea} alt="React" />
                        <img className="p-2" src={Javascript} alt="Javascript" />
                        <img className="p-2" src={Nodejs} alt="Nodejs" />
                    </div>
                </div>

                <div className="row justify-content-md-center mt-5">
                    <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12 mt-5">
                        <h3 className="p-2">Application Development</h3>
                        <p className="p-2">We create apps across platforms for clientele across a range of industries from financial service management to content streaming platforms. We design apps that are robust and offer extensive utility to client requirements.</p>
                        <img className="p-2" src={Html} alt="Html" />
                        <img className="p-2" src={Rea} alt="React" />
                        <img className="p-2" src={Javascript} alt="Javascript" />
                        <img className="p-2" src={Nodejs} alt="Nodejs" />
                    </div>
                    <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <img width="550" height="auto" src={Mobile} alt="Mobile" />
                    </div>
                </div>

                <div className="row justify-content-md-center">
                    <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <img width="550" height="auto" src={Pc} alt="Pc" />
                    </div>
                    <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12 mt-5">
                        <h3 className="p-2">ERP Development</h3>
                        <p className="p-2">Our company develops cutting-edge ERP software to manage your business effectively while acting as a central brain to your entire workflow and management.</p>
                        <img className="p-2" src={Html} alt="Html" />
                        <img className="p-2" src={Rea} alt="React" />
                        <img className="p-2" src={Javascript} alt="Javascript" />
                        <img className="p-2" src={Nodejs} alt="Nodejs" />
                    </div>
                </div>

                <div className="row justify-content-md-center mt-5">
                    <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12 mt-5">
                        <h3 className="p-2">AR/VR Development</h3>
                        <p className="p-2">Augment your experience and make virtual synonymous to real with our latest services in building Augmented Reality apps for education, training, retail.</p>
                        <img className="p-2" src={Html} alt="Html" />
                        <img className="p-2" src={Rea} alt="React" />
                        <img className="p-2" src={Javascript} alt="Javascript" />
                        <img className="p-2" src={Nodejs} alt="Nodejs" />
                    </div>
                    <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <img width="550" height="auto" src={S} alt="S" />
                    </div>
                </div>

            </div> */}

        </div>
    )
}
