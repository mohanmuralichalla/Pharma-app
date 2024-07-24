import { FunctionComponent, useCallback } from "react";
import Content from "../components/Content";
import { useNavigate } from "react-router-dom";
import "./BlogSingle.css";

const BlogSingle: FunctionComponent = () => {
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

  const onBookAppointmentTextClick = useCallback(() => {
    navigate("/appointment");
  }, [navigate]);

  return (
    <div className="blog-single">
      <div className="image9">
        <b className="about-us10">About Us</b>
        <div className="home-about5">{`Home > About Us`}</div>
        <div className="photo8" />
      </div>
      <div className="home-pages1">{`Home >Pages > Blog`}</div>
      <div className="content38">
        <div className="content39">
          <div className="text53">
            <div className="text54">
              <div className="uniquely-matrix-economically">
                Uniquely matrix economically sound value through cooperative
                technology. Competently parallel task fully researched data and
                enterprise process improvements. Collaboratively expedite
                quality manufactured products via client-focused results quickly
                communicate enabled technology and turnkey leadership skills.
                Uniquely enable accurate supply chains rather than friction
                technology.
              </div>
              <div className="content40">
                <div className="heading12">
                  <div className="title37">
                    <div className="the-perfect-health1">
                      The perfect Health for all
                    </div>
                  </div>
                </div>
                <div className="text55">
                  <div className="appropriately-empower-dynamic1">
                    Appropriately empower dynamic leadership skills after
                    business portals. Globally my cardinate interactive supply
                    chains with distinctive quality vectors global sources
                    services. Uniquely matrix economically sound value through
                    cooperative technology. Competently parallel task fully
                    researched data and enterprise process improvements.
                  </div>
                  <div className="points1">
                    <div className="we-will-strengthen-container">
                      <ul className="we-will-strengthen-local-healt">
                        <li>
                          We will strengthen local health care and improve
                          delivery system
                        </li>
                      </ul>
                    </div>
                    <div className="providing-optimal-multidiscipl-container">
                      <ul className="we-will-strengthen-local-healt">
                        <li>
                          Providing optimal multidisciplinary health care and
                          developing
                        </li>
                      </ul>
                    </div>
                    <div className="health-care-is-container">
                      <ul className="we-will-strengthen-local-healt">
                        <li>
                          Health Care is committed to the pillars of academic
                          health care
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="image10">
            <div className="content41">
              <img className="image-icon26" alt="" src="/image26@2x.png" />
            </div>
            <div className="text56">
              <div className="doctor-with-patient1">Doctor With Patient</div>
            </div>
          </div>
          <div className="text57">
            <div className="share-the-article">People trust Pharma</div>
            <div className="enthusiastically-mesh-long-ter">
              Enthusiastically mesh long-term high-impact infrastructures
              vis-a-vis efficient customer service. Professionally fashion
              wireless leadership rather than prospective experiences.
              Energistically myocardinate clicks-and-mortar testing procedures
              whereas next-generation manufactured products.
            </div>
          </div>
          <div className="quotes12">
            <div className="quotes-item" />
            <div className="quotes13">
              <i className="professionally-fashion-wireles-container">
                <p className="professionally-fashion-wireles">
                  Professionally fashion wireless leadership rather than
                </p>
                <p className="professionally-fashion-wireles">
                  prospective experiences. Energistically myocardinate clicks
                </p>
                <p className="professionally-fashion-wireles">
                  mortar testing procedures whereas next-generation
                </p>
              </i>
            </div>
          </div>
          <div className="text58">
            <div className="feel-like-home3">
              Feel Like Home With Best Service
            </div>
            <div className="collaboratively-administrate-e5">
              Collaboratively administrate empowered markets via plug-and-play
              networks. Dynamically procrastinate B2C users after installed base
              benefits. Dramatically visualize customer directed convergence
              without revolutionary ROI.
            </div>
          </div>
          <div className="text59">
            <div className="leverage-agile-frameworks-container2">
              <span>{`1.Leverage agile frameworks to provide a robust `}</span>
            </div>
            <div className="leverage-agile-frameworks-container2">
              <span>2. Synopsis for high level overviews.</span>
            </div>
            <div className="provide-a-robust-container1">
              <span>{`3.Provide a robust synopsis for high level overviews. `}</span>
            </div>
            <div className="leverage-agile-frameworks-container2">
              <span>4.Heading towards a streamlined cloud solution</span>
            </div>
          </div>
        </div>
        <div className="comment">
          <div className="user">
            <Content
              image="/image27@2x.png"
              instagram="/instagram.svg"
              facebook="/facebook.svg"
              twiter="/twiter3.svg"
            />
            <div className="line6" />
            <div className="loreim-ipsum-dolor">
              “Loreim ipsum dolor sit amet, consectetures adipiscing elits.
              Quisque auctor justo dapibus ut. Vestibulum blandit libero non
              massa viverra facilisis.”
            </div>
          </div>
        </div>
        <div className="share">
          <div className="pattern">
            <div className="pattern-child" />
            <div className="pattern-item" />
          </div>
          <div className="text60">
            <div className="share-the-article">Share The Article:</div>
            <div className="icons">
              <div className="div59"></div>
              <div className="div59"></div>
              <div className="div59"></div>
              <div className="div62"></div>
            </div>
          </div>
        </div>
        <div className="form">
          <div className="title38">
            <div className="leave-a-comment">Leave a comment</div>
          </div>
          <div className="form1">
            <div className="email">
              <div className="btn1">
                <div className="bg5" />
                <div className="website">Name</div>
              </div>
            </div>
            <div className="email">
              <div className="btn1">
                <div className="bg5" />
                <div className="website">Email</div>
              </div>
            </div>
            <div className="email">
              <div className="btn1">
                <div className="bg5" />
                <div className="website">Website</div>
              </div>
            </div>
            <div className="email">
              <div className="btn4">
                <div className="bg8" />
                <div className="message1">Message...</div>
              </div>
            </div>
            <div className="button40">
              <div className="post-a-comment">Post a comment</div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner3" />
      <div className="banner4">
        <div className="background6" />
        <div className="content42">
          <div className="image-background">
            <div className="heading13">
              <div className="sub-text19">
                <div className="july-20232">21 July 2023</div>
              </div>
              <div className="title39">
                <b className="potential-treatment-for">
                  Potential treatment for an Inflammatory blood disease
                </b>
              </div>
            </div>
          </div>
          <img className="image-icon27" alt="" src="/image28@2x.png" />
          <div className="user1">
            <Content
              image="/image29@2x.png"
              instagram="/insta1.svg"
              facebook="/fb3.svg"
              twiter="/twiter4.svg"
              propGap="852px"
              propPosition="absolute"
              propTop="0px"
              propLeft="0px"
            />
            <div className="line7" />
          </div>
        </div>
      </div>
      <div className="content43">
        <img className="background-icon6" alt="" src="/background5.svg" />
        <div className="copyright-pharma5">
          Copyright © Pharma | Designed by EWNS
        </div>
        <div className="content44">
          <div className="div63">
            <div className="logo5">
              <div className="icon48">
                <div className="icon-child7" />
                <div className="icon-child8" />
                <img className="intersect-icon5" alt="" src="/intersect.svg" />
              </div>
              <div className="pharma5">Pharma</div>
            </div>
            <div className="contact-details5">
              <div className="call5">
                <div className="div64">(+22) 123 - 4567 - 900</div>
                <div className="call-child3" />
                <img className="vector-icon12" alt="" src="/vector1.svg" />
              </div>
              <div className="mail5">
                <div className="div64">support@doctorate.com</div>
                <div className="call-child3" />
                <img className="vector-icon13" alt="" src="/vector2.svg" />
              </div>
              <div className="follow11">
                <img className="fb-icon11" alt="" src="/fb2.svg" />
                <img className="insta-icon7" alt="" src="/insta1.svg" />
                <img className="twiter-icon11" alt="" src="/twiter2.svg" />
              </div>
            </div>
          </div>
          <div className="div65">
            <div className="quotes14">
              <div className="quotes15">
                <div className="a-simple-story-container5">
                  <p className="professionally-fashion-wireles">
                    “A Simple Story About
                  </p>
                  <p className="professionally-fashion-wireles">{`The Doctorate Medical Center & Health Care Foundation`}</p>
                </div>
              </div>
            </div>
            <div className="explore10">
              <div className="explore11">Explore</div>
              <div className="home10" onClick={onHomeTextClick}>
                Home
              </div>
              <div className="home10" onClick={onAboutUsTextClick}>
                About us
              </div>
              <div className="home10" onClick={onServicesTextClick}>
                Services
              </div>
              <div className="testimonals5">Testimonals</div>
              <div className="news5">News</div>
            </div>
            <div className="uitility5" onClick={onUitilityContainerClick}>
              <div className="leave-a-comment">Uitility Pages</div>
              <div className="style-guide-changelog-container5">
                <p className="professionally-fashion-wireles">Style Guide</p>
                <p className="professionally-fashion-wireles">Changelog</p>
                <p className="professionally-fashion-wireles">Licenses</p>
                <p className="professionally-fashion-wireles">Protected Page</p>
                <p className="professionally-fashion-wireles">404 Page</p>
              </div>
            </div>
            <div className="appoinment5">
              <div className="text61">
                <div className="leave-a-comment">Book an appointment</div>
                <div className="it-is-a5">
                  It is a long established fact that a reader will be distracted
                </div>
              </div>
              <div className="button41">
                <div className="bg9" />
                <div className="your-email-address5">your email address</div>
              </div>
              <div className="button42">
                <div className="post-a-comment">Submit</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rectangle-parent4">
        <div className="frame-child14" />
        <div className="menu5">
          <div className="home11" onClick={onHomeTextClick}>
            Home
          </div>
          <div className="about6" onClick={onAboutUsTextClick}>
            About
          </div>
          <div className="about6" onClick={onServicesTextClick}>
            Services
          </div>
          <div className="pages5">Pages</div>
          <div className="dropdown5">
            <div className="button43">
              <img className="icon49" alt="" src="/icon2.svg" />
            </div>
          </div>
          <div className="about6" onClick={onContactUsTextClick}>
            Contact Us
          </div>
        </div>
        <div className="top-bar5">
          <div className="background7" />
          <div className="welcome-to-pharma5">
            Welcome to Pharma. We provides medical accessories
          </div>
          <div className="div66">(404) 850 - 7080</div>
          <img className="icon50" alt="" src="/icon8.svg" />
          <div className="abcgmailcom5">abc@gmail.com</div>
          <img className="icon51" alt="" src="/icon9.svg" />
        </div>
        <div className="book-appointment-wrapper3">
          <div
            className="book-appointment6"
            onClick={onBookAppointmentTextClick}
          >
            Book Appointment
          </div>
        </div>
      </div>
      <div className="blog-single-inner">
        <img className="frame-child15" alt="" src="/group-72.svg" />
      </div>
      <div className="blog-single-child" />
      <img className="search-icon7" alt="" src="/search.svg" />
    </div>
  );
};

export default BlogSingle;
