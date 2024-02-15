import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app'
import { Toaster } from 'sonner'
import './index.css'
import { Header } from './components/header'
import Footer from './components/footer'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
    <Toaster richColors/>
  </React.StrictMode>,
)
