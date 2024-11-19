import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = ({
  className = "",
  emptyContent,
  text,
  textColor,
  supportingText,
}) => {
  const textStyle = useMemo(() => {
    return {
      color: textColor,
    };
  }, [textColor]);

  return (
    <div className={[styles.mainContentParent, className].join(" ")}>
      <div className={styles.mainContent}>
        <img
          className={styles.emptyContentIcon}
          loading="lazy"
          alt=""
          src={emptyContent}
        />
      </div>
      <div className={styles.textParent}>
        <h1 className={styles.text} style={textStyle}>
          {text}
        </h1>
        <div className={styles.supportingText}>{supportingText}</div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
  emptyContent: PropTypes.string,
  text: PropTypes.string,
  supportingText: PropTypes.string,

  /** Style props */
  textColor: PropTypes.string,
};

export default FrameComponent1;
