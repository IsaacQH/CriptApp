import axios from 'axios'
import { CryptoCurrenciesResponseSchema, CryptoPriceSchema } from '../schema/crypto-schema'
import { Pair } from '../types'


//Función async que obtiene los valores de la lista de monedas
export async function getCryptos(){
    const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"  //URL de la API
    const {data: {Data}} = await axios(url)   //Esperamos a que se obtengan los datos. Destructuramos para acceder directamente a estos valores del objeto
    const result = CryptoCurrenciesResponseSchema.safeParse(Data)   //Un data para el result
    if(result.success){
        return result.data
    }
}

//Función async que manda y obtiene los valores de la moneda

export async function fetchCurrentCryptoPrice(pair:Pair){
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.criptocurrency}&tsyms=${pair.currency}`
    const {data:{DISPLAY}}= await axios(url)         //Destructuramos al Display, luego para obener el valor completo usamos el pair...[][]
    const result = CryptoPriceSchema.safeParse(DISPLAY[pair.criptocurrency][pair.currency])  //Regresa los valores destructurados correctamente
    if(result.success){   //Revisa que existan los valores
        return result.data
    }
}