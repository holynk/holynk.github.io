(function () {
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector("#navMenu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!toggle || !menu) return;

  function setExpanded(isOpen) {
    toggle.setAttribute("aria-expanded", String(isOpen));
    if (isOpen) menu.classList.add("open");
    else menu.classList.remove("open");
  }

  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.contains("open");
    setExpanded(!isOpen);
  });

  // Fecha o menu ao clicar em um link (mobile)
  navLinks.forEach((link) => {
    link.addEventListener("click", () => setExpanded(false));
  });

  // Fecha ao clicar fora
  document.addEventListener("click", (e) => {
    const isClickInside = menu.contains(e.target) || toggle.contains(e.target);
    if (!isClickInside) setExpanded(false);
  });

  // Ajuste ao redimensionar: se sair do mobile, deixa aberto no layout desktop
  const mq = window.matchMedia("(max-width: 720px)");
  function handleMQ() {
    if (!mq.matches) {
      // Desktop: garante menu visível (sem classe open) e aria ok
      menu.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  }
  mq.addEventListener?.("change", handleMQ);
  handleMQ();
})();
