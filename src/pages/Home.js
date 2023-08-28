import { useState } from "react";
import Card from "../components/Card/Card";
import Footer from "../components/Footer/Footer";
import FormCovid from "../components/FormCovid/FormCovid";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Index";
import Tabel from "../components/Tabel/Tabel";
import data from "../components/utils/data";

function Main() {
    const [provinces, setProvinces] = useState(data.provinces);
    return (
    <main>
        <Hero/>
        <Card />
            <Tabel provinces={provinces} setProvinces={setProvinces} />
            <FormCovid provinces={provinces} setProvinces={setProvinces} />
    </main>
    )
}

function Home() {
    return (
        <div>
            <Navbar />
            <Main />
            <Footer />
        </div>
    )
}

export default Home;