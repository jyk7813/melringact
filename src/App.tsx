import './App.css'
import Header from './components/Header'
import Play from './pages/Play'
function App() {

  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <div className='flex-1 h-full bg-blue-500 px-10'>
        <Play />
      </div>
    </div>
  )
}

export default App
