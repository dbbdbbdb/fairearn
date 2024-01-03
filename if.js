let age = window.prompt("HOW OLD ARE YOU");

if (age >= 18) {
  document.getElementById("demo").innerHTML = "YOU ARE OLD ENOUGH";
} else if (age > 18 && age <= 30) {
  document.getElementById("demo").innerHTML = "LV1";
} else {
  document.getElementById("demo").innerHTML = "YOU ARE NOT OLD ENOUGH";
}
