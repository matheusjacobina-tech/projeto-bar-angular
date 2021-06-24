import { Perfil } from './perfil.model';

export class Usuario {
    id: number;
    nome: string;
    login: string;
    senha: string;
    perfil: Perfil;
}
