import styles from '/styles/Produtos.module.css'
import Image from 'next/image';
import Link from 'next/link';

export default function Produtos(){
    return (
        <section className={styles.Produtos}>
            <h1>Produtos</h1>


            <div>
            <Image src='/relogio3.webp'     alt='figure' width={300} height={300}></Image>
                 


                  <Image src='/relogio1.webp' alt='figure' width={300} height={300}></Image>
                  </div>

                  <div>
                  <Image src='/relogio2.webp' alt='figure' width={300} height={300}></Image>
                  
                  <Image src='/relogio4.webp'     alt='figure' width={300} height={300}></Image>
                 </div>

                 <div>


                  <Image src='/relogio5.webp' alt='figure' width={300} height={300}></Image>
                  
                  <Image src='/relogio6.webp' alt='figure' width={300} height={300}></Image>
                  </div>
                  <div>

                  
            <Image src='/oculos3.webp'     alt='figure' width={300} height={300}></Image>
                 


                 <Image src='/oculos4.webp' alt='figure' width={300} height={300}></Image>
                 </div>

                 <div>
                 
                 <Image src='/oculos6.webp' alt='figure' width={300} height={300}></Image>
                 
                 <Image src='/oculos7.webp'     alt='figure' width={300} height={300}></Image>
                 </div>
                 <div>
                


                 <Image src='/oculos8.webp' alt='figure' width={300} height={300}></Image>
                 
                 <Image src='/oculos9.webp' alt='figure' width={300} height={300}></Image>
                 </div>
                 <div>

                 <Image src='/oculos10.webp' alt='figure' width={300} height={300}></Image>
                  
                  <Image src='/perfume3.webp' alt='figure' width={300} height={300}></Image>
                  </div>
                  <div>

                  
            <Image src='/perfume4.webp'     alt='figure' width={300} height={300}></Image>
                 


                 <Image src='/perfume5.webp' alt='figure' width={300} height={300}></Image>
                 
                </div>
                <div>

                 
                 <Image src='/perfume6.webp' alt='figure' width={300} height={300}></Image>
                 
                 <Image src='/perfume7.webp'     alt='figure' width={300} height={300}></Image>
                 </div>
                 <div>
                


                 <Image src='/perfume11.webp' alt='figure' width={300} height={300}></Image>
                 
                 <Image src='/perfume22.webp' alt='figure' width={300} height={300}></Image>
                 </div>
                 

                 

                  

            











            <button>
            <Link href='/'>voltar</Link>
            </button>

        </section>
    );  
}
