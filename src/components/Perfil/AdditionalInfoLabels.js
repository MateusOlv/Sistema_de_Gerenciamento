import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./AdditionalInfoLabels.module.css";

const AdditionalInfoLabels = ({
  className = "",
  additionalInfoLabelsPadding,
  gnero,
  gneroDisplay,
  gneroMinWidth,
  masculino,
  vuesaxlineararrowDown,
}) => {
  const additionalInfoLabelsStyle = useMemo(() => {
    return {
      padding: additionalInfoLabelsPadding,
    };
  }, [additionalInfoLabelsPadding]);

  const gneroStyle = useMemo(() => {
    return {
      display: gneroDisplay,
      minWidth: gneroMinWidth,
    };
  }, [gneroDisplay, gneroMinWidth]);

  return (
    <div
      className={[styles.additionalInfoLabels, className].join(" ")}
      style={additionalInfoLabelsStyle}
    >
      <div className={styles.gnero} style={gneroStyle}>
        {gnero}
      </div>
      <div className={styles.fieldIcons}>
        <div className={styles.fieldIconsChild} />
        <div className={styles.masculino}>{masculino}</div>
        <img
          className={styles.vuesaxlineararrowDownIcon}
          loading="lazy"
          alt=""
          src={vuesaxlineararrowDown}
        />
      </div>
    </div>
  );
};

AdditionalInfoLabels.propTypes = {
  className: PropTypes.string,
  gnero: PropTypes.string,
  masculino: PropTypes.string,
  vuesaxlineararrowDown: PropTypes.string,

  /** Style props */
  additionalInfoLabelsPadding: PropTypes.string,
  gneroDisplay: PropTypes.string,
  gneroMinWidth: PropTypes.string,
};

export default AdditionalInfoLabels;
