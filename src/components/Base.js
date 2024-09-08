import React from 'react'
import front1 from "../images/front1.png";

const Base = () => {
    return (
        <>
            <div className='container'>
                <h3>Discover the Heart of Our Functionality</h3>
                <div className='container_1'>
                    <div className='box_left'>
                        <div className='box_left_inner'>
                            <h6>Elevate Your Brand Aesthetics with Custom Tracking Page Styles</h6>
                            <p>Immerse your customers in a branded experience by personalizing the colors on your tracking page. </p>
                        </div>
                        <div className='box_left_1'>
                            <h6>Accent Color</h6>
                            <div className='box_left_2'>
                                <input placeholder='FF9898' />
                                <div className='col1'></div>
                            </div>
                        </div>
                        <br />
                        <div className='box_left_1'>
                            <h6>Text Color</h6>
                            <div className='box_left_2'>
                                <input placeholder='571010' />
                                <div className='col2'></div>
                            </div>
                        </div>
                        <br />
                        <div className='box_left_1'>
                            <h6>Background Color</h6>
                            <div className='box_left_2'>
                                <input placeholder='FFEAEA' />
                                <div className='col3'></div>
                            </div>
                        </div>
                        <div className='btn'>
                            <button>Preview</button>
                            <button className='btn1'>Apply Colors</button>
                        </div>
                    </div>
                    <div>
                        <div className='box_mid_1'>
                            <h6>Exclusive Onboarding Support for High-Volume Brands</h6>
                            <p>Unlock personalized guidance! Book a one-on-one onboarding call to streamline your experience.</p>
                            <button>Schedule a call</button>
                        </div>
                        <div className='box_mid_2'>
                            <h6>Explore Our Integrated Ecosystem</h6>
                            <p>Discover a variety of popular integrations tailored for your convenience. </p>
                            <div>
                                <div className='box_mid_3'>
                                    <img  src={front1} alt='My imgae'/>
                                </div>
                            </div>
                            <button>Explore Integrations</button>
                        </div>

                    </div>
                    <div className='box_right'>
                        <div className='box_right_1'>
                            <h6>Seamlessly Integrate Custom HTML Elements</h6>
                            <p>Unleash creativity with our Custom HTML feature. Add links, custom messages, or any HTML content to elevate the tracking page experience for your customers.</p>
                        </div>
                        <div className='box_right_2'>
                            <h6>HTML Link</h6>
                            <input placeholder='Value' />
                        </div>
                        <div className='btn'>
                            <button>Preview</button>
                            <button className='btn1'>Apply Changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Base