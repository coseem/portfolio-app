const yearEl = document.getElementById("year");
const toggleBtn = document.getElementById("themeToggle");

yearEl.textContent = new Date().getFullYear();

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark");
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const nextTheme = document.body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", nextTheme);
});
