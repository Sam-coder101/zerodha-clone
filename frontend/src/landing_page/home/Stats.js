import React from 'react'
function Stats() {
    return (    
        <div className="container mt-3 p-3">
            <div className="row">
                <div className="col-6">
                    <h2> Trust with Confidence</h2>
                    <p className="text-muted">We are proud to be trusted by over 2 million clients in India. Our commitment to transparency, security, and customer satisfaction has made us one of the most reliable brokers in the country. Join our growing community of investors and experience the difference.</p>
                    
                    <h2>No spam or gimmicks</h2>
                    <p className="text-muted">No spam or gimmicks here. We believe in honest and transparent communication with our clients, ensuring you receive only valuable and relevant information.</p>
                     
                    <h2>The zerodha Universe</h2>
                    <p className="text-muted">Zerodha offers a comprehensive ecosystem of financial products and services designed to empower investors and traders. From our trading platform to educational resources, we provide everything you need to succeed in the financial markets.</p>
                    </div>
                    
                    <div className="col-6">
                        <img src="media/image/ecosystem.png" alt="" style={{width:"80%"}}/>
                        <div className="text-center mt-3 p-5">
                            {/* <a herf=''>Explore our products</a>
                            <a herf=''>Try kit</a> */}
                        </div>
                    
                </div>
            </div>
        </div>
     );
}

export default Stats;