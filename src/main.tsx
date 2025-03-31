import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { PayrollProvider } from './lib/contexts/PayrollContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PayrollProvider>
      <App />
    </PayrollProvider>
  </StrictMode>,
)