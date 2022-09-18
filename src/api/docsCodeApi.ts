import { IGetDocsCode, IUpdateDocsCode } from '../interface'
import axiosClient from './axiosClient'

const docsCodeApi = {
  getAll() {
    const url = 'doc/code'
    return axiosClient.get(url)
  },
  getOne(id: number) {
    const url = `doc/code/${id}`
    return axiosClient.get(url)
  },
  create(data: IGetDocsCode) {
    const url = 'doc/code'
    return axiosClient.post(url, data)
  },
  update(id: number, data: IUpdateDocsCode) {
    const url = `doc/code/${id}`
    return axiosClient.patch(url, data)
  },
  delete(id: number) {
    const url = `doc/code/${id}`
    return axiosClient.delete(url)
  },
}

export default docsCodeApi
