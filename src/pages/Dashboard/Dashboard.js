import SideBar from "../../components/SideBar/SideBar";
import Header from "../../components/Header/Header";
import Body from "../../components/Body/Body";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <SideBar
        sideBarPosition="unset"
        sideBarTop="unset"
        sideBarLeft="unset"
        sideBarWidth="unset"
        frameDivAlignSelf="stretch"
        topWidth="unset"
        topAlignSelf="stretch"
        logiManageTextDecoration="none"
        logiManageFlex="1"
        listMenuWidth="unset"
        listMenuAlignSelf="stretch"
      />
      <main className={styles.contentArea}>
        <Header />
        <Body />
      </main>
    </div>
  );
};

export default Dashboard;
