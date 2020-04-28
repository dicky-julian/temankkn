import React, { Component } from 'react';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AssignmentReturnedIcon from '@material-ui/icons/AssignmentReturned';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';

class DesaNotification extends Component {
    constructor(props) {
        super(props);

        this.state = {
            status: 'desa'
        }
    }

    render() {
        return (
            <div>
                <div>
                    <div id="show-Permasalahan" className="hide">
                        <div className="container">
                            <div className="title">
                                <div><AssignmentIcon /></div>
                                <h6>Get 10 Adobe Stock standard assets with your free 30-day trial</h6>
                            </div>
                            <p>
                                Introducing our new homepage—the first touchpoint of our brand refresh! This design shift wouldn't have been possible without the collaboration of Kelly (@kikidraws), Chin (@chinilee), Lisa (@lisaengler), and many more. Check it out live at envoy.com, and keep an eye out for more from our team!
                                </p>
                        </div>
                    </div>
                    <div id="show-Permintaan" className="hide">
                        <div className="container">
                            <div className="title">
                                <div><AssignmentReturnedIcon /></div>
                                <h6>Get 10 Adobe Stock standard assets with your free 30-day trial</h6>
                            </div>
                            <div className="profile">
                                <p>oleh <b>Adam Alis</b>, Universitas Banda Aceh</p>
                            </div>
                            <p>
                                Introducing our new homepage—the first touchpoint of our brand refresh! This design shift wouldn't have been possible without the collaboration of Kelly (@kikidraws), Chin (@chinilee), Lisa (@lisaengler), and many more. Check it out live at envoy.com, and keep an eye out for more from our team!
                                    <br /><br />
                                <b>NB : Kegiatan akan dilaksanakan pada 20 April 2020</b>
                            </p>
                            <div className="button-container">
                                <button className="bt bt-primary accept">Terima</button>
                                <button className="bt reject">Tolak</button>
                            </div>
                        </div>
                    </div>
                    <div id="show-Berjalan" className="hide">
                        <div className="container">
                            <div className="title">
                                <div style={{ backgroundColor: '#ffc022' }}><AssignmentReturnedIcon /></div>
                                <h6>Get 10 Adobe Stock standard assets with your free 30-day trial</h6>
                            </div>
                            <div className="profile">
                                <p>oleh <b>Adam Alis</b>, Universitas Banda Aceh</p>
                            </div>
                            <div className="button-container">
                                <button className="bt bt-primary accept">Selesai</button>
                            </div>
                        </div>
                    </div>
                    <div id="show-Selesai" className="hide">
                        <div className="container">
                            <div className="title">
                                <div style={{ backgroundColor: '#47d664' }}><AssignmentTurnedInIcon /></div>
                                <h6>Get 10 Adobe Stock standard assets with your free 30-day trial</h6>
                            </div>
                            <p>
                                Introducing our new homepage—the first touchpoint of our brand refresh! This design shift wouldn't have been possible without the collaboration of Kelly (@kikidraws), Chin (@chinilee), Lisa (@lisaengler), and many more. Check it out live at envoy.com, and keep an eye out for more from our team!
                                </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DesaNotification;