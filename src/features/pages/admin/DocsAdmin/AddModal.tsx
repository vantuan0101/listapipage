import clsx from 'clsx'
import { FormProvider, useForm } from 'react-hook-form'
import { FaTimes } from 'react-icons/fa'
import docsApi from '../../../../api/docsApi'
import InputField from '../../../../components/SliderField/InputField/InputField'

import style from '../components/addmodal.module.scss'
interface IProps {
  className: string
  handleAddDoc: any
}
const AddModal = ({ handleAddDoc, className }: IProps) => {
  // console.log(product);

  const methods = useForm({
    defaultValues: {
      icon: '',
      name: '',
      title: '',
      desc: '',
      slug: '',
    },
  })

  const handleSubmitForm = async (data: any) => {
    // console.log(data)

    try {
     
      await docsApi.create(data)
      alert('Them thành công')
      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(handleSubmitForm)}
        className={clsx(style.main)}
        // method="POST"
        encType="multipart/form-data"
      >
        <div className={clsx(style.form_close)}>
          <FaTimes onClick={handleAddDoc} />
        </div>
        <h3 className={clsx(style.form_heading)}>Thêm document API</h3>
        <div className={clsx(style.form_group)}>
          <InputField name="icon" className={clsx(style.form_field)} />

          <InputField
            name="name"
            label="Tên API"
            className={clsx(style.form_field)}
          />
          <InputField name="title" className={clsx(style.form_field)} />
          <InputField
            name="desc"
            label="Mô tả"
            className={clsx(style.form_field)}
          />

          <InputField name="slug" className={clsx(style.form_field)} />
        </div>

        <button className={clsx(style.form_btn)} type="submit">
          Save
        </button>
      </form>
    </FormProvider>
  )
}

export default AddModal
