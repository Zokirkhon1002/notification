const btn = document.getElementById("button"),
  toasts = document.querySelector(".toasts"),
  Messages = [
    "Notification One",
    "Notification Two",
    "Notification Three",
    "Notification Four",
  ],
  classTypes = ["info", "success", "error"];

var x = 1;
if (x == 1) {
  window.oncontextmenu = function (e) {
    x++;
    x == 3? alert('uzr, sizni chiqarib yubordik!') :alert(
        `sichqonchani o'ng tomonini bosdingiz \n iltimos bu ishni qilmang. \n keyingi safar chiqarilib yuborilasiz!`
      );
    return x == 3? window.close() : e.preventDefault();
  };

}



btn.addEventListener("click", () => createElon());
function createElon(xabar = null, type = null) {
  const elon = document.createElement("div");
  elon.classList.add("toast");
  elon.classList.add(type ? type : getRandomType());
  elon.innerText = xabar ? xabar : getRandomXabar();
  toasts.appendChild(elon);

  setTimeout(() => {
    elon.remove();
  }, 2000);
}

function getRandomXabar() {
  return Messages[Math.floor(Math.random() * Messages.length)];
}
function getRandomType() {
  return classTypes[Math.floor(Math.random() * classTypes.length)];
}
