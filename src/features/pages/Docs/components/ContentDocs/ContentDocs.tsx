import clsx from 'clsx'
import rehypeRaw from 'rehype-raw'
import { IDocsResult } from '../../interface'
import style from './contentdocs.module.scss'

import ReactMarkdown from 'react-markdown'
import SyntaxHighlight from '../../../../../components/SyntaxHighlight'
import { useState } from 'react'
import { FaCaretRight } from 'react-icons/fa'
const ContentDocs = ({ data }: { data: IDocsResult | undefined }) => {
  const [showOutput, setShowOutput] = useState(false)
  const handleShowOutput = () => {
    setShowOutput(!showOutput)
  }
  return (
    <div className={clsx(style.docs)}>
      <div className={clsx(style.container)}>
        <div className={clsx(style.intro)}>
          <h1 className={clsx(style.intro_heading)}>
            <div className={clsx(style.header_anchor)}>#</div>
            {data?.title}
          </h1>
          <p className={clsx(style.intro_dsc)}>{data?.desc}</p>
        </div>

        {data?.CodeBlock.map((item) => {
          return (
            <div
              key={item.id}
              className={clsx(style.items)}
              id={`${item?.slug}`}
            >
              <h3 className={clsx(style.items_h)}>
                <div className={clsx(style.header_anchor)}>#</div>
                {item.title}
              </h3>
              <p className={clsx(style.items_content)}>{item.content}</p>

              <ReactMarkdown
                rehypePlugins={[rehypeRaw]}
                // remarkPlugins={[remarkGfm]}
                children={item.code}
                components={SyntaxHighlight}
              />

              <div
                className={clsx(style.items_show)}
                onClick={() => handleShowOutput()}
              >
                <summary>
                  <FaCaretRight
                    style={{
                      transform: showOutput ? 'rotateZ(90deg)' : undefined,
                    }}
                  />
                  Click me to view an example of API response
                </summary>
                {showOutput && (
                  <>
                    <ReactMarkdown
                      rehypePlugins={[rehypeRaw]}
                      // remarkPlugins={[remarkGfm]}
                      children={item.outPut}
                      components={SyntaxHighlight}
                    />
                  </>
                )}
              </div>
              {item.note && (
                <div className={clsx(style.items_note)}>
                  <p className={clsx(style.items_note_title)}>✏️ NOTE</p>
                  <p>{item.note}</p>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ContentDocs
