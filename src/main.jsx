import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home.jsx'
import EditarProdutos from './routes/EditarProdutos.jsx'
import Produtos from './routes/Produtos.jsx'
import Erro404 from './routes/Erro404.jsx'
 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
  <App/>
    
  </React.StrictMode>,
)

