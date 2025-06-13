// Method1

let ourinput = document.getElementById("ourinput");

ourinput.addEventListener("focus", function () {
  this.removeAttribute("placeholder");
});
ourinput.addEventListener("blur", function () {
  this.setAttribute("placeholder", "Type Your Name");
});

// Method2
// let ourinput = document.getElementById("ourinput");

// ourinput.onfocus = function () {
//   if (this.placeholder === "Type Your Name") {
//     this.placeholder = "";
//   }
// };
// ourinput.onblur = function () {
//   if (this.placeholder === "") {
//     this.placeholder = "Type Your Name";
//   }
// };
