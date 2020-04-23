import React, { Component } from 'react';
import HeaderImg from '../assets/images/permasalahan/bg-permasalahan-add.png'
import Image from '@material-ui/icons/Image';

class FormPermasalahan extends Component {
    componentDidMount() {
        document.getElementById('button-input-file').onclick = function() {
            document.getElementById('input-file').click();
        };
    }

    render() {
        return (
            <div id="form-permasalahan">
                <div className="form-header">
                    <div>
                        <h1>Ceritakan Permasalahan Dengan Mudah</h1>
                        <p>
                            Hanya beberapa langkah untuk menyelesaikan permasalahan.
                        </p>
                    </div>
                    <img src={HeaderImg} />
                </div>
                <form>
                    <div>
                        <div className="input-container">
                            <span>1</span>
                            <div>
                                <h6>Tuliskan Nama Desa</h6>
                                <input type="text" placeholder="Contoh : KedungKandang" value="Kedungkandang"/>
                            </div>
                        </div>
                        <hr/>
                        <div className="input-container">
                            <span>2</span>
                            <div>
                                <h6>Tuliskan Judul Permasalahan</h6>
                                <input type="text" placeholder="Contoh : Minimnya Cara Untuk Mendaur Ulang Sampah Plastik" />
                            </div>
                        </div>
                        <hr/>
                        <div className="input-container">
                            <span>3</span>
                            <div>
                                <h6>Tuliskan Deskripsi Permasalahan</h6>
                                <textarea placeholder="Deskripsi ..." rows="5" cols="50"/>
                            </div>
                        </div>
                        <button className="bt-secondary-reverse" style={{ float: 'right' }}>Kirim</button>
                    </div>
                    <div>
                        <div className="input-image">
                            <span>4</span>
                            <h6>Tambahkan Gambar</h6>
                            <button type="button" className="bt-secondary-reverse" id="button-input-file"><Image /> Upload Image</button>
                            <input type="file" id="input-file"/>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default FormPermasalahan;