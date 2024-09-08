import React from 'react'

const Middle = () => {
    return (<>
        <div className=' mid  '>Welcome, John Mathew</div>
        <div className='card'>
            <div className="card1" >
                    <div class="card-body">
                        <h5 class="card-title">Order Sync successfull</h5>
                        <p class="card-text">Your order details from the last 30 days have been successfully synced.Check them out now</p>
                        <button className="btn btn-primary">Explore Your Orders</button>
                    </div>
            </div>
            </div>
            <div className="card2" >
                    <div class="card-body">
                        <h5 class="card-title"><i class="fa-solid fa-triangle-exclamation"></i> Customize Customer Notification</h5>
                        <p class="card-text">Tailor Your Email Experience: Set the Sender Email and Choose Notification Triggers</p>
                        <button className="btn btn-primary">Configure Notifications</button>
                </div>
            </div>
            <div className="card3" >  
                    <div class="card-body">
                        <h5 class="card-title"><i class="fa-solid fa-circle-info"></i> Your Tracking Link has been generated</h5>
                        <p class="card-text">Include the <span ><a href='#'>Link</a></span> to Your Store's Navigation Menu.</p>
                        <button className='btn1'>Copy Link</button>
                        <button className="btn btn-primary">Go To Navigation Menu</button>
                </div>
            </div>
        
    </>
    )
}

export default Middle