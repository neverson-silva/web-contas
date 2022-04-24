export class Root {
    id: number
    conta: string
    senha: string
    situacao: number
    pessoa: Pessoa
    roles: Role[]
    accessToken: string
    refreshToken: string
  }
  
  export class Pessoa {
    id: number
    nome: string
    sobrenome: string
    apelido: string
    perfil: string
    createdAt: string
    updatedAt: string
    sexo: string
    dataNascimento: string
    nomeCompleto: string
  }
  
  export class Role {
    authority: string
  }
  