document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM полностью загружен");
  const menu = document.querySelector(".burger-menu");
  const overlay = document.querySelector(".overlay");
  const frame = document.querySelector(".main__frame");
  const body = document.body;
  const menuButton = document.querySelector(".promo__menu-button");

  menuButton.addEventListener("click", (event) => {
    console.log("Меню открыто");
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
    frame.classList.toggle("hidden");
    body.classList.toggle("no-scroll");
    menuButton.classList.toggle("clicked");
  });

  document
    .querySelector(".burger-menu__close-button")
    .addEventListener("click", (event) => {
      console.log("Меню закрыто");
      menu.classList.remove("active");
      overlay.classList.remove("active");
      frame.classList.remove("hidden");
      body.classList.remove("no-scroll");
    });

  overlay.addEventListener("click", (event) => {
    menu.classList.remove("active");
    overlay.classList.remove("active");
    frame.classList.remove("hidden");
    body.classList.remove("no-scroll");
  });
});
