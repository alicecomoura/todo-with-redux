import { useState } from 'react'

import { connect } from 'react-redux'

const App = ({ tarefas, addTarefa }) => {
  const [tarefa, setTarefa] = useState('')

  const handleInputChange = event => {
    setTarefa(event.target.value)
  }

  const handleFormSubmit = event => {
    event.preventDefault()
    addTarefa(tarefa)
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

const mapStateToProps = estado => ({
  tarefas: estado
})

const mapDispatchToProps = dispatch => ({
  addTarefa: tarefa => dispatch({
    type: 'ADD_TASK',
    payload: tarefa
  })
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)