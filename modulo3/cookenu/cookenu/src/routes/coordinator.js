export const goLogin = (history) => {
    history.push ("/login")
}

export const goSignUpPage = (history) => {
    history.push ("/cadastro")
}

export const goRecipesListPage = (history) => {
    history.push ("/")
}

export const goAddRecipesPage = (history) => {
    history.push ("/adcionar-receitas")
}

export const goRecipeDetailPage = (history, id) => {
    history.push (`/detalhes/${id}`)
}