import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import About from '../pages/About'
import HTMLNotesPage from '../pages/HTMLNotesPage'

const Index = () => {
    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='HTMLNotesPage' element={<HTMLNotesPage />} />
                </Routes>
            </main>
            <Footer />
        </>     
    )
}

export default Index