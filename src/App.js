import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Counter from './components/Counter'
import PostItem from './components/PostItem'
import './styles/App.css'
function App() {
  const [value, setValue] = useState('Текст')

  return (
    <div className="App">
      <PostItem post={{ id: 1, title: 'JS', body: 'Description' }} />
      <PostItem post={{ id: 2, title: 'TS', body: 'Description' }} />
      <PostItem post={{ id: 3, title: 'React', body: 'Description' }} />
    </div>
  )
}

export default App
