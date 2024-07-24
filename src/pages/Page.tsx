import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Page.css";

const Page: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGoToHomepageClick = useCallback(() => {
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

  const onFrameContainerClick = useCallback(() => {
    navigate("/appointment");
  }, [navigate]);

  const onContactUsTextClick = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  return (
    <div className="page7">
      <div className="image12">
        <b className="about-us14">About Us</b>
        <div className="home-about7">{`Home > About Us`}</div>
        <div className="photo10" />
      </div>
      <div className="div82">
        <div className="content55">
          <div className="div83">404</div>
          <b className="oops-page-not">Oops! Page not found</b>
          <div className="lorem-ipsum-dolor1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            congue pretium faucibus leo nisl nulla pharetra nullam.
          </div>
        </div>
        <div className="button49">
          <div className="go-to-homepage" onClick={onGoToHomepageClick}>
            Go to homepage
          </div>
        </div>
      </div>
      <div className="content56">
        <img className="background-icon8" alt="" src="/background5.svg" />
        <div className="copyright-pharma7">
          Copyright © Pharma | Designed by EWNS
        </div>
        <div className="content57">
          <div className="div84">
            <div className="logo7">
              <div className="icon56">
                <div className="icon-child11" />
                <div className="icon-child12" />
                <img className="intersect-icon7" alt="" src="/intersect.svg" />
              </div>
              <div className="pharma7">Pharma</div>
            </div>
            <div className="contact-details7">
              <div className="call7">
                <div className="div85">(+22) 123 - 4567 - 900</div>
                <div className="call-child5" />
                <img className="vector-icon20" alt="" src="/vector1.svg" />
              </div>
              <div className="mail8">
                <div className="div85">support@doctorate.com</div>
                <div className="call-child5" />
                <img className="vector-icon21" alt="" src="/vector2.svg" />
              </div>
              <div className="follow13">
                <img className="fb-icon13" alt="" src="/fb2.svg" />
                <img className="insta-icon9" alt="" src="/insta1.svg" />
                <img className="twiter-icon13" alt="" src="/twiter2.svg" />
              </div>
            </div>
          </div>
          <div className="div86">
            <div className="quotes18">
              <div className="quotes19">
                <div className="a-simple-story-container7">
                  <p className="a-simple-story7">“A Simple Story About</p>
                  <p className="a-simple-story7">{`The Doctorate Medical Center & Health Care Foundation`}</p>
                </div>
              </div>
            </div>
            <div className="explore14">
              <div className="explore15">Explore</div>
              <div className="home14" onClick={onGoToHomepageClick}>
                Home
              </div>
              <div className="home14" onClick={onAboutUsTextClick}>
                About us
              </div>
              <div className="home14" onClick={onServicesTextClick}>
                Services
              </div>
              <div className="testimonals7">Testimonals</div>
              <div className="news7">News</div>
            </div>
            <div className="uitility7" onClick={onUitilityContainerClick}>
              <div className="uitility-pages7">Uitility Pages</div>
              <div className="style-guide-changelog-container7">
                <p className="a-simple-story7">Style Guide</p>
                <p className="a-simple-story7">Changelog</p>
                <p className="a-simple-story7">Licenses</p>
                <p className="a-simple-story7">Protected Page</p>
                <p className="a-simple-story7">404 Page</p>
              </div>
            </div>
            <div className="appoinment7">
              <div className="text71">
                <div className="uitility-pages7">Book an appointment</div>
                <div className="it-is-a7">
                  It is a long established fact that a reader will be distracted
                </div>
              </div>
              <div className="button50">
                <div className="bg18" />
                <div className="your-email-address7">your email address</div>
              </div>
              <div className="button51">
                <div className="submit7">Submit</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rectangle-parent6">
        <div className="frame-child18" />
        <div className="top-bar7">
          <div className="background10" />
          <div className="welcome-to-pharma7">
            Welcome to Pharma. We provides medical accessories
          </div>
          <div className="div87">(404) 850 - 7080</div>
          <img className="icon57" alt="" src="/icon8.svg" />
          <div className="abcgmailcom7">abc@gmail.com</div>
          <img className="icon58" alt="" src="/icon9.svg" />
        </div>
        <div
          className="book-appointment-wrapper4"
          onClick={onFrameContainerClick}
        >
          <div className="book-appointment7">Book Appointment</div>
        </div>
        <div className="menu7">
          <div className="home15" onClick={onGoToHomepageClick}>
            Home
          </div>
          <div className="about8" onClick={onAboutUsTextClick}>
            About
          </div>
          <div className="about8" onClick={onServicesTextClick}>
            Services
          </div>
          <div className="pages7">Pages</div>
          <div className="dropdown7">
            <div className="button52">
              <img className="icon59" alt="" src="/icon2.svg" />
            </div>
          </div>
          <div className="about8" onClick={onContactUsTextClick}>
            Contact Us
          </div>
        </div>
      </div>
      <div className="page-inner">
        <img className="frame-child19" alt="" src="/group-72.svg" />
      </div>
      <div className="page-child" />
      <img className="search-icon9" alt="" src="/search.svg" />
    </div>
  );
};

export default Page;
