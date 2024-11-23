import styles from "./ContentArea.module.css";

function ContentArea () {
  return (
    <main className={styles.main}>
      <h1>Requisição de Transporte Aéreo de Cargas</h1>
      <p>Prezado(as), solicitamos cotação de valor para transporte, conforme as tabelas a seguir.</p>
      <h2>Dados de Carga</h2>
      <p>Preencha os campos abaixo:</p>
    </main>
  );
};

export default ContentArea;
