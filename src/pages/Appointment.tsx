import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Appointment.css";

const Appointment: FunctionComponent = () => {
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

  const onContactUsTextClick = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  return (
    <div className="appointment">
      <div className="image11">
        <b className="about-us12">About Us</b>
        <div className="home-about6">{`Home > About Us`}</div>
        <div className="photo9" />
      </div>
      <div className="faq">
        <div className="text62">
          <div className="content45">
            <div className="sub-text20">
              <div className="sub-text-child6" />
              <div className="faq1">Faq</div>
            </div>
            <div className="title40">
              <div className="frequently-asked-questions">
                Frequently Asked Questions
              </div>
            </div>
          </div>
        </div>
        <div className="faq2">
          <div className="div67">
            <div className="div68">
              <div className="content46">
                <div className="text63">
                  <div className="frequently-asked-questions">
                    Does a rinse or mouthwash help?
                  </div>
                  <img className="pattern-icon" alt="" src="/pattern.svg" />
                </div>
              </div>
            </div>
            <div className="div69">
              <div className="text64">
                <div className="content47">
                  <div className="text65">
                    <div className="lorem-ipsum-dolor">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Diam in arcu cursus euismod quis viverra.
                    </div>
                    <div className="how-can-i">
                      How can I fix my teeth and smile?
                    </div>
                  </div>
                  <img className="pattern-icon1" alt="" src="/pattern1.svg" />
                </div>
              </div>
            </div>
            <div className="div70">
              <div className="content48">
                <div className="text63">
                  <div className="frequently-asked-questions">
                    Why do I need dental exams?
                  </div>
                  <img className="pattern-icon2" alt="" src="/pattern.svg" />
                </div>
              </div>
            </div>
          </div>
          <div className="div67">
            <div className="div68">
              <div className="content49">
                <div className="text63">
                  <div className="frequently-asked-questions">
                    Why do I need dental exams?
                  </div>
                  <img className="pattern-icon" alt="" src="/pattern.svg" />
                </div>
              </div>
            </div>
            <div className="div68">
              <div className="content50">
                <div className="text68">
                  <div className="are-dental-x-rays">
                    Are dental X-rays safe and needed?
                  </div>
                  <img className="pattern-icon4" alt="" src="/pattern.svg" />
                </div>
              </div>
            </div>
            <div className="div74">
              <div className="content51">
                <div className="text69">
                  <div className="are-dental-x-rays">
                    What are early signs of dental trouble?
                  </div>
                  <img className="pattern-icon4" alt="" src="/pattern.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner5">
        <div className="banner6">
          <div className="background8" />
          <div className="heading14">
            <div className="title41">
              <b className="wide-network-of-container">
                <p className="wide-network-of">Wide network of healthcare</p>
                <p className="wide-network-of">solutions</p>
              </b>
            </div>
          </div>
        </div>
      </div>
      <div className="form2">
        <div className="heading15">
          <div className="sub-text21">
            <div className="appointment1">Appointment</div>
          </div>
          <div className="title42">
            <b className="wide-network-of-container">
              Consult with Our Experts
            </b>
          </div>
        </div>
        <div className="form3">
          <div className="content52">
            <div className="div75">
              <div className="company">
                <div className="btn5">
                  <div className="bg10" />
                  <img className="vector-icon14" alt="" src="/vector3.svg" />
                  <div className="choose-department">Choose Department</div>
                </div>
              </div>
              <div className="subject">
                <div className="btn6">
                  <div className="bg11" />
                  <img className="vector-icon15" alt="" src="/vector3.svg" />
                  <div className="choose-doctor">Choose Doctor</div>
                </div>
              </div>
            </div>
            <div className="div75">
              <div className="company">
                <div className="btn5">
                  <div className="bg10" />
                  <div className="choose-department">Enter your name here</div>
                </div>
              </div>
              <div className="subject">
                <div className="btn6">
                  <div className="bg11" />
                  <div className="choose-department">Email address</div>
                </div>
              </div>
            </div>
            <div className="div77">
              <div className="date">
                <div className="btn9">
                  <div className="bg14" />
                  <img className="vector-icon16" alt="" src="/vector4.svg" />
                  <div className="choose-department">Phone number</div>
                </div>
              </div>
              <div className="date">
                <div className="btn9">
                  <div className="bg14" />
                  <img
                    className="combined-shape-icon"
                    alt=""
                    src="/combinedshape.svg"
                  />
                  <div className="choose-department">dd/mm/yyyy</div>
                </div>
              </div>
              <div className="date">
                <div className="btn9">
                  <div className="bg14" />
                  <img className="vector-icon17" alt="" src="/vector5.svg" />
                  <div className="choose-department">Select time</div>
                </div>
              </div>
            </div>
            <div className="button44">
              <div className="button45">
                <div className="book-appointment-now">Book Appointment Now</div>
              </div>
              <div className="tahnk-you-for">
                Tahnk you for your booking. we will call you shortly
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content53">
        <img className="background-icon7" alt="" src="/background5.svg" />
        <div className="copyright-pharma6">
          Copyright © Pharma | Designed by EWNS
        </div>
        <div className="content54">
          <div className="div78">
            <div className="logo6">
              <div className="icon52">
                <div className="icon-child9" />
                <div className="icon-child10" />
                <img className="intersect-icon6" alt="" src="/intersect.svg" />
              </div>
              <div className="pharma6">Pharma</div>
            </div>
            <div className="contact-details6">
              <div className="call6">
                <div className="div79">(+22) 123 - 4567 - 900</div>
                <div className="call-child4" />
                <img className="vector-icon18" alt="" src="/vector1.svg" />
              </div>
              <div className="mail7">
                <div className="div79">support@doctorate.com</div>
                <div className="call-child4" />
                <img className="vector-icon19" alt="" src="/vector2.svg" />
              </div>
              <div className="follow12">
                <img className="fb-icon12" alt="" src="/fb2.svg" />
                <img className="insta-icon8" alt="" src="/insta1.svg" />
                <img className="twiter-icon12" alt="" src="/twiter2.svg" />
              </div>
            </div>
          </div>
          <div className="div80">
            <div className="quotes16">
              <div className="quotes17">
                <div className="a-simple-story-container6">
                  <p className="wide-network-of">“A Simple Story About</p>
                  <p className="wide-network-of">{`The Doctorate Medical Center & Health Care Foundation`}</p>
                </div>
              </div>
            </div>
            <div className="explore12">
              <div className="explore13">Explore</div>
              <div className="home12" onClick={onHomeTextClick}>
                Home
              </div>
              <div className="home12" onClick={onAboutUsTextClick}>
                About us
              </div>
              <div className="home12" onClick={onServicesTextClick}>
                Services
              </div>
              <div className="testimonals6">Testimonals</div>
              <div className="news6">News</div>
            </div>
            <div className="uitility6" onClick={onUitilityContainerClick}>
              <div className="uitility-pages6">Uitility Pages</div>
              <div className="style-guide-changelog-container6">
                <p className="wide-network-of">Style Guide</p>
                <p className="wide-network-of">Changelog</p>
                <p className="wide-network-of">Licenses</p>
                <p className="wide-network-of">Protected Page</p>
                <p className="wide-network-of">404 Page</p>
              </div>
            </div>
            <div className="appoinment6">
              <div className="text70">
                <div className="uitility-pages6">Book an appointment</div>
                <div className="it-is-a6">
                  It is a long established fact that a reader will be distracted
                </div>
              </div>
              <div className="button46">
                <div className="bg17" />
                <div className="your-email-address6">your email address</div>
              </div>
              <div className="button47">
                <div className="book-appointment-now">Submit</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rectangle-parent5">
        <div className="frame-child16" />
        <div className="menu6">
          <div className="home13" onClick={onHomeTextClick}>
            Home
          </div>
          <div className="about7" onClick={onAboutUsTextClick}>
            About
          </div>
          <div className="about7" onClick={onServicesTextClick}>
            Services
          </div>
          <div className="pages6">Pages</div>
          <div className="dropdown6">
            <div className="button48">
              <img className="icon53" alt="" src="/icon2.svg" />
            </div>
          </div>
          <div className="about7" onClick={onContactUsTextClick}>
            Contact Us
          </div>
        </div>
        <div className="top-bar6">
          <div className="background9" />
          <div className="welcome-to-pharma6">
            Welcome to Pharma. We provides medical accessories
          </div>
          <div className="div81">(404) 850 - 7080</div>
          <img className="icon54" alt="" src="/icon8.svg" />
          <div className="abcgmailcom6">abc@gmail.com</div>
          <img className="icon55" alt="" src="/icon9.svg" />
        </div>
      </div>
      <div className="appointment-inner">
        <img className="frame-child17" alt="" src="/group-72.svg" />
      </div>
      <div className="appointment-child" />
      <img className="search-icon8" alt="" src="/search.svg" />
    </div>
  );
};

export default Appointment;
