import Todolist from "../../domain/model/todolist"

const buscarDadosRepository = (axios) => async (sigla) => {
  try {
    const response = await axios.get(`/item?initials=${sigla}`)
    return response.data.map((item) => new Todolist(item))
  } catch (error) {
    throw error
  }
}

export default buscarDadosRepository
