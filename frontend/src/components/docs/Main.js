import React from 'react'
import Nav from '../comman/Nav'
import Docs from './Docs'

const Main = ({ theme, onThemeChange }) => {
    return (
        <>
            <Nav theme={theme} onThemeChange={onThemeChange} />
            <Docs />
        </>
    )
}

export default Main