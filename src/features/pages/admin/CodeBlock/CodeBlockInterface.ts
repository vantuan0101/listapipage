export interface ICodeBlock {
  id: number
  icon: string
  title: string
  slug: string
  content: string
  code: string
  note: string
  outPut: string
  DocsId: number
}
export interface IShowEdit {
  status: boolean
  data: {
    id: number | null
    icon: string | null
    title: string | null
    slug: string | null
    content: string | null
    code: string | null
    note: string | null
    outPut: string | null
    DocsId: number | null
  }
}
