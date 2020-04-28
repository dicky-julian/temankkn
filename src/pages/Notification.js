import React, { Component } from 'react';
import { statusSession } from '../config';

import Assignment from '@material-ui/icons/Assignment';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MahasiswaNotification from '../components/Notification/Mahasiswa';
import DesaNotification from '../components/Notification/Desa';
import MenuIcon from '@material-ui/icons/Menu';

class Notification extends Component {
    constructor(props) {
        super(props);

        this.state = {
            numSidebar: 0,
            statusNotifications: {
                mahasiswa: [
                    "Permintaan", "Disetujui", "Ditolak", "Selesai"
                ],
                desa: [
                    "Permasalahan", "Permintaan", "Berjalan", "Selesai"
                ]
            }
        }
    }

    getStatusNotifications() {
        if (statusSession === "mahasiswa") {
            this.statusNotifications = this.state.statusNotifications.mahasiswa;
        } else if (statusSession === "desa") {
            this.statusNotifications = this.state.statusNotifications.desa;
        }
    }

    showSidebar =() => {
        const sidebar = document.getElementsByClassName("show-status")[0];
        let status = this.state.numSidebar;

        if (status === 0) {
            sidebar.classList.remove("notif-hide");
            sidebar.classList.add("notif-show");

        this.setState({ numSidebar: 1 });
        } else if (status === 1) {
            sidebar.classList.remove("notif-show");
            sidebar.classList.add("notif-hide");

        this.setState({ numSidebar: 0 });
        }
    }

    componentDidMount() {
        document.getElementById("navbar").style.display = "none";
        document.getElementById("footer").style.display = "none";

        const items = document.getElementsByClassName("status-item");
        const activeStatus = document.getElementsByClassName("active-status");
        const notification = document.getElementsByClassName("show-notification")[0];
        const hideNotification = document.getElementsByClassName("hide")[0];

        items[0].classList.add("active-status");
        hideNotification.classList.remove("hide");
        hideNotification.classList.add("show");

        for (let i = 0; i < items.length; i++) {
            let item = items[i];
            let element = item.id;
            item.addEventListener("click", function () {
                activeStatus[0].classList.remove("active-status");
                document.getElementById(element).classList.add("active-status");

                notification.getElementsByClassName("show")[0].classList.add("hide");
                notification.getElementsByClassName("show")[0].classList.remove("show");
                document.getElementById(`show-${element}`).classList.add("show");
                document.getElementById(`show-${element}`).classList.remove("hide");
            });
        }
    }

    render() {
        this.getStatusNotifications();
        return (
            <div id="notification">
                <div id="btn-container"><MenuIcon onClick={() => this.showSidebar()} /></div>
                <div className="show-status">
                    <a className="back" href={document.referrer}>
                        <ArrowBackIcon />
                    </a>
                    {this.statusNotifications.map(function (item, key) {
                        return <div key={key} className="status-item" id={item}><Assignment />{item}</div>
                    })}
                </div>
                <div className="show-notification">
                    {statusSession === "mahasiswa" ?
                        <MahasiswaNotification /> : <DesaNotification />
                    }
                </div>
            </div>
        )
    }
}

export default Notification;