import styles from '/styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
    return(
        <div className={styles.Home}>
          
           <div id='buriti'>
                <h1>Saude</h1>
                <h2>Buriti: para que serve e como consumir</h2>
               
                <Image  src={'/buriti.jpg'} alt='figure' width={600} height={350}></Image>
                <p>A planta Buriti, também conhecida como Muriti, Miriti ou palmeira-dos-brejos, é uma palmeira alta e abundante na região do cerrado, pantanal e Amazônia, e produz frutos que são saborosos e trazem diversos benefícios para a saúde,l já que possuem propriedades antioxidante e energética uma vez que são ricos em cálcio, ferro, proteínas, potássio, caroteno, carboidratos e vitamina B e vitamina C.

Dessa forma o buriti pode ajudar a fortalecer o sistema imune, combater infecções e prevenir o desenvolvimento de doenças cardiovasculares e câncer, por exemplo, além de ajudar a melhorar o funcionamento do intestino.</p>


              <button>
                <Link href='/Buriti'>voce que saber mais CLICK AQUI!!</Link>
              </button>
                   
                
      
    
               
       
            </div>
            <br></br>

           



             <div className='linha'>
              
                 <Image src='/oculos3.webp'     alt='figure' width={100} height={100}></Image>
                 
                 <Link href='/Produtos'>visitar</Link>
               


                  <Image src='/oculos9.webp' alt='figure' width={100} height={100}></Image>
                  <a href='/Produtos'>visitar</a>


                  <Image src='/oculos10.webp' alt='figure' width={100} height={100}></Image>
                  <a href='/Produtos'>visitar</a>






            </div> 
            <h1>Meio ambiente</h1>

            <p>
            O meio ambiente refere-se ao conjunto de fatores físicos, biológicos e químicos que cerca os seres vivos, influenciando-os e sendo influenciado por eles.
            </p>


            <div className='linha'>
           


            <iframe width="600" height="350" src="https://www.youtube.com/embed/kgDsQ-40E-0?start=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>




            <p>
            Pode ser entendido também como o conjunto de condições que permitem abrigar e reger a vida em todas as suas formas - os ecossistemas que existem ...

            </p>
                 <Link href='/MeioAmbiente'>Para saber mais CLICK AQUI</Link>

            </div>
            <br></br>

            <div className='linha'>
            <Image src='/perfume5.webp'     alt='figure' width={100} height={100}></Image>
                 <Link href='/Produtos'>visitar</Link>


                  <Image src='/perfume6.webp' alt='figure' width={100} height={100}></Image>
                  <Link href='/Produtos'>visitar</Link>
                  <Image src='/perfume11.webp' alt='figure' width={100} height={100}></Image>
                  <Link href='/Produtos'>visitar</Link>
                 



               
            </div>

            <div className='linha'>
                 <br></br>
                 <h1>Como estamos vivendo??</h1>
                 <iframe width="560" height="315" src="https://www.youtube.com/embed/cYINW034A8k?start=2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                  
                 <p>

                  
Milhões perderam seus empregos desde o início da pandemia de covid-19 no Brasil. Muitos não conseguiram mais pagar seus aluguéis e tiveram que morar na rua. Uma consequência do coronavírus que desafia as cidades brasileiras. 
</p>
                 
               

             </div>
             <div className='linha'>
             <Image src='/relogio3.webp'     alt='figure' width={100} height={100}></Image>
                 <Link href='/Produtos'>visitar</Link>


                  <Image src='/relogio1.webp' alt='figure' width={100} height={100}></Image>
                  <Link href='/Produtos'>visitar</Link>
                  <Image src='/relogio2.webp' alt='figure' width={100} height={100}></Image>
                  <Link href='/Produtos'>visitar</Link>
                  










              </div>


            




       
                
                 
         </div>

    )
}
             

                         
                   
                



    
