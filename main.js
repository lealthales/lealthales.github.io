const root = document.documentElement;

function setLang(lang) {
  root.dataset.lang = lang;
  root.lang = lang === "pt" ? "pt-BR" : "en";
  try { localStorage.setItem("lang", lang); } catch {}
}

let saved = null;
try { saved = localStorage.getItem("lang"); } catch {}
setLang(saved || (navigator.language.startsWith("pt") ? "pt" : "en"));

document.getElementById("langBtn").addEventListener("click", () => {
  setLang(root.dataset.lang === "pt" ? "en" : "pt");
});

document.getElementById("year").textContent = new Date().getFullYear();
