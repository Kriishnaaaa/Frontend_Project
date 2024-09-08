import React from 'react'
import pie from '../images/pie.png';


const Rectangle = () => {
    return (
        <>
            <div className="rectangle">
                <div className="rectangle__inner">
                    <p >Instant Dive into Your Performance Metrics<i class="fa-thin fa-briefcase-blank"></i></p>
                </div>
                <div className='rectangle_inner2'>
                    <button type="button" class="btn btn-secondary" >
                        Lifetime
                    </button>
                    <button type="button" class="btn btn-secondary" >
                        Last Week
                    </button>
                    <button type="button" class="btn btn-secondary" >
                        Last Month
                    </button>
                    <button type="button" class="btn btn-secondary" >
                        Last Year
                    </button>
                    <button type="button" class="btn btn-secondary" >
                        Customize Time Line<i class="fa-solid fa-briefcase"></i>
                    </button>
                </div>
                <div className='rectangle_2'>
                    <div className='rectangle_inner3'>
                        <div className='rec3a'>
                            <p>Shipment Updates</p>
                            <h2>Total Orders : 394</h2>
                        </div>
                        <div className='rec3b'>
                            <button type="button" class="btn1 btn-secondary" >
                                Delivered
                            </button>
                            <button type="button" class="btn btn-secondary" >
                                Out for delivery
                            </button>
                            <button type="button" class="btn btn-secondary" >
                                Intransit
                            </button>
                            <button type="button" class="btn btn-secondary" >
                                Pending
                            </button>
                            <button type="button" class="btn btn-secondary" >
                                Exception
                            </button>
                        </div>
                        <div className='rec_pie'>
                            <img src={pie}/>
                        </div>
                        <div className='rec3c'>
                            <div className='rec_col1'></div><p>Ecxeption</p>
                            <div className='rec_col2'></div><p>Intransit</p>
                            <div className='rec_col3'></div><p>Pending</p>
                        </div>
                        <div className='rec3d'>
                            <div className='rec_col1'></div><p>Delivered</p>
                            <div className='rec_col2'></div><p>Out for delivery</p>
                        </div>
                    </div>
                    <div className='rectangle_2a'>
                        <p>Star Facts about your orders!!!</p>
                        <h6>There are 8 shipments that have been in out for delivery for more than 3 days.
                            <br/>
                            <br/>
                            There are 5 shipments in exception right now
                            <br/>
                            <br/>
                            The maximum chargebacks are from Miami.
                        </h6>
                        <button>Checks Orders Page</button>
                    </div>
                    <div className='rectangle_3a'>
                        <h6>Tracking Page Views Vs Orders</h6>
                        <p>Understand user engagement patterns and optimize your tracking page for enhanced customer experiences.</p>
                        <div className='box1'>
                            <div className='box1_left'>
                                <h6>Orders</h6>
                                <p>80</p>
                            </div>
                            <div className='box1_right'><i className="fa-solid fa-briefcase"></i></div>
                        </div>
                        <div className='box2'>
                        <div className='box2_left'>
                            <h6>Tracking Page Views </h6>
                            <p>44</p>
                        </div>
                        <div className='box2_right'><i class="fa-solid fa-eye"></i></div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Rectangle