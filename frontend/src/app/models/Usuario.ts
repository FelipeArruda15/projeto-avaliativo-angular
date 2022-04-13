import { Estado } from "./Estado";

export class Usuario {
    id:number = 0;
    nome:string = '';
    email:string = '';
    estado:Estado = {} as Estado;
    cidade:string = '';
    telefone:string = '';
}