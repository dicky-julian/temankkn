import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sign from './components/Sign';
import CloseIcon from '@material-ui/icons/Close';

export const showError = (message) => {
  const container = document.getElementById("showError");

  container.style.display = "flex";
  container.getElementsByTagName("span")[0].innerHTML = message;
}

const closeError = () => {
  const container = document.getElementById("showError");

  container.style.animationName = "hideError";

  setTimeout(function () {
    container.style.display = "none";
    container.style.animationName = "showError";
  }, 500)
}

export default function App() {
  return (
    <div id="app">
      <div id="showError" style={{ display: 'none' }}>
        <span>Mohon masuk terlebih dahulu</span> <CloseIcon onClick={closeError} />
      </div>
      <Navbar />
      <Footer />
      <Sign />
    </div>
  );
}