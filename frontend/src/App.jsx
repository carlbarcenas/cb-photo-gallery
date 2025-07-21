import './App.css'
import Gallery from './components/Gallery'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <>
        <header>
          <h1>CB Photography</h1>
          <p>All shots captured using the Fujifilm X100VI</p>
        </header>
        <div className='main'>
          <Sidebar />
          <Gallery />
        </div>
    </>
  )
}

export default App
