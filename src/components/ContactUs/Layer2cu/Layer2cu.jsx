import React from 'react'
import sidepic from '../../../images/Group 124.png'
import './Layer2cu.css'

export default function Layer2cu() {
    return (
        <div>
            
            <div className="container-fluid">

                <div className="row">

                    <div className="col-xl-6 col-sm-12">
                        <div className="one-img">
                            <img className='l2cupic img-fluid' src={sidepic} alt="sidepic" />
                        </div>
                    </div>

                    <div className="col-xl-6 col-sm-12">
                        <h2 className='l2cuh p-2'>Get in touch</h2>
                        <form className='fo'>
                            <div class="form-group p-2">
                                <label className='l2cula'>Name*</label>
                                <input type="text" class="form-control inall" placeholder="your name" autoComplete='off' />
                            </div>
                            <div class="form-group p-2">
                                <label className='l2cula'>Email*</label>
                                <input type="email" class="form-control inall" placeholder="example@gmail.com" autoComplete='off' />
                            </div>
                            <div class="form-group p-2">
                                <label className='l2cula'>Department*</label>
                                <input type="text" class="form-control inall" placeholder="please select" autoComplete='off' />
                            </div>
                            <div class="form-group p-2">
                                <label className='l2cula'>Time*</label>
                                <input type="text" class="form-control inall" placeholder="4:00 Available" autoComplete='off' />
                            </div>
                            <div className="form-group p-2">
                                <button type="submit" class="btn btn-warning buton">Book Your Appointment</button>
                            </div>
                        </form>
                    </div>

                </div>

            </div>

        </div>
    )
}
