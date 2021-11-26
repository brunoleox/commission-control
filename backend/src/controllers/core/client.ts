export default class Client {
  constructor(
    public name?: string,
    public cnpj_cpf: string = null,
    public email?: string,
    public phone?: string,
    public address?: string,
    public number?: string,
    public district?: string,
    public city?: string,
    public state?: string,
    public cep?: number
  ) {}
}
