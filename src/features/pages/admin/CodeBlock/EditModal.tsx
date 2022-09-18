import clsx from 'clsx'
import React, { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { FaTimes } from 'react-icons/fa'
import InputField from '../../../../components/SliderField/InputField/InputField'
import style from '../components/editmodal.module.scss'
import docsCodeApi from '../../../../api/docsCodeApi'
import MarkdownEditor from '../../../../components/Markdown/MarkdownEditor'
import { IShowEdit } from './CodeBlockInterface'

const EditModal = ({
  handleEditDoc,
  showEdit,
}: {
  handleEditDoc: any
  showEdit: IShowEdit
}) => {
  // console.log(showEdit)
  const [code, setCode] = useState<string | undefined>(undefined)
  const [output, setOutput] = useState<string | undefined>(undefined)
  const defaultValues = {
    icon: showEdit.data?.icon || '',
    title: showEdit.data?.title || '',
    slug: showEdit.data?.slug || '',
    content: showEdit.data?.content || '',
    note: showEdit.data?.note || '',
    DocsId: showEdit.data?.DocsId || null,
  }

  const methods = useForm({
    defaultValues,
  })

  const handleSubmitForm = async (data: any) => {
    // console.log(data)
    const id = showEdit.data.id
    try {
      if (id) {
        await docsCodeApi.update(id, {
          ...data,
          code,
          outPut: output,
          DocsId: Number(data.DocsId),
        })
        alert('Sửa thành công')
        window.location.reload()
      }
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
      </div>
    </FormProvider>
  )
}

export default EditModal
