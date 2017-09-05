var mapOpen = document.querySelector('.js-open-map');
var mapPopup = document.querySelector('.modal-content-map');
var mapClose = mapPopup.querySelector('.modal-content-close');
var formOpen = document.querySelector('.write-now');
var formUp = document.querySelector('.letter-form');
var formClose2 = document.querySelector('.modal-content-close-2');

var ESC_CODE = 27;
var ENTER_CODE = 13;

function openMe() {
  mapPopup.classList.add("modal-content-show");
}

function closeMe(evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-content-show");
}

mapOpen.addEventListener("click", function () {
  openMe();
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === ESC_CODE) {
      if (mapPopup.classList.contains("modal-content-show")) {
        mapPopup.classList.remove("modal-content-show");
        }
      }
  });
});

mapClose.addEventListener("click", function (evt) {
  closeMe(evt);
});

mapOpen.addEventListener("keydown", function (evt) {
  if (evt.keyCode === ENTER_CODE) {
    openMe();;
    }
});

formOpen.addEventListener("click", function (evt) {
  evt.preventDefault();
  formUp.classList.remove("modal-content-hide");
  formUp.classList.add("modal-content-show-2");
  formClose2.classList.remove("modal-content-hide");
  formClose2.classList.add("modal-content-show-2");
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === ESC_CODE) {
      if (formUp.classList.contains("modal-content-show-2")) {
        formUp.classList.remove("modal-content-show-2");
        formUp.classList.add("modal-content-hide");
        formClose2.classList.add("modal-content-hide");
        formClose2.classList.remove("modal-content-show-2");
        }
      }
  });
});

formClose2.addEventListener("click", function (evt) {
  evt.preventDefault();
  formUp.classList.remove("modal-content-show-2");
  formUp.classList.add("modal-content-hide");
  formClose2.classList.remove("modal-content-show-2");
  formClose2.classList.add("modal-content-hide");
});
