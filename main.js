// المتغيرات
var themeBtn = document.querySelector(".btn.bg-dark");
var theme = "light";

// لما تدوسي على الزر
themeBtn.addEventListener("click", function () {
  if (theme === "light") {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    themeBtn.innerHTML = "Light Mode";
    theme = "dark";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    themeBtn.innerHTML = "Dark Mode";
    theme = "light";
  }
});
