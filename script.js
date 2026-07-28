document.querySelectorAll(".card, .nav-item").forEach(el => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Button clicked");
  });
});
