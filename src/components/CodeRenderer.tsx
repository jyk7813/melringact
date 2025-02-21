interface CodeRendererProps {
  code: string
}

const CodeRenderer = ({ code }: CodeRendererProps) => {
  // code를 문자열로 안전하게 처리
  const processedCode = code.replace(/`/g, '\\`').replace(/\$/g, '\\$')

  return (
    <div className="w-5/12 h-full">
      <div className="bg-gray-100 p-2 mb-2 rounded">
        <h3 className="text-lg font-bold">실행 결과</h3>
      </div>
      <iframe
        className="w-full h-[70vh] border-none bg-white rounded shadow"
        srcDoc={`
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { 
                  margin: 0;
                  padding: 16px;
                  font-family: sans-serif;
                }
              </style>
              <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
              <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
              <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
            </head>
            <body>
              <div id="root"></div>
              <script>
                // Babel 설정
                Babel.registerPreset('custom', {
                  presets: [
                    [Babel.availablePresets['react']],
                    [Babel.availablePresets['env']]
                  ]
                });
              </script>
              <script type="text/babel" data-presets="custom">
                try {
                  ${processedCode}
                  
                  const root = ReactDOM.createRoot(document.getElementById('root'));
                  if (typeof App !== 'undefined') {
                    root.render(React.createElement(App));
                  } else {
                    throw new Error('App 컴포넌트를 찾을 수 없습니다.');
                  }
                } catch (error) {
                  document.body.innerHTML = '<pre style="color: red;">' + error + '</pre>';
                }
              </script>
            </body>
          </html>
        `}
        sandbox="allow-scripts"
      />
    </div>
  )
}

export default CodeRenderer
