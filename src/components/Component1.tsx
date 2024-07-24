import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./Component1.css";

export type Component1Type = {
  className?: string;
  prop?: string;
  years?: string;
  experience?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
};

const Component1: FunctionComponent<Component1Type> = ({
  className = "",
  prop,
  years,
  experience,
  propWidth,
}) => {
  const divStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={`div100 ${className}`} style={divStyle}>
      <div className="heading19">
        <div className="title49">
          <div className="div101">{prop}</div>
        </div>
        <div className="sub-text25">
          <div className="sub-text-child8" />
          <div className="sub-text-child9" />
          <div className="years-experience">
            <p className="years">{years}</p>
            <p className="years">{experience}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component1;
