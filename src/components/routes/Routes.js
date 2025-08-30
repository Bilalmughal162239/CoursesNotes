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
import BootstrapNotes from '../pages/BootstrapNotes'
import JavaSceriptNotes from '../pages/JavaSceriptNotes'
import ReactNotesPage from '../pages/ReactNotesPage'
import CPlusNotes from '../pages/CPlusNotes'
import CNotes from '../pages/CNotes'
import PythonNotes from '../pages/PythonNotes'
import HTMLQuize from '../pages/Quizes/HTMLQuize'
import CSSQuiz from '../pages/Quizes/CSSQuize'
import JSQuize from '../pages/Quizes/JSQuize'
import BootstrapQuize from '../pages/Quizes/BootstrapQuize'
import NotFoundPage from '../pages/NotFoundPage'

const Index = () => {
    return (
        <Routes>
            <Route path='*' element={<>
                <Header />
                <main>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='about' element={<About />} />
                        <Route path='HTMLNotesPage' element={<HTMLNotesPage />} />
                        <Route path='NodeNotesPage' element={<NodeNotesPage />} />
                        <Route path='CssNotesPage' element={<CssNotesPage />} />
                        <Route path='BootstrapNotes' element={<BootstrapNotes />} />
                        <Route path='JavaSceriptNotes' element={<JavaSceriptNotes />} />
                        <Route path='ReactNotesPage' element={<ReactNotesPage />} />
                        <Route path='CppNotesPage' element={<CPlusNotes />} />
                        <Route path='CLanguageNotes' element={<CNotes />} />
                        <Route path='PythonNotes' element={<PythonNotes />} />
                        {/* Quizes routes */}
                        <Route path='quize-html' element={<HTMLQuize />} />
                        <Route path='quize-css' element={<CSSQuiz />} />
                        <Route path='quize-bootstrap' element={<BootstrapQuize />} />
                        <Route path='quize-js' element={<JSQuize />} />
                        <Route path='Contact' element={<Contact />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </main>
                <Footer />
            </>
            } />

        </Routes>
    )
}

export default Index