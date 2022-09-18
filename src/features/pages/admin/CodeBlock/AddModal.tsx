import clsx from 'clsx'
import { FormProvider, useForm } from 'react-hook-form'
import { FaTimes } from 'react-icons/fa'
import InputField from '../../../../components/SliderField/InputField/InputField'

import style from '../components/addmodal.module.scss'
import { useState } from 'react'
import docsCodeApi from '../../../../api/docsCodeApi'
import MarkdownEditor from '../../../../components/Markdown/MarkdownEditor'
interface IProps {
  className: string
  handleAddDoc: any
}

const AddModal = ({ handleAddDoc, className }: IProps) => {
  // console.log(product);
  const [code, setCode] = useState<string>('')
  const [output, setOutput] = useState<string>('')
  const methods = useForm({
    defaultValues: {
      icon: '',
      title: '',
      slug: '',
      content: '',
      code: '',
      note: '',
      outPut: '',
      DocsId: null,
    },
  })
  const handleSubmitForm = async (data: any) => {
    // console.log(data)

    try {
      await docsCodeApi.create({
        ...data,
        code,
        outPut: output,
        DocsId: +data.DocsId,
      })
      alert('Them thành công')
      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  }
  // Finish!
  function handleEditorChange({ html, text }: { html: string; text: string }) {
    // console.log('handleEditorChange', html, text)
    setCode(html)
  }
  function handleEditorChange2({ html, text }: { html: string; text: string }) {
    // console.log('handleEditorChange', html, text)
    setOutput(html)
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
        <h3 className={clsx(style.form_heading)}>Thêm document Code Block</h3>
        <div className={clsx(style.form_group)}>
          <InputField name="icon" className={clsx(style.form_field)} />

          <InputField name="title" className={clsx(style.form_field)} />
          <InputField name="slug" className={clsx(style.form_field)} />
          <InputField name="content" className={clsx(style.form_field)} />

          <label htmlFor="">Code</label>
          <MarkdownEditor handleEditorChange={handleEditorChange} />
          <InputField name="note" className={clsx(style.form_field)} />
          <label htmlFor="">outPut</label>
          <MarkdownEditor handleEditorChange={handleEditorChange2} />

          <InputField
            name="DocsId"
            typeInput="number"
            className={clsx(style.form_field)}
          />
        </div>

        <button className={clsx(style.form_btn)} type="submit">
          Save
        </button>
      </form>
    </FormProvider>
  )
}

export default AddModal
