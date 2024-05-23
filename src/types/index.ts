import { CurrencySchema, CryptoCurrencyResponseSchema, PairSchema, CryptoPriceSchema} from "../schema/crypto-schema";
import {z} from 'zod'

export type Currency = z.infer<typeof CurrencySchema>  //Creamos el tipo de dato con el schema inferido en schemas

export type Cryptocurrency = z.infer<typeof CryptoCurrencyResponseSchema>

export type Pair = z.infer<typeof PairSchema>

export type CryptoPrice = z.infer<typeof CryptoPriceSchema>