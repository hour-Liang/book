import { createSlice, configureStore } from '@reduxjs/toolkit'
import { booklist } from '../components/book/ts/book'

const bookSlice = createSlice({
 name: 'book',
 initialState: booklist.value,
 reducers: {
  addBook: (state, action) => {
    const newBook = {
      ...action.payload,
      id: state.length > 0 ? Math.max(...state.map(book => book.id)) + 1 : 0
    }
    state.push(newBook)
  },
  
  // 删除书籍的reducer
  deleteBook: (state, action) => {
    const index = state.findIndex(book => book.id === action.payload)
    if (index !== -1) {
      state.splice(index, 1)
    }
  },
  
  // 删除选中的书籍
  deleteSelectedBooks: (state, action) => {
    // state.bookList = state.bookList.filter(book => !action.payload.includes(book.id))
  },
  
  // 编辑书籍的reducer
  editBook: (state, action) => {
    console.log(action.payload)
    const index = state.findIndex(book => book.id === action.payload.id)
    console.log(index)
    // 如果找到了对应的书籍，则更新它
    if (index !== -1) {
      // 使用Redux Toolkit的可变更新方式
      state[index] = {
        ...state[index],
        ...action.payload
      }
      console.log(state[index])
    }
  },
  
  updateRoute: (state, action) => {
    // 保持原有的更新路由功能
  },
 },
})

// 导出actions
export const { addBook, deleteBook, deleteSelectedBooks, updateRoute, editBook } = bookSlice.actions

// 创建store
const store = configureStore({
 reducer: {
  book: bookSlice.reducer
 }
})

// 导出类型
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store