import React, { Component } from 'react';
import logoImg from '../assets/images/teman-kkn-logo.png';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';

class Navbar extends Component {
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
    if (el != "") {
      document.getElementById(el).classList.add("active");
    }
  }

  componentDidMount() {
    this.getLocation();
  }

  render() {
    return (
      <nav>
        <div>
          <a href="/" className="d-flex a-center">
            <img src={logoImg} width="50" /> TemanKKN
          </a>
          <div>
            <div className="nav-link">
              <a id="home-nav" href="/" className="active">Beranda</a>
              <a id="permasalahan-nav" href="/permasalahan">Permasalahan</a>
              <a id="tentang-nav">Artikel</a>
              <a href="/" className="bt bt-secondary">Masuk</a>
            </div>
            <a className="notification-icon">
              <NotificationsNoneIcon style={{ fontSize: '21px' }} />
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;