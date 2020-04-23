window.onscroll = function () {
  scrollFunction()
};

const scrollFunction = () => {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementsByTagName("nav")[0].style.borderBottom = "1px solid rgba(90,94,154,.1)";
  } else {
    document.getElementsByTagName("nav")[0].style.borderBottom = "none";
  }
}