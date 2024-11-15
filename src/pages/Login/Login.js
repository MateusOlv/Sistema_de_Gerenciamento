import FrameComponent from "../../components/Login/FrameComponent";
import FrameComponent1 from "../../components/Login/FrameComponent1";
import Content1 from "../../components/Login/Content1";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.login}>
      <FrameComponent prop="/531.svg" frameDivPadding="100px 0px 0px" />
      <div className={styles.frameParent}>
        <FrameComponent1
          emptyContent="/52.svg"
          text="Entre com sua conta"
          supportingText="Seja Bem-vindo! Insira seus dados."
          textColor="#2b2f38"
        />
        <Content1 />
      </div>
    </div>
  );
};

export default Login;
