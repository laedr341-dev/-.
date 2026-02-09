document.addEventListener("DOMContentLoaded", () => {

  // زر التقديم على الوظائف
  const applyBtn = document.getElementById("applyBtn");
  if (applyBtn) {
    applyBtn.addEventListener("click", () => {
      window.open("https://discord.gg/YdNuZeap", "_blank");
    });
  }

});
