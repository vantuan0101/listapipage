import axiosClient from './axiosClient'

const authApi = {
  signin(params: { email: string; password: string }) {
    const url = 'auth/signin'
    return axiosClient.post(url , params)
  },
  signup(params: {
    email: string
    password: string
    firstName: string
    lastName: string
  }) {
    const url = 'auth/signup'
    return axiosClient.post(url , params)
  },
  forgotPassword() {
    const url = 'auth/forgot-password'
    return axiosClient.post(url)
  },
  resetPassword() {
    const url = 'auth/reset-password'
    return axiosClient.post(url)
  },
}
export default authApi
