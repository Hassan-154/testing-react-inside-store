import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('react-app-modal-for-size')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
