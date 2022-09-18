import clsx from 'clsx'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { FaTimes } from 'react-icons/fa'
import docsApi from '../../../../api/docsApi'
import InputField from '../../../../components/SliderField/InputField/InputField'
import style from '../components/editmodal.module.scss'
interface IProps {
  handleEditDoc: any
  showEdit: any
}

const EditModal = ({ handleEditDoc, showEdit }: IProps) => {
  // console.log(currentUser);
  const defaultValues = {
    icon: showEdit.data?.icon || '',
    name: showEdit.data?.name || '',
    title: showEdit.data?.title || '',
    desc: showEdit.data?.desc || '',
    slug: showEdit.data?.slug || '',
  }
  const methods = useForm({
    defaultValues,
  })

  const handleSubmitForm = async (data: any) => {
    // console.log(data)
    try {
      await docsApi.update(showEdit.data.id, data)
      alert('Sửa thành công')
      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <FormProvider {...methods}>
      <div className={clsx(style.main)}>
        <form
          className={clsx(style.form)}
          onSubmit={methods.handleSubmit(handleSubmitForm)}
        >
          <div className={clsx(style.form_close)}>
            <FaTimes onClick={handleEditDoc} />
          </div>
          <div className={clsx(style.form_group)}>
            <h3 className={clsx(style.form_heading)}>Edit USer</h3>
            <div className={clsx(style.form_name)}>
              <InputField
                name="icon"
                label="icon"
                className={clsx(style.form_field)}
              />
              <InputField
                label="name"
                name="name"
                className={clsx(style.form_field)}
              />
            </div>
            <InputField name="title" className={clsx(style.form_field)} />
            <InputField name="desc" className={clsx(style.form_field)} />
            <InputField name="slug" className={clsx(style.form_field)} />
          </div>
          <button className={clsx(style.form_btn)} type="submit">
            Save
          </button>
        </form>
      </div>
    </FormProvider>
  )
}

export default EditModal
