export interface IUsers {
  email: string
  password: string
  name: string
  business: string
  isAdmin: boolean
}

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
  code: number
}

export interface IOrders extends IClients, IProducts {
  id: string
  name: string
  order: number
}
