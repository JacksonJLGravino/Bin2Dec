import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Bin2Dec from './Bin2Dec'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Bin2Dec />
  </StrictMode>,
)
