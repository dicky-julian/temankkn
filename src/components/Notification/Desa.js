import React, { Component } from 'react';
import { database, session } from '../../config';

import AssignmentIcon from '@material-ui/icons/Assignment';
import AssignmentReturnedIcon from '@material-ui/icons/AssignmentReturned';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';

class DesaNotification extends Component {
    constructor(props) {
        super(props);

        this.state = {
            permasalahan: [],
            problems: []
        }
    }

    updateStatus = (id, status) => {
        let newStatus = '';
        switch (status) {
            case 1:
                newStatus = 2;
                break;
            case 2:
                newStatus = 3;
                break;
            case 3:
                newStatus = 4;
                break;
            default:
                break;
        }

        database.ref("solutions/"+id).update({
            "status" : newStatus
        })
        console.log(newStatus);
    }

    getPermasalahan = () => {
        database.ref("problems").orderByChild("idUser").equalTo(session).on("value",
            (snapshot) => {
                this.setState({ permasalahan: Object.entries(snapshot.val()) })
            }
        )
    }

    getPermintaan = () => {
        database.ref("solutions").orderByChild("idDesa").equalTo(session).on("value",
            (snapshot) => {
                this.setState({ problems: Object.entries(snapshot.val()) })
            })
    }

    componentWillMount() {
        this.getPermasalahan();
        this.getPermintaan();
    }

    render() {
        let allProblems = this.state.permasalahan;
        let problems = this.state.problems;
        let permasalahan = [];
        let permintaan = [];
        let berjalan = [];
        let selesai = [];

        for (let i = 0; i < allProblems.length; i++) {
            let detailProblems = allProblems[i][1];

            permasalahan.push(
                <div className="container" key={i}>
                    <div className="title">
                        <div>< AssignmentIcon /></div>
                        <h6>{detailProblems.title}</h6>
                    </div>
                    <p>
                    {detailProblems.description}
                    </p>
                </div>
            )
        }

        for (let i = 0; i < problems.length; i++) {
            let detailProblems = problems[i][1];

            switch (detailProblems.status) {
                case 1:
                    permintaan.push(
                        <div className="container" key={i}>
                            <div className="title">
                                <div>< AssignmentIcon /></div>
                                <h6>{detailProblems.title}</h6>
                            </div>
                            <p>
                                {detailProblems.description}
                                <br /><br />
                                <b>NB : Kegiatan akan dilaksanakan pada {detailProblems.date}</b>
                            </p>
                            <div className="button-container">
                                <button className="bt bt-primary accept" onClick={() => { this.updateStatus(problems[i][0], 1) }}>Terima</button>
                                <button className="bt reject" onClick={() => { this.updateStatus(problems[i][0], 3) }}>Tolak</button>
                            </div>
                        </div>
                    )
                    break;
                case 2:
                    berjalan.push(
                        <div className="container" key={i}>
                            <div className="title">
                                <div style={{ background: '#ffc022' }}>< AssignmentReturnedIcon /></div>
                                <h6>{detailProblems.title}</h6>
                            </div>
                            <div className="button-container">
                                <button className="bt bt-primary accept" onClick={() => { this.updateStatus(problems[i][0], 2) }}>Selesai</button>
                            </div>
                        </div>
                    )
                    break;
                case 3:
                    selesai.push(
                        <div className="container" key={i}>
                            <div className="title">
                                <div style={{ background: '#47d664' }}>< AssignmentTurnedInIcon /></div>
                                <h6>{detailProblems.title}</h6>
                            </div>
                        </div>
                    )
                    break;
                default:
                    break;
            }
        }
        
        if (permasalahan.length === 0) {
            permasalahan = <div>Kosong</div>
        }

        if (permintaan.length === 0) {
            permintaan = <div>Kosong</div>
        }

        if (berjalan.length === 0) {
            berjalan = <div>Kosong</div>
        }

        if (selesai.length === 0) {
            selesai = <div>Kosong</div>
        }

        return (
            <div>
                <div>
                    <div id="show-Permasalahan" className="hide">
                        {permasalahan}
                    </div>
                    <div id="show-Permintaan" className="hide">
                        {permintaan}
                    </div>
                    <div id="show-Berjalan" className="hide">
                        {berjalan}
                    </div>
                    <div id="show-Selesai" className="hide">
                        {selesai}
                    </div>
                </div>
            </div>
        )
    }
}

export default DesaNotification;