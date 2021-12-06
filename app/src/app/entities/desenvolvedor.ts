import { Sexo } from "../enums/sexo.enum";
import { Entity } from "./entity";
import { Nivel } from "./nivel";

export interface Desenvolvedor extends Entity
{
    nivel_id: number,
    nivel: Nivel,
    nome: string,
    sexo: Sexo,
    datanascimento: Date,
    idade: number,
    hobby: string,
}