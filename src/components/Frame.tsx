import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Frame.css";

export type FrameType = {
  className?: string;
  onClose?: () => void;
};

const Frame: FunctionComponent<FrameType> = ({ className = "", onClose }) => {
  const navigate = useNavigate();

  const onXIconClick = useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  

  return (
    <div className={`button-parent ${className}`}>
      <div className="button63">
        <div className="booking-now1">Booking Now</div>
      </div>
      <div className="title48">
        <div className="book-an-appointment13">Book an Appointment</div>
        <div className="lorem-ipsum-is1">
          Lorem Ipsum is simply dummy text of printing and typesetting industry
          standard dummy text the with the release.
        </div>
      </div>
      <div className="container1">
        <div className="label-text">Phone</div>
        <div className="container-child" />
      </div>
      <div className="container1">
        <div className="label-text">Phone</div>
        <div className="container-child" />
      </div>
      <div className="container3">
        <div className="label-text">Name</div>
        <div className="container-child" />
      </div>
      <div className="container3">
        <div className="label-text">Name</div>
        <div className="container-child" />
      </div>
      <div className="label-text4">Message</div>
      <div className="frame-child24" />
      <img className="x-icon" alt="" src="/x.svg" onClick={onXIconClick} />
      <img className="image-icon30" alt="" src="/image32@2x.png" />
      <div className="container5">
        <div className="label-text5">Name</div>
        <div className="container-child2" />
      </div>
      <div className="container6">
        <div className="label-text">Phone</div>
        <div className="container-child" />
      </div>
    </div>
  );
};

export default Frame;
