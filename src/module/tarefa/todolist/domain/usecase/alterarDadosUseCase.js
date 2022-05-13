const alterarDadosUseCase = (repository) => async (query) => {
  try {
    //TODO
    return await repository(query)
  } catch (error) {
    throw error
  }
}

export default alterarDadosUseCase
