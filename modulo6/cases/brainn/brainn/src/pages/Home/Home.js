import React, { useEffect, useState } from "react";
import { getLoteria, getLoteriaConcursos } from "../../api/request";
import { FUNCAO_URL_BASE_CONCURSOSID } from "../../constants/url";
import { CotainnerGenaral, ContainnerResults, ContainnerSelect, BoxResult, BoxSelect } from "./styled";
import axios from "axios";


export const Home = () => {
    const [loteria, setLoteria] = useState([])
    const [loteriaConcuso, setLoteriaConcurso] = useState([])
    const [loteriaConcursoId, setLoteriaConcursoId] = useState([])
    const [jogoAtual, set_JogoAtual] = useState({ id: 0, nome: "MEGA-SENA" })



    const concurso = loteriaConcuso && loteriaConcuso.map((item) => {
        if (item.loteriaId === jogoAtual.id) {
            return item.concursoId
        }
    })
    const resultadoDoFiltro = concurso.filter((item) => {
        return item
    })

    let resultadoFinal = resultadoDoFiltro.toString()

    console.log("resultadofinald",resultadoFinal)

    const getLoteriaConcursosId = (setData) => {
      if( !resultadoFinal){
        axios.get(FUNCAO_URL_BASE_CONCURSOSID("2359"))
        .then((res) => {
            setData(res.data)
        })
        .catch((err) => {
            alert("aqui", err.message)
        })
      }else{
          axios.get(FUNCAO_URL_BASE_CONCURSOSID(resultadoFinal))
          
          .then((res) => {
              setData(res.data)
            })
            .catch((err) => {
                alert("aqui1", err.message)
            })
        }
        
    }


    //CHAMAR AS REQUESIÇÕES
    useEffect(() => {
        getLoteria(setLoteria)
        getLoteriaConcursos(setLoteriaConcurso)
        getLoteriaConcursosId(setLoteriaConcursoId)
    }, [resultadoFinal])






    // PEGAR SELEÇÃO DO OPTION 
    const pegarItemSelecionado = (e) => {
        loteria.filter((item) => {
            if (e.target.value === item.id.toString()) {
                set_JogoAtual({ id: item.id, nome: item.nome.toUpperCase() })
            }
        })

    }

    //PERGAR O NOME E O ID DO JOGO ATUAL 
    const result = loteria?.map((item) => {
        return <option key={item.id} value={item.id}>{item.nome.toUpperCase()}</option>;
    })


    //PEGAR O RESULTADO DE CADA JOGO 
    const numeroResult = loteriaConcursoId.numeros && loteriaConcursoId.numeros.map((item) => {
        return <p> {item}</p>
    })

    /// link

    const resultados = loteriaConcursoId.numeros && loteriaConcursoId.numeros.map((item) => {
        if (loteriaConcursoId.loteria === jogoAtual.id) {
            return <BoxResult>{item}</BoxResult>
        }
    })

   const data = loteriaConcursoId.data && loteriaConcursoId.data.split("T")[0]
   const nConcurso = loteriaConcursoId.id

   console.log(nConcurso)
    return (
        <CotainnerGenaral  cor={jogoAtual.id} >
            <ContainnerSelect>
                <BoxSelect>
                <select onChange={pegarItemSelecionado}>{result}</select>
                </BoxSelect>

                <p>{jogoAtual.nome}</p>
             <p> {nConcurso}  { data && data.split("-").reverse().join("/")}</p>
            </ContainnerSelect>
            <ContainnerResults>
                <div className="resultados-numeros">
                {resultados}
                </div>
                <div className="resultado-texto">
                <p>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</p>
                </div>
            </ContainnerResults>
        </CotainnerGenaral>
    )
}

