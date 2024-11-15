import InputField from "./InputField";
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
        <div className={styles.inputField}>
          <div className={styles.inputFieldBase}>
            <div className={styles.inputWithLabel}>
              <div className={styles.label}>Senha</div>
              <div className={styles.input}>
                <input
                  className={styles.content1}
                  placeholder="Insira sua senha"
                  type="text"
                />
              </div>
            </div>
            <div className={styles.hintText}>
              Deve conter pelo menos 8 caracteres.
            </div>
          </div>
        </div>
        <div className={styles.inputFieldBase1}>
          <div className={styles.inputWithLabel1}>
            <div className={styles.label}>Confirmar Senha</div>
            <div className={styles.input}>
              <input
                className={styles.content1}
                placeholder="Insira a senha novamente"
                type="text"
              />
            </div>
          </div>
        </div>
      </div>
      <button className={styles.button}>
        <div className={styles.buttonBase}>
          <div className={styles.text}>Registrar</div>
        </div>
      </button>
      <div className={styles.row}>
        <div className={styles.text1}>Já tem uma conta?</div>
        <div className={styles.button1}>
          <div className={styles.buttonBase1}>
            <a href="/" className={styles.text2}>Login</a>
          </div>
        </div>
      </div>
    </form>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
