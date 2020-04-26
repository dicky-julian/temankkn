import React, { Component } from 'react'

import ExampleImg from '../assets/images/example.jpg'
// import Search from '@material-ui/icons/Search';
import Add from '@material-ui/icons/Add';
import Calendar from '@material-ui/icons/CalendarToday';
import CloseIcon from '@material-ui/icons/Close';

class Permasalahan extends Component {
    closeModal = () => {
        const modal = document.getElementById("add-solusi");

        modal.classList.remove("fade-in");
        modal.classList.add("fade-out");

        setTimeout(function () {
            modal.style.display = "none"
        }, 500)
    }

    showModal = () => {
        const modal = document.getElementById("add-solusi");

        modal.style.display = "flex"
        modal.classList.remove("fade-out");
        modal.classList.add("fade-in");
    }

    render() {
        return (
            <div id="permasalahan-page">
                <div className="search">
                    <div className="search-title">
                        <h2>Temukan Permasalahan</h2>
                        <h4><span>144</span> hasil ditampilkan</h4>
                    </div>
                </div>
                <div className="permasalahan-list">
                    {/* 1 */}
                    <div>
                        <div className="img" style={{ backgroundImage: `url(${ExampleImg})` }}></div>
                        <div className="list-content">
                            <span className="bt bt-secondary">Malang - Jawa Timur</span>
                            <a href="/">Minimnya Aksi Dalam Pengelolaan Gabah</a>
                            <div className="action">
                                <div className="date">
                                    <Calendar style={{ color: 'rgb(144, 144, 144)', fontSize: '15px', margin: '0 8px -1.5px 0' }} />
                                    <p>12 Jan</p>
                                </div>
                                <button className="bt bt-primary" onClick={() => this.showModal()}><Add style={{ fontSize: '15px', margin: '0 8px 1px 0' }} /> Beri Solusi</button>
                            </div>
                        </div>
                    </div>
                    {/* 2 */}
                    <div>
                        <div className="img" style={{ backgroundImage: `url(${ExampleImg})` }}></div>
                        <div className="list-content">
                            <span className="bt bt-secondary">Malang - Jawa Timur</span>
                            <a href="/">Minimnya Aksi Dalam Pengelolaan Gabah</a>
                            <div className="action">
                                <div className="date">
                                    <Calendar style={{ color: 'rgb(144, 144, 144)', fontSize: '15px', margin: '0 8px -1.5px 0' }} />
                                    <p>12 Jan</p>
                                </div>
                                <button className="bt bt-primary" onClick={() => this.showModal()}><Add style={{ fontSize: '15px', margin: '0 8px 1px 0' }} /> Beri Solusi</button>
                            </div>
                        </div>
                    </div>
                    {/* 3 */}
                    <div>
                        <div className="img" style={{ backgroundImage: `url(${ExampleImg})` }}></div>
                        <div className="list-content">
                            <span className="bt bt-secondary">Malang - Jawa Timur</span>
                            <a href="/">Minimnya Aksi Dalam Pengelolaan Gabah</a>
                            <div className="action">
                                <div className="date">
                                    <Calendar style={{ color: 'rgb(144, 144, 144)', fontSize: '15px', margin: '0 8px -1.5px 0' }} />
                                    <p>12 Jan</p>
                                </div>
                                <button className="bt bt-primary" onClick={() => this.showModal()}><Add style={{ fontSize: '15px', margin: '0 8px 1px 0' }} /> Beri Solusi</button>
                            </div>
                        </div>
                    </div>
                    {/* 4 */}
                    <div>
                        <div className="img" style={{ backgroundImage: `url(${ExampleImg})` }}></div>
                        <div className="list-content">
                            <span className="bt bt-secondary">Malang - Jawa Timur</span>
                            <a href="/">Minimnya Aksi Dalam Pengelolaan Gabah</a>
                            <div className="action">
                                <div className="date">
                                    <Calendar style={{ color: 'rgb(144, 144, 144)', fontSize: '15px', margin: '0 8px -1.5px 0' }} />
                                    <p>12 Jan</p>
                                </div>
                                <button className="bt bt-primary" onClick={() => this.showModal()}><Add style={{ fontSize: '15px', margin: '0 8px 1px 0' }} /> Beri Solusi</button>
                            </div>
                        </div>
                    </div>
                    {/* 5 */}
                    <div>
                        <div className="img" style={{ backgroundImage: `url(${ExampleImg})` }}></div>
                        <div className="list-content">
                            <span className="bt bt-secondary">Malang - Jawa Timur</span>
                            <a href="/">Minimnya Aksi Dalam Pengelolaan Gabah</a>
                            <div className="action">
                                <div className="date">
                                    <Calendar style={{ color: 'rgb(144, 144, 144)', fontSize: '15px', margin: '0 8px -1.5px 0' }} />
                                    <p>12 Jan</p>
                                </div>
                                <button className="bt bt-primary" onClick={() => this.showModal()}><Add style={{ fontSize: '15px', margin: '0 8px 1px 0' }} /> Beri Solusi</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="load-more">
                    <button type="button" className="bt bt-default">Lihat Lebih Banyak</button>
                </div>

                <div id="add-solusi" style={{ display: 'none' }}>
                    <div className="bg-fade"></div>
                    <div className="form">
                        <div><CloseIcon onClick={() => this.closeModal()} /></div>
                        <form>
                            <label>Deskripsi Solusi</label>
                            <textarea rows="5" cols="50"></textarea>
                            <label>Waktu Pelaksanaan</label>
                            <input type="date" required="required" />
                            <button className="bt bt-primary" type="submit">Kirim</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Permasalahan;