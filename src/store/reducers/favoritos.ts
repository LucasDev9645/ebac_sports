import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritoState = {
  itens: Produto[]
}

const initialState: FavoritoState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favorito: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      const existingProduct = state.itens.find((item) => item.id === produto.id)
      if (existingProduct) {
        state.itens = state.itens.filter((item) => item.id !== produto.id)
      } else {
        state.itens.push(produto)
      }
    }
  }
})

export const { favorito } = favoritosSlice.actions
export default favoritosSlice.reducer
