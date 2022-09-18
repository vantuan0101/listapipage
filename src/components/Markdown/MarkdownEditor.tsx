import React from 'react'
import MarkdownIt from 'markdown-it'
import MdEditor from 'react-markdown-editor-lite'
// import style manually
import 'react-markdown-editor-lite/lib/index.css'
interface IProps {
  value?: string 
  handleEditorChange({ html, text }: { html: string; text: string }): void
}
const MarkdownEditor = ({ value, handleEditorChange }: IProps) => {
  const mdParser = new MarkdownIt(/* Markdown-it options */)

  return (
    <MdEditor
      value={value}
      style={{ height: '500px' }}
      renderHTML={(text) => mdParser.render(text)}
      onChange={handleEditorChange}
    />
  )
}

export default MarkdownEditor
