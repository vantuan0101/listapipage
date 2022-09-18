import InputField from '../../../../components/SliderField/InputField/InputField'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import clsx from 'clsx'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import style from './register.module.scss'
import authApi from '../../../../api/authApi'

const schema = yup
  .object({
    firstName: yup.string().required('Vui lòng nhập tên'),
    lastName: yup.string().required('Vui lòng nhập họ và tên lót'),
    email: yup
      .string()
      .email('Vui  lòng nhập email')
      .required('Vui lòng nhập email'),
    password: yup
      .string()
      .required('Vui lòng nhập mật khẩu')
      .min(6, 'Mật khẩu quá ngắn. Tối thiểu 6 ký tự')
      .max(255),
    confirm_password: yup
      .string()
      .required('Vui lòng nhập lại mật khẩu')
      .oneOf([yup.ref('password'), null], 'Mật khẩu không khớp'),
  })
  .required()
const Register = () => {
  const methods = useForm({
    resolver: yupResolver(schema),
  })

  let navigate = useNavigate()

  const handleSubmitForm = async (dataForm: any) => {
    console.log(dataForm)

    try {
      const newUser = await authApi.signup(dataForm)
      console.log(newUser)
      if (newUser) {
        navigate('/auth/login')
      } else {
        alert('Đăng ký thất bại')
      }
    } catch (error) {
      methods.setError('email', {
        type: 'focus',
        message: 'Email này đã được sử dụng',
      })
    }
  }
  return (
    <FormProvider {...methods}>
      <div className={clsx(style.contain)}>
        <form
          onSubmit={methods.handleSubmit(handleSubmitForm)}
          className={clsx(style.form)}
        >
          <div className={clsx(style.heading)}>Đăng ký tài khoản</div>
          <div className={clsx(style.name)}>
            <InputField name="firstName" label="Tên" />
            <InputField name="lastName" label="Họ và tên lót" />
          </div>
          <InputField name="email" typeInput="email" />
          <InputField name="password" typeInput="password" />
          <InputField name="confirm_password" typeInput="password" />
          <button type="submit" className={clsx(style.input)}>
            Đăng ký
          </button>
        </form>
      </div>
    </FormProvider>
  )
}

export default Register
