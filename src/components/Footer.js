import React from 'react'
import logoImg from '../assets/images/teman-kkn-logo.webp'

export default function Footer() {
    return (
        <footer id="footer">
            <div className="footer-logo">
                <img src={logoImg} alt="" />
            </div>

            <div>
                <h6>KawanKKN</h6>
                <a href="https://www.linkedin.com/in/dicky-julian/">Developer</a>
                <a href="https://github.com/dicky-julian/temankkn">Dokumentasi</a>
            </div>

            <div>
                <h6>Tautan</h6>
                <a href="/">Beranda</a>
                <a href="/permasalahan">Permasalahan</a>
            </div>
        </footer>
    )
}