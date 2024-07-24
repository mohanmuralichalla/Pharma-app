import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./Component.css";

export type ComponentType = {
  className?: string;
  image?: string;
  openLetterToTheResidentsO?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
};

const Component: FunctionComponent<ComponentType> = ({
  className = "",
  image,
  openLetterToTheResidentsO,
  propTop,
  propLeft,
}) => {
  const div1Style: CSSProperties = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div className={`div102 ${className}`} style={div1Style}>
      <img className="image-icon31" alt="" src={image} />
      <div className="text84">
        <div className="content73">
          <div className="sub-text26">
            <div className="sub-text-child10" />
            <div className="august-20232">18 August 2023</div>
          </div>
          <div className="title50">
            <div className="open-letter-to1">{openLetterToTheResidentsO}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component;
