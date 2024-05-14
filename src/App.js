import React from 'react'
import './App.css'
// This is an import based off the index.js file within the Components folder
import { Navbar, Brand, CTA } from './components';
import { Footer, Blog, Possibility, Features, WhatFGProject, Header } from './containers';

const App = () => {
    return (
        <div className='App'>
            <div className='gradient__bg'>
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatFGProject />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </div>
    )
}

export default App
