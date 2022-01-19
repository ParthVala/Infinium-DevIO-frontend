import React from 'react'
import frame from '../../../images/Layer 2.png'
import './Layer1os.css';

export default function Layer1os() {
    return (
        <div className='l1osall'>
            
            <div className="col-xl-12 col-md-12 col-sm-12">
                <h2 className='l1osh'>What we do?</h2>
                <p className='l1ost'>Our company’s philosophy lies in bringing your business technological ideas to reality across your multiple screens while offering you the best products customized specifically to your needs.</p>
            </div>
            
            <div className="col-xl-12 col-md-12 col-sm-12">
                <img className='l1osf' src={frame} alt="frame" />
            </div>

        </div>
    )
}
