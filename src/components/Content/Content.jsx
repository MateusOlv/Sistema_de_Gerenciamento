import InputField from "../InputField/InputField";
import PropTypes from "prop-types";
import styles from "./Content.module.css";

const Content = ({ className = "" }) => {
  return (
    <form className={[styles.content, className].join(" ")}>
      <div className={styles.form}>
        <InputField label="Nome" placeholder="Insira seu nome" />
        <InputField
          inputFieldHeight="70px"
          inputFieldFlex="unset"
          label="Email"
          labelDisplay="unset"
          labelMinWidth="unset"
          placeholder="Insira seu email"
        />
        <InputField
          inputFieldHeight="70px"
          inputFieldFlex="unset"
          label="Senha"
          labelDisplay="unset"
          labelMinWidth="unset"
          placeholder="Insira sua senha"
        />

        <InputField
          inputFieldHeight="70px"
          inputFieldFlex="unset"
          label="Confirmar Senha"
          labelDisplay="unset"
          labelMinWidth="unset"
          placeholder="Insira a senha novamente"
        />
      </div>
      <a href="/" className={styles.button}>
        <div className={styles.buttonBase}>
          <span className={styles.text}>Registrar</span>
        </div>
      </a>
      <div className={styles.row}>
        <div className={styles.text1}>Já tem uma conta?</div>
        <div className={styles.button1}>
            <a href="/login" className={styles.text2}>Login</a>
        </div>
      </div>
    </form>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
