// Method1
// let ourinput = document.getElementById("ourinput");

// ourinput.addEventListener("focus", function () {
//   this.removeAttribute("placeholder");
// });
// ourinput.addEventListener("blur", function () {
//   this.setAttribute("placeholder", "Type Your Name");
// });
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

// Method3
let ourinput = document.getElementById("ourinput");
ourinput.onfocus = function () {
  this.setAttribute("data-place", this.getAttribute("placeholder"));
  this.setAttribute("placeholder", "");
};
ourinput.onblur = function () {
  this.setAttribute("placeholder", this.getAttribute("data-place"));
  this.setAttribute("data-place", "");
};
