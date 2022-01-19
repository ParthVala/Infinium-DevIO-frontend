import React from 'react'
import people from '../../../images/Picture.png'
import frame from '../../../images/Layer 4.png'
import './Layer3os.css'

export default function Layer3os() {
    return (
        <div>
            <div className="l3osall">

                <div>
                    <h2 className="l3osh">Our Clients Speak</h2>
                    <p className="l3osp">We have been working with clients around the world</p>
                </div>

                <div className="l3a row">
                    <div className="col-xl-4 col-sm-12">

                        <div className="b1">
                            <h4 className='l3osh1'>Efficient Collaborating</h4>
                            <p className='l3osp1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.</p>
                            <div className="review">
                                <img src={people} alt="" />
                                <h5>Jane Cooper</h5>
                                <p>CEO at ABC Corporation</p>
                            </div>
                        </div>
                    
                    </div>

                    <div className="col-xl-4 col-sm-12">

                        <div className="b1">
                            <h4 className='l3osh1'>Intuitive Design</h4>
                            <p className='l3osp1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.</p>
                            <div className="review">    
                                <img src={people} alt="" />
                                <h5>Jane Cooper</h5>
                                <p>CEO at ABC Corporation</p>
                            </div>
                        </div>
                    
                    </div>

                    <div className="col-xl-4 col-sm-12">

                        <div className="b1">
                            <h4 className='l3osh1'>Mindblowing Service</h4>
                            <p className='l3osp1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.</p>
                            <div className="review">
                                <img src={people} alt="" />
                                <h5>Jane Cooper</h5>
                                <p>CEO at ABC Corporation</p>
                            </div>
                        </div>               

                    </div>
                </div>

                <div className='dot'>
                    <h2>...</h2>
                </div>

                <div>
                    <img className='l3osf' src={frame} alt="frame" />
                </div>

            </div>
        </div>
    )
}
