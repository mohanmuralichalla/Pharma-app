import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Dental.css";

const Dental: FunctionComponent = () => {
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

  const onBookAppointmentTextClick = useCallback(() => {
    navigate("/appointment");
  }, [navigate]);

  const onContactUsTextClick = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  return (
    <div className="dental2">
      <div className="image6">
        <b className="about-us6">About Us</b>
        <div className="home-about3">{`Home > About Us`}</div>
        <div className="photo4" />
      </div>
      <div className="banner1">
        <img className="image-icon16" alt="" src="/image17@2x.png" />
      </div>
      <div className="background2" />
      <img className="image-icon17" alt="" src="/image18@2x.png" />
      <div className="photo5" />
      <div className="home-services1">{`Home > Services > Dental`}</div>
      <div className="dental3">Dental</div>
      <div className="content24">
        <div className="text30">
          <div className="text31">
            <div className="text32">
              <div className="heading10">
                <div className="title29">
                  <img className="icon38" alt="" src="/icon10.svg" />
                  <div className="dental4">Dental</div>
                </div>
              </div>
              <div className="leverage-agile-frameworks-container">
                <p className="leverage-agile-frameworks">
                  Leverage agile frameworks to provide a robust synopsis for
                  high level overviews. Iterative approaches to corporate
                  strategy collaborative thinking to further overall value
                  proposition. Organically grow the holistic world view of
                  disruptive innovation via workplace diversity and empowerment.
                </p>
                <p className="blank-line3">&nbsp;</p>
                <p className="leverage-agile-frameworks">
                  Capitalize on low hanging fruit to identify a ballpark value
                  added to beta test.Override the digital divide with additional
                  clickthrough's from of workflows to establish a framework
                  DevOps.
                </p>
              </div>
            </div>
            <div className="content25">
              <div className="heading11">
                <div className="title30">
                  <div className="the-perfect-health">
                    The perfect Health for all
                  </div>
                </div>
              </div>
              <div className="content26">
                <div className="text33">
                  <div className="appropriately-empower-dynamic">
                    Appropriately empower dynamic leadership skills after
                    business portals. Globally my cardinate interactive supply
                    chains with distinctive quality vectors global sources
                    services. Uniquely matrix economically sound value through
                    cooperative technology. Competently parallel task fully
                    researched data and enterprise process improvements.
                  </div>
                  <div className="points">
                    <div className="comprehensive-annual-physicals-container">
                      <ul className="comprehensive-annual-physicals">
                        <li>Comprehensive annual physicals</li>
                      </ul>
                    </div>
                    <div className="comprehensive-annual-physicals-container">
                      <ul className="comprehensive-annual-physicals">
                        <li>Vaccinations</li>
                      </ul>
                    </div>
                    <div className="online-bill-payment-container">
                      <ul className="comprehensive-annual-physicals">
                        <li>Online Bill Payment</li>
                      </ul>
                    </div>
                    <div className="comprehensive-annual-physicals-container">
                      <ul className="comprehensive-annual-physicals">
                        <li>Healthcare Research</li>
                      </ul>
                    </div>
                    <div className="comprehensive-annual-physicals-container">
                      <ul className="comprehensive-annual-physicals">
                        <li>Professional Medical Services</li>
                      </ul>
                    </div>
                    <div className="comprehensive-annual-physicals-container">
                      <ul className="comprehensive-annual-physicals">
                        <li>Free Consulting</li>
                      </ul>
                    </div>
                    <div className="comprehensive-annual-physicals-container">
                      <ul className="comprehensive-annual-physicals">
                        <li>Preventive and wellness care</li>
                      </ul>
                    </div>
                    <div className="comprehensive-annual-physicals-container">
                      <ul className="comprehensive-annual-physicals">
                        <li>Chronic Disease Management</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="image7">
          <div className="content27">
            <img className="icon39" alt="" src="/01@2x.png" />
          </div>
          <div className="text34">
            <div className="doctor-with-patient">Doctor With Patient</div>
          </div>
        </div>
        <div className="text35">
          <div className="the-perfect-health">People trust Pharma</div>
        </div>
        <div className="quotes6">
          <div className="quotes-child" />
          <div className="quotes7">
            <i className="crowdsource-term-sheet">
              “Crowdsource term sheet freemium beta stealth responsive web
              design niche market rock star channels. Supply chain market
              graphical user interface assets.”
            </i>
          </div>
        </div>
        <div className="text36">
          <div className="feel-like-home2">
            Feel Like Home With Best Service
          </div>
          <div className="collaboratively-administrate-e4">
            Collaboratively administrate empowered markets via plug-and-play
            networks. Dynamically procrastinate B2C users after installed base
            benefits. Dramatically visualize customer directed convergence
            without revolutionary ROI.
          </div>
        </div>
        <div className="text37">
          <div className="synopsis-for-high-container">
            <span>{`1.Leverage agile frameworks to provide a robust `}</span>
          </div>
          <div className="synopsis-for-high-container">
            <span>2. Synopsis for high level overviews.</span>
          </div>
          <div className="comprehensive-annual-physicals-container">
            <span>{`3.Provide a robust synopsis for high level overviews. `}</span>
          </div>
          <div className="synopsis-for-high-container">
            <span>4.Heading towards a streamlined cloud solution</span>
          </div>
        </div>
        <div className="text38">
          <div className="doctor-are-choosing">{`Doctor are choosing from our diverse pool of health specialists. Discover better health & wellness by using our doctor ratings & reviews to make your choice. Once the family has reached a decision, the team informs the relevant parties so final arrangements can begin. Emergency staff who are available 24 hours a day, seven days a week. These staff members are trained professionals.`}</div>
        </div>
      </div>
      <div className="content28">
        <img className="background-icon4" alt="" src="/background2.svg" />
        <div className="copyright-pharma3">
          Copyright © Pharma | Designed by EWNS
        </div>
        <div className="content29">
          <div className="div41">
            <div className="logo3">
              <div className="icon40">
                <div className="icon-child3" />
                <div className="icon-child4" />
                <img className="intersect-icon3" alt="" src="/intersect.svg" />
              </div>
              <div className="pharma3">Pharma</div>
            </div>
            <div className="contact-details3">
              <div className="call3">
                <div className="div42">(+22) 123 - 4567 - 900</div>
                <div className="call-child1" />
                <img className="vector-icon8" alt="" src="/vector1.svg" />
              </div>
              <div className="mail3">
                <div className="div42">support@doctorate.com</div>
                <div className="call-child1" />
                <img className="vector-icon9" alt="" src="/vector2.svg" />
              </div>
              <div className="follow9">
                <img className="fb-icon9" alt="" src="/fb2.svg" />
                <img className="insta-icon5" alt="" src="/insta1.svg" />
                <img className="twiter-icon9" alt="" src="/twiter2.svg" />
              </div>
            </div>
          </div>
          <div className="div43">
            <div className="quotes8">
              <div className="quotes9">
                <div className="a-simple-story-container3">
                  <p className="blank-line3">“A Simple Story About</p>
                  <p className="blank-line3">{`The Doctorate Medical Center & Health Care Foundation`}</p>
                </div>
              </div>
            </div>
            <div className="explore6">
              <div className="explore7">Explore</div>
              <div className="home6" onClick={onHomeTextClick}>
                Home
              </div>
              <div className="home6" onClick={onAboutUsTextClick}>
                About us
              </div>
              <div className="home6" onClick={onServicesTextClick}>
                Services
              </div>
              <div className="testimonals3">Testimonals</div>
              <div className="news3">News</div>
            </div>
            <div className="uitility3" onClick={onUitilityContainerClick}>
              <div className="uitility-pages3">Uitility Pages</div>
              <div className="style-guide-changelog-container3">
                <p className="blank-line3">Style Guide</p>
                <p className="blank-line3">Changelog</p>
                <p className="blank-line3">Licenses</p>
                <p className="blank-line3">Protected Page</p>
                <p className="blank-line3">404 Page</p>
              </div>
            </div>
            <div className="appoinment3">
              <div className="text39">
                <div className="uitility-pages3">Book an appointment</div>
                <div className="it-is-a3">
                  It is a long established fact that a reader will be distracted
                </div>
              </div>
              <div className="button27">
                <div className="bg3" />
                <div className="your-email-address3">your email address</div>
              </div>
              <div className="button28">
                <div className="submit3">Submit</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rectangle-parent2">
        <div className="frame-child9" />
        <div className="frame-child10" />
        <div className="top-bar3">
          <div className="background3" />
          <div className="welcome-to-pharma3">
            Welcome to Pharma. We provides medical accessories
          </div>
          <div className="div44">(404) 850 - 7080</div>
          <img className="icon41" alt="" src="/icon8.svg" />
          <div className="abcgmailcom3">abc@gmail.com</div>
          <img className="icon42" alt="" src="/icon9.svg" />
        </div>
        <div className="book-appointment-wrapper1">
          <div
            className="book-appointment4"
            onClick={onBookAppointmentTextClick}
          >
            Book Appointment
          </div>
        </div>
        <div className="menu3">
          <div className="home7" onClick={onHomeTextClick}>
            Home
          </div>
          <div className="about4" onClick={onAboutUsTextClick}>
            About
          </div>
          <div className="about4" onClick={onServicesTextClick}>
            Services
          </div>
          <div className="pages3">Pages</div>
          <div className="dropdown3">
            <div className="button29">
              <img className="icon43" alt="" src="/icon2.svg" />
            </div>
          </div>
          <div className="about4" onClick={onContactUsTextClick}>
            Contact Us
          </div>
        </div>
      </div>
      <div className="dental-inner">
        <img className="frame-child11" alt="" src="/group-72.svg" />
      </div>
      <div className="dental-child" />
      <img className="search-icon5" alt="" src="/search.svg" />
    </div>
  );
};

export default Dental;
