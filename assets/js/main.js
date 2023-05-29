(function () {
  "use strict";
  /* navbar*/
  const toggleBtn = document.querySelector(".toggle_btn");
  const toggleBtnIcon = document.querySelector(".toggle_btn i");
  const dropDownMenu = document.querySelector(".dropdown_menu");

  toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle("open");
    const isOpen = dropDownMenu.classList.contains("open");
    toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
  };
  /*  slider */
  const slider = document.querySelector("#slider");
  let sliderSection = document.querySelectorAll(".slider__section");
  let sliderSectionLast = sliderSection[sliderSection.length - 1];
  const btnLeft = document.querySelector("#btn-left");
  const btnRight = document.querySelector("#btn-right");
  let btnDisabled = false;

  slider.insertAdjacentElement('afterbegin', sliderSectionLast);
  
  function NextSlider() {
    if (btnDisabled) return;
    btnDisabled = true;
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function () {
      slider.style.transition = "none";
      slider.insertAdjacentElement('beforeend', sliderSectionFirst);
      slider.style.marginLeft = "-100%";
      btnDisabled = false;
    }, 500);
  }

  function PrevSlider() {
    if (btnDisabled) return;
    btnDisabled = true;
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length-1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function () {
      slider.style.transition = "none";
      slider.insertAdjacentElement('afterbegin', sliderSectionLast);
      slider.style.marginLeft = "-100%";
      btnDisabled = false;
    }, 500);
  }

  btnRight.addEventListener("click", function () {
    NextSlider();
  });
  btnLeft.addEventListener("click", function () {
    PrevSlider();
  });
  setInterval(function(){
    NextSlider();
  },5000)
  window.addEventListener("scroll",function(){
    var header = this.document.querySelector("header");
    var navbar = this.document.querySelector(".navbar");
    header.classList.toggle("sticky", window.scrollY > 0);
    navbar.classList.toggle("sticky", window.scrollY > 0);
  })
})();
