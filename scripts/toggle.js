function toggleInit(toggle, toggleBtn) {
  toggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("light-mode");
    if (toggleBtn.innerText === "dark_mode") {
      toggleBtn.innerText = "light_mode";
    } else {
      toggleBtn.innerText = "dark_mode";
    }
  });
}

export default toggleInit;
