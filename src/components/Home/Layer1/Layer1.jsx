import React from 'react'
import frame from '../../../images/Layer 21.png'
import "./Layer1.css"

export default function Layer1() {
    return (
        <div>

            <div className="col-xl-12 col-md-12 col-sm-12">
                <div>
                    <h1 className='l1h'>Next-Generation Software Services to Businesses.</h1>
                    <p className='l1p'>We help transform businesses through technological services we offer in the form of Web, App, and ERP Software Development.</p>
                </div>
            </div>
            
            <div className="col-xl-12 col-md-12 col-sm-12">
                <img className="l1f" src={frame} alt="f1" />
            </div>

        </div>
    )
}
