import axios from 'axios'
import { CryptoCurrenciesResponseSchema } from '../schema/crypto-schema'


//Función async que obtiene los valores
export async function getCryptos(){
    const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"  //URL de la API
    const {data: {Data}} = await axios(url)   //Esperamos a que se obtengan los datos. Destructuramos para acceder directamente a estos valores del objeto
    const result = CryptoCurrenciesResponseSchema.safeParse(Data)   //Un data para el result
    if(result.success){
        return result.data
    }
}