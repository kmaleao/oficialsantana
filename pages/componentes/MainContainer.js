
import Navbar from "./Navbar";
import Image from "next/image";

import Footer from "./Footer";
import styles from '/styles/MainContainer.module.css'

export default function MainContainer({children}){
    return(
        <div>
             <Navbar></Navbar>
             <div className={styles.Container}>
                 {children}
                
             </div>
             <Footer></Footer>
        </div>
    )
}
