import React, { Component } from 'react';

class Error404 extends Component {
    componentDidMount() {
        const footer = document.getElementsByTagName("footer")[0];
        footer.parentNode.removeChild(footer);
    }

    render() {
        return (
            <div id="error404">
                <h1>404</h1>
                <a href="/" className="bt bt-primary">Kembali ke beranda</a>
            </div>
        )
    }
}

export default Error404;