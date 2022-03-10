import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// pages
import Profil from './pages/Profil'
import Home from './pages/Accueil'
// Components
import Header from './components/Header'
import SideBar from './components/SideBar'
// CSS
import './index.scss'
ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Header />
            <SideBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profil/:id" element={<Profil />} />
            </Routes>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
