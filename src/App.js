import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Counter from './components/Counter'
import PostItem from './components/PostItem'
import PostList from './components/PostList'
import './styles/App.css'
function App() {
  const [value, setValue] = useState('Текст')
  const posts = [
    { id: 1, title: 'JS', body: 'Description' },
    { id: 2, title: 'JS2', body: 'Description' },
    { id: 3, title: 'JS3', body: 'Description' },
    { id: 4, title: 'JS4', body: 'Description' },
  ]
  const postes = [
    { id: 1, title: 'ляшко', body: 'Description' },
    { id: 2, title: 'тимошенко', body: 'Description' },
    { id: 3, title: 'яникевич', body: 'Description' },
    { id: 4, title: 'якубович', body: 'Description' },
  ]
  return (
    <div className="App">
<PostList posts={posts} title={'Погромисты'}/>
<PostList posts={postes} title={'Партия рыгона'}/>
    </div>
  )
}

export default App
