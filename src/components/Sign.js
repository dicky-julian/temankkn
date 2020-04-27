import React, { Component } from 'react';
import CloseIcon from '@material-ui/icons/Close';

class Sign extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            status: '',
            mahasiswa: {
                nama: '',
                universitas: ''
            },
            desa: {
                nama: '',
                alamat: ''
            }
        }
    }

    closeModal = () => {
        const modal = document.getElementById("sign");
        const selectStatus = document.getElementById("select-status");

        modal.classList.remove("fade-in");
        modal.classList.add("fade-out");

        // restart all properties
        selectStatus.classList.remove("fade-out");
        selectStatus.classList.add("fade-in");

        this.restartModal();

        setTimeout(function () {
            modal.style.display = "none"
        }, 500)
    }

    restartModal = () => {
        const signUpMahasiswa = document.getElementById("signup-mahasiswa");
        const signUpDesa = document.getElementById("signup-desa");
        const signIn = document.getElementById("signin");

        signUpMahasiswa.classList.remove("fade-in");
        signUpDesa.classList.remove("fade-in");
        signIn.classList.remove("fade-in");
        signUpMahasiswa.classList.remove("fade-out");
        signUpDesa.classList.remove("fade-out");
        signIn.classList.remove("fade-out");
    }

    startModal = () => {
        const selectStatus = document.getElementById("select-status");
        this.restartModal();
        selectStatus.classList.remove("fade-in");
        selectStatus.classList.remove("fade-out");

        setTimeout(function () {
            selectStatus.classList.add("fade-in");
        }, 500)
    }

    selectStatus = (status) => {
        const selectStatus = document.getElementById("select-status");
        const signUpMahasiswa = document.getElementById("signup-mahasiswa");
        const signUpDesa = document.getElementById("signup-desa");
        const signIn = document.getElementById("signin");

        this.restartModal();
        selectStatus.classList.remove("fade-in");
        selectStatus.classList.remove("fade-out");
        selectStatus.classList.add("fade-out");

        setTimeout(function () {
            selectStatus.style.display = "none";

            if (status === "mahasiswa") {
                signUpMahasiswa.classList.add("fade-in");
            } else if (status === "desa") {
                signUpDesa.classList.add("fade-in");
            } else {
                signIn.classList.add("fade-in");
            }
        }, 500)
    }

    render() {
        return (
            <div id="sign" style={{ display: 'none' }}>
                <div className="bg-fade"></div>
                <div className="form">
                    <div><CloseIcon onClick={() => this.closeModal()} /></div>

                    {/* select status */}
                    <div id="select-status" className="fade-in" style={{ display: 'flex' }}>
                        <button className="bt bt-primary" onClick={() => this.selectStatus("mahasiswa")}>Daftar sebagai Mahasiswa</button>
                        <hr className="divider"></hr>
                        <button className="bt bt-blue" onClick={() => this.selectStatus("desa")}>Daftar sebagai Desa</button>
                        <h6>Sudah punya akun? <span onClick={() => this.selectStatus("signin")}>Masuk</span></h6>
                    </div>

                    {/* signup mahasiswa */}
                    <form id="signup-mahasiswa" className="form-sign">
                        <h2>Registrasi Mahasiswa</h2>
                        <div>
                            <div>
                                <label>Nama Lengkap</label>
                                <input type="text" />
                            </div>
                            <div>
                                <label>Asal Universitas</label>
                                <input type="text" />
                            </div>
                        </div>

                        <label>Alamat Email</label>
                        <input type="email" />

                        <label>Password</label>
                        <input type="password" autoComplete="true" />

                        <button className="bt bt-primary daftar" type="submit">Daftar</button>
                        <hr className="divider"></hr>
                        <button type="button" className="bt bt-blue" onClick={() => this.selectStatus("signin")}>Masuk</button>
                    </form>

                    {/* signup desa */}
                    <form id="signup-desa" className="form-sign">
                        <h2>Registrasi Desa</h2>
                        <div>
                            <div>
                                <label>Nama Desa</label>
                                <input type="text" />
                            </div>
                            <div>
                                <label>Alamat Desa</label>
                                <input type="text" />
                            </div>
                        </div>

                        <label>Alamat Email</label>
                        <input type="email" />

                        <label>Password</label>
                        <input type="password" autoComplete="true" />

                        <button className="bt bt-primary daftar" type="submit">Daftar</button>
                        <hr className="divider"></hr>
                        <button type="button" className="bt bt-blue" onClick={() => this.selectStatus("signin")}>Masuk</button>
                    </form>

                    {/* login */}
                    <form id="signin" className="form-sign">
                        <h2>Autentikasi Masuk</h2>

                        <label>Alamat Email</label>
                        <input type="email" />

                        <label>Password</label>
                        <input type="password" autoComplete="true" />

                        <button className="bt bt-primary daftar" type="submit">Masuk</button>
                        <hr className="divider"></hr>
                        <button type="button" className="bt bt-blue" onClick={() => this.startModal()}>Daftar</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Sign;