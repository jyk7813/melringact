interface CodeRendererProps {
  code: string
}
const CodeRenderer = ({ code }: CodeRendererProps) => {
  return (
    <div className="w-5/12 h-full">
      <iframe>{code}</iframe>
    </div>
  )
}

export default CodeRenderer
