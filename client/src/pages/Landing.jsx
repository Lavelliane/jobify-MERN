import React from "react";
import { Logo } from '../components'
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            Job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
            adipisci eligendi maxime facere ea ullam, voluptatem, quisquam
            soluta ex, recusandae quia. Cum velit voluptates tenetur
            consequuntur itaque molestiae, dolorum obcaecati.
          </p>
          <Link to='/register' className="btn btn-hero">Login/Register</Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img"/>
      </div>
    </Wrapper>
  );
}


export default Landing;
