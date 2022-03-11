import { Atividade } from "./atividade.model";
import { Pessoa } from "./pessoa.model";

export interface Experiencia {

    id: number;
    pessoa: Pessoa;
    cargo: string;
    atividades: Array<Atividade>;
    
}