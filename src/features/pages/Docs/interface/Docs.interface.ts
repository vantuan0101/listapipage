export interface IDocsResult {
  id: number
  icon: string
  name: string
  title: string
  desc: string
  slug: string
  createAt: Date
  updateAt: Date
  CodeBlock: ICodeBlock[]
}
export interface ICodeBlock extends IDocsResult {
  DocsId: number
  note: string | null
  outPut: string
  content: string
  code: string
}
