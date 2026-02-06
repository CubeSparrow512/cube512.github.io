document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth) * 100;
  const y = (e.clientY / window.innerHeight) * 100;

  document.body.style.background = `
    radial-gradient(
      circle at ${x}% ${y}%,
      rgb(104, 131, 219),
      rgb(51, 69, 129)
    )
  `;
});
