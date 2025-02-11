import axios from 'axios'

const URL = 'http://localhost:3001/persons'

export const getAll = () => {
  return axios.get(URL).then((res) => {
    const { data } = res
    return data
  })
}

export const create = (newObject) => {
  return axios.post(URL, newObject).then((res) => {
    const { data } = res
    return data
  })
}

export const remove = (id) => {
  return axios.delete(`${URL}/${id}`)
}

export const update = (id, updatedPerson) => {
  return axios.put(`${URL}/${id}`, updatedPerson).then((res) => {
    const { data } = res
    return data
  })
}
