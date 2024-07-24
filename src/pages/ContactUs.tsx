import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ContactUs.css";

const ContactUs: FunctionComponent = () => {
  const navigate = useNavigate();

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

  const onMenuContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onContactUsTextClick = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    navigate("/appointment");
  }, [navigate]);

  return (
    <div className="contact-us8">
      <div className="image13">
        <b className="about-us16">About Us</b>
        <div className="home-about8">{`Home > About Us`}</div>
        <div className="photo11" />
      </div>
      <div className="form4">
        <div className="content58">
          <div className="sub-content12">
            <div className="text72">
              <div className="name8">
                <div className="btn12">
                  <div className="bg19" />
                  <div className="john-david">John David</div>
                </div>
                <div className="full-name">Full name *</div>
              </div>
              <div className="mail9">
                <div className="btn13">
                  <div className="bg20" />
                  <a
                    className="exampleyourmailcom"
                    href="mailto:example@yourmail.com"
                    target="_blank"
                  >
                    example@yourmail.com
                  </a>
                </div>
                <div className="full-name">Your email *</div>
              </div>
            </div>
            <div className="text72">
              <div className="company1">
                <div className="btn14">
                  <div className="bg19" />
                  <div className="john-david">your number here</div>
                </div>
                <div className="full-name">Phone *</div>
              </div>
              <div className="subject1">
                <div className="btn15">
                  <div className="bg20" />
                  <div className="john-david">How can we Help</div>
                </div>
                <div className="full-name">Subject *</div>
              </div>
            </div>
            <div className="message2">
              <div className="we-can-help">We can help you?</div>
              <div className="btn16">
                <div className="bg23" />
                <div className="type-your-message">
                  Type your message here...
                </div>
              </div>
            </div>
          </div>
          <div className="button53">
            <div className="send-message">Send Message</div>
          </div>
        </div>
      </div>
      <div className="contact-us9">
        <div className="text73">
          <div className="content59">
            <div className="sub-text22">
              <div className="contact-us10">CONTACT US</div>
            </div>
            <div className="title43">
              <div className="get-in-touch">Get In Touch With Us!</div>
            </div>
          </div>
        </div>
        <div className="address">
          <div className="content60">
            <div className="location">
              <div className="text74">
                <div className="content61">
                  <img className="icon60" alt="" src="/icon11.svg" />
                  <div className="cntnt">
                    <div className="north-dunbar-st">
                      209 North Dunbar St. Santa Monica, CA 90403
                    </div>
                    <div className="address1">Address</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="location">
              <div className="text75">
                <div className="content61">
                  <img className="icon60" alt="" src="/icon12.svg" />
                  <div className="cntnt">
                    <div className="north-dunbar-st">
                      <p className="p">(+22) 123 - 4567 - 900</p>
                      <p className="p">(+22) 123 - 4567 - 901</p>
                    </div>
                    <div className="call-us">Call Us</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="location">
              <div className="text75">
                <div className="content61">
                  <img className="icon60" alt="" src="/icon13.svg" />
                  <div className="cntnt">
                    <a
                      className="supportdoctoratecom-yourmail"
                      href="mailto:support@doctorate.com"
                      target="_blank"
                    >
                      <p className="p">support@doctorate.com</p>
                      <p className="p">yourmail@gmail.com</p>
                    </a>
                    <div className="e-mail-us">{`E-mail Us `}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="photo-icon1" alt="" src="/photo1@2x.png" />
      <div className="image-1009" />
      <div className="banner-text2">
        <b className="we-are-ready-container">
          <p className="p">We Are Ready To Assist</p>
          <p className="p">You In 24x7</p>
        </b>
      </div>
      <div className="content66">
        <img className="background-icon9" alt="" src="/background5.svg" />
        <div className="copyright-pharma8">
          Copyright © Pharma | Designed by EWNS
        </div>
        <div className="content67">
          <div className="div89">
            <div className="logo8">
              <div className="icon63">
                <div className="icon-child13" />
                <div className="icon-child14" />
                <img className="intersect-icon8" alt="" src="/intersect.svg" />
              </div>
              <div className="pharma8">Pharma</div>
            </div>
            <div className="contact-details8">
              <div className="call9">
                <div className="div90">(+22) 123 - 4567 - 900</div>
                <div className="call-child6" />
                <img className="vector-icon22" alt="" src="/vector1.svg" />
              </div>
              <div className="mail11">
                <div className="div90">support@doctorate.com</div>
                <div className="call-child6" />
                <img className="vector-icon23" alt="" src="/vector2.svg" />
              </div>
              <div className="follow14">
                <img className="fb-icon14" alt="" src="/fb2.svg" />
                <img className="insta-icon10" alt="" src="/insta1.svg" />
                <img className="twiter-icon14" alt="" src="/twiter2.svg" />
              </div>
            </div>
          </div>
          <div className="div91">
            <div className="quotes20">
              <div className="quotes21">
                <div className="a-simple-story-container8">
                  <p className="p">“A Simple Story About</p>
                  <p className="p">{`The Doctorate Medical Center & Health Care Foundation`}</p>
                </div>
              </div>
            </div>
            <div className="explore16">
              <div className="explore17">Explore</div>
              <div className="home16" onClick={onHomeTextClick}>
                Home
              </div>
              <div className="home16" onClick={onAboutUsTextClick}>
                About us
              </div>
              <div className="home16" onClick={onServicesTextClick}>
                Services
              </div>
              <div className="testimonals8">Testimonals</div>
              <div className="news8">News</div>
            </div>
            <div className="uitility8" onClick={onUitilityContainerClick}>
              <div className="uitility-pages8">Uitility Pages</div>
              <div className="style-guide-changelog-container8">
                <p className="p">Style Guide</p>
                <p className="p">Changelog</p>
                <p className="p">Licenses</p>
                <p className="p">Protected Page</p>
                <p className="p">404 Page</p>
              </div>
            </div>
            <div className="appoinment8">
              <div className="text77">
                <div className="uitility-pages8">Book an appointment</div>
                <div className="it-is-a8">
                  It is a long established fact that a reader will be distracted
                </div>
              </div>
              <div className="button54">
                <div className="bg24" />
                <div className="your-email-address8">your email address</div>
              </div>
              <div className="button55">
                <div className="send-message">Submit</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rectangle-parent7">
        <div className="frame-child20" data-scroll-to="rectangle" />
        <div className="menu8" onClick={onMenuContainerClick}>
          <div className="home17" onClick={onHomeTextClick}>
            Home
          </div>
          <div className="about9" onClick={onAboutUsTextClick}>
            About
          </div>
          <div className="about9" onClick={onServicesTextClick}>
            Services
          </div>
          <div className="pages8">Pages</div>
          <div className="dropdown8">
            <div className="button56">
              <img className="icon64" alt="" src="/icon2.svg" />
            </div>
          </div>
          <div className="about9" onClick={onContactUsTextClick}>
            Contact Us
          </div>
        </div>
        <div className="top-bar8">
          <div className="background11" />
          <div className="welcome-to-pharma8">
            Welcome to Pharma. We provides medical accessories
          </div>
          <div className="div92">(404) 850 - 7080</div>
          <img className="icon65" alt="" src="/icon8.svg" />
          <div className="abcgmailcom8">abc@gmail.com</div>
          <img className="icon66" alt="" src="/icon9.svg" />
        </div>
        <div
          className="book-appointment-wrapper5"
          onClick={onFrameContainerClick}
        >
          <div className="book-appointment8">Book Appointment</div>
        </div>
      </div>
      <div className="contact-us-inner">
        <img className="frame-child21" alt="" src="/group-72.svg" />
      </div>
      <div className="contact-us-child" />
      <img className="search-icon10" alt="" src="/search.svg" />
    </div>
  );
};

export default ContactUs;
