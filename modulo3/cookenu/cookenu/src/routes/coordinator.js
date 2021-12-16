export const goToLogin = (history) => {
  history.push("/login")
}

export const goToSignUp = (history) => {
  history.push("/cadastro")
}

export const goToAddRecipes = (history) => {
  history.push("/adcionar-receitas")
}

export const goToRecipeDetail = (history, id) => {
  history.push(`/detalhes/${id}`)
  }
export const goToRecipesList = (history) => {
  history.push("/")
}
