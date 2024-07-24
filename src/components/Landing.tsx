import { FunctionComponent, useState, useCallback } from "react";
import Frame from "./Frame";
import PortalPopup from "./PortalPopup";
import { useNavigate } from "react-router-dom";
import Component1 from "./Component1";
import Component from "./Component";
import "./Landing.css";

const Landing: FunctionComponent = () => {
  const [isFrameOpen, setFrameOpen] = useState(false);
  const navigate = useNavigate();

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  const onButtonContainerClick = useCallback(() => {
    navigate("/blog");
  }, [navigate]);

  const onContainerClick = useCallback(() => {
    navigate("/medical-experts");
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

  const onBookAppointmentTextClick = useCallback(() => {
    navigate("/appointment");
  }, [navigate]);

  return (
    <>
      <div className="landing">
        <div className="banner">
          <img className="image-icon" alt="" src="/image@2x.png" />
          <div className="banner-text">
            <div className="sub-text">
              <div className="medical-professionals">MEDICAL PROFESSIONALS</div>
            </div>
            <div className="title-wrapper">
              <div className="title">
                <b className="makes-your-health">
                  Makes Your Health Better Will Makes Us Better
                </b>
                <div className="our-team-of">
                  Our team of highly trained professionals uses the latest
                  healing technologies to restore you to pain-free health
                  quickly and easily.
                </div>
                <div className="button" onClick={openFrame}>
                  <div className="book-appointment">Book Appointment</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="button1" onClick={onButtonContainerClick}>
          <div className="know-more">Know More</div>
        </div>
        <div className="heading">
          <div className="sub-text1">
            <div className="departments">departments</div>
          </div>
          <div className="title1">
            <div className="feel-like-home">
              Feel Like Home With Best Medical Care
            </div>
          </div>
        </div>
        <div className="heading1">
          <div className="sub-text2">
            <div className="medical-professionals">ABOUT US</div>
          </div>
          <div className="title2">
            <div className="we-provide-a">
              We provide a best care for your health with specialist
            </div>
          </div>
        </div>
        <div className="collaboratively-administrate-e-container">
          <p className="collaboratively-administrate-e">
            <span className="collaboratively-administrate-e1">{`Collaboratively administrate empowered markets via plug-and-play networks. `}</span>
            <b className="dynamically-procrastinate-b2c">
              Dynamically procrastinate B2C
            </b>
            <span>
              {" "}
              users after installed base benefits. Dramatically visualize
              customer.
            </span>
          </p>
          <p className="collaboratively-administrate-e">&nbsp;</p>
          <p className="collaboratively-administrate-e">
            Completely synergize resource taxing relationships via premier niche
            markets. Professionally cultivate one-to-one customer service with
            robust ideas. Dynamically innovate.
          </p>
        </div>
        <div className="parent">
          <div className="div">
            <img className="vector-icon" alt="" src="/vector.svg" />
            <div className="years-of-excellence">20+ years of excellence</div>
          </div>
          <div className="div">
            <img className="vector-icon" alt="" src="/vector.svg" />
            <div className="years-of-excellence">Professional Experts</div>
          </div>
        </div>
        <div className="image">
          <div className="img">
            <img className="icon" alt="" src="/2@2x.png" />
            <img className="icon1" alt="" src="/1@2x.png" />
            <div className="name">
              <div className="mark-broownn">Mark Broownn</div>
              <div className="multispecialist">Multispecialist</div>
            </div>
          </div>
        </div>
        <div className="cta">
          <div className="rectangle-parent">
            <div className="group-child" />
            <img className="mask-group-icon" alt="" src="/mask-group.svg" />
            <div className="heading2">
              <div className="title3">
                <b className="schedule-an-imperson">
                  Schedule an imperson or virtual appointment today
                </b>
                <div className="button2">
                  <div className="book-an-appointment" onClick={openFrame}>
                    Book an Appointment
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text">
          <div className="sub-text3">
            <div className="medical-professionals">TESTIMONIALS</div>
          </div>
          <div className="title4">
            <div className="feedbacks-about-our">
              Feedbacks about our service from the bottom of heart
            </div>
          </div>
        </div>
        <div className="group">
          <div className="div2">
            <div className="profile">
              <div className="text1">
                <img className="image-icon1" alt="" src="/image1@2x.png" />
                <div className="name1">
                  <div className="dental-patient">Dental Patient</div>
                  <div className="robert-davis">Robert Davis</div>
                </div>
              </div>
              <img className="icon2" alt="" src="/.svg" />
            </div>
            <div className="line" />
            <div className="text2">
              <div className="completely-synergize-resource1">
                Completely synergize resource taxing relationships via premier
                niche markets. Professionally cultivate one-to-one customer
                service with robust ideas. Dynamically innovate.
              </div>
              <div className="star">
                <img className="star-child" alt="" src="/star-1.svg" />
                <img className="star-child" alt="" src="/star-2.svg" />
                <img className="star-child" alt="" src="/star-3.svg" />
                <img className="star-child" alt="" src="/star-4.svg" />
                <img className="star-child" alt="" src="/star-5.svg" />
              </div>
            </div>
          </div>
          <div className="div3">
            <div className="profile1">
              <div className="text1">
                <img className="image-icon2" alt="" src="/image2@2x.png" />
                <div className="name2">
                  <div className="dental-patient">Dental Patient</div>
                  <div className="vanseena-adams">Vanseena Adams</div>
                </div>
              </div>
              <img className="icon2" alt="" src="/.svg" />
            </div>
            <div className="line1" />
            <div className="text4">
              <div className="completely-synergize-resource2">
                Completely synergize resource taxing relationships via premier
                niche markets. Professionally cultivate one-to-one customer
                service with robust ideas. Dynamically innovate.
              </div>
              <div className="star1">
                <img className="star-child" alt="" src="/star-1.svg" />
                <img className="star-child" alt="" src="/star-2.svg" />
                <img className="star-child" alt="" src="/star-3.svg" />
                <img className="star-child" alt="" src="/star-4.svg" />
                <img className="star-child" alt="" src="/star-5.svg" />
              </div>
            </div>
          </div>
          <div className="div4">
            <div className="profile">
              <div className="text1">
                <img className="image-icon1" alt="" src="/image3@2x.png" />
                <div className="name3">
                  <div className="dental-patient">Dental Patient</div>
                  <div className="mark-brown">Mark Brown</div>
                </div>
              </div>
              <img className="icon2" alt="" src="/.svg" />
            </div>
            <div className="line" />
            <div className="text2">
              <div className="completely-synergize-resource1">
                Completely synergize resource taxing relationships via premier
                niche markets. Professionally cultivate one-to-one customer
                service with robust ideas. Dynamically innovate.
              </div>
              <div className="star">
                <img className="star-child" alt="" src="/star-1.svg" />
                <img className="star-child" alt="" src="/star-2.svg" />
                <img className="star-child" alt="" src="/star-3.svg" />
                <img className="star-child" alt="" src="/star-4.svg" />
                <img className="star-child" alt="" src="/star-5.svg" />
              </div>
            </div>
          </div>
          <div className="div5">
            <div className="profile">
              <div className="text1">
                <img className="image-icon1" alt="" src="/image4@2x.png" />
                <div className="name4">
                  <div className="dental-patient">Dental Patient</div>
                  <div className="mark-brown">Vanseena Adams</div>
                </div>
              </div>
              <img className="icon2" alt="" src="/.svg" />
            </div>
            <div className="line" />
            <div className="text2">
              <div className="completely-synergize-resource1">
                Completely synergize resource taxing relationships via premier
                niche markets. Professionally cultivate one-to-one customer
                service with robust ideas. Dynamically innovate.
              </div>
              <div className="star">
                <img className="star-child" alt="" src="/star-1.svg" />
                <img className="star-child" alt="" src="/star-2.svg" />
                <img className="star-child" alt="" src="/star-3.svg" />
                <img className="star-child" alt="" src="/star-4.svg" />
                <img className="star-child" alt="" src="/star-5.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className="team">
          <div className="content">
            <div className="team1">
              <div className="title5">
                <div className="text9">
                  <div className="heading3">
                    <div className="sub-text4">
                      <div className="medical-experts">{`MEDICAL EXPERTs `}</div>
                    </div>
                    <div className="title2">
                      <div className="the-professional-doctors">
                        The Professional Doctors
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content1">
                <div className="div6" onClick={onContainerClick}>
                  <div className="image1">
                    <img className="image-icon5" alt="" src="/image5@2x.png" />
                  </div>
                  <div className="text10">
                    <div className="dr-helen-wilmore">Vanseena Adams</div>
                    <div className="dental-patient4">Dental Patient</div>
                  </div>
                  <div className="follow">
                    <img className="insta-icon" alt="" src="/insta.svg" />
                    <img className="fb-icon" alt="" src="/fb.svg" />
                    <img className="twiter-icon" alt="" src="/twiter.svg" />
                  </div>
                </div>
                <div className="div7">
                  <div className="image2">
                    <img className="image-icon5" alt="" src="/image6@2x.png" />
                  </div>
                  <div className="text11">
                    <div className="dr-helen-wilmore">Dr. Helen Wilmore</div>
                    <div className="dental-patient4">Dental Patient</div>
                  </div>
                  <div className="follow1">
                    <img className="fb-icon" alt="" src="/fb1.svg" />
                    <img className="twiter-icon" alt="" src="/twiter1.svg" />
                  </div>
                </div>
                <div className="div8">
                  <img className="image-icon5" alt="" src="/image7@2x.png" />
                  <div className="text11">
                    <div className="dr-helen-wilmore">Dr. Kate Winslot</div>
                    <div className="dental-patient4">Dental Patient</div>
                  </div>
                  <div className="follow1">
                    <img className="fb-icon" alt="" src="/fb1.svg" />
                    <img className="twiter-icon" alt="" src="/twiter1.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className="counter">
              <div className="line4" />
              <div className="content2">
                <Component1 prop="25" years="Years " experience="Experience" />
                <Component1
                  prop="893"
                  years="Medicament"
                  experience=" Invented
"
                  propWidth="161.9px"
                />
                <Component1
                  prop="75"
                  years="Awards"
                  experience="Winned"
                  propWidth="116.4px"
                />
                <Component1
                  prop="673 k"
                  years="Happy"
                  experience=" Clients"
                  propWidth="118.5px"
                />
                <Component1
                  prop="751"
                  years="Pharmacies"
                  experience=" Partners"
                  propWidth="160.4px"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="heading4">
          <div className="text13">
            <div className="sub-text5">
              <div className="sub-text-child" />
              <div className="news-update">News Update</div>
            </div>
            <div className="title7">
              <div className="latest-healthcare-articles">
                Latest Healthcare Articles
              </div>
            </div>
          </div>
        </div>
        <div className="read-all-news">Read All News</div>
        <Component
          image="/image8@2x.png"
          openLetterToTheResidentsO="Open letter to the residents of Ellsworth, Maine
"
        />
        <div className="div9">
          <img className="image-icon8" alt="" src="/image9@2x.png" />
          <div className="text14">
            <div className="sub-text6">
              <div className="departments">18 August 2023</div>
            </div>
            <div className="title8">
              <div className="what-is-a">
                What is a normal phenotype for aging mice?
              </div>
            </div>
          </div>
        </div>
        <Component
          image="/image10@2x.png"
          openLetterToTheResidentsO="It was popularised inner the with the release of containing."
          propTop="5122px"
          propLeft="53px"
        />
        <Component
          image="/image11@2x.png"
          openLetterToTheResidentsO="The Versatile Mouse Model for Rare Disease Research"
          propTop="5127px"
          propLeft="734px"
        />
        <div className="layout-4">
          <div className="container">
            <div className="row">
              <div className="main-content">
                <div className="text15">
                  <div className="sub-text7">
                    <div className="medical-professionals">NEWSLETTER</div>
                  </div>
                  <div className="title9">
                    <div className="join-us">JOIN US</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row-sec-">
              <div className="col-md-8">
                <div className="subscribe">
                  <div className="input-group">
                    <div className="form-control-input-style-1">
                      <div className="your-email">Your Email</div>
                    </div>
                    <div className="input-group-append">
                      <div className="btn">
                        <div className="input-group-text">Subscribe</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content3">
          <img className="background-icon" alt="" src="/background.svg" />
          <div className="copyright-pharma">
            Copyright © Pharma | Designed by EWNS
          </div>
          <div className="content4">
            <div className="div10">
              <div className="logo">
                <div className="icon6">
                  <div className="icon-child" />
                  <div className="icon-item" />
                  <img className="intersect-icon" alt="" src="/intersect.svg" />
                </div>
                <div className="pharma">Pharma</div>
              </div>
              <div className="contact-details">
                <div className="call">
                  <div className="supportdoctoratecom">
                    (+22) 123 - 4567 - 900
                  </div>
                  <div className="call-child" />
                  <img className="vector-icon2" alt="" src="/vector1.svg" />
                </div>
                <div className="mail">
                  <div className="supportdoctoratecom">
                    support@doctorate.com
                  </div>
                  <div className="call-child" />
                  <img className="vector-icon3" alt="" src="/vector2.svg" />
                </div>
                <div className="follow3">
                  <img className="fb-icon3" alt="" src="/fb2.svg" />
                  <img className="insta-icon1" alt="" src="/insta1.svg" />
                  <img className="twiter-icon3" alt="" src="/twiter2.svg" />
                </div>
              </div>
            </div>
            <div className="div12">
              <div className="quotes">
                <div className="quotes1">
                  <div className="a-simple-story-container">
                    <p className="collaboratively-administrate-e">
                      “A Simple Story About
                    </p>
                    <p className="collaboratively-administrate-e">{`The Doctorate Medical Center & Health Care Foundation`}</p>
                  </div>
                </div>
              </div>
              <div className="explore">
                <div className="explore1">Explore</div>
                <div className="home">Home</div>
                <div className="services" onClick={onAboutUsTextClick}>
                  About us
                </div>
                <div className="services" onClick={onServicesTextClick}>
                  Services
                </div>
                <div className="testimonals">Testimonals</div>
                <div className="home">News</div>
              </div>
              <div className="uitility" onClick={onUitilityContainerClick}>
                <div className="dr-helen-wilmore">Uitility Pages</div>
                <div className="style-guide-changelog-container">
                  <p className="collaboratively-administrate-e">Style Guide</p>
                  <p className="collaboratively-administrate-e">Changelog</p>
                  <p className="collaboratively-administrate-e">Licenses</p>
                  <p className="collaboratively-administrate-e">
                    Protected Page
                  </p>
                  <p className="collaboratively-administrate-e">404 Page</p>
                </div>
              </div>
              <div className="appoinment">
                <div className="text16">
                  <div className="dr-helen-wilmore">Book an appointment</div>
                  <div className="it-is-a">
                    It is a long established fact that a reader will be
                    distracted
                  </div>
                </div>
                <div className="button3">
                  <div className="bg" />
                  <div className="your-email-address">your email address</div>
                </div>
                <div className="button4">
                  <div className="submit">Submit</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rectangle-group">
          <div className="frame-child" />
          <div className="top-bar">
            <div className="welcome-to-pharma">
              Welcome to Pharma. We provides medical accessories
            </div>
            <img className="icon7" alt="" src="/icon.svg" />
            <div className="div13">(404) 850 - 7080</div>
            <img className="icon7" alt="" src="/icon1.svg" />
            <div className="abcgmailcom">abc@gmail.com</div>
          </div>
          <div className="menu-wrapper">
            <div className="menu">
              <div className="home1">Home</div>
              <div className="about" onClick={onAboutUsTextClick}>
                About
              </div>
              <div className="about" onClick={onServicesTextClick}>
                Services
              </div>
              <div className="pages">Pages</div>
              <div className="dropdown">
                <div className="button5">
                  <img className="icon9" alt="" src="/icon2.svg" />
                </div>
              </div>
              <div className="about" onClick={onContactUsTextClick}>
                Contact Us
              </div>
            </div>
          </div>
          <div className="book-appointment-wrapper">
            <div
              className="book-appointment1"
              onClick={onBookAppointmentTextClick}
            >
              Book Appointment
            </div>
          </div>
          <div className="frame-item" />
          <img className="search-icon" alt="" src="/search.svg" />
          <div className="group-wrapper">
            <img className="frame-inner" alt="" src="/group-7.svg" />
          </div>
        </div>
        <div className="frame-div">
          <div className="div14">
            <div className="sub-content">
              <div className="sub-content">
                <div className="title10">
                  <div className="angioplasty">Angioplasty</div>
                  <img className="title-child" alt="" src="/frame-2484.svg" />
                </div>
                <div className="our-team-of1">
                  Our team of highl professionals uses the latest heal
                  echnologies health quickly and easily.
                </div>
              </div>
              <div className="button6">
                <div className="submit">Read More</div>
                <img className="icon10" alt="" src="/3.svg" />
              </div>
            </div>
          </div>
          <div className="div15">
            <div className="sub-content">
              <div className="sub-content">
                <div className="title11">
                  <div className="angioplasty">Cardiology</div>
                  <img className="title-child" alt="" src="/frame-2485.svg" />
                </div>
                <div className="our-team-of1">
                  Our team of highl professionals uses the latest heal
                  echnologies health quickly and easily.
                </div>
              </div>
              <div className="button6">
                <div className="submit">Read More</div>
                <img className="icon10" alt="" src="/4.svg" />
              </div>
            </div>
          </div>
          <div className="div16">
            <div className="sub-content">
              <div className="sub-content">
                <div className="title12">
                  <div className="angioplasty">Dental</div>
                  <img className="title-child" alt="" src="/frame-2486.svg" />
                </div>
                <div className="our-team-of1">
                  Our team of highl professionals uses the latest heal
                  echnologies health quickly and easily.
                </div>
              </div>
              <div className="button6">
                <div className="submit">Read More</div>
                <img className="icon10" alt="" src="/3.svg" />
              </div>
            </div>
          </div>
          <img className="image-icon9" alt="" src="/image12@2x.png" />
          <div className="div17">
            <div className="sub-content">
              <div className="sub-content">
                <div className="title13">
                  <div className="eye-care">Eye Care</div>
                  <img className="title-child" alt="" src="/frame-2483.svg" />
                </div>
                <div className="our-team-of1">
                  Our team of highl professionals uses the latest heal
                  echnologies health quickly and easily.
                </div>
              </div>
              <div className="button9">
                <div className="know-more">Read More</div>
                <img className="icon10" alt="" src="/3.svg" />
              </div>
            </div>
          </div>
          <img className="icon14" alt="" src="/11@2x.png" />
          <div className="div16">
            <div className="sub-content">
              <div className="sub-content">
                <div className="title14">
                  <div className="angioplasty">Endocrinology</div>
                  <img className="title-child" alt="" src="/frame-2482.svg" />
                </div>
                <div className="our-team-of1">
                  Our team of highl professionals uses the latest heal
                  echnologies health quickly and easily.
                </div>
              </div>
              <div className="button9">
                <div className="know-more">Read More</div>
                <img className="icon10" alt="" src="/3.svg" />
              </div>
            </div>
          </div>
          <div className="div16">
            <div className="sub-content">
              <div className="sub-content">
                <div className="title15">
                  <div className="angioplasty">Orthopaedics</div>
                  <img className="icon16" alt="" src="/icon3.svg" />
                </div>
                <div className="our-team-of1">
                  Our team of highl professionals uses the latest heal
                  echnologies health quickly and easily.
                </div>
              </div>
              <div className="button9">
                <div className="know-more">Read More</div>
                <img className="icon10" alt="" src="/3.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {isFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame}
        >
          <Frame onClose={closeFrame} />
        </PortalPopup>
      )}
    </>
  );
};

export default Landing;
