import ListMenu from "../../components/PainelDeControle/ListMenu";
import MainContent from "../../components/PainelDeControle/MainContent";
import Dashboard1 from "../../components/PainelDeControle/Dashboard1";
import TableContainer from "../../components/PainelDeControle/TableContainer";
import styles from "./PainelDeControle.module.css";

const PainelDeControle = () => {
  return (
    <div className={styles.painelDeControle}>
      <div className={styles.sideBar}>
        <div className={styles.menuTop}>
          <div className={styles.sidebarContent}>
            <div className={styles.top}>
              <div className={styles.logo}>
                <img
                  className={styles.logoPlaceholderIcon}
                  loading="lazy"
                  alt=""
                  src="/53.svg"
                />
                <a className={styles.logimanage}>LogiManage</a>
              </div>
            </div>
            <div className={styles.listMenu}>
              <nav className={styles.listMenu1}>
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
                  homeIconOverflow="unset"
                  homeIconMargin="0"
                  itemType="Painel De Controle"
                  itemTypeColor="#009ed8"
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
                  home="/manage-store1.svg"
                  homeIconOverflow="unset"
                  homeIconMargin="unset"
                  itemType="Formulários"
                  itemTypeColor="#5d6679"
                  itemTypeTextDecoration="unset"
                />
                <a href="../../pages/Perfil/Perfil.js">
                  <ListMenu
                    listMenuAlignSelf="stretch"
                    listMenuWidth="unset"
                    home="/suppliers1.svg"
                    homeIconOverflow="unset"
                    homeIconMargin="unset"
                    itemType="Perfil"
                    itemTypeColor="#5d6679"
                    itemTypeTextDecoration="unset"
                  />
                </a>
              </nav>
            </div>
          </div>
        </div>
        <div className={styles.menuSettings}>
          <ListMenu
            listMenuAlignSelf="unset"
            listMenuWidth="232px"
            home="/settings.svg"
            homeIconOverflow="hidden"
            homeIconMargin="unset"
            itemType="Configurações"
            itemTypeColor="#5d6679"
            itemTypeTextDecoration="unset"
          />
          <ListMenu
            listMenuAlignSelf="unset"
            listMenuWidth="232px"
            home="/log-out2.svg"
            homeIconOverflow="hidden"
            homeIconMargin="unset"
            itemType="Sair"
            itemTypeColor="#5d6679"
            itemTypeTextDecoration="unset"
          />
        </div>
      </div>
      <main className={styles.mainContentParent}>
        <MainContent />
        <Dashboard1 />
        <TableContainer />
      </main>
    </div>
  );
};

export default PainelDeControle;
