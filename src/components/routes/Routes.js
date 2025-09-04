import React from 'react'
import { Route, Routes } from 'react-router-dom'
// other routes
import Home from '../pages/Home'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import About from '../pages/About'
import Contact from '../pages/Contact'
import NotFoundPage from '../pages/NotFoundPage'
// notes routes
import HTMLNotesPage from '../pages/notes/HTMLNotesPage'
import NodeNotesPage from '../pages/notes/NodeNotesPage'
import CssNotesPage from '../pages/notes/CssNotesPage'
import BootstrapNotes from '../pages/notes/BootstrapNotes'
import JavaSceriptNotes from '../pages/notes/JavaSceriptNotes'
import ReactNotesPage from '../pages/notes/ReactNotesPage'
import CPlusNotes from '../pages/notes/CPlusNotes'
import CNotes from '../pages/notes/CNotes'
import PythonNotes from '../pages/notes/PythonNotes'
// Quize routes
import HTMLQuize from '../pages/Quizes/HTMLQuize'
import CSSQuiz from '../pages/Quizes/CSSQuize'
import JSQuize from '../pages/Quizes/JSQuize'
import BootstrapQuize from '../pages/Quizes/BootstrapQuize'
import CQuize from '../pages/Quizes/CQuize'
import ReactQuize from '../pages/Quizes/ReactQuize'
import CppQuize from '../pages/Quizes/CppQuize'
import NodeQuize from '../pages/Quizes/NodeQuize'
import PytonQuize from '../pages/Quizes/PytonQuize'
// Auth routes
import AdmissionPage from '../pages/auth/AdmissionPage'

const Index = () => {
    return (
        <Routes>
            <Route path='*' element={<>
                <Header />
                <main>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        {/* Courses routes */}
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
                        <Route path='quize-c-language' element={<CQuize />} />
                        <Route path='quize-react' element={<ReactQuize />} />
                        <Route path='quize-cpp' element={<CppQuize />} />
                        <Route path='quize-python' element={<PytonQuize />} />
                        <Route path='quize-node' element={<NodeQuize />} />
                        {/* Auth routes */}
                        <Route path='admissionpage' element={<AdmissionPage />} />
                        {/* other routes */}
                        <Route path='about' element={<About />} />
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