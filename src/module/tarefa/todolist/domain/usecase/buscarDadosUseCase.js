const buscarDadosUseCase = (repository) => async (sigla) => {
  try {
    return await repository(sigla)
  } catch (error) {
    throw error
  }
}

export default buscarDadosUseCase
