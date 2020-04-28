import React, { Component } from 'react'

import headerImg from '../assets/images/home/bg-home-header.png'
import stepLogin from '../assets/images/home/step-login.png'
import stepProblem from '../assets/images/home/step-problem.png'
import stepSolution from '../assets/images/home/step-solution.png'
import benefitImg from '../assets/images/home/bg-benefit.png'

import CheckCircle from '@material-ui/icons/CheckCircle';

class Home extends Component {
    showSignModal = () => {
        const modal = document.getElementById("sign");
        modal.style.display = "flex";
    
        modal.classList.remove("fade-out");
        modal.classList.add("fade-in");
      }

    render() {
        return (
            <div id="home-page">
                <header>
                    <div>
                        <h1>Inovasi Untuk Solusi</h1>
                        <p>The friendly and free way for fans to support your work for the price of a coffee. Get paid directly with 0% fees from Ko-fi.</p>
                        <a href="/permasalahan" className="bt bt-primary">Temukan Permasalahan</a>
                    </div>
                    <img src={headerImg} alt="" />
                </header>
                <main>
                    <div className="home-intro">
                        <h1>Apa itu KawanKKN ?</h1>
                        <p>KawanKKN adalah platform digital yang bertujuan untuk memudahkan mahasiswa dalam menemukan permasalahan, dimana merupakan salah satu unsur penting dalam kegiatan Kuliah Kerja Nyata (KKN). <span>Lalu bagaimana cara kerjanya?</span></p>

                        {/* STEP LIST */}
                        <div className="step-list">
                            <div>
                                <img src={stepLogin} alt="" className="mr-5" />
                                <div>
                                    <span>
                                        <span>1</span>
                                    </span>
                                    <h2>Daftarkan Dirimu!</h2>
                                    <p>
                                        Masuk pada form pendaftaran, dan daftar sebagai <span>mahasiswa</span>, lalu isi data identitas diri dengan sebenar - benarnya. <br /> Bagaimana mendaftar sebagai <span>desa</span>? ikuti tautan <span onClick={() => this.showSignModal()} className="redirect-link">berikut.</span>
                                    </p>
                                    <a className="bt bt-secondary" href="/">Daftar Sekarang</a>
                                </div>
                            </div>
                            <div className="j-end f-reverse">
                                <img src={stepProblem} alt="" className="ml-5" />
                                <div>
                                    <span>
                                        <span>2</span>
                                    </span>
                                    <h2>Lihat Permasalahan</h2>
                                    <p>
                                        Setelah berhasil mendaftar dan masuk, kamu sudah bisa melihat daftar permasalahan pada berbagai daerah yang bisa kamu amati dan temukan solusinya.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <img src={stepSolution} alt="" className="mr-5" />
                                <div>
                                    <span>
                                        <span>3</span>
                                    </span>
                                    <h2>Tawarkan Solusi</h2>
                                    <p>
                                        Jika tertarik untuk menyelesaikan permasalahan, kamu bisa memulai dengan menawarkan solusi kepada kepala daerah tersebut.
                                        Nantinya kamu akan mendapat respon dari kepala daerah tersebut mengenai persetujuan.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* BENEFIT LIST */}
                        <div className="benefit-list f-reverse">
                            <img src={benefitImg} alt="" />
                            <div>
                                <h1>Bagaimana KawanKKN Membantu?</h1>
                                <div>
                                    <CheckCircle style={{ color: '#fc5e63' }} />
                                    <p>
                                        <span>KawanKKN</span> berkomitmen mendukung kegiatan Kuliah Kerja Nyata(KKN) dengan memudahkan insitusi/universitas dan mahasiswa dalam menentukan objek pelaksanaan KKN.
                                    </p>
                                </div>
                                <div>
                                    <CheckCircle style={{ color: '#fc5e63' }} />
                                    <p>
                                        Tidak hanya itu, <span>KawanKKN</span> juga berupaya menjangkau setiap daerah dengan memfasilitasi perangkat desa untuk menceritakan permasalahan yang terjadi di daerahnya,
                                        sehingga mampu membuka peluang adanya bantuan tenaga hingga ide dari institusi ataupun mahasiswa melalui kegiatan Kuliah Kerja Nyata(KKN).
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

export default Home;