import React from "react";

const Home = () => {
  return (
    <div className="main">
      <h1>Welcome to Our Website</h1>
      <p>This is the home page content.</p>
      <div class="banner-image">
        <div>
          <img src="slider-1.jpg" alt="Slide 1" class="img-fluid" />
          <div class="banner__text">
            <div class="banner__subheading">QUALITY HIGHER EDUCATION</div>
            <div class="banner__heading">
              Any Successful Career Starts With Good Education
            </div>
          </div>
        </div>
        <div>
          <img src="slide-2.jpg" alt="Slide 2" class="img-fluid" />

          <img src="lide-2.jpg" alt="Slide 2" class="img-fluid" />

          <div class="banner__text">
            <div class="banner__subheading">CAMPUS COMMUNITY</div>
            <div class="banner__heading">
              Become a Part Of Our Campus and Make Friends
            </div>
          </div>
        </div>
        <div>
          <img src="slide-3.jpg" alt="Slide 3" class="img-fluid" />
          <div class="banner__text">
            <div class="banner__subheading">A VARIETY OF PROGRAMS</div>
            <div class="banner__heading">
              Providing Students With Professional Education
            </div>
          </div>
        </div>
      </div>
      <a class="whats-app" href="https://wa.me/+918789935189/" target="new">
      <i class="fa-brands fa-whatsapp"></i>
      </a>
      <a class="sms" href="">
      <i class="fa-regular fa-message"></i>
      </a>
    </div>
  );
};

export default Home;
