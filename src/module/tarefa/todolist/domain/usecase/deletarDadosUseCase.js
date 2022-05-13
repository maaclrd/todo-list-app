const deletarDadosUseCase = (repository) => async (id) => {
  try {
    return await repository(id)
  } catch (error) {
    throw error
  }
}

export default deletarDadosUseCase
