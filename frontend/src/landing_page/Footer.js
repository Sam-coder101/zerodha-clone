import React from 'react'

function Footer() {
    return ( 
        <div className="container" style={{marginTop:"50px", marginBottom:"50px"}}>
            <div className="row">
                <div className="col">
                    <img src="media/image/logo.svg" alt="Logo" style={{width:"60%"}}/>
                </div>
                <div className="col">
                    <p>Company</p>
                    <a href="/about" style={{textDecoration:"none"}}>About</a><br/>
                    <a href="/philosophy" style={{textDecoration:"none"}}>Philosophy</a><br/>
                    <a href="/press" style={{textDecoration:"none"}}>Press & media</a><br/>
                    <a href="/careers" style={{textDecoration:"none"}}>Careers</a><br/>
                    <a href="/zerodha-cares" style={{textDecoration:"none"}}>Zerodha Cares (CSR)</a><br/>
                    <a href="/zerodha-tech" style={{textDecoration:"none"}}>Zerodha.tech</a><br/>
                    <a href="/open-source" style={{textDecoration:"none"}}>Open source</a><br/>
                </div>
                <div className="col">
                    <p>Support</p>
                    <a href="/support-portal" style={{textDecoration:"none"}}>Support portal</a><br/>
                    <a href="/contact-us" style={{textDecoration:"none"}}>Contact us</a><br/>
                    <a href="/file-complaint" style={{textDecoration:"none"}}>How to file a complaint?</a><br/>
                    <a href="/complaint-status" style={{textDecoration:"none"}}>Status of your complaints</a><br/>
                    <a href="/bulletin" style={{textDecoration:"none"}}>Bulletin</a><br/>
                    <a href="/circular" style={{textDecoration:"none"}}>Circular</a><br/>
                    <a href="/z-connect-blog" style={{textDecoration:"none"}}>Z-Connect blog</a><br/>
                    <a href="/downloads" style={{textDecoration:"none"}}>Downloads</a>

                </div>
                <div className="col">
                    <p>Account</p>
                    
                    <a href="/open-demat-account" style={{textDecoration:"none"}}>Open demat account</a><br/>
                    <a href="/minor-demat-account" style={{textDecoration:"none"}}>Minor demat account</a><br/>
                    <a href="/nri-demat-account" style={{textDecoration:"none"}}>NRI demat account</a><br/>
                    <a href="/commodity" style={{textDecoration:"none"}}>Commodity</a><br/>
                    <a href="/dematerialisation" style={{textDecoration:"none"}}>Dematerialisation</a><br/>
                    <a href="/fund-transfer" style={{textDecoration:"none"}}>Fund transfer</a> <br/>  
                    <a href="/mtf" style={{textDecoration:"none"}}>MTF</a><br/>
                    <a href="/referral-program" style={{textDecoration:"none"}}>Referral program</a><br/>

                </div>
                <div className="col"></div>
            </div>
        </div>
     );
}

export default Footer;