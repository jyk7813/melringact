import './App.css'
import Header from './components/Header'
import Play from './pages/Play'
function App() {
  return (
    <div className="h-dvh flex flex-col">
      <Header />
      <div className="flex-1 px-10">
        <Play />
      </div>
    </div>
  )
}

export default App
