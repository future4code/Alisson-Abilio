import React, { useEffect, useState } from "react";
import { getLoteria, getLoteriaConcursos, getLoteriaConcursosId } from "../../api/request";
import { FUNCAO_URL_BASE_CONCURSOSID, URL_BASE_CONCURSOSID } from "../../constants/url";
import { BoxRight, BoxLeft, ContainerInferior, CotainnerGenaral, NameCenter,
 ContainnerSelector, NameDown, } from "./styled";
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


    const getLoteriaConcursosId = (setData) => {

        axios.get(FUNCAO_URL_BASE_CONCURSOSID(resultadoFinal))

            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                alert(err.message)
            })
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

    const numerox = loteriaConcursoId.numeros && loteriaConcursoId.numeros.map((item) => {
        if (loteriaConcursoId.loteria === jogoAtual.id) {
            return <p>{item}</p>
        }
    })



    return (
        <CotainnerGenaral>
            <ContainnerSelector>
                <select onChange={pegarItemSelecionado}  >
                    {result}
                </select>
            </ContainnerSelector>
            <ContainerInferior>
                <BoxLeft>
                    <NameCenter>
                        <p>{jogoAtual.nome}</p>
                    </NameCenter>
                    <NameDown>
                        <p>{loteriaConcursoId.data}</p>
                    </NameDown>
                </BoxLeft>
                <BoxRight>
                    {numerox}
                </BoxRight>
            </ContainerInferior>
        </CotainnerGenaral>
    )
}