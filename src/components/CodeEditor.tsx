interface CodeEditorProps {
  code: string
  setCode: (code: string) => void
}
const CodeEditor = ({ code, setCode }: CodeEditorProps) => {
  return (
    <textarea
      className="w-5/12 h-full resize-none"
      value={code}
      onChange={(e) => setCode(e.target.value)}
    ></textarea>
  )
}

export default CodeEditor
