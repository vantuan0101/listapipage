import { IGetDocs, IUpdateDocs } from '../interface'
import axiosClient from './axiosClient'

const docsApi = {
  getAll() {
    const url = 'docs'
    return axiosClient.get(url)
  },
  getOne(id: number) {
    const url = `docs/${id}`
    return axiosClient.get(url)
  },
  getOneByName(nameApi: string) {
    const url = `docs/${nameApi}`
    return axiosClient.get(url)
  },
  create(data: IGetDocs) {
    const url = 'docs'
    return axiosClient.post(url, data)
  },
  update(id: number, data: IUpdateDocs) {
    const url = `docs/${id}`
    return axiosClient.patch(url, data)
  },
  delete(id: number) {
    const url = `docs/${id}`
    return axiosClient.delete(url)
  },
}

export default docsApi
