
import TableBody from "../TabelBody/TabelBody";
import styles from "./TabelHead.module.css"

function TableHead({provinces}){

    let angka ='';
    
    return(
        <>
            <thead className={styles.table__head}>
                            <tr className={styles.table__row}>
                                <th className={styles.th}>No</th>
                                <th className={styles.th}>Provinsi</th>
                                <th className={styles.th}>Positif</th>
                                <th className={styles.th}>Sembuh</th>
                                <th className={styles.th}>Dirawat</th>
                                <th className={styles.th}>Meninggal</th>
                            </tr>
                        </thead>
                        {Array.isArray(provinces) && provinces.map((kota) => {
    angka++
    return <TableBody key={angka} kota={kota} no={angka} />
})}

        </>
    )
}

export default TableHead;