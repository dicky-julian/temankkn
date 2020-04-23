import React from 'react'
import logoImg from '../assets/images/teman-kkn-logo.png'

export default function Footer() {
    return (
        <footer>
            <div className="footer-logo">
                <img src={logoImg} alt="" />
            </div>

            <div>
                <h6>TemanKKN</h6>
                <a href="">Developer</a>
                <a href="">Dokumentasi</a>
            </div>

            <div>
                <h6>Tautan</h6>
                <a href="">Beranda</a>
                <a href="">Permasalahan</a>
                <a href="">Artikel</a>
            </div>
        </footer>
    )
}