let age1 = document.getElementById("age1input");
let checkBtn = document.getElementById("check");

checkBtn.addEventListener("click", () => {
  if (age1.value <= 12 || age1.value >= 65) {
    console.log("Ticket free");
  } else {
    console.log("Ticket 20$");
  }
});
