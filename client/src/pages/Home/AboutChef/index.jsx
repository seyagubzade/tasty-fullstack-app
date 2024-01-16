import React from "react";
import "./styles.scss"
const AboutChef = () => {
  return (
    <div className="about-chef">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6">
            <img
              src="https://preview.colorlib.com/theme/tasty/images/about-2.jpg.webp"
              alt="chef photo"
            />
          </div>
          <div className="col-12 col-md-6 col-lg-6">
            <div className="about-content p-5">
              <span className="section-header mb-3">ABOUT TASTY</span>
              <h3 className="mb-4">Our chef cooks the most delicious food for you</h3>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
                <br />A small river named Duden flows by their place and
                supplies it with the necessary regelialia. It is a paradisematic
                country, in which roasted parts of sentences fly into your
                mouth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutChef;
