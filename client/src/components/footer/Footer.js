import React from "react";
import "../footer/footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  //   console.log(year);

  return (
    <footer>
      <div className="footer_container">
        <div className="footr_details_one">
          <h3>Get to Know US</h3>
          <p>About us</p>
          <p>Careers</p>
          <p>Press Releases</p>
          <p>Amazon Cares</p>
        </div>
        <div className="footr_details_one">
          <h3>Connect with Us</h3>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
        <div className="footr_details_one forres">
          <h3>Make Money with Us</h3>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
        <div className="footr_details_one forres">
          <h3>More On </h3>
          <p>IMDB</p>
          <p>Movies&tv</p>
        </div>
      </div>
      <div className="lastdetails">
        <img src="./amazon_PNG25.png" alt="logo" />
        <p>
          Conditions of Use & Sale &nbsp; &nbsp;&nbsp; Privacy Notice &nbsp;
          &nbsp;&nbsp; Interest-Based Ads &nbsp; &nbsp;&nbsp; © 1995-{year},
          Amazon.com, Inc. or its affiliates
        </p>
      </div>
    </footer>
  );
};

export default Footer;
