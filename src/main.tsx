import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route } from "react-router-dom"
import App from './App.tsx'
import './index.css'
import "flowbite"
import Servicos from './components/ui/services.tsx'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);