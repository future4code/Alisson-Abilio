
export const goToHome = (history) => {
    history.push("/home")
}
export const goToDetails = (history, id) => {
    history.push(`/detalhes/${id}`)
}
export const goToSelection = (history) => {
    history.push("/selecao")
}