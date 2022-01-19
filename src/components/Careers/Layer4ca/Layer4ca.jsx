import React from 'react'
import per from '../../../images/Rectangle 117.png'
import per1 from '../../../images/Rectangle 117 (1).png'
import per2 from '../../../images/Rectangle 117 (2).png'
import per3 from '../../../images/Rectangle 117 (3).png'
import per4 from '../../../images/Rectangle 117 (4).png'
import per5 from '../../../images/Rectangle 117 (5).png'
import './Layer4ca.css';

export default function Layer4ca() {
    return (
        <div>
            
            <div>
                <h2 className="l4cahh">Our Perks</h2>
            </div>

            <div className="row w-100 row-cols-1 row-cols-md-3 g-4 justify-content-md-center l4ca1">
                <div className="col l4cawho">
                    <div className="card h-100 border-0">
                    <img src={per} className="l4caimall" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title l4cah">Competitive pay</h5>
                        <p className="card-text l4cap">Looking for a great salary and solid stock options? You’ve come to the right place</p>
                    </div>
                    </div>
                </div>
                <div className="col l4cawho">
                    <div className="card h-100 border-0">
                    <img src={per1} className="l4caimall" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title l4cah">Flexible schedule</h5>
                        <p className="card-text l4cap">Do the work you need to get done in the time you have to get it done</p>
                    </div>
                    </div>
                </div>
                <div className="col l4cawho">
                    <div className="card h-100 border-0">
                    <img src={per2} className="l4caimall" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title l4cah">Amazing benefits</h5>
                        <p className="card-text l4cap">Medical, dental, vision, 401k, FSA, commuter… we’ve got you covered</p>
                    </div>
                    </div>
                </div>
            </div>

            <br />
            <br />

            <div className="row w-100 row-cols-1 row-cols-md-3 g-4 justify-content-md-center l4ca2">
                <div className="col l4cawho">
                    <div className="card h-100 border-0">
                    <img src={per3} className="l4caimall" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title l4cah">Flexible vacation</h5>
                        <p className="card-text l4cap">We work to live, not live to work. So go on, book that dream vacation</p>
                    </div>
                    </div>
                </div>
                <div className="col l4cawho">
                    <div className="card h-100 border-0">
                    <img src={per4} className="l4caimall" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title l4cah">Health & wellness</h5>
                        <p className="card-text l4cap">A healthy body supports a healthy mind, so we partner with Crunch Fitness and CorePower</p>
                    </div>
                    </div>
                </div>
                <div className="col l4cawho">
                    <div className="card h-100 border-0">
                    <img src={per5} className="l4caimall" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title l4cah">Family-friendly</h5>
                        <p className="card-text l4cap">From flexible scheduling to parental leave to kids’ birthdays off, we support Sigma families</p>
                    </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
