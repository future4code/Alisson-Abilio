import React from 'react'
import useProtectedPage from "../../hooks/useProtectedPage"
import { RecipeContainer, ScreenContainer } from './styled'
import AddRecipesForm from "./AddRecioesForm"
import Typography from '@material-ui/core/Typography'

const AddRecipePage = () => {
  useProtectedPage()
  return (
    <ScreenContainer>
      <RecipeContainer>
        <Typography gutterBottom variant={'h4'} align={'center'} color={'textPrimary'}>Adicionar Nova Receita</Typography>
        <AddRecipesForm/>
      </RecipeContainer>
    </ScreenContainer>
  )
}

export default AddRecipePage
