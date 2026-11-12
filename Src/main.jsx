import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Monta la aplicación de Verona Cake Shop en el contenedor #root de index.html
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
