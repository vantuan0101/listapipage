import React, { useEffect, useState } from 'react'
import { FaPen, FaTrash } from 'react-icons/fa'
import docsApi from '../../../../api/docsApi'
import { IDocsResult } from '../../Docs/interface'
import style from './adminproduct.module.scss'
import clsx from 'clsx'
import EditModal from './EditModal'
import AddModal from './AddModal'
const AdminProducts = () => {
  const [docList, setDocList] = useState<IDocsResult[]>([])
  const [showEdit, setShowEdit] = useState({
    status: false,
    data: null,
  })
  const [showAdd, setShowAdd] = useState({
    status: false,
    data: null,
  })
  useEffect(() => {
    const result = async () => {
      try {
        const res = await docsApi.getAll()
        // console.log(res.data);
        setDocList(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    result()
  }, [])
  const handleAddDoc = () => {
    setShowAdd((prev) => ({ ...prev, status: !prev.status }))
  }
  const handleEditDoc = (doc: any) => {
    setShowEdit((prev) => ({
      status: !prev.status,
      data: doc,
    }))
    // setCurrentDoc(Doc)
  }
  const handleDeleteDoc = (id: number) => {
    const result = async () => {
      try {
        await docsApi.delete(id)
        alert('Delete success')
        window.location.reload()
      } catch (error) {
        console.log(error)
      }
    }
    result()
  }
  return (
    <>
      <div className={clsx(style.main)}>
        <div
          className={clsx(
            style.modal,
            showAdd.status || showEdit.status ? style.isShow : ''
          )}
          // onClick={handleClickAddDoc}
        ></div>
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
          <div>icon</div>
          <div>name</div>
          <div>title</div>
          <div>desc</div>
          <div>slug</div>
          <div>Chức năng</div>
        </div>

        <div className={clsx(style.doc)}>
          {docList.map((doc, index) => (
            <div className={clsx(style.items)} key={doc.id}>
              <div>{doc.icon}</div>
              <div>{doc.name}</div>
              <div>{doc.title}</div>
              <div>{doc.desc}</div>
              <div>{doc.slug}</div>
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
    </>
  )
}

export default AdminProducts
