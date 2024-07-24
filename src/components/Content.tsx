import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./Content.css";

export type ContentType = {
  className?: string;
  image?: string;
  instagram?: string;
  facebook?: string;
  twiter?: string;

  /** Style props */
  propGap?: CSSProperties["gap"];
  propPosition?: CSSProperties["position"];
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
};

const Content: FunctionComponent<ContentType> = ({
  className = "",
  image,
  instagram,
  facebook,
  twiter,
  propGap,
  propPosition,
  propTop,
  propLeft,
}) => {
  const contentStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
      position: propPosition,
      top: propTop,
      left: propLeft,
    };
  }, [propGap, propPosition, propTop, propLeft]);

  return (
    <div className={`content74 ${className}`} style={contentStyle}>
      <div className="user2">
        <img className="image-icon32" alt="" src={image} />
        <div className="name11">
          <div className="dr-lily-smith">Dr. Lily Smith</div>
          <div className="dental-specialist">Dental Specialist</div>
        </div>
      </div>
      <div className="follow16">
        <img className="instagram-icon" alt="" src={instagram} />
        <img className="facebook-icon" alt="" src={facebook} />
        <img className="twiter-icon16" alt="" src={twiter} />
      </div>
    </div>
  );
};

export default Content;
