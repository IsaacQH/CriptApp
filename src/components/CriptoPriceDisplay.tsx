import { useCryptoStore } from "../store"
import { useMemo } from "react"

export const CriptoPriceDisplay = () => {

    const result = useCryptoStore((state) => state.result)   //Abstraemos el resultado de
    const hasResult = useMemo(() => !Object.values(result).includes(''), [result])  //Nos ayuda a revisar que existan valores para qe aparezca el componente

    return (
        <div className="result-wrapper">
  <h2>Cotización</h2>
  {hasResult && (
    <div className="cont">
      <div className="result">
        <img src={`https://cryptocompare.com/${result.IMAGEURL}`} alt="image crypto" />
        <div>
          <p>El precio es de: <span>{result.PRICE}</span></p>
          <p>Precio más alto del día: <span>{result.HIGHDAY}</span></p>
          <p>Precio más bajo del día: <span>{result.LOWDAY}</span></p>
          <p>Variación de las últimas 24 hrs: <span>{result.CHANGEPCT24HOUR}</span></p>
          <p>Última actualización: <span>{result.LASTUPDATE}</span></p>
        </div>
      </div>
    </div>
  )}
</div>

      
    )
}
