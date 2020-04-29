import React, { Component } from 'react';
import { database, session, statusSession } from '../config';
import { showError } from '../App';

import CloseIcon from '@material-ui/icons/Close';
import Loading from '../assets/images/Infinity.gif';

class SinglePermasalahan extends Component {
    constructor(props) {
        super(props);

        this.state = {
            problems: null,
            desa: null
        }
    }

    getProblem = () => {
        const { id } = this.props.match.params;

        database.ref("problems/" + id).on("value",
            (snapshot) => {
                this.setState({ problems: snapshot.val() });
                database.ref("users/" + snapshot.val().idUser).on("value",
                    (secSnapshot) => {
                        this.setState({ desa: secSnapshot.val() });
                    })
            })
    }

    closeModal = () => {
        const modal = document.getElementById("add-solusi");

        modal.classList.remove("fade-in");
        modal.classList.add("fade-out");

        setTimeout(function () {
            modal.style.display = "none"
        }, 500)
    }

    showModal = (idProblem, idDesa, title) => {
        if (statusSession === "desa") {
            showError("Hanya mahasiswa yang dapat mengirimkan solusi")
        } else {
            const modal = document.getElementById("add-solusi");

            modal.style.display = "flex"
            modal.classList.remove("fade-out");
            modal.classList.add("fade-in");

            document.getElementById("id-permasalahan").value = idProblem;
            document.getElementById("id-desa").value = idDesa;
            document.getElementById("problem-title").value = title;
        }
    }

    createSolution = (e) => {
        e.preventDefault();

        const idDesa = this.refs.iddesa.value;
        const idProblem = this.refs.idproblem.value;
        const description = this.refs.description.value;
        const date = this.refs.date.value;
        const title = this.refs.title.value;

        if (!idProblem || !description || !date) {
            showError('Data tidak boleh kosong')
        }

        const newDate = new Date(date);
        const day = newDate.getUTCDate();
        const month = newDate.getUTCMonth() + 1;
        const year = newDate.getUTCFullYear();

        const datePlan = `${day} / ${month} / ${year}`;

        database.ref('solutions/' + session + new Date().getTime()).set({
            idProblem: idProblem,
            idUser: session,
            idDesa: idDesa,
            description: description,
            date: datePlan,
            status: 1,
            title: title
        });

        window.location.href = "/notification";
    }

    componentWillMount() {
        this.getProblem();
    }
    render() {
        let problems = this.state.problems;
        let desa = this.state.desa;

        return (
            <div id="single-permasalahan">
                {problems === null || desa === null ?
                    <div>
                        <img className="loading" src={Loading} style={{ margin: '3em auto 3em' }} alt="" />
                    </div>
                    :
                    <div className="article-container">
                        <img src={problems.imgSource} alt="" />
                        <h1>{problems.title}</h1>
                        <h6>{problems.date}</h6>
                        <div>
                            <div className="profile-img"></div>
                            <div className="profile">
                                <p>{desa.username}</p>
                                <h6>{desa.address}</h6>
                            </div>
                        </div>
                        <p>{problems.description}</p>
                        <button className="bt bt-primary-transparent" onClick={() => this.showModal(this.props.match.params, problems.idUser, problems.title)}>
                            Tawarkan Solusi
                        </button>
                    </div>
                }

                <div id="add-solusi" style={{ display: 'none' }}>
                    <div className="bg-fade"></div>
                    <div className="form">
                        <div><CloseIcon onClick={() => this.closeModal()} /></div>
                        <form onSubmit={this.createSolution}>
                            <input type="hidden" id="problem-title" ref="title" />
                            <input type="hidden" id="id-permasalahan" ref="idproblem" />
                            <input type="hidden" id="id-desa" ref="iddesa" />
                            <label>Deskripsi Solusi</label>
                            <textarea rows="5" cols="50" ref="description"></textarea>
                            <label>Waktu Pelaksanaan</label>
                            <input type="date" required="required" ref="date" />
                            <button className="bt bt-primary" type="submit">Kirim</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default SinglePermasalahan;