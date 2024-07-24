import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";

const About: FunctionComponent = () => {
  const navigate = useNavigate();

  const onBookAnAppointmentClick = useCallback(() => {
    navigate("/appointment");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutUsTextClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onServicesTextClick = useCallback(() => {
    navigate("/services");
  }, [navigate]);

  const onUitilityContainerClick = useCallback(() => {
    navigate("/404-page");
  }, [navigate]);

  const onContactUsTextClick = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  const onSearchIconClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="about1">
      <div className="banner-text1">
        <b className="our-team-helps">
          Our team helps you get your life back on track.
        </b>
        <div className="our-team-of7">{`Our team of highly trained professionals uses the latest healing technologies to restore you to pain-free health quickly and easily. We thoroughly evaluate & treat all of the contributing root factors related to your issue. Includes, but is not limit, your work and home stressors.`}</div>
      </div>
      <div className="sub-text8">
        <div className="the-leaders">THE LEADERS</div>
      </div>
      <div className="title16">
        <div className="we-have-the">{`We have the best Pharma & Medical`}</div>
      </div>
      <div className="collaboratively-administrate-e-container1">
        <p className="online-consultations-with">
          Collaboratively administrate empowered markets via plug-and-play
          networks. users after installed base benefits. Dramatically visualize
          customer.
        </p>
        <p className="online-consultations-with">&nbsp;</p>
        <p className="online-consultations-with">
          Completely synergize resource taxing relationships via premier niche
          markets. Professionally cultivate one-to-one customer service with
          robust ideas. Dynamically innovate.
        </p>
      </div>
      <div className="heading5">
        <div className="sub-text9">
          <div className="sub-text-item" />
          <div className="our-story">OUR STORY</div>
        </div>
        <div className="title17">
          <div className="our-mission-is">
            Our mission is to help patients live better
          </div>
        </div>
      </div>
      <div className="collaboratively-administrate-e-container2">
        <p className="online-consultations-with">
          Collaboratively administrate empowered markets via plug-and-play
          networks. users after installed base benefits. Dramatically visualize
          customer.
        </p>
        <p className="online-consultations-with">&nbsp;</p>
      </div>
      <div className="over-400-leading-container">
        <ul className="over-400-leading-hospitals-and">
          <li>Over 400 leading hospitals and clinics</li>
        </ul>
      </div>
      <div className="trusted-doctors-across-container">
        <ul className="over-400-leading-hospitals-and">
          <li>Trusted doctors across 20+ specialties</li>
        </ul>
      </div>
      <div className="award-winning-practice-managem-container">
        <ul className="over-400-leading-hospitals-and">
          <li>Award-winning practice management</li>
        </ul>
      </div>
      <img className="video-icon" alt="" src="/video@2x.png" />
      <div className="cta1">
        <img className="background-icon1" alt="" src="/background1@2x.png" />
        <div className="text17">
          <div className="heading6">
            <div className="title18">
              <div className="online-consultations-with-container">
                <p className="online-consultations-with">
                  Online consultations with
                </p>
                <p className="online-consultations-with">Certified doctors</p>
              </div>
            </div>
          </div>
          <div className="button12">
            <div className="button13">
              <div
                className="book-an-appointment2"
                onClick={onBookAnAppointmentClick}
              >
                Book an Appointment
              </div>
            </div>
            <div className="or">(OR)</div>
            <div className="button14">
              <div className="call-1-800-123-9999">Call: 1-800-123-9999</div>
            </div>
          </div>
        </div>
      </div>
      <div className="value">
        <div className="text18">
          <b className="our-values-that">Our values that drive success</b>
          <div className="our-team-of8">{`Our team of highly trained professionals uses the latest healing technologies to restore you to pain-free health quickly and easily. We thoroughly evaluate & treat all of the contributing root factors related to your issue. Includes, but is not limit, your work and home stressors.`}</div>
        </div>
      </div>
      <img className="photo-icon" alt="" src="/photo@2x.png" />
      <div className="photo" />
      <div className="home-about">{`Home > About Us`}</div>
      <div className="about-us2">About Us</div>
      <div className="about-child" />
      <img className="search-icon1" alt="" src="/search.svg" />
      <div className="parent1">
        <div className="div20">
          <img className="icon18" alt="" src="/icon4.svg" />
          <div className="text19">
            <div className="bio-technology">Bio Technology</div>
            <div className="our-team-of9">
              Our team of highly trained professionals uses the latest healing
              technologies.
            </div>
          </div>
        </div>
        <div className="div21">
          <img className="icon18" alt="" src="/icon5.svg" />
          <div className="text19">
            <div className="bio-technology">Vaccine</div>
            <div className="our-team-of9">
              Our team of highly trained professionals uses the latest healing
              technologies.
            </div>
          </div>
        </div>
        <div className="div22">
          <img className="icon18" alt="" src="/icon6.svg" />
          <div className="text19">
            <div className="bio-technology">Expert Doctors</div>
            <div className="our-team-of11">
              Our team of highly trained professionals uses the latest healing
              technologies.
            </div>
          </div>
        </div>
        <div className="div22">
          <img className="icon18" alt="" src="/icon7.svg" />
          <div className="text19">
            <div className="bio-technology">Latest Technology</div>
            <div className="our-team-of11">
              Our team of highly trained professionals uses the latest healing
              technologies.
            </div>
          </div>
        </div>
      </div>
      <div className="content11">
        <img className="background-icon2" alt="" src="/background2.svg" />
        <div className="copyright-pharma1">
          Copyright © Pharma | Designed by EWNS
        </div>
        <div className="content12">
          <div className="div24">
            <div className="logo1">
              <div className="icon22">
                <div className="icon-inner" />
                <div className="rectangle-div" />
                <img className="intersect-icon1" alt="" src="/intersect.svg" />
              </div>
              <div className="pharma1">Pharma</div>
            </div>
            <div className="contact-details1">
              <div className="call1">
                <div className="div25">(+22) 123 - 4567 - 900</div>
                <div className="call-item" />
                <img className="vector-icon4" alt="" src="/vector1.svg" />
              </div>
              <div className="mail1">
                <div className="div25">support@doctorate.com</div>
                <div className="call-item" />
                <img className="vector-icon5" alt="" src="/vector2.svg" />
              </div>
              <div className="follow4">
                <img className="fb-icon4" alt="" src="/fb2.svg" />
                <img className="insta-icon2" alt="" src="/insta1.svg" />
                <img className="twiter-icon4" alt="" src="/twiter2.svg" />
              </div>
            </div>
          </div>
          <div className="div26">
            <div className="quotes2">
              <div className="quotes3">
                <div className="a-simple-story-container1">
                  <p className="online-consultations-with">
                    “A Simple Story About
                  </p>
                  <p className="online-consultations-with">{`The Doctorate Medical Center & Health Care Foundation`}</p>
                </div>
              </div>
            </div>
            <div className="explore2">
              <div className="explore3">Explore</div>
              <div className="home2" onClick={onHomeTextClick}>
                Home
              </div>
              <div className="home2" onClick={onAboutUsTextClick}>
                About us
              </div>
              <div className="home2" onClick={onServicesTextClick}>
                Services
              </div>
              <div className="testimonals1">Testimonals</div>
              <div className="news1">News</div>
            </div>
            <div className="uitility1" onClick={onUitilityContainerClick}>
              <div className="bio-technology">Uitility Pages</div>
              <div className="style-guide-changelog-container1">
                <p className="online-consultations-with">Style Guide</p>
                <p className="online-consultations-with">Changelog</p>
                <p className="online-consultations-with">Licenses</p>
                <p className="online-consultations-with">Protected Page</p>
                <p className="online-consultations-with">404 Page</p>
              </div>
            </div>
            <div className="appoinment1">
              <div className="text23">
                <div className="bio-technology">Book an appointment</div>
                <div className="it-is-a1">
                  It is a long established fact that a reader will be distracted
                </div>
              </div>
              <div className="button15">
                <div className="bg1" />
                <div className="your-email-address1">your email address</div>
              </div>
              <div className="button16">
                <div className="submit1">Submit</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rectangle-container">
        <div className="frame-child1" data-scroll-to="rectangle" />
        <div className="frame-child2" />
        <div className="top-bar1">
          <div className="background" />
          <div className="welcome-to-pharma1">
            Welcome to Pharma. We provides medical accessories
          </div>
          <div className="div27">(404) 850 - 7080</div>
          <img className="icon23" alt="" src="/icon8.svg" />
          <div className="abcgmailcom1">abc@gmail.com</div>
          <img className="icon24" alt="" src="/icon9.svg" />
        </div>
        <div className="menu-container">
          <div className="menu1">
            <div className="home3" onClick={onHomeTextClick}>
              Home
            </div>
            <div className="about2" onClick={onAboutUsTextClick}>
              About
            </div>
            <div className="about2" onClick={onServicesTextClick}>
              Services
            </div>
            <div className="pages1">Pages</div>
            <div className="dropdown1">
              <div className="button17">
                <img className="icon25" alt="" src="/icon2.svg" />
              </div>
            </div>
            <div className="about2" onClick={onContactUsTextClick}>
              Contact Us
            </div>
          </div>
        </div>
        <div className="book-appointment-container">
          <div className="book-appointment2" onClick={onBookAnAppointmentClick}>
            Book Appointment
          </div>
        </div>
      </div>
      <div className="about-inner">
        <img className="group-icon" alt="" src="/group-71.svg" />
      </div>
      <div className="about-item" />
      <img
        className="search-icon2"
        alt=""
        src="/search.svg"
        onClick={onSearchIconClick}
      />
    </div>
  );
};

export default About;
