import ListMenu from "../components/ListMenu";
import AdditionalInfoLabels from "../components/AdditionalInfoLabels";
import styles from "./Perfil.module.css";

const Perfil = () => {
  return (
    <div className={styles.perfil}>
      <div className={styles.sideBar}>
        <div className={styles.sidebarContent}>
          <div className={styles.sidebarMenu}>
            <div className={styles.top}>
              <div className={styles.logo}>
                <img
                  className={styles.logoPlaceholderIcon}
                  loading="lazy"
                  alt=""
                  src="/533.svg"
                />
                <a className={styles.logimanage}>LogiManage</a>
              </div>
            </div>
            <div className={styles.listMenu}>
              <div className={styles.listMenu1}>
                <ListMenu
                  listMenuAlignSelf="stretch"
                  listMenuWidth="unset"
                  home="/home2.svg"
                  homeIconOverflow="unset"
                  homeIconMargin="unset"
                  itemType="Início"
                  itemTypeColor="#5d6679"
                  itemTypeTextDecoration="none"
                />
                <ListMenu
                  listMenuAlignSelf="stretch"
                  listMenuWidth="unset"
                  home="/report.svg"
                  homeIconOverflow="unset"
                  homeIconMargin="unset"
                  itemType="Painel De Controle"
                  itemTypeColor="#5d6679"
                  itemTypeTextDecoration="unset"
                />
                <ListMenu
                  listMenuAlignSelf="stretch"
                  listMenuWidth="unset"
                  home="/order1.svg"
                  homeIconOverflow="unset"
                  homeIconMargin="unset"
                  itemType="Requisição"
                  itemTypeColor="#5d6679"
                  itemTypeTextDecoration="unset"
                />
                <ListMenu
                  listMenuAlignSelf="stretch"
                  listMenuWidth="unset"
                  home="/manage-store2.svg"
                  homeIconOverflow="unset"
                  homeIconMargin="unset"
                  itemType="Formulários"
                  itemTypeColor="#5d6679"
                  itemTypeTextDecoration="unset"
                />
                <ListMenu
                  listMenuAlignSelf="stretch"
                  listMenuWidth="unset"
                  home="/suppliers2.svg"
                  homeIconOverflow="unset"
                  homeIconMargin="unset"
                  itemType="Perfil"
                  itemTypeColor="#009ed8"
                  itemTypeTextDecoration="unset"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.logoutMenu}>
          <ListMenu
            listMenuAlignSelf="unset"
            listMenuWidth="232px"
            home="/settings1.svg"
            homeIconOverflow="hidden"
            homeIconMargin="unset"
            itemType="Configurações"
            itemTypeColor="#5d6679"
            itemTypeTextDecoration="unset"
          />
          <ListMenu
            listMenuAlignSelf="unset"
            listMenuWidth="232px"
            home="/log-out3.svg"
            homeIconOverflow="hidden"
            homeIconMargin="unset"
            itemType="Sair"
            itemTypeColor="#5d6679"
            itemTypeTextDecoration="unset"
          />
        </div>
      </div>
      <main className={styles.searchBarContainerWrapper}>
        <section className={styles.searchBarContainer}>
          <header className={styles.headerContent}>
            <div className={styles.searchBar}>
              <img className={styles.searchIcon} alt="" src="/search.svg" />
              <input
                className={styles.pesquisar}
                placeholder="Pesquisar"
                type="text"
              />
            </div>
            <div className={styles.userActions}>
              <div className={styles.notification}>
                <img
                  className={styles.notificationIcon}
                  loading="lazy"
                  alt=""
                  src="/notification2.svg"
                />
              </div>
            </div>
          </header>
          <div className={styles.profileSetting}>
            <div className={styles.div}>这里可以是一句话的注释内容</div>
            <div className={styles.welcome}>
              <div className={styles.bemVindoLeandro}>Bem-vindo, Leandro</div>
              <div className={styles.tera12De}>Terça, 12 de Novembro 2024</div>
            </div>
            <div className={styles.profilePicture}>
              <div className={styles.userName}>
                <div className={styles.personalInfoContainer}>
                  <div className={styles.greeting}>
                    <div className={styles.leandroBezerra}>Leandro Bezerra</div>
                    <div className={styles.leandrobgmailcom}>
                      leandrob@gmail.com
                    </div>
                  </div>
                </div>
                <div className={styles.additionalInfo}>
                  <div className={styles.additionalInfoLabels}>
                    <div className={styles.nomeCompleto}>Nome Completo</div>
                    <div className={styles.rectangleParent}>
                      <div className={styles.frameChild} />
                      <div className={styles.leandroBezerra1}>
                        Leandro Bezerra
                      </div>
                    </div>
                  </div>
                  <AdditionalInfoLabels
                    gnero="Gênero"
                    masculino="Masculino"
                    vuesaxlineararrowDown="/vuesaxlineararrowdown.svg"
                  />
                  <AdditionalInfoLabels
                    additionalInfoLabelsPadding="0px 0px 10.9px"
                    gnero="Língua"
                    gneroDisplay="inline-block"
                    gneroMinWidth="42px"
                    masculino="Português"
                    vuesaxlineararrowDown="/vuesaxlineararrowdown-1.svg"
                  />
                  <div className={styles.countryInfo}>
                    <div className={styles.country}>
                      <div className={styles.nomeCompleto}>País</div>
                      <div className={styles.countryValue}>
                        <div className={styles.frameChild} />
                        <div className={styles.brasil}>Brasil</div>
                        <img
                          className={styles.vuesaxlineararrowDownIcon}
                          loading="lazy"
                          alt=""
                          src="/vuesaxlineararrowdown-2.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.editProfile}>
                <div className={styles.rectangleGroup}>
                  <div className={styles.frameItem} />
                  <div className={styles.brasil}>Editar</div>
                </div>
              </div>
              <div className={styles.profileImage}>
                <div className={styles.imagePlaceholder} />
                <img
                  className={styles.profileImageChild}
                  loading="lazy"
                  alt=""
                />
                <img
                  className={styles.image1Icon}
                  loading="lazy"
                  alt=""
                  src="/image-1@2x.png"
                />
              </div>
            </div>
            <div className={styles.profileSetting1}>
              <div className={styles.div1}>这里可以是一句话的注释内容</div>
              <div className={styles.welcome}>
                <a className={styles.bemVindoLeandro1}>Bem-vindo, Leandro</a>
                <div className={styles.tera12De}>
                  Terça, 12 de Novembro 2024
                </div>
              </div>
              <div className={styles.compactDetails}>
                <div className={styles.compactDetailsChild} />
                <div className={styles.compactInfo}>
                  <div className={styles.compactImage}>
                    <div className={styles.compactImageContainer}>
                      <img
                        className={styles.image1Icon1}
                        loading="lazy"
                        alt=""
                        src="/image-1@2x.png"
                      />
                      <div className={styles.compactContactInfo}>
                        <div className={styles.greeting}>
                          <div className={styles.leandroBezerra}>
                            Leandro Bezerra
                          </div>
                          <div className={styles.leandrobgmailcom}>
                            leandrob@gmail.com
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.additionalInfoLabels}>
                    <div className={styles.nomeCompleto}>Nome Completo</div>
                    <div className={styles.compactInfoValues}>
                      <img className={styles.compactInfoValuesChild} alt="" />
                      <input
                        className={styles.compactInfoDropdowns}
                        placeholder="Leandro Bezerra"
                        type="text"
                      />
                    </div>
                  </div>
                  <AdditionalInfoLabels
                    additionalInfoLabelsPadding="unset"
                    gnero="Gênero"
                    gneroDisplay="unset"
                    gneroMinWidth="unset"
                    masculino="Masculino"
                    vuesaxlineararrowDown="/vuesaxlineararrowdown.svg"
                  />
                  <AdditionalInfoLabels
                    additionalInfoLabelsPadding="0px 0px 10.9px"
                    gnero="Língua"
                    gneroDisplay="inline-block"
                    gneroMinWidth="42px"
                    masculino="Português"
                    vuesaxlineararrowDown="/vuesaxlineararrowdown-1.svg"
                  />
                  <div className={styles.countryInfo}>
                    <div className={styles.country}>
                      <div className={styles.nomeCompleto}>País</div>
                      <div className={styles.countryValue}>
                        <div className={styles.frameChild} />
                        <div className={styles.brasil}>Brasil</div>
                        <img
                          className={styles.vuesaxlineararrowDownIcon}
                          alt=""
                          src="/vuesaxlineararrowdown-2.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.compactEditProfile}>
                  <div className={styles.rectangleContainer}>
                    <div className={styles.frameItem} />
                    <div className={styles.nomeCompleto}>Editar</div>
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

export default Perfil;
