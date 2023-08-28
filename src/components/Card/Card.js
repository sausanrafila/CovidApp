import styles from "./Card.module.css"

function Card() {
    return(
        <div className={styles.container} id="card">
            <h1 className={styles.judul}>Indonesia</h1>
            <p className={styles.title}>Data Covid Berdasarkan Indonesia</p>
            <div className={styles.card}>
                <div className={styles.cards}>
                    <p className={styles.cards_judul}>Confirmed</p>  
                    <h1 className={styles.cards1_title}>605.646</h1>
                </div>
                <div  className={styles.cards}>
                    <p className={styles.cards_judul}>Recoverd</p>
                    <h1 className={styles.cards2_title}>90.000</h1>
                </div >
                <div   className={styles.cards}>
                    <p className={styles.cards_judul}>Death</p>
                    <h1 className={styles.cards3_title}>5.000</h1>
                </div>
            </div>
        </div>
    )
}

export default Card;