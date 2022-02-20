import MainContainer from "./componentes/MainContainer"
 
 
 


function MyApp({ Component, pageProps }) {
    return(
    <MainContainer>
    <Component {...pageProps} />
    </MainContainer>


   )
  }

  export default MyApp