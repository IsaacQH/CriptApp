import { create } from 'zustand';
import { CryptoPrice, Cryptocurrency, Pair } from './types';
import { devtools } from 'zustand/middleware';
import { fetchCurrentCryptoPrice, getCryptos } from './services/CryptoServices';

// Tipo de "dato" para realizar el schema para el useCryptoStore
export type CryptoStore = {
    cryptoCurrencies: Cryptocurrency[],
    result: CryptoPrice,
    loading : boolean,
    fetchCryptos: () => Promise<void>,
    fetchData: (pair: Pair) => Promise<void>
}

// Store de los estados globales usando Zustand
export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({     // Importando create, creamos el store de zustand con los estados

    cryptoCurrencies: [], // State para guardar los cryptoCurrencies

    result: {              // Se inicia con valores vacíos pero definidos
        IMAGEURL: '',
        PRICE: '',
        HIGHDAY: '',
        LOWDAY: '',
        CHANGEPCT24HOUR: '',
        LASTUPDATE: ''
    } as CryptoPrice,

    loading: false,

    fetchCryptos: async () => { // Función para hacer fetch en las cryptos
        const cryptoCurrencies = await getCryptos();  // Llamamos a la función que obtiene los valores
        set(() => ({
            cryptoCurrencies
        }));
    },

    fetchData: async (pair) => {   // Función que recibe los precios y los pasa al nuevo fetch
        set(() => ({
            loading: true,   // Seteamos el valor de result a lo que obtuvimos
        }))
        const result = await fetchCurrentCryptoPrice(pair);  // Resultado de la abstracción de los datos
        setTimeout(() => {
            set(() => ({
                result,   // Establecemos el resultado obtenido
                loading: false, // Cambiamos loading a false después del retraso
            }));
        }, 1000); // 1000 milisegundos = 1 segundo
    }
})));