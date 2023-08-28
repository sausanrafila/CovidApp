import styles from "./FormCovid.module.css"
import img2 from "../../assets/img/img2.png"
import { useState } from "react";

function FormCovid(props) {
    const {provinces, setProvinces} = props;

    const [provinsi, setProvinsi] = useState("Jakarta");
    const [status, setStatus] = useState("kasus");
    const [jumlah, setJumlah] = useState("");
    const [isJumlahError, setJumlahError] = useState(false);

    function updateProvinces() {
        const index = provinces.findIndex((item) => item.kota === provinsi);
        const foundProvince = provinces.find((item) => item.kota === provinsi);

        provinces[index] = {
            ...foundProvince,
            [status]: parseInt(foundProvince[status]) + parseInt(jumlah),
        }
        setProvinces([...provinces])
        setJumlahError(false)
    }

    function handleProvinsi(e) {
        setProvinsi(e.target.value)
    }
    function handleStatus(e) {
        setStatus(e.target.value)
    }
    function handleJumlah(e) {
        setJumlah(e.target.value)
    }
    function handleFormSubmit(e) {
        e.preventDefault(); 
        if(jumlah === "") {
            setJumlahError(true)
        }else {
            updateProvinces();
        }
    }
    
    return(
        <section className={styles.container}>
            <div className={styles.form_left} >
                <img src={img2} alt="covid" className={styles.image}/>
            </div>
            <div className={styles.form_right}>
                <form className={styles.form} onSubmit={handleFormSubmit} >
                    <h1 className={styles.judul}>Form Covid</h1>    

                    <p className={styles.form_title}>Provinsi</p>
                    <select 
                    name="provinsi" 
                    id="" 
                    className={styles.form_select}
                    value={provinsi}
                    onChange={handleProvinsi}
                    >
                        
                        {provinces.map((kota) => {
                            return <option key={kota.kota} value={kota.kota} > {kota.kota} </option>
                        })}
                    </select>

                    <p className={styles.form_title}>Status</p>
                    <select 
                    name="status" id="" 
                    className={styles.form_select}
                    value={status}
                    onChange={handleStatus}>
                        <option value="kasus">Positif</option>
                        <option value="sembuh">Sembuh</option>
                        <option value="dirawat">Dirawat</option>
                        <option value="meninggal">Meinggal</option>
                    </select>
                    
                    <p className={styles.form_title}>Jumlah</p>
                    <input 
                    type="text"
                    className={styles.form_input}
                    value={jumlah}
                    onChange={handleJumlah}
                    name="jumlah"
                    />{isJumlahError && "Jumlah Wajib Diisi"}
                    <button type="submit" className={styles.submit} >Sumbit</button>
                </form>
            </div>
        </section>
    )
};

export default FormCovid;