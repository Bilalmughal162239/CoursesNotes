import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import About from '../pages/About'
import HTMLNotesPage from '../pages/HTMLNotesPage'
import Contact from '../pages/Contact'
import NodeNotesPage from '../pages/NodeNotesPage'
import CssNotesPage from '../pages/CssNotesPage'

const Index = () => {
    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='HTMLNotesPage' element={<HTMLNotesPage />} />
                    <Route path='NodeNotesPage' element={<NodeNotesPage />} />
                    <Route path='CssNotesPage' element={<CssNotesPage />} />
                    <Route path='Contact' element={<Contact />} />
                </Routes>
            </main>
            <Footer />
        </>     
    )
}

export default Index