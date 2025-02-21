import Editor, { loader } from '@monaco-editor/react'
import * as monaco from 'monaco-editor'
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'
import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker'
import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker'
import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker'
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker'
import { useEffect, useRef } from 'react'

const DEFAULT_REACT_CODE = `const App = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>React Counter</h1>
      <p>Count: {count}</p>
      <button 
        onClick={() => setCount(count + 1)}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer'
        }}
      >
        Increment
      </button>
    </div>
  );
}`

interface CodeEditorProps {
  code: string
  setCode: (code: string) => void
}

const CodeEditor = ({ code, setCode }: CodeEditorProps) => {
  const editorRef = useRef<any>(null)

  useEffect(() => {
    if (!code) {
      setCode(DEFAULT_REACT_CODE)
    }
  }, [])

  useEffect(() => {
    // Worker 설정은 한 번만 실행되어야 합니다
    self.MonacoEnvironment = {
      getWorker(_, label) {
        if (label === 'json') {
          return new jsonWorker()
        }
        if (label === 'css' || label === 'scss' || label === 'less') {
          return new cssWorker()
        }
        if (label === 'html' || label === 'handlebars' || label === 'razor') {
          return new htmlWorker()
        }
        if (label === 'typescript' || label === 'javascript') {
          return new tsWorker()
        }
        return new editorWorker()
      },
    }

    loader.config({ monaco })
    loader.init()
  }, [])

  const handleEditorDidMount = (editor: any) => {
    editorRef.current = editor
  }

  const handleEditorChange = (value: string | undefined) => {
    if (value) setCode(value)
  }

  return (
    <div className="w-5/12 h-full">
      <Editor
        height="70vh"
        defaultLanguage="javascript"
        value={code}
        theme="vs-dark"
        onMount={handleEditorDidMount}
        onChange={handleEditorChange}
        options={{
          minimap: { enabled: false },
          fontSize: 16,
          lineNumbers: 'on',
          roundedSelection: false,
          scrollBeyondLastLine: false,
          readOnly: false,
          automaticLayout: true,
        }}
      />
    </div>
  )
}

export default CodeEditor
