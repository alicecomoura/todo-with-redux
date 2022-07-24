import { createStore } from 'redux'

const reducer = (estado = [], acao) => {
  switch(acao.type) {
    case 'ADD_TASK':
      return [
        ...estado,
        acao.payload,
      ]
    default:
      return estado
  }
}

const store = createStore(reducer)

export { store }