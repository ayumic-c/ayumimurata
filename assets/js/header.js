{
  document.addEventListener("DOMContentLoaded", () => {
    const html = document.querySelector("html");
    const body = document.querySelector("body");
    const header = document.querySelector("#header");
    const hbgBtn = document.querySelector("#hbg-btn");
    const headerNavItems = document.querySelectorAll(".header-nav a");

    // header hamburger
    const toggleMenu = () => {
      html.classList.toggle("is-active");
      body.classList.toggle("is-active");
      header.classList.toggle("is-active");
    };
    const closeMenu = () => {
      html.classList.remove("is-active");
      body.classList.remove("is-active");
      header.classList.remove("is-active");
    };
    hbgBtn.addEventListener("click", () => {
      toggleMenu();
    });
    headerNavItems.forEach((item) => {
      item.addEventListener("click", () => {
        closeMenu();
      });
    });

    // header scroll
    window.addEventListener("scroll", () => {
      // bodyが「is-active」を持っている場合は何もしない
      if (document.body.classList.contains("is-active")) return;
      // 1px以上スクロールしたらヘッダーに「is-scroll」クラスをつける
      header.classList.toggle("is-scroll", window.scrollY > 1);
    });
  });
}
