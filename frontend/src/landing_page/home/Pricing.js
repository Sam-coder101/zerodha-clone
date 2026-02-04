import React from 'react'
import { Link } from 'react-router-dom';
function Pricing() {
    return ( 
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <h1>Unbeatable Pricing</h1>
                    <p>pricing details will be here</p>
                    <Link to="/pricing">See Pricing</Link>
                </div>
                <div className="col-2"></div>
                <div className="col-6">
                    <div className="row">
                        <div className='col p-2 border'>
                            <h1> ₹0</h1>
                            <p>Free equity delivery trades</p>
                        </div>
                        <div className='col p-2 border'>
                            <h1> ₹20 </h1>
                            <p>Intraday & F&O trades</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
     );
}

export default Pricing;