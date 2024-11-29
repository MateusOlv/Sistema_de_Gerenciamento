import styles from "./Formulario.module.css";

function Formulario(){
    return(
        <main className={styles.main}>
            <form action="">
                <p className={styles.p}>A carga a ser transportada é frágil ou possui alguma peculiaridade?</p>
                <section className={styles.peculiaridade}>
                    <input type="checkbox" name="peculiaridade" id="fragil" />
                    <label htmlFor="">Frágil</label>
                    
                    <input type="checkbox" name="peculiaridade" id="liquido" />
                    <label htmlFor="">Líquido</label>
            
                    <input type="checkbox" name="peculiaridade" id="refrigerado" />
                    <label htmlFor="">Refrigerado</label>
            
                    <input type="checkbox" name="peculiaridade" id="toxico" />
                    <label htmlFor="">Tóxico</label>
            
                    <label htmlFor="">Outro: </label>
                    <input type="text" name="peculiaridade" id="outro" />
                </section>

                <p className={styles.p}>A carga a ser transportada já está embalada?</p>
                <section className={styles.equipamentoEmbalado}>
                    <input type="checkbox" name="equipamentoEmbalado" id="sim"/>
                    <label htmlFor="">Sim</label>

                    <input type="checkbox" name="equipamentoEmbalado" id="nao"/>
                    <label htmlFor="">Não</label>
                </section>
                
                <p className={styles.p}>Será necessário algum tipo de embalagem?</p>
                <section className={styles.embalagem}>
                    <input type="checkbox" name="embalagem" id="sim"/>
                    <label htmlFor="">Sim</label>

                    <input type="checkbox" name="embalagem" id="nao"/>
                    <label htmlFor="">Não</label>
                    
                    <div>
                        <label htmlFor="">Tipo de Embalagem: </label>
                        <input type="text" name="embalagem" id="tipo"/>
                    </div>
                </section>

                <p className={styles.p}>Urgente?</p>
                <section className={styles.urgente}>
                    <input type="checkbox" name="urgente" id="sim"/>
                    <label htmlFor="">Sim</label>

                    <input type="checkbox" name="urgente" id="nao"/>
                    <label htmlFor="">Não</label>
                </section>

                <div>
                    <label className={styles.p}>Prazo máximo: </label>
                    <input type="text" name="prazo" id="prazo"/>
                </div>

                <h2>Dados de Origem - Ponto de Coleta da Carga</h2>
                <section className={styles.LocalEData}>
                    <label htmlFor="">Local: </label>
                    <input type="text" />

                    <label className={styles.data} htmlFor="">Data e Hora: </label>
                    <input type="text" />
                </section>

                <div className={styles.endereco}>
                    <label htmlFor="">Endereço: </label>
                    <input type="text" />
                </div>

                <div className={styles.ptDeReferencia}>
                    <label htmlFor="">Ponto de Referência: </label>
                    <input type="text" />
                </div>
                
                <div className={styles.obs}>
                    <label htmlFor="">Obs: </label>
                    <input type="text" />
                </div>

                <section className={styles.responsavel}>
                    <label htmlFor="">Responsável: </label>
                    <input type="text" />

                    <label htmlFor="">Telefone: </label>
                    <input type="text" />
                </section>
                
                <h2>Dados de Destino - Ponto de Entrega da Carga</h2>
                <section className={styles.LocalEData}>
                    <label htmlFor="">Local: </label>
                    <input type="text" />

                    <label className={styles.data} htmlFor="">Data e Hora: </label>
                    <input type="text" />
                </section>

                <div className={styles.endereco}>
                    <label htmlFor="">Endereço: </label>
                    <input type="text" />
                </div>

                <div className={styles.ptDeReferencia}>
                    <label htmlFor="">Ponto de Referência: </label>
                    <input type="text" />
                </div>
                
                <div className={styles.obs}>
                    <label htmlFor="">Obs: </label>
                    <input type="text" />
                </div>

                <section className={styles.responsavel}>
                    <label htmlFor="">Responsável: </label>
                    <input type="text" />

                    <label htmlFor="">Telefone: </label>
                    <input type="text" />
                </section>
                
                <h2>Dados do Equipamento</h2>
                <section className={styles.equipamento}>
                    <label htmlFor="">COD(SAP): </label>
                    <input type="text" />

                    <label htmlFor="">Comprimento: </label>
                    <input type="number" />

                    <label htmlFor="">Largura: </label>
                    <input type="number" />

                    <label htmlFor="">Altura: </label>
                    <input type="number" />

                    <label htmlFor="">Peso: </label>
                    <input type="number" />                

                    <label htmlFor="">Valor: </label>
                    <input type="number" />
                    
                    <label htmlFor="">Serial Number: </label>
                    <input type="number" />
                </section>

                <input type="submit" value="Enviar"/>
                
            </form>
        </main>
    );
};

export default Formulario;