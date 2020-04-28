import React, { Component } from 'react';
import { database } from '../config';

import ExampleImg from '../assets/images/example.jpg';
// import Search from '@material-ui/icons/Search';
import Add from '@material-ui/icons/Add';
import Calendar from '@material-ui/icons/CalendarToday';
import CloseIcon from '@material-ui/icons/Close';

class Permasalahan extends Component {
    constructor(props) {
        super(props);

        this.state = {
            problems: []
        }
    }

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

    getProblems = () => {
        var problems = database.ref('problems');

        problems.on("value",
        (snapshot) =>{
            console.log(Object.entries(snapshot.val()));
            this.setState({ problems: Object.entries(snapshot.val())})
        })
    }

    componentWillMount() {
        this.getProblems()
    }

    render() {
        let problems = this.state.problems;
        let items = [];

        for (let i = 0; i < problems.length; i++) {
            let detailProblem = problems[i][1];
            console.log(detailProblem.imgSource);
            items.push(
            <div key={i}>
                <div className="img" style={{ backgroundImage: `url("${detailProblem.imgSource}")` }}></div>
                <div className="list-content">
                    <span className="bt bt-secondary">{detailProblem.address}</span>
                    <a href="/">{detailProblem.title}</a>
                    <div className="action">
                        <div className="date">
                            <Calendar style={{ color: 'rgb(144, 144, 144)', fontSize: '15px', margin: '0 8px -1.5px 0' }} />
                            <p>{detailProblem.date}</p>
                        </div>
                        <button className="bt bt-primary" onClick={() => this.showModal()}><Add style={{ fontSize: '15px', margin: '0 8px 1px 0' }} /> Beri Solusi</button>
                    </div>
                </div>
            </div>
            )
        }
        return (
            <div id="permasalahan-page">
                <div className="search">
                    <div className="search-title">
                        <h2>Temukan Permasalahan</h2>
                        <h4><span>144</span> hasil ditampilkan</h4>
                    </div>
                </div>
                <div className="permasalahan-list">
                    {items}
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