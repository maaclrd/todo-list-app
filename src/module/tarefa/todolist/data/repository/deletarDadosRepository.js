const deletarDadosRepository = (axios) => async (id) => {
  try {
    await axios.delete(`item/${id}`)
  } catch (error) {
    throw error
  }
}

export default deletarDadosRepository
