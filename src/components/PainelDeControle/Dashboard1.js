import PropTypes from "prop-types";
import styles from "./Dashboard1.module.css";

const Dashboard1 = ({ className = "" }) => {
  return (
    <section className={[styles.dashboard, className].join(" ")}>
      <div className={styles.overallInventory}>
        <div className={styles.overallInventoryChild} />
        <div className={styles.weeklySummaryContainer}>
          <a className={styles.resumoDaSemana}>Resumo da Semana</a>
          <div className={styles.savedFilesContainer}>
            <div className={styles.arquivosSalvosParent}>
              <div className={styles.arquivosSalvos}>Arquivos Salvos</div>
              <div className={styles.categoryValues}>14</div>
              <div className={styles.hoje}>Hoje</div>
            </div>
            <div className={styles.savedFilesContainerInner}>
              <div className={styles.frameChild} />
            </div>
            <div className={styles.statsNames}>
              <div className={styles.totalEquipamentos}>Total Equipamentos</div>
              <div className={styles.arquivosSalvosParent}>
                <div className={styles.statsValueA}>
                  <div className={styles.statsPlaceholderA}>98</div>
                </div>
                <div className={styles.statsValueB}>
                  <div className={styles.ltimos7Dias}>Últimos 7 dias</div>
                </div>
              </div>
              <a className={styles.receita}>Receita</a>
              <div className={styles.r2500000}>R$25000,00</div>
            </div>
          </div>
        </div>
        <div className={styles.statItemWrapper}>
          <div className={styles.frameChild} />
        </div>
        <div className={styles.formsContainer}>
          <div className={styles.formulriosPreenchidosParent}>
            <div className={styles.statsPlaceholderA}>
              Formulários Preenchidos
            </div>
            <div className={styles.frameParent}>
              <div className={styles.statsValueA}>
                <div className={styles.statsPlaceholderA}>12</div>
              </div>
              <div className={styles.ltimos7DiasWrapper}>
                <div className={styles.ltimos7Dias}>Últimos 7 dias</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.statItem1} />
        <div className={styles.totalTransportContainerWrapper}>
          <div className={styles.arquivosSalvosParent}>
            <div className={styles.totalDeTransportes}>
              Total de transportes
            </div>
            <div className={styles.lowStockPlaceholder}>
              <div className={styles.lowStockValues}>10</div>
              <div className={styles.div1}>
                <span className={styles.span}>4</span>
                <span>º</span>
              </div>
            </div>
            <div className={styles.transportCounter}>
              <div className={styles.contadorGeral}>Contador Geral</div>
              <div className={styles.ltimoTransporte}>Último transporte</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Dashboard1.propTypes = {
  className: PropTypes.string,
};

export default Dashboard1;
