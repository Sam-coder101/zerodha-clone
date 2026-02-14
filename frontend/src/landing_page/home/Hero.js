
import React from 'react'
function Hero() {
    return ( 
        <div className="container p-5">
            <div className="row text-center">   
                <img src="media/image/homeHero.png" alt="Hero Imag" className="mb-5"/>
                <h1 className="mt-5">Invest in everything </h1>
                <p>Start your investment journey with us today.</p>
                <button className="p-3 btn btn-primary"style={{width:"30%", margin:"0 auto"}}
                onClick={() => window.location.href = "https://zerodha-clone-dashboard-gamma.vercel.app/"}
                >Signup Now</button>
            </div>
        </div>
    );
}

export default Hero;