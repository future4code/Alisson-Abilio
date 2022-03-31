import axios from "axios";
import { URL_BASE_CONCURSOS, URL_BASE_CONCURSOSID, URL_BASE_LOTERIAS } from "../constants/url";

export const getLoteria = (setData) => {

    axios.get(URL_BASE_LOTERIAS)

        .then((res) => {
            setData(res.data)
        })
        .catch((err) => {
            alert(err.message)
        })
}
export const getLoteriaConcursos = (setData) => {

    axios.get(URL_BASE_CONCURSOS)

        .then((res) => {
            setData(res.data)
        })
        .catch((err) => {
            alert(err.message)
        })
}
export const getLoteriaConcursosId = (setData) => {

    axios.get(URL_BASE_CONCURSOSID)

        .then((res) => {
            setData(res.data)
        })
        .catch((err) => {
            alert(err.message)
        })
}