
import { useState } from "react"
import { currencies } from "../data"
import { useCryptoStore } from "../store"
import { Pair } from "../types"
import { ErrorMessage } from "./ErrorMessage"

export const CriptoSearchForm = () => {

    const cryptoCurrencies = useCryptoStore((state) => state.cryptoCurrencies)  //Llamamos a fectch criptos desde el zustand
    const [pair, setPair] = useState<Pair>({    //Crea el estado que guardará los calores del form
        currency: '',
        criptocurrency: ''
    })
    const [error, setError] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {  //Registra el cambio en el select
        setPair({           //Guarda los valores con la copia anterior de Pair y el nuevo valor que coincida [currency / criptocurrency]
            ...pair,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {  //Procesa el submit
        e.preventDefault()
        if(Object.values(pair).includes('')){            //Vlida el formulario, si incluye vacios
            setError('Todos los campos son obligatorios')
            return              //Interrumpe la función
        }
        setError('')
        //consultar la API
    }


    return (
        <form 
            className="form"
            onSubmit={handleSubmit}
        >
            {error && <ErrorMessage>{error}</ErrorMessage>}

            {/*Moneda*/}
            <div className="field">
                <label htmlFor="currency">Moneda:</label>
                <select
                    name="currency"
                    id="currency"
                    onChange={handleChange}
                    value = {pair.currency}
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
                    onChange={handleChange}
                    value = {pair.criptocurrency}
                >
                    <option value="">-- Selecciona --</option>
                    {cryptoCurrencies.map((cryptoCurrency) => (
                        <option 
                            value={cryptoCurrency.CoinInfo.Name} 
                            key = {cryptoCurrency.CoinInfo.FullName}
                        >{cryptoCurrency.CoinInfo.FullName}</option>
                    ))}
                </select>
            </div>

            <input type="submit" value="Submit"></input>

        </form>
    )
}
