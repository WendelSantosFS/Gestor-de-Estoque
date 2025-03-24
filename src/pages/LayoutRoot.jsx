import { Outlet } from "react-router-dom";
import Header from "../components/Header/index";
import Footer from "../components/Footer/index";
import stylesPages from './stylesPages.module.css'


function LayoutRoot() {

    return (
        <div className={stylesPages.rootContent}>
            <Header />

            <Outlet />

            <Footer />
        </div>
    )
}

export default LayoutRoot