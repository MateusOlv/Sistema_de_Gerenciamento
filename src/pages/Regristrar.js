import FrameComponent from "../components/FrameComponent";
import FrameComponent1 from "../components/FrameComponent1";
import Content from "../components/Content";
import styles from "./Regristrar.module.css";

const Regristrar = () => {
  return (
    <div className={styles.regristrar}>
      <FrameComponent prop="/531.svg" />
      <div className={styles.frameParent}>
        <FrameComponent1
          emptyContent="/532.svg"
          text="Criar conta"
          supportingText="Crie sua conta para navegar"
        />
        <Content />
      </div>
    </div>
  );
};

export default Regristrar;
