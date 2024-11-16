import SearchBarContainer from "./SearchBarContainer";
import styles from "./ContentArea.module.css";

const ContentArea = ({ className = "" }) => {
  return (
    <section className={[styles.contentArea, className].join(" ")}>
      <SearchBarContainer />
      <div className={styles.manageStoreArea}>
        <div className={styles.manageStore}>
          <div className={styles.formulrios}>Formulários</div>
          <div className={styles.formsContainer}>
            <div className={styles.requestForm}>
              <div className={styles.storeLocation}>
                <div className={styles.storeLocationChild} />
                <div className={styles.requestTitle}>
                  <div className={styles.titlePlaceholder} />
                  <div className={styles.requestSubTitle}>
                    <div className={styles.requisioParent}>
                      <div className={styles.requisio}>Requisição</div>
                      <div className={styles.requisioDeTransporte}>
                        Requisição de Transporte Aéreo de Carga
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.formActions}>
                  <div className={styles.button}>
                    <div className={styles.abrir}>Abrir</div>
                  </div>
                </div>
                <div className={styles.figuresContainer}>
                  <img
                    className={styles.figuras11}
                    alt=""
                    src="/figuras--1-1@2x.png"
                  />
                  <img
                    className={styles.figuras21}
                    loading="lazy"
                    alt=""
                    src="/figuras--2-1@2x.png"
                  />
                </div>
              </div>
              <div className={styles.branchNameContainer}>
                <div className={styles.branchNameContainerChild} />
                <div className={styles.branchNameContainerItem} />
                <div className={styles.branchNameContainerInner}>
                  <div className={styles.requisioParent}>
                    <div className={styles.notaFiscal}>Nota Fiscal</div>
                    <div className={styles.emissoDeNota}>Emissão de Nota</div>
                  </div>
                </div>
                <div className={styles.formActions}>
                  <div className={styles.button}>
                    <div className={styles.abrir}>Abrir</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentArea;
