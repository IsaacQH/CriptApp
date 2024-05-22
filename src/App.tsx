import { useEffect } from "react"
import { CriptoSearchForm } from "./components/CriptoSearchForm"
import { useCryptoStore } from "./store"

function App() {
 
  const fetchCryptos = useCryptoStore((state) => state.fetchCryptos)     //Accedemos a nuestro zustand
  
  useEffect(() => {
    fetchCryptos()        
  },[])  //Cada que cargue el componente App queremos que llame a fecth cryptos e inicie la busqueda en la API

  return (
    <>
    <div className="container">
      <h1 className="app-title">Cotizador de <span>Criptomonedas</span></h1>

      <div className="content">
        <CriptoSearchForm/>

      </div>
    </div>


    </>
  )
}

export default App
