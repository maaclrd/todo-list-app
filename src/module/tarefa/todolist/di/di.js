import axiosInstance from './axios'

import alterarDadosRepository from '../data/repository/alterarDadosRepository'
import alterarDadosUseCase from '../domain/usecase/alterarDadosUseCase'

import buscarDadosRepository from '../data/repository/buscarDadosRepository'
import buscarDadosUseCase from '../domain/usecase/buscarDadosUseCase'

import incluirDadosRepository from '../data/repository/incluirDadosRepository'
import incluirDadosUseCase from '../domain/usecase/incluirDadosUseCase'

import deletarDadosRepository from '../data/repository/deletarDadosRepository'
import deletarDadosUseCase from '../domain/usecase/deletarDadosUseCase'

import TodolistController from '../controller/todolistController'

const instance = axiosInstance

const alterarDadosRepositoryImpl = alterarDadosRepository(instance)
const alterarDadosUseCaseImpl = alterarDadosUseCase(alterarDadosRepositoryImpl)


const buscarDadosRepositoryImpl = buscarDadosRepository(instance)
const buscarDadosUseCaseImpl = buscarDadosUseCase(buscarDadosRepositoryImpl)

const incluirDadosRepositoryImpl = incluirDadosRepository(instance)
const incluirDadosUseCaseImpl = incluirDadosUseCase(incluirDadosRepositoryImpl)

const deletarDadosRepositoryImpl = deletarDadosRepository(instance)
const deletarDadosUseCaseImpl = deletarDadosUseCase(deletarDadosRepositoryImpl)


const todolistController = (context) =>
  new TodolistController(
    context,
		alterarDadosUseCaseImpl,
    buscarDadosUseCaseImpl,
    incluirDadosUseCaseImpl,
    deletarDadosUseCaseImpl,
  )

export { todolistController }
