import { configureStore } from '@reduxjs/toolkit'
import { menuReducer } from './menu/menuSlice'
import { wishlistReducer } from './wishlist/wishlistSlice'

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    wishlist: wishlistReducer
  },
})