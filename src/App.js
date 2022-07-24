import { useState, useEffect } from 'react'

import { store } from './store'

export const App = () => {
  const [tarefa, setTarefa] = useState('')
  const [tarefas, setTarefas] = useState([])

  useEffect(() => {
    store.subscribe(() => {
      setTarefas(store.getState())
    })
  }, [])

  const handleInputChange = event => {
    setTarefa(event.target.value)
  }

  const handleFormSubmit = event => {
    event.preventDefault()
    store.dispatch({
      type: 'ADD_TASK',
      payload: tarefa
    })
    setTarefa('')
  }

  return(
    <form onSubmit={handleFormSubmit}>
      <input
        placeholder="Adicionar tarefa..."
        type="text"
        onChange={handleInputChange}
        value={tarefa}
      />
      <button>Adicionar</button>
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))}
      </ul>
    </form>
  )
}