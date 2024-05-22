
import {create} from 'zustand'
import { Cryptocurrency } from './types'
import { devtools } from 'zustand/middleware'
import { getCryptos } from './services/CryptoServices'


//Tipo de "dato" para realizar el schema para eluseCryptoStore
export type CryptoStore = {
    cryptoCurrencies: Cryptocurrency[],
    fetchCryptos: () => Promise<void>
}




//Store de los estados globales usando Zustand
export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({     //Importando create, creamos el store de zustand con los estados

    cryptoCurrencies:[], //State para guardat los cryptoCurrencies

    fetchCryptos: async () => { //Funcion para hacer fecth en las cryptos
        const cryptoCurrencies = await getCryptos()  //Llamamos a la funcion que obtiene los valores
        set(() => ({
            cryptoCurrencies: cryptoCurrencies
        }))
    }
})))