import { Home } from './pages/home'
import './App.css'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <div>
    <Home/>
    <Toaster
      position="top-right"
      toastOptions={{
        style: {
          background: '#211E2E',
          border: '1px solid #C0B7E8',
          color: '#ffffff',
          fontFamily: 'Montserrat, sans-serif',
        },
      }}
    />
    </div>
  )
}

export default App
