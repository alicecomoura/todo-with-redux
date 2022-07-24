import { useState } from 'react'

export const App = () => {
  const [tarefa, setTarefa] = useState('')
  const [tarefas, setTarefas] = useState([])

  const handleInputChange = event => {
    setTarefa(event.target.value)
  }

  const handleFormSubmit = event => {
    event.preventDefault()

    setTarefas(antigasTarefas => [
      ...antigasTarefas,
      tarefa, 
    ])
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