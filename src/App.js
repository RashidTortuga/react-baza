import './styles/App.css'
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Counter from './components/Counter'
import PostItem from './components/PostItem'
import PostList from './components/PostList'
import MyButton from './components/UI/button/MyButton'
import MyInput from './components/UI/input/MyInput'
function App() {
  const [value, setValue] = useState('Текст')
  const posts = [
    { id: 1, title: 'JS', body: 'Description' },
    { id: 2, title: 'JS2', body: 'Description' },
    { id: 3, title: 'JS3', body: 'Description' },
    { id: 4, title: 'JS4', body: 'Description' },
  ]
  const [title,setTitle] = useState ('')
 const addNewPost =()=>{

 }
   return (
    <div className="App">
      <form>
        <MyInput value={title} onChange={e =>setTitle(e.target.value)} type="text" placeholder="Название поста" />
        <MyInput value={title} onChange={e =>setTitle(e.target.value)}  onChange={e =>setTitle(e.target.value)} type="text" placeholder="Описание поста" />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title="Погромисты" />
    </div>
  )
}

export default App
