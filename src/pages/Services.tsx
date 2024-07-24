import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Component1 from "../components/Component1";
import "./Services.css";

const Services: FunctionComponent = () => {
  const navigate = useNavigate();

  const onContainerClick = useCallback(() => {
    navigate("/medical-experts");
  }, [navigate]);

  const onAboutUsTextClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onServicesTextClick = useCallback(() => {
    navigate("/services");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onContactUsTextClick = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  const onBookAppointmentTextClick = useCallback(() => {
    navigate("/appointment");
  }, [navigate]);

  const onSearchIconClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="services4">
      <div className="photo1" />
      <img className="image-icon10" alt="" />
      <div className="image3">
        <b className="about-us4">About Us</b>
        <div className="home-about1">{`Home > About Us`}</div>
        <div className="photo2" />
      </div>
      <img className="services-child" alt="" src="/rectangle-38@2x.png" />
      <div className="photo3" />
      <div className="home-services">{`Home > Services`}</div>
      <div className="home-about2">{`Home > About Us`}</div>
      <div className="services5">Services</div>
      <div className="time">
        <div className="time1">
          <img className="image-icon11" alt="" src="/image13@2x.png" />
          <div className="time2">
            <div className="text24">
              <div className="heading7">
                <div className="sub-text10">
                  <div className="time3">TIMe</div>
                </div>
                <div className="title19">
                  <div className="working-hours">Working Hours</div>
                </div>
              </div>
              <div className="sunday-to-friday-container">
                <p className="saturday-closed">
                  Sunday To Friday 9.00 am - 10.00 pm
                </p>
                <p className="saturday-closed">Saturday Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="heading-wrapper">
        <div className="heading8">
          <div className="sub-text11">
            <div className="services6">Services</div>
          </div>
          <div className="title20">
            <div className="feel-like-home1">
              Feel Like Home With Best Medical Care
            </div>
          </div>
        </div>
      </div>
      <div className="services-item" />
      <img className="search-icon3" alt="" src="/search.svg" />
      <div className="parent2">
        <div className="div28">
          <div className="content13">
            <div className="content13">
              <div className="title21">
                <div className="angioplasty1">Angioplasty</div>
                <img className="title-child2" alt="" src="/frame-2484.svg" />
              </div>
              <div className="our-team-of13">
                Our team of highl professionals uses the latest heal echnologies
                health quickly and easily.
              </div>
            </div>
            <div className="button18">
              <div className="read-more6">Read More</div>
              <img className="icon26" alt="" src="/3.svg" />
            </div>
          </div>
        </div>
        <div className="div29">
          <div className="content13">
            <div className="content13">
              <div className="title22">
                <div className="angioplasty1">Cardiology</div>
                <img className="title-child2" alt="" src="/frame-2485.svg" />
              </div>
              <div className="our-team-of13">
                Our team of highl professionals uses the latest heal echnologies
                health quickly and easily.
              </div>
            </div>
            <div className="button18">
              <div className="read-more6">Read More</div>
              <img className="icon26" alt="" src="/4.svg" />
            </div>
          </div>
        </div>
        <div className="div30">
          <div className="content13">
            <div className="content13">
              <div className="title23">
                <div className="angioplasty1">Dental</div>
                <img className="title-child2" alt="" src="/frame-2486.svg" />
              </div>
              <div className="our-team-of13">
                Our team of highl professionals uses the latest heal echnologies
                health quickly and easily.
              </div>
            </div>
            <div className="button18">
              <div className="read-more6">Read More</div>
              <img className="icon26" alt="" src="/3.svg" />
            </div>
          </div>
        </div>
        <img className="image-icon12" alt="" src="/image12@2x.png" />
        <div className="div31">
          <div className="content13">
            <div className="content13">
              <div className="title24">
                <div className="eye-care1">Eye Care</div>
                <img className="title-child2" alt="" src="/frame-2483.svg" />
              </div>
              <div className="our-team-of13">
                Our team of highl professionals uses the latest heal echnologies
                health quickly and easily.
              </div>
            </div>
            <div className="button21">
              <div className="read-more9">Read More</div>
              <img className="icon26" alt="" src="/3.svg" />
            </div>
          </div>
        </div>
        <img className="icon30" alt="" src="/11@2x.png" />
        <div className="div30">
          <div className="content13">
            <div className="content13">
              <div className="title25">
                <div className="angioplasty1">Endocrinology</div>
                <img className="title-child2" alt="" src="/frame-2482.svg" />
              </div>
              <div className="our-team-of13">
                Our team of highl professionals uses the latest heal echnologies
                health quickly and easily.
              </div>
            </div>
            <div className="button21">
              <div className="read-more9">Read More</div>
              <img className="icon26" alt="" src="/3.svg" />
            </div>
          </div>
        </div>
        <div className="div30">
          <div className="content13">
            <div className="content13">
              <div className="title26">
                <div className="angioplasty1">Orthopaedics</div>
                <img className="icon32" alt="" src="/icon3.svg" />
              </div>
              <div className="our-team-of13">
                Our team of highl professionals uses the latest heal echnologies
                health quickly and easily.
              </div>
            </div>
            <div className="button21">
              <div className="read-more9">Read More</div>
              <img className="icon26" alt="" src="/3.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className="team2">
        <div className="content19">
          <div className="team3">
            <div className="title27">
              <div className="text25">
                <div className="heading9">
                  <div className="sub-text12">
                    <div className="medical-experts1">{`MEDICAL EXPERTs `}</div>
                  </div>
                  <div className="title28">
                    <div className="the-professional-doctors1">
                      The Professional Doctors
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content20">
              <div className="div34" onClick={onContainerClick}>
                <div className="image4">
                  <img className="image-icon13" alt="" src="/image14@2x.png" />
                </div>
                <div className="text26">
                  <div className="vanseena-adams3">Vanseena Adams</div>
                  <div className="dental-patient7">Dental Patient</div>
                </div>
                <div className="follow5">
                  <img className="insta-icon3" alt="" src="/insta.svg" />
                  <img className="fb-icon5" alt="" src="/fb.svg" />
                  <img className="twiter-icon5" alt="" src="/twiter.svg" />
                </div>
              </div>
              <div className="div35">
                <div className="image5">
                  <img className="image-icon13" alt="" src="/image15@2x.png" />
                </div>
                <div className="text27">
                  <div className="vanseena-adams3">Dr. Helen Wilmore</div>
                  <div className="dental-patient7">Dental Patient</div>
                </div>
                <div className="follow6">
                  <img className="fb-icon5" alt="" src="/fb1.svg" />
                  <img className="twiter-icon5" alt="" src="/twiter1.svg" />
                </div>
              </div>
              <div className="div36">
                <img className="image-icon13" alt="" src="/image16@2x.png" />
                <div className="text27">
                  <div className="vanseena-adams3">Dr. Kate Winslot</div>
                  <div className="dental-patient7">Dental Patient</div>
                </div>
                <div className="follow6">
                  <img className="fb-icon5" alt="" src="/fb1.svg" />
                  <img className="twiter-icon5" alt="" src="/twiter1.svg" />
                </div>
              </div>
            </div>
          </div>
          <div className="counter1">
            <div className="line5" />
            <div className="content21">
              <Component1
                prop="25"
                years="Years "
                experience="Experience"
                propWidth="160.4px"
              />
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
      <div className="content22">
        <img className="background-icon3" alt="" src="/background3.svg" />
        <div className="copyright-pharma2">
          Copyright © Pharma | Designed by EWNS
        </div>
        <div className="content23">
          <div className="div37">
            <div className="logo2">
              <div className="icon34">
                <div className="icon-child1" />
                <div className="icon-child2" />
                <img className="intersect-icon2" alt="" src="/intersect.svg" />
              </div>
              <div className="pharma2">Pharma</div>
            </div>
            <div className="contact-details2">
              <div className="call2">
                <div className="div38">(+22) 123 - 4567 - 900</div>
                <div className="call-inner" />
                <img className="vector-icon6" alt="" src="/vector1.svg" />
              </div>
              <div className="mail2">
                <div className="div38">support@doctorate.com</div>
                <div className="call-inner" />
                <img className="vector-icon7" alt="" src="/vector2.svg" />
              </div>
              <div className="follow8">
                <img className="fb-icon8" alt="" src="/fb2.svg" />
                <img className="insta-icon4" alt="" src="/insta1.svg" />
                <img className="twiter-icon8" alt="" src="/twiter2.svg" />
              </div>
            </div>
          </div>
          <div className="div39">
            <div className="quotes4">
              <div className="quotes5">
                <div className="a-simple-story-container2">
                  <p className="saturday-closed">“A Simple Story About</p>
                  <p className="saturday-closed">{`The Doctorate Medical Center & Health Care Foundation`}</p>
                </div>
              </div>
            </div>
            <div className="explore4">
              <div className="explore5">Explore</div>
              <div className="home4">Home</div>
              <div className="about-us5" onClick={onAboutUsTextClick}>
                About us
              </div>
              <div className="about-us5" onClick={onServicesTextClick}>
                Services
              </div>
              <div className="testimonals2">Testimonals</div>
              <div className="home4">News</div>
            </div>
            <div className="uitility2">
              <div className="vanseena-adams3">Uitility Pages</div>
              <div className="style-guide-changelog-container2">
                <p className="saturday-closed">Style Guide</p>
                <p className="saturday-closed">Changelog</p>
                <p className="saturday-closed">Licenses</p>
                <p className="saturday-closed">Protected Page</p>
                <p className="saturday-closed">404 Page</p>
              </div>
            </div>
            <div className="appoinment2">
              <div className="text29">
                <div className="vanseena-adams3">Book an appointment</div>
                <div className="it-is-a2">
                  It is a long established fact that a reader will be distracted
                </div>
              </div>
              <div className="button24">
                <div className="bg2" />
                <div className="your-email-address2">your email address</div>
              </div>
              <div className="button25">
                <div className="read-more6">Submit</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rectangle-parent1">
        <div className="frame-child3" data-scroll-to="rectangle" />
        <div className="frame-child4" />
        <div className="top-bar2">
          <div className="background1" />
          <div className="welcome-to-pharma2">
            Welcome to Pharma. We provides medical accessories
          </div>
          <div className="div40">(404) 850 - 7080</div>
          <img className="icon35" alt="" src="/icon8.svg" />
          <div className="abcgmailcom2">abc@gmail.com</div>
          <img className="icon36" alt="" src="/icon9.svg" />
        </div>
        <div className="menu-frame">
          <div className="menu2">
            <div className="home5" onClick={onHomeTextClick}>
              Home
            </div>
            <div className="about3" onClick={onAboutUsTextClick}>
              About
            </div>
            <div className="about3" onClick={onServicesTextClick}>
              Services
            </div>
            <div className="pages2">Pages</div>
            <div className="dropdown2">
              <div className="button26">
                <img className="icon37" alt="" src="/icon2.svg" />
              </div>
            </div>
            <div className="about3" onClick={onContactUsTextClick}>
              Contact Us
            </div>
          </div>
        </div>
        <div className="book-appointment-frame">
          <div
            className="book-appointment3"
            onClick={onBookAppointmentTextClick}
          >
            Book Appointment
          </div>
        </div>
        <div className="ellipse-div" />
      </div>
      <div className="services-inner">
        <img className="frame-child5" alt="" src="/group-72.svg" />
      </div>
      <div className="services-inner">
        <img className="frame-child5" alt="" src="/group-72.svg" />
      </div>
      <div className="services-inner">
        <img className="frame-child5" alt="" src="/group-72.svg" />
      </div>
      <div className="services-inner">
        <img className="frame-child5" alt="" src="/group-72.svg" />
      </div>
      <img
        className="search-icon4"
        alt=""
        src="/search.svg"
        onClick={onSearchIconClick}
      />
    </div>
  );
};

export default Services;
