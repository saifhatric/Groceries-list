import React from 'react'

const Footer = () => {
    const year = new Date()
    return (
        <footer>
            <h1>All Rights Reservsed &copy; {year.getFullYear()}</h1>
        </footer>
    )
}

export default Footer;