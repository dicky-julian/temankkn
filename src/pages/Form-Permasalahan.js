import React, { Component } from 'react';
import { database, storage, session, addressSession } from '../config';

import HeaderImg from '../assets/images/permasalahan/bg-permasalahan-add.png'
import Image from '@material-ui/icons/Image';

class FormPermasalahan extends Component {
    constructor(props) {
        super(props);

        this.state = {
            imageAsFile: '',
            month: [
                'Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Ags', 'Sep', 'Okt', 'Nov', 'Dev'
            ]
        }
    }

    handleImageAsFile = (e) => {
        const image = e.target.files[0];
        console.log(image);
        this.setState({imageAsFile: image});
    }

    createPermasalahan = (e) => {
        e.preventDefault();

        const imageAsFile = this.state.imageAsFile;
        const address = this.refs.address.value;
        const title = this.refs.title.value;
        const description = this.refs.description.value;

        if (imageAsFile === '') {
            console.error('not an image')
        }

        const timeNow = new Date().getTime();
        const uploadTask = storage.ref(`/images/${timeNow}/${imageAsFile.name}`).put(imageAsFile);

        uploadTask.on('state_changed',
            (snapshot) => {
                console.log(snapshot)
            }, (err) => {
                console.log(err)
            }, () => {
                storage.ref(`/images/${timeNow}`).child(imageAsFile.name).getDownloadURL()
                    .then(firebaseUrl => {
                        if (!address || !title || !description) {
                            console.log('data tidak boleh kosong');
                            return '';
                        }
                
                        database.ref('problems/' + session + timeNow).set({
                            title: title,
                            description: description,
                            imgSource: firebaseUrl,
                            idUser: session,
                            address: address,
                            date: `${new Date().getDate()} ${this.state.month[new Date().getMonth()]}`,
                            status: 1
                        })


                    }).catch(function (error) {
                        console.log(error);
                    }) 
            }
        )
    }

    componentDidMount() {
        document.getElementById('button-input-file').onclick = function () {
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
                    <img src={HeaderImg} alt="" />
                </div>
                <form onSubmit={this.createPermasalahan}>
                    <div>
                        <div className="input-container">
                            <span>1</span>
                            <div>
                                <h6>Alamat Desa</h6>
                                <input type="text" placeholder="Contoh : KedungKandang" value={addressSession} ref="address" disabled />
                            </div>
                        </div>
                        <hr />
                        <div className="input-container">
                            <span>2</span>
                            <div>
                                <h6>Tuliskan Judul Permasalahan</h6>
                                <input type="text" placeholder="Contoh : Minimnya Cara Untuk Mendaur Ulang Sampah Plastik" ref="title" />
                            </div>
                        </div>
                        <hr />
                        <div className="input-container">
                            <span>3</span>
                            <div>
                                <h6>Tuliskan Deskripsi Permasalahan</h6>
                                <textarea placeholder="Deskripsi ..." rows="5" cols="50" ref="description" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="input-image">
                            <span>4</span>
                            <h6>Tambahkan Gambar</h6>
                            <button type="button" className="bt-secondary-reverse" id="button-input-file"><Image /> Upload Image</button>
                            <input type="file" id="input-file" onChange={this.handleImageAsFile} />
                        </div>
                    </div>
                    <div className="btn-container">
                        <button className="bt-secondary-reverse" style={{ float: 'right' }}>Kirim</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default FormPermasalahan;