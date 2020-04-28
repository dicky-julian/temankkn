import React, { Component } from 'react';

import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';
import AssignmentReturnedIcon from '@material-ui/icons/AssignmentReturned';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';

class MahasiswaNotification extends Component {
    render() {
        return (
            <div>
                <div>
                    <div id="show-Permintaan" className="hide">
                        <div className="container">
                            <div className="title">
                                <div><AssignmentReturnedIcon /></div>
                                <h6>Get 10 Adobe Stock standard assets with your free 30-day trial</h6>
                            </div>
                            <div className="profile">
                                <p><b>Desa Penari, Kabupaten Probolinggo</b></p>
                            </div>
                            <p>
                                Introducing our new homepage—the first touchpoint of our brand refresh! This design shift wouldn't have been possible without the collaboration of Kelly (@kikidraws), Chin (@chinilee), Lisa (@lisaengler), and many more. Check it out live at envoy.com, and keep an eye out for more from our team!
                                    <br /><br />
                                <b>NB : Kegiatan akan dilaksanakan pada 20 April 2020</b>
                            </p>
                        </div>
                    </div>
                    <div id="show-Disetujui" className="hide">
                        <div className="container">
                            <div className="title">
                                <div style={{ backgroundColor: '#47d664' }}><CheckIcon /></div>
                                <h6>Get 10 Adobe Stock standard assets with your free 30-day trial</h6>
                            </div>
                            <div className="profile">
                                <p><b>Desa Penari, Kabupaten Probolinggo</b></p>
                            </div>
                            <p>
                                Introducing our new homepage—the first touchpoint of our brand refresh! This design shift wouldn't have been possible without the collaboration of Kelly (@kikidraws), Chin (@chinilee), Lisa (@lisaengler), and many more. Check it out live at envoy.com, and keep an eye out for more from our team!
                                    <br /><br />
                                <b>NB : Kegiatan akan dilaksanakan pada 20 April 2020</b>
                            </p>
                        </div>
                    </div>
                    <div id="show-Ditolak" className="hide">
                        <div className="container">
                            <div className="title">
                                <div><CloseIcon /></div>
                                <h6>Get 10 Adobe Stock standard assets with your free 30-day trial</h6>
                            </div>
                            <div className="profile">
                                <p><b>Desa Penari, Kabupaten Probolinggo</b></p>
                            </div>
                            <p>
                                Introducing our new homepage—the first touchpoint of our brand refresh! This design shift wouldn't have been possible without the collaboration of Kelly (@kikidraws), Chin (@chinilee), Lisa (@lisaengler), and many more. Check it out live at envoy.com, and keep an eye out for more from our team!
                                    <br /><br />
                                <b>NB : Kegiatan akan dilaksanakan pada 20 April 2020</b>
                            </p>
                        </div>
                    </div>
                    <div id="show-Selesai" className="hide">
                        <div className="container">
                            <div className="title">
                                <div style={{ backgroundColor: '#47d664' }}><AssignmentTurnedInIcon /></div>
                                <h6>Get 10 Adobe Stock standard assets with your free 30-day trial</h6>
                            </div>
                            <div className="profile">
                                <p><b>Desa Penari, Kabupaten Probolinggo</b></p>
                            </div>
                            <p>
                                Introducing our new homepage—the first touchpoint of our brand refresh! This design shift wouldn't have been possible without the collaboration of Kelly (@kikidraws), Chin (@chinilee), Lisa (@lisaengler), and many more. Check it out live at envoy.com, and keep an eye out for more from our team!
                                    <br /><br />
                                <b>NB : Kegiatan akan dilaksanakan pada 20 April 2020</b>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MahasiswaNotification;