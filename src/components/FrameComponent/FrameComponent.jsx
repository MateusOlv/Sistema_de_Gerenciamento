import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({ className = "", frameDivPadding, prop }) => {
  const frameDivStyle = useMemo(() => {
    return {
      padding: frameDivPadding,
    };
  }, [frameDivPadding]);

  return (
    <div
      className={[styles.registrarInner, className].join(" ")}
      style={frameDivStyle}
    >
      <div className={styles.frameParent}>
        <div className={styles.wrapper}>
          <img className={styles.icon} loading="lazy" alt="" src={prop} />
        </div>
        <h1 className={styles.logimanage}>LogiManage</h1>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  prop: PropTypes.string,

  /** Style props */
  frameDivPadding: PropTypes.string,
};

export default FrameComponent;
