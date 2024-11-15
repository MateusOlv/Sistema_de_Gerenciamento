import InputField from "./InputField";
import PropTypes from "prop-types";
import styles from "./Content1.module.css";

const Content1 = ({ className = "" }) => {
  return (
    <form className={[styles.content, className].join(" ")}>
      <div className={styles.form}>
        <InputField
          inputFieldHeight="unset"
          inputFieldFlex="1"
          label="Email"
          labelDisplay="unset"
          labelMinWidth="unset"
          placeholder="Insira seu e-mail"
        />
        <InputField
          inputFieldHeight="unset"
          inputFieldFlex="1"
          label="Senha"
          labelDisplay="unset"
          labelMinWidth="unset"
          placeholder="••••••••"
        />
      </div>
      <div className={styles.row}>
        <div className={styles.checkbox}>
          <input className={styles.checkbox1} type="checkbox" />
          <div className={styles.checkboxLabel}>Lembre-se por 30 dias</div>
        </div>
        <div className={styles.button}>
          <div className={styles.buttonBase}>
            <div className={styles.buttonLabel}>Esqueci a senha</div>
          </div>
        </div>
      </div>
      <button className={styles.button1}>
        <div className={styles.buttonBase1}>
          <div className={styles.submitButtonLabel}>Entrar</div>
        </div>
      </button>
      <div className={styles.socialButtonGroups} />
      <div className={styles.row1}>
        <div className={styles.text}>Não tem uma conta?</div>
        <div className={styles.button}>
          <div className={styles.buttonBase}>
            <div className={styles.text1}>Registrar-se</div>
          </div>
        </div>
      </div>
    </form>
  );
};

Content1.propTypes = {
  className: PropTypes.string,
};

export default Content1;
