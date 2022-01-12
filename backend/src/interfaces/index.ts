export interface IClients {
  name: string
  cnpj_cpf: string
  email: string
  phone: string
  address: string
  number: string
  district: string
  city: string
  state: string
  cep: number
}

export interface IProducts {
  id: string
  name: string
  value: number
}

export interface IOrders {
  id: string
  client: string
  products: IProducts[]
}
