import { alert, snackbar } from 'cids-cgi/lib/util'
import Todolist from '../domain/model/todolist'

class TodolistController {
  todo = new Todolist({})

  dialog = false
  linhas = []
  colunas = [
    {
      text: 'Nome',
      value: 'name',
    },
    {
      text: 'Descrição',
      value: 'description',
    },
    {
      text: 'Data e hora',
      value: 'date',
      custom: true,
    },
    {
      text: 'Sigla',
      value: 'initials',
    },
  ]

  constructor(
    context,
    alterarDadosUseCase,
    buscarDadosUseCase,
    incluirDadosUseCase,
    deletarDadosUseCase
  ) {
    this.context = context
    this.alterarDadosUseCase = alterarDadosUseCase
    this.buscarDadosUseCase = buscarDadosUseCase
    this.incluirDadosUseCase = incluirDadosUseCase
    this.deletarDadosUseCase = deletarDadosUseCase
  }

  async mounted() {
    try {
      this.linhas = await this.buscarDadosUseCase('vnb')
    } catch (error) {
      alert.show({ message: error.toString() })
    }
  }

  async incluir() {
    this.dialog = true
  }

  cancelar() {
    this.dialog = false
    this.context.$refs.formulario.$refs.form.resetValidation()
  }

  async salvar() {
    try {
      if (this.context.$refs.formulario.$refs.form.validate()) {
        this.todo.id > 0
          ? await this.alterarDadosUseCase(this.todo)
          : await this.incluirDadosUseCase(this.todo)

        await this.mounted()
        this.cancelar()
        this._limpar()
      }
    } catch (error) {
      alert.show({ message: error.toString() })
    }
  }

  async deletar(item) {
    try {
      const confirm = await snackbar.confirm({
        message: 'Tem certeza que tem certeza?',
        timeout: 3000,
        color: "red"
      })

      if (confirm) {
        await this.deletarDadosUseCase(item.id)
        this.mounted()
      }
    } catch (error) {
      alert.show({ message: error.toString() })
    }
  }

  _limpar() {
    this.todo = new Todolist({})
  }
}

export default TodolistController
