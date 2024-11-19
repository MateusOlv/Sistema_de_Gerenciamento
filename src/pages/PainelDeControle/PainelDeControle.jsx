import ListMenu from "../../components/ListMenu/ListMenu";
import MainContent from "../../components/MainContent/MainContent";
import Dashboard1 from "../../components/Dashboard/Dashboard1";
import TableContainer from "../../components/TableContainer/TableContainer";
import styles from "./PainelDeControle.module.css";
import SideBar from "../../components/SideBar/SideBar";

const images = ["/home2.svg", "/report1.svg", "/order.svg", "/manage-store.svg","/suppliers.svg"]

const PainelDeControle = () => {
  return (
    <div className={styles.painelDeControle}>
      <SideBar Image={images}/>
      <main className={styles.mainContentParent}>
        <MainContent />
        <Dashboard1 />
        <TableContainer />
      </main>
    </div>
  );
};

export default PainelDeControle;
