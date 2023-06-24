import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="landing">
      <div className="left">
        <div className="logo">
          <img src="logo.png" alt="logo in login page above title"/>
        </div>

        <div className="title-large">Blockchain Based</div>
        <div className="title-large">Voting System</div>
        <div className="title-small">the future of voting</div>

        <div className="button-wrapper">
          <Link to="/login">
            <button>Login</button>
          </Link>

          {/* <Link to="/view">
            <button>View Votes</button>
          </Link> */}
        </div>
      </div>

      <div className="right">
        <img src="vote.gif" alt="gif in login page" />
      </div>
    </div>
  );
};

export default Landing;
