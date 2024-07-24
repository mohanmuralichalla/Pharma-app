import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Blog.css";

const Blog: FunctionComponent = () => {
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
    navigate("/appointment");
  }, [navigate]);

  return (
    <div className="blog">
      <div className="image8">
        <b className="about-us8">About Us</b>
        <div className="home-about4">{`Home > About Us`}</div>
        <div className="photo6" />
      </div>
      <div className="banner2">
        <img className="image-icon18" alt="" src="/image17@2x.png" />
      </div>
      <div className="background4" />
      <img className="image-icon19" alt="" src="/image19@2x.png" />
      <div className="photo7" />
      <div className="home-pages">{`Home >Pages > Blog`}</div>
      <div className="blogs">Blogs</div>
      <div className="parent3">
        <div className="div45">
          <div className="content30">
            <img className="image-icon20" alt="" src="/image20@2x.png" />
            <div className="text40">
              <div className="text41">
                <div className="title31">
                  <div className="open-letter-to">
                    Open letter to the residents of Ellsworth, Maine
                  </div>
                </div>
                <div className="sub-text13">
                  <div className="sub-text-inner" />
                  <b className="august-20231">18 August 2023</b>
                </div>
              </div>
              <div className="button30">
                <b className="read-more12">Read More</b>
              </div>
            </div>
          </div>
        </div>
        <div className="div45">
          <div className="content30">
            <img className="image-icon20" alt="" src="/image21@2x.png" />
            <div className="text40">
              <div className="text41">
                <div className="title31">
                  <div className="open-letter-to">
                    What is a normal phenotype for aging mice?
                  </div>
                </div>
                <div className="sub-text14">
                  <div className="sub-text-child1" />
                  <b className="july-2023">21 July 2023</b>
                </div>
              </div>
              <div className="button30">
                <b className="read-more12">Read More</b>
              </div>
            </div>
          </div>
        </div>
        <div className="div47">
          <div className="div45">
            <div className="content30">
              <img className="image-icon20" alt="" src="/image22@2x.png" />
              <div className="text40">
                <div className="text45">
                  <div className="sub-text15">
                    <div className="sub-text-child2" />
                    <b className="july-2023">15 January 2023</b>
                  </div>
                  <div className="title33">
                    <div className="open-letter-to">
                      It was popularised inner the with the release of
                      containing.
                    </div>
                  </div>
                </div>
                <div className="button30">
                  <b className="read-more12">Read More</b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="div45">
          <div className="content30">
            <img className="image-icon20" alt="" src="/image23@2x.png" />
            <div className="text40">
              <div className="text41">
                <div className="title31">
                  <div className="open-letter-to">
                    Find the Right Pediatric Dentist for Your Children's smile
                  </div>
                </div>
                <div className="sub-text14">
                  <div className="sub-text-child1" />
                  <b className="june-2023">18 June 2023</b>
                </div>
              </div>
              <div className="button30">
                <b className="read-more12">Read More</b>
              </div>
            </div>
          </div>
        </div>
        <div className="content30">
          <img className="image-icon20" alt="" src="/image24@2x.png" />
          <div className="text40">
            <div className="text41">
              <div className="title31">
                <div className="open-letter-to">
                  For Examination Of Kids Get Special Offers
                </div>
              </div>
              <div className="sub-text17">
                <div className="sub-text-child4" />
                <b className="march-2023">25 March 2023</b>
              </div>
            </div>
            <div className="button30">
              <b className="read-more12">Read More</b>
            </div>
          </div>
        </div>
        <div className="div45">
          <div className="content30">
            <img className="image-icon20" alt="" src="/image25@2x.png" />
            <div className="text40">
              <div className="text41">
                <div className="title31">
                  <div className="open-letter-to">
                    What is a normal phenotype for aging mice?
                  </div>
                </div>
                <div className="sub-text14">
                  <div className="sub-text-child1" />
                  <b className="march-2023">21 July 2023</b>
                </div>
              </div>
              <div className="button30">
                <b className="read-more12">Read More</b>
              </div>
            </div>
          </div>
        </div>
        <div className="blogs1">
          <div className="navigation">
            <div className="div51">
              <div className="next-page">1</div>
            </div>
            <div className="div53">
              <div className="next-page">2</div>
            </div>
            <div className="button36">
              <div className="next-page">Next page</div>
            </div>
          </div>
        </div>
      </div>
      <div className="content36">
        <img className="background-icon5" alt="" src="/background4.svg" />
        <div className="copyright-pharma4">
          Copyright © Pharma | Designed by EWNS
        </div>
        <div className="content37">
          <div className="div55">
            <div className="logo4">
              <div className="icon44">
                <div className="icon-child5" />
                <div className="icon-child6" />
                <img className="intersect-icon4" alt="" src="/intersect.svg" />
              </div>
              <div className="pharma4">Pharma</div>
            </div>
            <div className="contact-details4">
              <div className="call4">
                <div className="div56">(+22) 123 - 4567 - 900</div>
                <div className="call-child2" />
                <img className="vector-icon10" alt="" src="/vector1.svg" />
              </div>
              <div className="mail4">
                <div className="div56">support@doctorate.com</div>
                <div className="call-child2" />
                <img className="vector-icon11" alt="" src="/vector2.svg" />
              </div>
              <div className="follow10">
                <img className="fb-icon10" alt="" src="/fb2.svg" />
                <img className="insta-icon6" alt="" src="/insta1.svg" />
                <img className="twiter-icon10" alt="" src="/twiter2.svg" />
              </div>
            </div>
          </div>
          <div className="div57">
            <div className="quotes10">
              <div className="quotes11">
                <div className="a-simple-story-container4">
                  <p className="a-simple-story4">“A Simple Story About</p>
                  <p className="a-simple-story4">{`The Doctorate Medical Center & Health Care Foundation`}</p>
                </div>
              </div>
            </div>
            <div className="explore8">
              <div className="explore9">Explore</div>
              <div className="home8" onClick={onHomeTextClick}>
                Home
              </div>
              <div className="home8" onClick={onAboutUsTextClick}>
                About us
              </div>
              <div className="home8" onClick={onServicesTextClick}>
                Services
              </div>
              <div className="testimonals4">Testimonals</div>
              <div className="news4">News</div>
            </div>
            <div className="uitility4" onClick={onUitilityContainerClick}>
              <div className="uitility-pages4">Uitility Pages</div>
              <div className="style-guide-changelog-container4">
                <p className="a-simple-story4">Style Guide</p>
                <p className="a-simple-story4">Changelog</p>
                <p className="a-simple-story4">Licenses</p>
                <p className="a-simple-story4">Protected Page</p>
                <p className="a-simple-story4">404 Page</p>
              </div>
            </div>
            <div className="appoinment4">
              <div className="text52">
                <div className="uitility-pages4">Book an appointment</div>
                <div className="it-is-a4">
                  It is a long established fact that a reader will be distracted
                </div>
              </div>
              <div className="button37">
                <div className="bg4" />
                <div className="your-email-address4">your email address</div>
              </div>
              <div className="button38">
                <div className="next-page">Submit</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rectangle-parent3">
        <div className="frame-child12" />
        <div className="top-bar4">
          <div className="background5" />
          <div className="welcome-to-pharma4">
            Welcome to Pharma. We provides medical accessories
          </div>
          <div className="div58">(404) 850 - 7080</div>
          <img className="icon45" alt="" src="/icon8.svg" />
          <div className="abcgmailcom4">abc@gmail.com</div>
          <img className="icon46" alt="" src="/icon9.svg" />
        </div>
        <div className="menu4">
          <div className="home9" onClick={onHomeTextClick}>
            Home
          </div>
          <div className="about5" onClick={onAboutUsTextClick}>
            About
          </div>
          <div className="about5" onClick={onServicesTextClick}>
            Services
          </div>
          <div className="pages4">Pages</div>
          <div className="dropdown4">
            <div className="button39">
              <img className="icon47" alt="" src="/icon2.svg" />
            </div>
          </div>
          <div className="about5" onClick={onContactUsTextClick}>
            Contact Us
          </div>
        </div>
        <div
          className="book-appointment-wrapper2"
          onClick={onFrameContainerClick}
        >
          <div className="read-more12">Book Appointment</div>
        </div>
      </div>
      <div className="blog-inner">
        <img className="frame-child13" alt="" src="/group-72.svg" />
      </div>
      <div className="blog-child" />
      <img className="search-icon6" alt="" src="/search.svg" />
    </div>
  );
};

export default Blog;
