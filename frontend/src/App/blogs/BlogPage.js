import React from 'react'
import Nav from '../../components/comman/Nav'
import Blogs from './Blogs'

const BlogPage = ({ theme, onThemeChange }) => {
    return (
        <>
            <Nav theme={theme} onThemeChange={onThemeChange} />
            <Blogs />
        </>
    )
}

export default BlogPage