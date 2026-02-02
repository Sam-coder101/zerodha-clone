import React from "react";
import { Link } from "react-router-dom";
function Team() {
  return (
    <div className="container">
      <div className="row p-5">
        <h1 className="fs-4 text-center">People</h1>
        <div className="col-6">
          <img
            src="media/image/nithinKamath.jpg"
            alt="Team"
            style={{ borderRadius: "50%" }}
          />
          <h4 className="px-5 ">Nithin Kamath</h4>
          <p className="px-5 ">Founder & CEO</p>
        </div>
        <div className="col-6 mt-4">
          <p>
            
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry. He
            is a member of the SEBI Secondary Market Advisory Committee (SMAC)
            and the Market Data Advisory Committee (MDAC). Playing basketball is
            his zen.{" "}
          </p>
          <p className="">Connect on <Link to="/" style={{textDecoration:"none"}}>Homepage</Link> / <Link to="" style={{textDecoration:"none"}} >TradingQnA </Link>/ <Link to="" style={{textDecoration:"none"}}>Twitter</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Team;
