import { useCryptoStore } from "../store"
import { useMemo } from "react"

export const CriptoPriceDisplay = () => {

    const result = useCryptoStore((state) => state.result)   //Abstraemos el resultado de
    const hasResult = useMemo(() => !Object.values(result).includes(''), [result])  //Nos ayuda a revisar que existan valores para qe aparezca el componente

    return (
        <div>
            { hasResult && (
                <>
                    <h2>Cotización</h2>
                    <div className="result">
                        <img src={`https://cryptocompare.com/${result.IMAGEURL}`} alt="image crypto" />
                        <div>
                            <p>El precio es de:  <span>{result.PRICE}</span></p>
                            <p>El precio es de:  <span>{result.HIGHDAY}</span></p>
                            <p>El precio es de:  <span>{result.LOWDAY}</span></p>
                            <p>El precio es de:  <span>{result.CHANGEPCT24HOUR}</span></p>
                            <p>El precio es de:  <span>{result.LASTUPDATE}</span></p>
                        </div>
                    </div>
                </>
            )}

        </div>
    )
}
