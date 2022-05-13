import Todolist from "../../domain/model/todolist"

const incluirDadosRepository = (axios) => async (todo) => {
  try {
    const response = await axios.post('/item', todo)
    return new Todolist(response.data) ?? {}
  } catch (error) {
    throw error
  }
}

export default incluirDadosRepository