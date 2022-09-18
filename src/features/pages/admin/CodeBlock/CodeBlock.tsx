import React, { useEffect, useState } from 'react'
import style from './codeblock.module.scss'
import docsCodeApi from '../../../../api/docsCodeApi'
import { FaPen, FaTrash } from 'react-icons/fa'
import AddModal from './AddModal'
import EditModal from './EditModal'

import clsx from 'clsx'
import { IShowEdit , ICodeBlock } from './CodeBlockInterface'

const CodeBlock = () => {
  const defaultShow: IShowEdit = {
    status: false,
    data: {
      id: null,
      icon: null,
      title: null,
      slug: null,
      content: null,
      code: null,
      note: null,
      outPut: null,
      DocsId: null,
    },
  }
  const [docs, setDocs] = useState<ICodeBlock[]>([])
  const [showEdit, setShowEdit] = useState(defaultShow)
  const [showAdd, setShowAdd] = useState(defaultShow)
  useEffect(() => {
    const result = async () => {
      const res = await docsCodeApi.getAll()
      setDocs(res.data)
    }
    result()
  }, [])
  // console.log(docs)

  const handleAddDoc = () => {
    setShowAdd((prev) => ({ ...prev, status: !prev.status }))
  }
  const handleEditDoc = (doc: ICodeBlock) => {
    setShowEdit((prev) => ({
      status: !prev.status,
      data: doc,
    }))
    // setCurrentDoc(Doc)
  }
  const handleDeleteDoc = (id: number) => {
    const result = async () => {
      try {
        await docsCodeApi.delete(id)
        alert('Delete success')
        window.location.reload()
      } catch (error) {
        console.log(error)
      }
    }
    result()
  }
  return (
    <div className={clsx(style.main)}>
      {showAdd.status && (
        <AddModal
          handleAddDoc={handleAddDoc}
          className={clsx(style.addmodal, showAdd.status ? style.isShow : '')}
        />
      )}
      {showEdit.status && (
        <EditModal showEdit={showEdit} handleEditDoc={handleEditDoc} />
      )}
      <div className={clsx(style.add)} onClick={handleAddDoc}>
        Thêm Docs
      </div>
      <div className={clsx(style.heading)}>
        <div>title</div>
        <div>content</div>
        <div>code</div>
        <div>note</div>
        <div>outPut</div>
        <div>Chức năng</div>
      </div>

      <div className={clsx(style.doc)}>
        {docs.map((doc, index) => (
          <div className={clsx(style.items)} key={doc.id}>
            <div>{doc.title}</div>
            <div>{doc.content}</div>
            <div>{doc.code}</div>
            <div>{doc.note}</div>
            <div>{doc.outPut}</div>
            <div className={clsx(style.options)}>
              <div className={clsx(style.edit)}>
                <FaPen onClick={() => handleEditDoc(doc)} />
              </div>
              <div
                className={clsx(style.delete)}
                onClick={() => handleDeleteDoc(doc.id)}
              >
                <FaTrash />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CodeBlock
