import { useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'

export const App = () => {
  const [tarefa, setTarefa] = useState('')
  const dispatch = useDispatch()
  const tarefas = useSelector(estado => estado)

  const handleInputChange = event => {
    setTarefa(event.target.value)
  }

  const handleFormSubmit = event => {
    event.preventDefault()
    dispatch({
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
