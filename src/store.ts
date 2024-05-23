
import {create} from 'zustand'
import { CryptoPrice, Cryptocurrency, Pair } from './types'
import { devtools } from 'zustand/middleware'
import { fetchCurrentCryptoPrice, getCryptos } from './services/CryptoServices'


//Tipo de "dato" para realizar el schema para eluseCryptoStore
export type CryptoStore = {
    cryptoCurrencies: Cryptocurrency[],
    result: CryptoPrice,
    fetchCryptos: () => Promise<void>,
    fetchData: (pair:Pair) => Promise<void>
}




//Store de los estados globales usando Zustand
export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({     //Importando create, creamos el store de zustand con los estados

    cryptoCurrencies:[], //State para guardat los cryptoCurrencies

    result: {} as CryptoPrice,    //Se inicia en ceros y con el as se evita declarar cada propiedad vacia

    fetchCryptos: async () => { //Funcion para hacer fecth en las cryptos
        const cryptoCurrencies = await getCryptos()  //Llamamos a la funcion que obtiene los valores
        set(() => ({
            cryptoCurrencies: cryptoCurrencies
        }))
    },

    fetchData: async (pair) => {   //Función que recibe los precios y los pasa a el nuevo fetch
        const result = await fetchCurrentCryptoPrice(pair)  //resultado de la abstraccion de los datos
        set(() => ({
            result : result   //Seteamos el valor de result a lo que obtuvimos
        }))
    }
    
})))