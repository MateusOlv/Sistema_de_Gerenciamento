import InputField from "../InputField/InputField";
import PropTypes from "prop-types";
import styles from "./Content1.module.css";

const Content1 = ({ className = "" }) => {
  return (
    <form className={[styles.content, className].join(" ")}>
      <div className={styles.form}>
        <InputField
          inputFieldFlex="1"
          label="Email"
          placeholder="Insira seu e-mail"
        />
        <InputField
          inputFieldFlex="1"
          label="Senha"
          placeholder="••••••••"
        />
      </div>
      <div className={styles.row}>
        <div className={styles.checkbox}>
          <input className={styles.checkbox1} type="checkbox" />
          <label className={styles.checkboxLabel}>Lembre-se por 30 dias</label>
        </div>
        <div className={styles.button}>          
          <a href="#" className={styles.buttonLabel}>Esqueci a senha</a>
        </div>
      </div>
      <button className={styles.button1}>
        <div className={styles.buttonBase1}>
          <a href="/" className={styles.submitButtonLabel}>Entrar</a>
        </div>
      </button>
      
      <div className={styles.row1}>
        <div className={styles.text}>Não tem uma conta?</div>
        <div className={styles.button}>
          <a href="/registrar" className={styles.text1}>Registrar-se</a>
        </div>
      </div>
    </form>
  );
};

Content1.propTypes = {
  className: PropTypes.string,
};

export default Content1;
