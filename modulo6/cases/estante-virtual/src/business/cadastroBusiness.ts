import { CriarNovamente } from "../Endpoints/CriarCompeticao/CriarCompeticao";

export class CadastroBusiness {
    constructor(
        private criar: CriarNovamente
    ) {
        
    }
  public async fazerCadastro(competicao: string, atleta:string, valor:number, unidade:string ) {
    try {
      if (!competicao || !atleta) {
        throw new Error ('Missing Input');
      }
      const id = Date.now().toString()
      await this.criar.CriarCompeticao (id, competicao, atleta, valor, unidade);
      return { message: ' adicionado' };
    } catch (error) {
       console.log(error)
      }
    }
  }