
import TableHead from "../TabelHead/TabelHead";
import styles from "./Tabel.module.css"

function Tabel({provinces}){

    return(
            <div className={styles.container} id="provinsi">
                <section className={styles.table__provinsi}>
                    <h2 className={styles.title}>Provinsi</h2>
                    <p className={styles.tagline}>Data Covid Berdasarkan Provinsi</p>
                        <table className={styles.table}>
                            <TableHead provinces={provinces}/>
                        </table>
                </section>
            </div>
    )
}

export default Tabel;