const incluirDadosUseCase = (repository) => async (todo) => {
  try {
    return await repository(todo.toJson())
  } catch (error) {
    throw error
  }
}

export default incluirDadosUseCase
