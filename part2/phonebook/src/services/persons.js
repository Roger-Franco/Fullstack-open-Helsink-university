import axios from 'axios'

const URL = 'http://localhost:3001/persons'

const getAll = () => {
  return axios.get(URL).then(response => response.data)
}

const create = (newPerson) => {
  return axios.post(URL, newPerson).then(response => response.data)
}

const update = (id, newPerson) => {
  return axios.put(`${URL}/${id}`, newPerson).then(response => response.data)
}

const removePerson = (id) => {
  axios.delete(`${URL}/${id}`)
  // return axios.delete(URL).then(response => response.data)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAll,
  create,
  removePerson,
  update
}