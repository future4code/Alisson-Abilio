import React, { useEffect, useState } from "react";
import { getLoteria, getLoteriaConcursos, getLoteriaConcursosId } from "../../api/request";
import { BoxRight, BoxLeft, ContainerInferior, CotainnerGenaral, NameCenter, ContainnerSelector } from "./styled";




export const Home = () => {
    const [loteria, setLoteria] = useState([])
    const [loteriaConcuso, setLoteriaConcuso] = useState([])
    const [loteriaConcursoId, setLoteriaConcusoId] = useState([])

    const [jogoAtual, set_JogoAtual] = useState({ id: 0, nome: "MEGA-SENA" })

    useEffect(() => {
        getLoteria(setLoteria)
        getLoteriaConcursos(setLoteriaConcuso)
        getLoteriaConcursosId(setLoteriaConcusoId)
    }, [])

    const onChangeSelect = (e) => {
        loteria.filter((item) => {
            if (e.target.value === item.id.toString()) {
                set_JogoAtual({ id: item.id, nome: item.nome.toUpperCase() })
            }
        })
    }

    const result = loteria && loteria.map((item) => {
        return <option key={item.id} value={item.id} >{
            item.nome.toUpperCase()}</option>
    })

    const concurso = loteriaConcuso && loteriaConcuso.map((item) => {
        if (item.loteriaId === jogoAtual.id) {
            return item.loteriaId

        }
        
    })
    console.log("aqui id",concurso)
    console.log("aqui tem id",loteriaConcursoId)

    const concursoId = loteriaConcursoId && loteriaConcursoId.map((item) => {
        if (item.loteria === concurso) {
            return item.data
        }
    })
    return (
        <CotainnerGenaral>
            <ContainnerSelector>
                <select onChange={onChangeSelect}  >
                    {result}
                </select>
            </ContainnerSelector>
            <ContainerInferior>
                <BoxLeft>
                    <NameCenter>
                        <p>{jogoAtual.nome}</p>
                        <p>{concursoId}</p>
                     
                    </NameCenter>
                </BoxLeft>
                <BoxRight>
                    <p>{concurso}</p>

                </BoxRight>
            </ContainerInferior>
        </CotainnerGenaral>
    )
}