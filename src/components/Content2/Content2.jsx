import PropTypes from "prop-types";
import styles from "./Content2.module.css";

const Content2 = ({ className = "" }) => {
  return (
    <div className={[styles.content, className].join(" ")}>
      <div className={styles.acompanheEGerencieWrapper}>
        <div className={styles.acompanheEGerencie}>
          <div className={styles.acompanheEGerencieChild} />
          <img
            className={styles.insurance31}
            loading="lazy"
            alt=""
            src="/insurance-3-1@2x.png"
          />
          <h3 className={styles.companheEGerencie}>
            Gerenciamento de Equipamentos.
          </h3>
        </div>
      </div>
      <div className={styles.acompanheEGerencie1}>
        <div className={styles.acompanheEGerencieItem} />
        <img
          className={styles.truck81}
          loading="lazy"
          alt=""
          src="/truck-8-1@2x.png"
        />
        <h3 className={styles.companheEGerencie}>
          Acompanhe e gerencie todos os transportes em andamento.
        </h3>
      </div>
      <div className={styles.formulrios}>
        <div className={styles.formulriosChild} />
        <img
          className={styles.figuras2}
          loading="lazy"
          alt=""
          src="/figuras--2@2x.png"
        />
        <div className={styles.h3FeatureTitle3Wrapper}>
          <h3 className={styles.h3FeatureTitle3}>
            Visualize formulários detalhados sobre transportes e equipamentos.
          </h3>
        </div>
      </div>
    </div>
  );
};

Content2.propTypes = {
  className: PropTypes.string,
};

export default Content2;
