import PropTypes from "prop-types";
import styles from "./TableContainer.module.css";

const TableContainer = ({ className = "" }) => {
  return (
    <section className={[styles.tableContainer, className].join(" ")}>
      <div className={styles.productGridContainer}>
        <div className={styles.tableHeader}>
          <div className={styles.tableHeaderRow}>
            <div className={styles.tableBody}>
              <div className={styles.tableRow}>
                <div className={styles.equipamentos}>Equipamentos</div>
                <div className={styles.equipmentDate}>
                  <div className={styles.dataWrapper}>
                    <div className={styles.data}>{`Data `}</div>
                  </div>
                  <div className={styles.equipmentNumber}>
                    <div className={styles.numberValuesWrapper}>
                      <div className={styles.numberValues}>
                        <div className={styles.n}>Nº</div>
                        <div className={styles.n1}>Nº</div>
                      </div>
                    </div>
                    <div className={styles.returnInfo}>
                      <div className={styles.retornoprorrogao}>
                        Retorno/Prorrogação
                      </div>
                      <div className={styles.sapCodeContainer}>
                        <div className={styles.retornoprorrogao}>COD (SAP)</div>
                      </div>
                    </div>
                    <div className={styles.nomeSapWrapper}>
                      <div className={styles.retornoprorrogao}>Nome (SAP)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.headerCells}>
              <div className={styles.alias}>ALIAS</div>
            </div>
            <div className={styles.headerCells}>
              <div className={styles.retornoprorrogao}>Motivo</div>
            </div>
            <div className={styles.headerCells}>
              <div className={styles.retornoprorrogao}>Valor</div>
            </div>
            <div className={styles.partNumberFilterParent}>
              <div className={styles.partNumberFilter}>
                <div className={styles.buttonWrapper}>
                  <button className={styles.button}>
                    <div className={styles.buttonBase}>
                      <img
                        className={styles.filtersLinesIcon}
                        alt=""
                        src="/filters-lines.svg"
                      />
                      <div className={styles.text}>Filtros</div>
                    </div>
                  </button>
                </div>
                <div className={styles.partNumber}>Part Number</div>
              </div>
              <div className={styles.partNumberFilter}>
                <button className={styles.button}>
                  <div className={styles.buttonBase1}>
                    <div className={styles.text}>Download</div>
                  </div>
                </button>
                <div className={styles.serialNumberWrapper}>
                  <div className={styles.serialNumber}>Serial Number</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className={styles.gridItemIcon}
          loading="lazy"
          alt=""
          src="/vector-40.svg"
        />
        <div className={styles.powerSystemContainer}>
          <div className={styles.powerSystemValues}>
            <div className={styles.maggiWrapper}>
              <div className={styles.maggi}>1</div>
            </div>
            <div className={styles.retornoprorrogao}>11/12/24</div>
            <div className={styles.retornoprorrogao}>4001896</div>
            <div className={styles.upsSgdcWrapper}>
              <div className={styles.retornoprorrogao}>UPS - SGDC</div>
            </div>
            <div className={styles.packetsWrapper}>
              <div className={styles.retornoprorrogao}>Texto 1</div>
            </div>
            <div className={styles.noSeiWrapper}>
              <div className={styles.retornoprorrogao}>Não sei</div>
            </div>
            <div className={styles.r50000Wrapper}>
              <div className={styles.r50000}>R$500,00</div>
            </div>
            <div className={styles.packetsWrapper}>
              <div className={styles.div1}>123456</div>
            </div>
            <div className={styles.div1}>123456</div>
          </div>
        </div>
        <img
          className={styles.gridItemIcon1}
          loading="lazy"
          alt=""
          src="/vector-41.svg"
        />
        <div className={styles.redundantSystemContainer}>
          <div className={styles.redundantSystemValues}>
            <div className={styles.bruWrapper}>
              <div className={styles.bru}>2</div>
            </div>
            <div className={styles.container}>
              <div className={styles.div2}>5/12/24</div>
            </div>
            <div className={styles.retornoprorrogao}>4000751</div>
            <div className={styles.uRAVFPField}>
              <div className={styles.ur52a48v412Fp2Container}>
                <p className={styles.ur52a48v}>UR 52A/-48V</p>
                <p className={styles.convertersSystem}>/4.1.2-FP2 48/3000</p>
              </div>
            </div>
            <div className={styles.packetsContainer}>
              <div className={styles.packets1}>Texto 2</div>
            </div>
            <div className={styles.noSeiContainer}>
              <div className={styles.retornoprorrogao}>Não sei</div>
            </div>
            <div className={styles.redundantSystemRValue}>
              <div className={styles.retornoprorrogao}>R$8000,00</div>
            </div>
            <div className={styles.frame}>
              <div className={styles.div3}>123456</div>
            </div>
            <div className={styles.div3}>123456</div>
          </div>
        </div>
        <img
          className={styles.gridItemIcon1}
          loading="lazy"
          alt=""
          src="/vector-42.svg"
        />
        <div className={styles.redundantSystemContainer}>
          <div className={styles.converterSystemValues}>
            <div className={styles.converterSystemFirstValue}>
              <div className={styles.retornoprorrogao}>3</div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.retornoprorrogao}>21/12/24</div>
            </div>
            <div className={styles.converterSystemSecondValue}>
              <div className={styles.emptyField}>4002049</div>
            </div>
            <div className={styles.converterSystemName}>
              <div className={styles.upDownContainer}>
                <p className={styles.ur52a48v}>{`Up & Down Redundant`}</p>
                <p className={styles.convertersSystem}>Converters System</p>
              </div>
            </div>
            <div className={styles.packetsFrame}>
              <div className={styles.retornoprorrogao}>Texto 3</div>
            </div>
            <div className={styles.noSeiFrame}>
              <div className={styles.retornoprorrogao}>Não sei</div>
            </div>
            <div className={styles.converterSystemRValue}>
              <div className={styles.r50000}>R$200,00</div>
            </div>
            <div className={styles.wrapper1}>
              <div className={styles.div5}>123456</div>
            </div>
            <div className={styles.div5}>123456</div>
          </div>
        </div>
        <img
          className={styles.gridItemIcon}
          loading="lazy"
          alt=""
          src="/vector-43.svg"
        />
        <div className={styles.powerSystemContainer}>
          <div className={styles.aVFPValues}>
            <div className={styles.bournVitaWrapper}>
              <div className={styles.retornoprorrogao}>4</div>
            </div>
            <div className={styles.wrapper2}>
              <div className={styles.retornoprorrogao}>8/12/24</div>
            </div>
            <div className={styles.emptyField}>4002343</div>
            <div className={styles.uRAVFPContainer}>
              <div className={styles.ur52a48v412Fp2Container}>
                <p className={styles.ur52a48v}>UR 32A/-48V</p>
                <p className={styles.convertersSystem}>/4.1.3-FP2 34/7000</p>
              </div>
            </div>
            <div className={styles.packetsWrapper1}>
              <div className={styles.retornoprorrogao}>Texto 4</div>
            </div>
            <div className={styles.noSeiWrapper1}>
              <div className={styles.retornoprorrogao}>Não sei</div>
            </div>
            <div className={styles.r3000Wrapper}>
              <div className={styles.retornoprorrogao}>R$30,00</div>
            </div>
            <div className={styles.wrapper3}>
              <div className={styles.div5}>123456</div>
            </div>
            <div className={styles.div5}>123456</div>
          </div>
        </div>
        <div className={styles.systemDetailsContainer}>
          <img
            className={styles.gridItemIcon4}
            loading="lazy"
            alt=""
            src="/vector-44.svg"
          />
          <div className={styles.systemDetailValues}>
            <div className={styles.firstDetailValueParent}>
              <div className={styles.firstDetailValue}>
                <div className={styles.bru}>5</div>
              </div>
              <div className={styles.secondDetailValue}>
                <div className={styles.div9}>9/1/24</div>
              </div>
              <div className={styles.thirdDetailValue}>
                <div className={styles.retornoprorrogao}>4000049</div>
              </div>
              <div className={styles.uRAVFPValues}>
                <div className={styles.ur42a48v417Fp2Container}>
                  <p className={styles.ur52a48v}>UR 42A/-48V</p>
                  <p className={styles.convertersSystem}>/4.1.7-FP2 47/6000</p>
                </div>
              </div>
              <div className={styles.packetsWrapper2}>
                <div className={styles.retornoprorrogao}>Texto 5</div>
              </div>
              <div className={styles.detailDropdownValues}>
                <div className={styles.retornoprorrogao}>Não sei</div>
              </div>
              <div className={styles.detailRValues}>
                <div className={styles.retornoprorrogao}>R$1000,00</div>
              </div>
              <div className={styles.fifthDetailValue}>
                <div className={styles.emptyElement1}>123456</div>
              </div>
              <div className={styles.sixthDetailValue}>
                <div className={styles.emptyElement1}>123456</div>
              </div>
            </div>
          </div>
          <div className={styles.systemDetailValues1}>
            <img
              className={styles.gridItemIcon5}
              loading="lazy"
              alt=""
              src="/vector-45.svg"
            />
          </div>
          <div className={styles.systemDetailValues2}>
            <div className={styles.firstDetailValueParent}>
              <div className={styles.harpicWrapper}>
                <div className={styles.retornoprorrogao}>6</div>
              </div>
              <div className={styles.wrapper4}>
                <div className={styles.div9}>9/1/24</div>
              </div>
              <div className={styles.wrapper5}>
                <div className={styles.retornoprorrogao}>4002190</div>
              </div>
              <div className={styles.ur12a48v411Fp2803000Wrapper}>
                <div className={styles.ur52a48v412Fp2Container}>
                  <p className={styles.ur52a48v}>UR 12A/-48V</p>
                  <p className={styles.convertersSystem}>/4.1.1-FP2 80/3000</p>
                </div>
              </div>
              <div className={styles.packetsWrapper3}>
                <div className={styles.retornoprorrogao}>Texto 6</div>
              </div>
              <div className={styles.noSeiWrapper2}>
                <div className={styles.retornoprorrogao}>Não sei</div>
              </div>
              <div className={styles.r234000Wrapper}>
                <div className={styles.retornoprorrogao}>R$2340,00</div>
              </div>
              <div className={styles.wrapper6}>
                <div className={styles.emptyElement1}>123456</div>
              </div>
              <div className={styles.wrapper5}>
                <div className={styles.emptyElement1}>123456</div>
              </div>
            </div>
          </div>
          <div className={styles.systemDetailValues3}>
            <img
              className={styles.gridItemIcon5}
              loading="lazy"
              alt=""
              src="/vector-46.svg"
            />
          </div>
          <div className={styles.seventhDetailValueContainer}>
            <div className={styles.seventhDetailValues}>
              <div className={styles.arielWrapper}>
                <div className={styles.retornoprorrogao}>7</div>
              </div>
              <div className={styles.wrapper8}>
                <div className={styles.retornoprorrogao}>15/12/24</div>
              </div>
              <div className={styles.retornoprorrogao}>4002293</div>
              <div className={styles.uRAVFPContainer1}>
                <div className={styles.ur52a48v412Fp2Container}>
                  <p className={styles.ur52a48v}>UR 10A/-48V</p>
                  <p className={styles.convertersSystem}>/4.1.5-FP2 60/8000</p>
                </div>
              </div>
              <div className={styles.packetsWrapper4}>
                <div className={styles.retornoprorrogao}>Texto 7</div>
              </div>
              <div className={styles.noSeiWrapper3}>
                <div className={styles.retornoprorrogao}>Não sei</div>
              </div>
              <div className={styles.r650400Wrapper}>
                <div className={styles.retornoprorrogao}>R$6504,00</div>
              </div>
              <div className={styles.wrapper9}>
                <div className={styles.div15}>123456</div>
              </div>
              <div className={styles.div15}>123456</div>
            </div>
          </div>
          <img
            className={styles.gridItemIcon4}
            loading="lazy"
            alt=""
            src="/vector-47.svg"
          />
          <div className={styles.eighthDetailValueContainer}>
            <div className={styles.eighthDetailValues}>
              <div className={styles.eighthDetailFirstValue}>
                <div className={styles.bru}>8</div>
              </div>
              <div className={styles.wrapper10}>
                <div className={styles.retornoprorrogao}>6/6/24</div>
              </div>
              <div className={styles.wrapper11}>
                <div className={styles.retornoprorrogao}>4002332</div>
              </div>
              <div className={styles.uRAVFPContainer2}>
                <div className={styles.ur52a48v412Fp2Container}>
                  <p className={styles.ur52a48v}>UR 8A/-48V</p>
                  <p className={styles.convertersSystem}>/4.1.7-FP2 48/1000</p>
                </div>
              </div>
              <div className={styles.packetsWrapper5}>
                <div className={styles.retornoprorrogao}>Texto 8</div>
              </div>
              <div className={styles.noSeiWrapper4}>
                <div className={styles.retornoprorrogao}>Não sei</div>
              </div>
              <div className={styles.eighthDetailRValue}>
                <div className={styles.r232433}>R$2324,33</div>
              </div>
              <div className={styles.wrapper12}>
                <div className={styles.div18}>123456</div>
              </div>
              <div className={styles.wrapper13}>
                <div className={styles.div19}>123456</div>
              </div>
            </div>
          </div>
          <div className={styles.ninthDetailContainer}>
            <img
              className={styles.gridItemIcon4}
              loading="lazy"
              alt=""
              src="/vector-48.svg"
            />
            <div className={styles.redundantSystemContainer}>
              <div className={styles.replaceButtonContainerParent}>
                <div className={styles.replaceButtonContainer}>
                  <div className={styles.replaceButtonWrapper}>
                    <div className={styles.replaceButtonField}>
                      <div className={styles.cocaCola}>9</div>
                      <button className={styles.replaceButton}>
                        <div className={styles.text2}>Anterior</div>
                      </button>
                    </div>
                    <div className={styles.retornoprorrogao}>11/11/24</div>
                  </div>
                </div>
                <div className={styles.ninthDetailValueNames}>
                  <div className={styles.retornoprorrogao}>4002001</div>
                </div>
                <div className={styles.tenthDetailValueContainer}>
                  <div className={styles.tenthDetailValues}>
                    <div className={styles.ur70a48v418Fp2Container}>
                      <p className={styles.ur52a48v}>UR 70A/-48V</p>
                      <p className={styles.convertersSystem}>
                        /4.1.8-FP2 48/3000
                      </p>
                    </div>
                    <div className={styles.detailValueWrapper}>
                      <div className={styles.detailValueField}>
                        <div className={styles.retornoprorrogao}>Texto 9</div>
                      </div>
                      <div className={styles.details}>
                        <span>{`Página `}</span>
                        <span className={styles.span}>1</span>
                        <span>{` de `}</span>
                        <span className={styles.span}>10</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.ninthDetailValueNames1}>
                  <div className={styles.retornoprorrogao}>Não sei</div>
                </div>
                <div className={styles.tenthDetailRValue}>
                  <div className={styles.r70060}>R$700,60</div>
                </div>
                <div className={styles.eleventhDetailValueContaine}>
                  <div className={styles.eleventhDetailValues}>
                    <div className={styles.div21}>123456</div>
                    <div className={styles.partNumberFilter}>
                      <div className={styles.replaceButtonWrapper1}>
                        <div className={styles.div22}>123456</div>
                      </div>
                      <button className={styles.replaceButton1}>
                        <div className={styles.text2}>Próximo</div>
                      </button>
                    </div>
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

TableContainer.propTypes = {
  className: PropTypes.string,
};

export default TableContainer;
