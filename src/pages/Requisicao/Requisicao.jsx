import ListMenu from "../../components/ListMenu/ListMenu";
import SideBar from "../../components/SideBar/SideBar";
import styles from "./Requisicao.module.css";

const images = ["/home2.svg", "/report.svg", "/order1.svg", "/manage-store.svg","/suppliers.svg"]

const Requisicao = () => {
  return (
    <div className={styles.requisicao}>
      <SideBar Image={images}/>
      <main className={styles.content}>
        <section className={styles.searchBarContainer}>
          <div className={styles.topBar} />
          <div className={styles.searchBarWrapper}>
            <div className={styles.searchBar}>
              <img className={styles.searchIcon} alt="" src="/search.svg" />
              <input
                className={styles.pesquisar}
                placeholder="Pesquisar"
                type="text"
              />
            </div>
            <div className={styles.notificationContainer}>
              <div className={styles.notification}>
                <img
                  className={styles.notificationIcon}
                  loading="lazy"
                  alt=""
                  src="/notification2.svg"
                />
              </div>
            </div>
          </div>
        </section>
        <section className={styles.dataContainer}>
          <div className={styles.dataWrapper}>
            <div className={styles.dataHeader}>
              <div className={styles.n}>Nº</div>
              <div className={styles.contentHeader}>
                <nav className={styles.contentHeaderWrapper}>
                  <div className={styles.contentHeaderTitle}>
                    <div className={styles.requisicaoDeTransporte}>
                      Requisição de Transporte
                    </div>
                    <div className={styles.contentSubtitle}>
                      <div className={styles.nEqui}>Nº Equi.</div>
                      <div className={styles.contentSubtitleValue}>
                        <div className={styles.codSap}>{`Cod. (SAP) `}</div>
                      </div>
                      <div className={styles.alias}>ALIAS</div>
                    </div>
                  </div>
                  <div className={styles.contentDimensions}>
                    <div className={styles.codSap}>Comprimento</div>
                    <div className={styles.codSap}>Largura</div>
                  </div>
                  <div className={styles.buttonContainer}>
                    <div className={styles.addEquipmentButtonWrapper}>
                      <div className={styles.addEquipmentButtonContainer}>
                        <div className={styles.addEquipmentButton}>
                          <div className={styles.button}>
                            <div className={styles.adicionarEquipamento}>
                              Adicionar Equipamento
                            </div>
                          </div>
                          <button className={styles.button1}>
                            <div className={styles.buttonBase}>
                              <img
                                className={styles.filtersLinesIcon}
                                alt=""
                                src="/filters-lines1.svg"
                              />
                              <div className={styles.text}>Filtros</div>
                            </div>
                          </button>
                        </div>
                      </div>
                      <div className={styles.contentDimensionsWeight}>
                        <div className={styles.alias}>Altura</div>
                        <div className={styles.widthValue}>
                          <div className={styles.codSap}>Largura</div>
                        </div>
                        <div className={styles.altura1}>Altura</div>
                        <div className={styles.peso}>Peso</div>
                      </div>
                    </div>
                    <div className={styles.valueButton}>
                      <button className={styles.button02}>
                        <div className={styles.buttonBase1}>
                          <div className={styles.text}>Download</div>
                        </div>
                      </button>
                      <div className={styles.valueInput}>
                        <div className={styles.valor}>Valor</div>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
              <img
                className={styles.dataHeaderItems}
                loading="lazy"
                alt=""
                src="/vector-401.svg"
              />
              <div className={styles.placeholderContainer}>
                <div className={styles.dataHeaderValues}>
                  <div className={styles.valuePlaceholder}>1</div>
                  <div className={styles.codSap}>4001896</div>
                </div>
              </div>
              <img
                className={styles.dataHeaderItems2}
                loading="lazy"
                alt=""
                src="/vector-41.svg"
              />
              <div className={styles.placeholderContainer}>
                <div className={styles.placeholderWrapper}>
                  <div className={styles.placeholder}>2</div>
                  <div className={styles.codSap}>4000751</div>
                </div>
              </div>
              <img
                className={styles.dataHeaderItems2}
                loading="lazy"
                alt=""
                src="/vector-42.svg"
              />
              <div className={styles.placeholderContainer1}>
                <div className={styles.placeholderWrapper1}>
                  <div className={styles.codSap}>3</div>
                  <div className={styles.placeholderContainer2}>
                    <div className={styles.placeholder3}>4002049</div>
                  </div>
                </div>
              </div>
              <img
                className={styles.dataHeaderItems}
                loading="lazy"
                alt=""
                src="/vector-43.svg"
              />
              <div className={styles.placeholderContainer}>
                <div className={styles.parent}>
                  <div className={styles.codSap}>4</div>
                  <div className={styles.placeholder3}>4002343</div>
                </div>
              </div>
              <img
                className={styles.dataHeaderItems2}
                loading="lazy"
                alt=""
                src="/vector-44.svg"
              />
              <div className={styles.dataHeaderItems7}>
                <div className={styles.group}>
                  <div className={styles.placeholder}>5</div>
                  <div className={styles.codSap}>4000049</div>
                </div>
              </div>
              <img
                className={styles.dataHeaderItems2}
                loading="lazy"
                alt=""
                src="/vector-45.svg"
              />
              <div className={styles.dataHeaderItems7}>
                <div className={styles.container}>
                  <div className={styles.codSap}>6</div>
                  <div className={styles.codSap}>4002190</div>
                </div>
              </div>
              <img
                className={styles.dataHeaderItems2}
                loading="lazy"
                alt=""
                src="/vector-46.svg"
              />
              <div className={styles.placeholderContainer3}>
                <div className={styles.placeholderWrapper1}>
                  <div className={styles.buttons}>
                    <div className={styles.codSap}>7</div>
                  </div>
                  <div className={styles.placeholder3}>4002343</div>
                </div>
              </div>
              <img
                className={styles.dataHeaderItems2}
                loading="lazy"
                alt=""
                src="/vector-47.svg"
              />
              <div className={styles.placeholderContainer}>
                <div className={styles.frameDiv}>
                  <div className={styles.placeholder}>8</div>
                  <div className={styles.codSap}>4000049</div>
                </div>
              </div>
              <img
                className={styles.dataHeaderItems2}
                loading="lazy"
                alt=""
                src="/vector-48.svg"
              />
              <div className={styles.buttonContainer1}>
                <div className={styles.buttonWrapper}>
                  <div className={styles.buttons}>
                    <div className={styles.replaceButtons}>
                      <div className={styles.codSap}>9</div>
                      <button className={styles.replaceButton}>
                        <div className={styles.text2}>Anterior</div>
                      </button>
                    </div>
                  </div>
                  <div className={styles.detailsPlaceholder}>
                    <div className={styles.codSap}>4002190</div>
                  </div>
                  <div className={styles.detailsButton}>
                    <div className={styles.details}>
                      <span>{`Página `}</span>
                      <span className={styles.span}>1</span>
                      <span> de 3</span>
                    </div>
                  </div>
                  <div className={styles.buttons1}>
                     <a href="/"> {/*Rota requisicao 2} */}
                      <button className={styles.replaceButton}>
                        <div className={styles.text2}>Próximo</div>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.supplies}>
              <div className={styles.martin}>Martin</div>
              <div className={styles.martin1}>Martin</div>
              <div className={styles.joeNike}>Joe Nike</div>
              <div className={styles.joeNike1}>Joe Nike</div>
              <div className={styles.joeNike2}>Joe Nike</div>
              <div className={styles.joeNike3}>Joe Nike</div>
              <div className={styles.denderLuke}>Dender Luke</div>
              <div className={styles.denderLuke1}>Dender Luke</div>
              <div className={styles.saffola}>Saffola</div>
              <div className={styles.saffola1}>Saffola</div>
              <div className={styles.goodDay}>Good day</div>
              <div className={styles.goodDay1}>Good day</div>
              <div className={styles.goodDay2}>Good day</div>
              <div className={styles.goodDay3}>Good day</div>
              <div className={styles.apple}>Apple</div>
              <div className={styles.apple1}>Apple</div>
              <div className={styles.tableData}>9867545457</div>
              <div className={styles.tableData1}>9867545457</div>
              <div className={styles.tableData2}>9567545769</div>
              <div className={styles.tableData3}>9567545769</div>
              <div className={styles.tableData4}>9567545769</div>
              <div className={styles.tableData5}>9567545769</div>
              <div className={styles.tableData6}>9667545980</div>
              <div className={styles.tableData7}>9667545980</div>
              <div className={styles.takingReturn}>Taking Return</div>
              <div className={styles.takingReturn1}>Taking Return</div>
              <div className={styles.takingReturn2}>Taking Return</div>
              <div className={styles.takingReturn3}>Taking Return</div>
              <div className={styles.takingReturn4}>Taking Return</div>
              <div className={styles.takingReturn5}>Taking Return</div>
              <div className={styles.notTakingReturn}>Not Taking Return</div>
              <div className={styles.notTakingReturn1}>Not Taking Return</div>
              <div className={styles.tableData8}>-</div>
              <div className={styles.tableData9}>-</div>
              <div className={styles.tableData10}>-</div>
              <div className={styles.tableData11}>-</div>
              <div className={styles.tableData12}>-</div>
              <div className={styles.tableData13}>-</div>
              <div className={styles.tableData14}>7</div>
              <div className={styles.tableData15}>7</div>
              <div className={styles.martingmailcom}>martin@gmail.com</div>
              <div className={styles.martingmailcom1}>martin@gmail.com</div>
              <div className={styles.joenikegmailcom}>joenike@gmail.com</div>
              <div className={styles.joenikegmailcom1}>joenike@gmail.com</div>
              <div className={styles.joenikegmailcom2}>joenike@gmail.com</div>
              <div className={styles.joenikegmailcom3}>joenike@gmail.com</div>
              <div className={styles.dendergmailcom}>dender@gmail.com</div>
              <div className={styles.dendergmailcom1}>dender@gmail.com</div>
              <img className={styles.tableDataIcon} alt="" />
              <img className={styles.tableDataIcon1} alt="" />
              <img className={styles.tableDataIcon2} alt="" />
              <img className={styles.tableDataIcon3} alt="" />
              <img className={styles.tableDataIcon4} alt="" />
              <div className={styles.tableFooter}>
                <div className={styles.tableFooterContent}>
                  <div className={styles.tableHeader}>
                    <div className={styles.recentItems}>
                      <div className={styles.recentItemsHeader}>
                        <h3 className={styles.adicionadosRecentemente}>
                          Adicionados Recentemente
                        </h3>
                        <div className={styles.recentItemsContent}>
                          <div className={styles.equipmentNameContainer}>
                            <div className={styles.nome}>Nome</div>
                            <div className={styles.equipamento}>
                              Equipamento
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.headerItems}>
                      <div className={styles.nmero}>Número</div>
                    </div>
                    <div className={styles.headerItems1}>
                      <div className={styles.nmero}>Email</div>
                    </div>
                    <div className={styles.headerItems2}>
                      <div className={styles.nmero}>Concluído</div>
                    </div>
                    <div className={styles.timeContainer}>
                      <button className={styles.button2}>
                        <div className={styles.buttonBase2}>
                          <div className={styles.text4}>Ver mais</div>
                        </div>
                      </button>
                      <div className={styles.timeLabelContainer}>
                        <div className={styles.hora}>Hora</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.userRequestContainer}>
                  <img
                    className={styles.dataHeaderItems}
                    loading="lazy"
                    alt=""
                    src="/vector-51.svg"
                  />
                  <div className={styles.userRequestContent}>
                    <div className={styles.userRequestDetails}>
                      <div className={styles.userRequestNameContainer}>
                        <div className={styles.userRequestName}>
                          <div className={styles.jooEvangelista}>
                            João Evangelista
                          </div>
                        </div>
                        <div className={styles.userRequestItemContainer}>
                          <div
                            className={styles.nmero}
                          >{`ELETRODUTO RÍGIDO PVC DE 2" `}</div>
                        </div>
                        <div className={styles.userRequestName}>
                          <div className={styles.div9}>61982841867</div>
                        </div>
                      </div>
                      <div className={styles.userRequestStatusContainer}>
                        <div className={styles.userRequestStatus}>
                          <div className={styles.nmero}>joaoaevangmail.com</div>
                          <div className={styles.concludo1}>Concluído</div>
                        </div>
                      </div>
                      <div className={styles.userRequestName}>
                        <div className={styles.userRequestTimestamp1}>
                          13:23
                        </div>
                      </div>
                    </div>
                    <img
                      className={styles.userRequestDivider1}
                      loading="lazy"
                      alt=""
                      src="/vector-51.svg"
                    />
                    <div className={styles.userRequestList}>
                      <div className={styles.userRequestItems}>
                        <div className={styles.userRequestItemDetails}>
                          <div className={styles.userRequestItemNames}>
                            <div className={styles.leandroBezerra}>
                              Leandro Bezerra
                            </div>
                          </div>
                          <div className={styles.userRequestItemTypes}>
                            <div className={styles.rack19}>RACK 19" - 12U</div>
                          </div>
                          <div className={styles.userRequestItemEmails}>
                            <div className={styles.userRequestItem}>
                              61982841234
                            </div>
                          </div>
                          <div className={styles.nmero}>leandrob@gmail.com</div>
                          <div className={styles.userRequestItemStatuses}>
                            <div className={styles.nmero}>Concluído</div>
                          </div>
                          <div className={styles.userRequestItem1}>13:10</div>
                        </div>
                      </div>
                      <img
                        className={styles.dataHeaderItems}
                        loading="lazy"
                        alt=""
                        src="/vector-51.svg"
                      />
                      <div className={styles.userRequestItems}>
                        <div className={styles.frameParent}>
                          <div className={styles.daniloChavesWrapper}>
                            <div className={styles.daniloChaves}>
                              Danilo Chaves
                            </div>
                          </div>
                          <div className={styles.monitorLcdled19Parent}>
                            <div className={styles.nmero}>
                              MONITOR LCD/LED 19"
                            </div>
                            <div className={styles.nmero}>61982844567</div>
                          </div>
                          <div className={styles.nmero}>daniloc@gmail.com</div>
                          <div className={styles.erroWrapper}>
                            <div className={styles.erro}>Erro</div>
                          </div>
                          <div className={styles.nmero}>12:55</div>
                        </div>
                      </div>
                      <img
                        className={styles.dataHeaderItems}
                        loading="lazy"
                        alt=""
                        src="/vector-51.svg"
                      />
                      <div className={styles.userRequestItems}>
                        <div className={styles.frameGroup}>
                          <div className={styles.lucasDanielWrapper}>
                            <div className={styles.nmero}>Lucas Daniel</div>
                          </div>
                          <div className={styles.aceleradorWrapper}>
                            <div className={styles.userRequestItem}>
                              ACELERADOR
                            </div>
                          </div>
                          <div className={styles.wrapper}>
                            <div className={styles.nmero}>61982841823</div>
                          </div>
                          <div className={styles.lucasdgmailcom}>
                            lucasd@gmail.com
                          </div>
                          <div className={styles.concludoWrapper}>
                            <div className={styles.nmero}>Concluído</div>
                          </div>
                          <div className={styles.nmero}>12:53</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.userRequestDivider2}>
                      <img
                        className={styles.dataHeaderItems}
                        loading="lazy"
                        alt=""
                        src="/vector-51.svg"
                      />
                      <div className={styles.userRequestContent1}>
                        <div className={styles.tableHeader}>
                          <div className={styles.userRequestItemNameContain}>
                            <div className={styles.userRequestUserNameContain}>
                              <div className={styles.nmero}>
                                Mateus Oliveira
                              </div>
                            </div>
                            <div className={styles.nmero}>
                              ACCESS POINT ARUBA
                            </div>
                            <div className={styles.userRequestItem3}>
                              61976841867
                            </div>
                          </div>
                          <div className={styles.userRequestStatusContainer1}>
                            <div className={styles.nmero}>
                              mateuso@gmail.com
                            </div>
                            <div className={styles.concludo1}>Concluído</div>
                          </div>
                          <div className={styles.userRequestTimestamp1}>
                            10:50
                          </div>
                        </div>
                      </div>
                      <img
                        className={styles.dataHeaderItems}
                        loading="lazy"
                        alt=""
                        src="/vector-51.svg"
                      />
                      <div className={styles.userRequestItems}>
                        <div className={styles.userRequestItemDetails1}>
                          <div className={styles.userRequestItemValues}>
                            <div className={styles.daviAraujo}>Davi Araujo</div>
                          </div>
                          <div className={styles.nmero}>ACOPLADOR CAT6A</div>
                          <div className={styles.userRequestItemValues1}>
                            <div className={styles.div9}>61989841867</div>
                          </div>
                          <div className={styles.userRequestItemValues2}>
                            <div className={styles.daviagmailcom}>
                              davia@gmail.com
                            </div>
                          </div>
                          <div className={styles.userRequestItemValues3}>
                            <div className={styles.erro}>Erro</div>
                          </div>
                          <div className={styles.nmero}>9:01</div>
                        </div>
                      </div>
                      <img
                        className={styles.dataHeaderItems}
                        loading="lazy"
                        alt=""
                        src="/vector-51.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.footer}>
                <div className={styles.footerContent}>
                  <div className={styles.details1}>
                    <span>{`Page `}</span>
                    <span className={styles.span}>1</span>
                    <span>{` of `}</span>
                    <span className={styles.span}>10</span>
                  </div>
                  <div className={styles.footerButtons}>
                    <div className={styles.replaceButton2}>
                      <div className={styles.nmero}>Previous</div>
                    </div>
                    <div className={styles.replaceButton2}>
                      <div className={styles.text6}>Next</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Requisicao;
