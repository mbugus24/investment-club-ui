document.querySelectorAll('.membership-head').forEach((button) => {
  button.addEventListener('click', () => {
    const targetId = button.getAttribute('data-target');
    const target = document.getElementById(targetId);

    if (!target) return;

    const isVisible = target.classList.contains('show');
    target.classList.toggle('show', !isVisible);
    button.setAttribute('aria-expanded', String(!isVisible));
  });
});