
import {create} from 'zustand'
import axios from 'axios'
import { CryptoCurrenciesResponseSchema } from './schema/crypto-schema'

//Función async que obtiene los valores
async function getCryptos(){
    const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"  //URL de la API
    const {data: {Data}} = await axios(url)   //Esperamos a que se obtengan los datos. Destructuramos para acceder directamente a estos valores del objeto
    const result = CryptoCurrenciesResponseSchema.safeParse(Data)   //Un data para el result
    console.log(result)
}


//Store de los estados globales usando Zustand
export const useCryptoStore = create(() => ({     //Importando create, creamos el store de zustand con los estados
    fetchCryptos: () => { //Funcion para hacer fecth en las cryptos
        getCryptos()  //Llamamos a la funcion que obtiene los valores
    }
}))