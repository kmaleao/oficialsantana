import styles from '/styles/Anuncio.module.css'
import Link from 'next/link';
import Image from 'next/image';


export default function Anuncio(){
    return (
        <div className={
            styles.anuncio
        }>
            <h1>Viu como voce viu!!!</h1>
               <h1> ANUNCIE AQUI!!!
            </h1>
            <Image src='/lencois.jpg' width={600} height={350}></Image>
            <p> Visite nossas riquezas naturais contribua com o turismo !!</p>
            <br></br>

             <button>
            <Link href='/'>voltar</Link>
            </button>


        </div>
    );  
}
