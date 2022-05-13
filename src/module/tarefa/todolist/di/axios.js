import axios from 'axios'

const axiosInstace = axios.create({
  baseURL: "https://todo-list-hateoas.herokuapp.com",
})

export default axiosInstace
