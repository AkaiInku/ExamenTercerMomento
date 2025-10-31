import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Examen Tercer Momento</h1>
          <p>Proyecto React con Vite</p>
        </header>
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

function Home() {
  return (
    <div className="home">
      <h2>Página de Inicio</h2>
      <p>Bienvenido al proyecto React</p>
    </div>
  )
}

export default App
