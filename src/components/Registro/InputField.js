import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./InputField.module.css";

const InputField = ({
  className = "",
  inputFieldHeight,
  inputFieldFlex,
  label,
  labelDisplay,
  labelMinWidth,
  placeholder,
}) => {
  const inputFieldStyle = useMemo(() => {
    return {
      height: inputFieldHeight,
      flex: inputFieldFlex,
    };
  }, [inputFieldHeight, inputFieldFlex]);

  const labelStyle = useMemo(() => {
    return {
      display: labelDisplay,
      minWidth: labelMinWidth,
    };
  }, [labelDisplay, labelMinWidth]);

  return (
    <div
      className={[styles.inputField, className].join(" ")}
      style={inputFieldStyle}
    >
      <div className={styles.inputFieldBase}>
        <div className={styles.inputWithLabel}>
          <div className={styles.label} style={labelStyle}>
            {label}
          </div>
          <div className={styles.input}>
            <input
              className={styles.content}
              placeholder={placeholder}
              type="text"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

InputField.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,

  /** Style props */
  inputFieldHeight: PropTypes.string,
  inputFieldFlex: PropTypes.string,
  labelDisplay: PropTypes.string,
  labelMinWidth: PropTypes.string,
};

export default InputField;
