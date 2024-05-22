import { CurrencySchema, CryptoCurrencyResponseSchema} from "../schema/crypto-schema";
import {z} from 'zod'

export type Currency = z.infer<typeof CurrencySchema>  //Creamos el tipo de dato con el schema inferido en schemas

export type Cryptocurrency = z.infer<typeof CryptoCurrencyResponseSchema>