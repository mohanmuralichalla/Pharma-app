import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./MedicalExperts.css";

const MedicalExperts: FunctionComponent = () => {
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

  const onFrameContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='menuContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="medical-experts2">
      <div className="image14">
        <b className="about-us18">About Us</b>
        <div className="home-about9">{`Home > About Us`}</div>
        <div className="photo12" />
      </div>
      <div className="banner-parent">
        <div className="banner7" />
        <div className="content68">
          <img className="image-icon28" alt="" src="/image30@2x.png" />
          <div className="text78">
            <div className="content69">
              <div className="heading16">
                <div className="title44">
                  <b className="dr-kristina-castle">Dr. Kristina Castle</b>
                  <div className="surgeon">Surgeon</div>
                </div>
              </div>
              <div className="lorem-ipsum-capitalize">
                Lorem Ipsum Capitalize on low hanging fruit to identify a
                ballpark value added activity to beta immersion along the
                information highway will close the loop on focusing solely on
                the bottom line rather than client-centric imperatives the
                efficiency.
              </div>
            </div>
            <div className="address2">
              <div className="div93">
                <img className="icon67" alt="" src="/icon14.svg" />
                <div className="text79">
                  <div className="call-now">CALL NOW:</div>
                  <b className="b">(+22) 123 - 4567 - 900</b>
                </div>
              </div>
              <div className="div94">
                <img className="icon67" alt="" src="/icon15.svg" />
                <div className="text80">
                  <a
                    className="infodoctoratecom"
                    href="mailto:support@doctorate.com"
                    target="_blank"
                  >
                    info@doctorate.com
                  </a>
                  <div className="email-now">EMAIL NOW:</div>
                </div>
              </div>
            </div>
            <div className="button57">
              <div className="discover-now">Discover Now</div>
            </div>
          </div>
        </div>
      </div>
      <div className="questions-parent">
        <div className="questions">
          <div className="content70">
            <div className="text81">
              <div className="heading17">
                <div className="title45">
                  <div className="didnt-find-a-container">
                    <p className="didnt-find-a">Didn’t Find a</p>
                    <p className="didnt-find-a">{`Question? `}</p>
                  </div>
                </div>
                <div className="sub-text23">
                  <div className="sub-text-child7" />
                  <div className="book-an-appointment11">
                    BOOK AN APPOINTMENT
                  </div>
                </div>
              </div>
              <div className="donec-efficitur-enim-container">
                <p className="didnt-find-a">Donec efficitur, enim bibendum</p>
                <p className="didnt-find-a">volutpat dictum, tellus risus</p>
                <p className="didnt-find-a">porttitor leo.</p>
              </div>
            </div>
            <div className="button58">
              <div className="more-questions">More Questions</div>
            </div>
          </div>
        </div>
        <div className="timing">
          <div className="timing1">
            <div className="image15">
              <img className="image-icon29" alt="" src="/image31@2x.png" />
            </div>
            <div className="time5">
              <div className="text82">
                <div className="heading18">
                  <div className="sub-text24">
                    <div className="time6">TIMe</div>
                  </div>
                  <div className="title46">
                    <div className="working-hours1">Working Hours</div>
                  </div>
                </div>
                <div className="sunday-to-friday-container1">
                  <p className="didnt-find-a">
                    Sunday To Friday 9.00 am - 10.00 pm
                  </p>
                  <p className="didnt-find-a">Saturday Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="form5">
          <div className="title47">
            <b className="book-an-appoinment">Book an appoinment</b>
            <div className="lorem-ipsum-is">
              Lorem Ipsum is simply dummy text of printing and typesetting
              industry standard dummy text the with the release.
            </div>
          </div>
          <div className="form6">
            <div className="department">
              <div className="btn17">
                <div className="bg25" />
                <div className="name10">Name</div>
              </div>
            </div>
            <div className="department">
              <div className="btn17">
                <div className="bg25" />
                <div className="name10">Email</div>
              </div>
            </div>
            <div className="department">
              <div className="btn17">
                <div className="bg25" />
                <div className="name10">Phone</div>
              </div>
            </div>
            <div className="department">
              <div className="btn17">
                <div className="bg25" />
                <div className="name10">Department</div>
              </div>
            </div>
            <div className="department">
              <div className="btn17">
                <div className="bg25" />
                <img className="calendar-icon" alt="" src="/calendar.svg" />
                <div className="name10">Date</div>
              </div>
            </div>
            <div className="department">
              <div className="btn17">
                <div className="bg25" />
                <img className="vector-icon24" alt="" src="/vector6.svg" />
                <div className="name10">Choose Doctor</div>
              </div>
            </div>
            <div className="department">
              <div className="btn23">
                <div className="bg31" />
                <div className="message4">Message...</div>
              </div>
            </div>
            <div className="button59">
              <div className="more-questions">Booking Now</div>
            </div>
          </div>
        </div>
      </div>
      <div className="content71">
        <img className="background-icon10" alt="" src="/background3.svg" />
        <div className="copyright-pharma9">
          Copyright © Pharma | Designed by EWNS
        </div>
        <div className="content72">
          <div className="div95">
            <div className="logo9">
              <div className="icon69">
                <div className="icon-child15" />
                <div className="icon-child16" />
                <img className="intersect-icon9" alt="" src="/intersect.svg" />
              </div>
              <div className="pharma9">Pharma</div>
            </div>
            <div className="contact-details9">
              <div className="call10">
                <div className="div96">(+22) 123 - 4567 - 900</div>
                <div className="call-child7" />
                <img className="vector-icon25" alt="" src="/vector1.svg" />
              </div>
              <div className="mail12">
                <div className="div96">support@doctorate.com</div>
                <div className="call-child7" />
                <img className="vector-icon26" alt="" src="/vector2.svg" />
              </div>
              <div className="follow15">
                <img className="fb-icon15" alt="" src="/fb2.svg" />
                <img className="insta-icon11" alt="" src="/insta1.svg" />
                <img className="twiter-icon15" alt="" src="/twiter2.svg" />
              </div>
            </div>
          </div>
          <div className="div97">
            <div className="quotes22">
              <div className="quotes23">
                <div className="a-simple-story-container9">
                  <p className="didnt-find-a">“A Simple Story About</p>
                  <p className="didnt-find-a">{`The Doctorate Medical Center & Health Care Foundation`}</p>
                </div>
              </div>
            </div>
            <div className="explore18">
              <div className="explore19">Explore</div>
              <div className="home18" onClick={onHomeTextClick}>
                Home
              </div>
              <div className="home18" onClick={onAboutUsTextClick}>
                About us
              </div>
              <div className="home18" onClick={onServicesTextClick}>
                Services
              </div>
              <div className="testimonals9">Testimonals</div>
              <div className="news9">News</div>
            </div>
            <div className="uitility9" onClick={onUitilityContainerClick}>
              <div className="uitility-pages9">Uitility Pages</div>
              <div className="style-guide-changelog-container9">
                <p className="didnt-find-a">Style Guide</p>
                <p className="didnt-find-a">Changelog</p>
                <p className="didnt-find-a">Licenses</p>
                <p className="didnt-find-a">Protected Page</p>
                <p className="didnt-find-a">404 Page</p>
              </div>
            </div>
            <div className="appoinment9">
              <div className="text83">
                <div className="uitility-pages9">Book an appointment</div>
                <div className="it-is-a9">
                  It is a long established fact that a reader will be distracted
                </div>
              </div>
              <div className="button60">
                <div className="bg32" />
                <div className="your-email-address9">your email address</div>
              </div>
              <div className="button61">
                <div className="more-questions">Submit</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rectangle-parent8">
        <div className="frame-child22" />
        <div className="top-bar9">
          <div className="background12" />
          <div className="welcome-to-pharma9">
            Welcome to Pharma. We provides medical accessories
          </div>
          <div className="div98">(404) 850 - 7080</div>
          <img className="icon70" alt="" src="/icon8.svg" />
          <div className="abcgmailcom9">abc@gmail.com</div>
          <img className="icon71" alt="" src="/icon9.svg" />
        </div>
        <div className="menu9" data-scroll-to="menuContainer">
          <div className="home19" onClick={onHomeTextClick}>
            Home
          </div>
          <div className="about10" onClick={onAboutUsTextClick}>
            About
          </div>
          <div className="about10" onClick={onServicesTextClick}>
            Services
          </div>
          <div className="pages9">Pages</div>
          <div className="dropdown9">
            <div className="button62">
              <img className="icon72" alt="" src="/icon2.svg" />
            </div>
          </div>
          <div className="about10" onClick={onContactUsTextClick}>
            Contact Us
          </div>
        </div>
        <div
          className="book-appointment-wrapper6"
          onClick={onFrameContainerClick}
        >
          <div className="book-appointment9">Book Appointment</div>
        </div>
      </div>
      <div className="medical-experts-inner">
        <img className="frame-child23" alt="" src="/group-72.svg" />
      </div>
      <div className="medical-experts-child" />
      <img className="search-icon11" alt="" src="/search.svg" />
    </div>
  );
};

export default MedicalExperts;
