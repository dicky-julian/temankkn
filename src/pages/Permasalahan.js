import React from 'react'

import ExampleImg from '../assets/images/example.jpg'
// import Search from '@material-ui/icons/Search';
import Add from '@material-ui/icons/Add';
import Calendar from '@material-ui/icons/CalendarToday';

export default function Permasalahan() {
    return (
        <div id="permasalahan-page">
            <div className="search">
                <div className="search-title">
                    <h2>Temukan Permasalahan</h2>
                    <h4><span>144</span> hasil ditampilkan</h4>
                </div>
                {/* <div className="search-input">
                    <div className="input-container">
                        <Search style={{ fontSize: '1.25em', color: '#6e6d7a', margin: '.75em' }} />
                        <form>
                            <input placeholder="Temukan permasalahan ..." />
                            <button className="bt bt-primary">Cari</button>
                        </form>
                    </div>
                </div> */}
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
                                <Calendar style={{color: 'rgb(144, 144, 144)', fontSize: '15px', margin: '0 8px -1.5px 0'}} />
                                <p>12 Jan</p>
                            </div>
                            <a href="/permasalahan/id/solusi" className="bt bt-primary"><Add style={{ fontSize: '15px', margin: '0 8px 1px 0'  }} /> Beri Solusi</a>
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
                                <Calendar style={{color: 'rgb(144, 144, 144)', fontSize: '15px', margin: '0 8px -1.5px 0'}} />
                                <p>12 Jan</p>
                            </div>
                            <a href="/permasalahan/id/solusi" className="bt bt-primary"><Add style={{ fontSize: '15px', margin: '0 8px 1px 0'  }} /> Beri Solusi</a>
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
                                <Calendar style={{color: 'rgb(144, 144, 144)', fontSize: '15px', margin: '0 8px -1.5px 0'}} />
                                <p>12 Jan</p>
                            </div>
                            <a href="/permasalahan/id/solusi" className="bt bt-primary"><Add style={{ fontSize: '15px', margin: '0 8px 1px 0'  }} /> Beri Solusi</a>
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
                                <Calendar style={{color: 'rgb(144, 144, 144)', fontSize: '15px', margin: '0 8px -1.5px 0'}} />
                                <p>12 Jan</p>
                            </div>
                            <a href="/permasalahan/id/solusi" className="bt bt-primary"><Add style={{ fontSize: '15px', margin: '0 8px 1px 0'  }} /> Beri Solusi</a>
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
                                <Calendar style={{color: 'rgb(144, 144, 144)', fontSize: '15px', margin: '0 8px -1.5px 0'}} />
                                <p>12 Jan</p>
                            </div>
                            <a href="/permasalahan/id/solusi" className="bt bt-primary"><Add style={{ fontSize: '15px', margin: '0 8px 1px 0'  }} /> Beri Solusi</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="load-more">
                <button type="button" className="bt bt-default">Lihat Lebih Banyak</button>
            </div>
        </div>
    )
}