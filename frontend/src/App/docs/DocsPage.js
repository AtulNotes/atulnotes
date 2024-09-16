import React from 'react'
import Nav from '../../components/comman/Nav'
import Docs from './Docs'

const DocsPage = ({ theme, onThemeChange }) => {
    return (
        <>
            <Nav theme={theme} onThemeChange={onThemeChange} />
            <Docs />
        </>
    )
}

export default DocsPage