import axios from "axios";
import { URL_BASE_LOTERIAS } from "../constants/url";

export const getLoteria = (setData) => {

    axios.get(URL_BASE_LOTERIAS)

        .then((res) => {
            setData(res.data)
        })
        .catch((err) => {
            alert(err.message)
        })
}