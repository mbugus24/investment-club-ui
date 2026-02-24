document.querySelectorAll(".membership-head").forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.dataset.target;
    const target = document.getElementById(targetId);

    if (!target) return;

    const isOpen = target.classList.contains("show");

    //Close all open sections
    document.querySelectorAll(".membership-body").forEach((body) => {
      body.classList.remove("show");
    });
    document.querySelectorAll(".membership-head").forEach((btn) => {
      btn.setAttribute('aria-expanded', 'false');
    });

    //Open the clicked section if it was closed
    if (!isOpen) {
      target.classList.add("show");
      button.setAttribute('aria-expanded', 'true');
    }
    
  });
});