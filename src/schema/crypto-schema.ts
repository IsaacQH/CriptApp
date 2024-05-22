
import {z} from 'zod'

export const CurrencySchema = z.object({
    code: z.string(),
    name: z.string()
})

export const CryptoCurrencyResponseSchema = z.object({
    CoinInfo: z.object({             //Este objeto alberca el schema para las cryptos
        FullName: z.string(),       //Es el objeto que sale de axios pero solo queremos estos datos
        Name: z.string()
    })
})

export const CryptoCurrenciesResponseSchema = z.array(CryptoCurrencyResponseSchema)  //Evitamos el tema de los arrays

export const PairSchema = z.object({
    currency: z.string(),
    criptocurrency: z.string()
})