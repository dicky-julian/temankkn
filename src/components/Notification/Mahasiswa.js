import React, { Component } from 'react';
import { database, session } from '../../config';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AssignmentReturnedIcon from '@material-ui/icons/AssignmentReturned';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import ClearIcon from '@material-ui/icons/Clear';
import Loading from '../../assets/images/Infinity.gif';

class MahasiswaNotification extends Component {
    constructor(props) {
        super(props);

        this.state = {
            permasalahan: [],
            problems: []
        }
    }

    getPermintaan = () => {
        database.ref("solutions").orderByChild("idUser").equalTo(session).on("value",
            (snapshot) => {
                this.setState({ problems: Object.entries(snapshot.val()) })
                console.log(snapshot);
            })
    }

    componentWillMount() {
        this.getPermintaan();
    }

    render() {
        let problems = this.state.problems;
        let permintaan = [];
        let disetujui = [];
        let ditolak = [];
        let selesai = [];

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
                                <b>NB : Kegiatan akan dilaksanakan pada ${detailProblems.date}</b>
                            </p>
                        </div>
                    )
                    break;
                case 2:
                    disetujui.push(
                        <div className="container" key={i}>
                            <div className="title">
                                <div style={{ background: '#47d664' }}>< AssignmentTurnedInIcon /></div>
                                <h6>{detailProblems.title}</h6>
                            </div>
                        </div>
                    )
                    break;
                case 3:
                    ditolak.push(
                        <div className="container" key={i}>
                            <div className="title">
                                <div>< ClearIcon /></div>
                                <h6>{detailProblems.title}</h6>
                            </div>
                        </div>
                    )
                    break;
                case 4:
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
        if (permintaan.length === 0) {
            permintaan = <img className="loading" src={Loading} />
        }

        if (disetujui.length === 0) {
            disetujui = <img className="loading" src={Loading} />
        }

        if (ditolak.length === 0) {
            ditolak = <img className="loading" src={Loading} />
        }

        if (selesai.length === 0) {
            selesai = <img className="loading" src={Loading} />
        }

        return (
            <div>
                <div>
                    <div id="show-Permintaan" className="hide">
                        {permintaan}
                    </div>
                    <div id="show-Disetujui" className="hide">
                        {disetujui}
                    </div>
                    <div id="show-Ditolak" className="hide">
                        {ditolak}
                    </div>
                    <div id="show-Selesai" className="hide">
                        {selesai}
                    </div>
                </div>
            </div>
        )
    }
}

export default MahasiswaNotification;