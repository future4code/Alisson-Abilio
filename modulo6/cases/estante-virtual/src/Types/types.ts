export enum  Modalidade {
   CemMetrosRasos = "100m Rasos",
   LançamentoDeDardo = "Lançamento De Dardo",
}

export enum  Grandeza {
   Segundos = "s",
   Minutos = "m",
}

export type Competidor = {
   id: string,
   competicao: Modalidade, 
   atleta: string, 
   value: number, 
   unidade: Grandeza
}