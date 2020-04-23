import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Error404 extends Component {
    componentDidMount() {
        const footer = document.getElementsByTagName("footer")[0];
        footer.parentNode.removeChild(footer);
    }

    render() {
        return (
            <div className="container">
                <h1>404</h1>
                <p>
                    <Link to="/">Bapak mana</Link> Oye Oye
                </p>
            </div>
        )
    }
}

export default Error404;