import Link from "next/link"
import styles from '/styles/Navbar.module.css'



export default function Navbar(){
    return(
    <div  className={styles.Navbar}>

        <div>
            <Link href='/'><button>Home</button></Link>
        
            <Link href='/Produtos'><button>Produtos</button></Link>
    
            <Link href='/Anuncio'><button>Anuncio</button></Link>
        </div>

          <h1>🌎Oficial-santana </h1>
          <p>Tudo que voce prescisa saber na hora certa!!</p>
    </div>
    )
} 