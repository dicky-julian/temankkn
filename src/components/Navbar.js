import React, { Component } from 'react';
import { session, statusSession, logoutAuth } from '../config';
import { showError } from '../App';

import logoImg from '../assets/images/teman-kkn-logo.webp';
import PersonIcon from '@material-ui/icons/Person';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MenuIcon from '@material-ui/icons/Menu';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numDropdown: 0,
      numNavbar: 0
    }
  }

  getLocation = () => {
    let location = window.location.pathname;

    switch (location) {
      case "/":
        this.changeHover("home-nav");
        break;
      case "/permasalahan":
        this.changeHover("permasalahan-nav");
        break;
      default:
        this.changeHover("");
        break;
    }
  }

  changeHover = (el) => {
    document.querySelectorAll(".active")[0].classList.remove("active");
    if (el !== "") {
      document.getElementById(el).classList.add("active");
    }
  }

  showSignModal = () => {
    const modal = document.getElementById("sign");
    modal.style.display = "flex";

    modal.classList.remove("fade-out");
    modal.classList.add("fade-in");
  }

  showDropdown = () => {
    const dropdown = document.getElementsByClassName("dropdown")[0];
    let status = this.state.numDropdown;

    if (status === 0) {
      dropdown.classList.remove("dropdown-hide");
      dropdown.classList.add("dropdown-show");
      dropdown.style.display = "block";

      this.setState({ numDropdown: 1 });
    } else if (status === 1) {
      dropdown.classList.remove("dropdown-show");
      dropdown.classList.add("dropdown-hide");

      setTimeout(function () {
        dropdown.style.display = "none";
      }, 300)

      this.setState({ numDropdown: 0 });
    }
  }

  showNavbar = () => {
    const navbar = document.getElementsByClassName("nav-link")[0];
    let status = this.state.numNavbar;

    if (status === 0) {
      navbar.classList.remove("nav-hide");
      navbar.classList.add("nav-show");

      this.setState({ numNavbar: 1 });
    } else if (status === 1) {
      navbar.classList.remove("nav-show");
      navbar.classList.add("nav-hide");

      this.setState({ numNavbar: 0 });
    }
  }

  componentDidMount() {
    this.getLocation();
  }

  render() {
    return (
      <nav id="navbar">
        <div>
          <a href="/" className="d-flex a-center">
            <img src={logoImg} width="50" alt="" /> KawanKKN
          </a>
          {session !== null ?
            <div>
              <div className="nav-link">
                <a id="home-nav" href="/" className="active">Beranda</a>
                <a id="permasalahan-nav" href="/permasalahan">Permasalahan</a>
                {statusSession === "mahasiswa" ?
                  <i></i>
                  :
                  <a className="bt bt-secondary" href="/permasalahan/add">Tambahkan</a>
                }
              </div>
              <div className="bt-dropdown" onClick={() => this.showDropdown()}><PersonIcon /></div>
              <div className="dropdown" style={{ display: 'none' }}>
                <a className="btn" href="/notification">
                  <NotificationsNoneIcon style={{ fontSize: '21px', marginRight: '.75em' }} /> Notifikasi
                </a>
                <div className="btn" onClick={logoutAuth}>
                  <ExitToAppIcon style={{ fontSize: '21px', marginRight: '.75em' }} /> Logout
                </div>
              </div>
              <MenuIcon id="nav-toogle" onClick={() => this.showNavbar()} />
            </div>
            :
            <div>
              <div className="nav-link">
                <a id="home-nav" href="/" className="active">Beranda</a>
                <a id="permasalahan-nav" onClick={() => showError("Silahkan masuk terlebih dahulu")}>Permasalahan</a>
                <div className="bt bt-secondary" onClick={() => this.showSignModal()}>Masuk</div>
              </div>
              <MenuIcon id="nav-toogle" onClick={() => this.showNavbar()} />
            </div>
          }
        </div>
      </nav>
    );
  }
}

export default Navbar;