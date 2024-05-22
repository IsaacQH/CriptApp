
import { useEffect } from "react"
import { currencies } from "../data"
import { useCryptoStore } from "../store"

export const CriptoSearchForm = () => {

    const fetchCryptos = useCryptoStore((state) => state.fetchCryptos)  //Llamamos a fectch criptos desde el zustand

    useEffect(() =>{
        fetchCryptos()
    }, [])

    return (
        <form className="form">
            {/*Moneda*/}
            <div className="field">
                <label htmlFor="currency">Moneda:</label>
                <select
                    name="currency"
                    id="currency"
                >
                    <option value="">-- Selecciona --</option>
                    {currencies.map((currency) => (
                        <option value={currency.code} key={currency.code}>{currency.name}</option>
                    ))}
                </select>
            </div>

            {/*Cripto*/}
            <div className="field">
                <label htmlFor="criptocurrency">Critomoneda:</label>
                <select
                    name="criptocurrency"
                    id="criptocurrency"
                >
                    <option value="">-- Selecciona --</option>
                </select>
            </div>

            <input type="submit" value="Submit"></input>

        </form>
    )
}
