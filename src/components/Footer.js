import React from 'react'
import logoImg from '../assets/images/teman-kkn-logo.png'

export default function Footer() {
    return (
        <footer id="footer">
            <div className="footer-logo">
                <img src={logoImg} alt="" />
            </div>

            <div>
                <h6>TemanKKN</h6>
                <a href="https://www.linkedin.com/in/dicky-julian/">Developer</a>
                <a href="https://www.github.com/in/dicky-julian/">Dokumentasi</a>
            </div>

            <div>
                <h6>Tautan</h6>
                <a href="/">Beranda</a>
                <a href="/permasalahan">Permasalahan</a>
            </div>
        </footer>
    )
}