var button = document.querySelector("button");
var input_search = document.querySelector(".input");
var generate_password = document.querySelector(".generatepassword");
var input_number = document.getElementById("num");
var range_number = document.getElementById("range");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbols = '!@#$%^&*()_-+={}[]|:;"<>,.?/~';
var copy_passw = document.querySelector(".copypassw");
var allSymbols = upperCase + lowerCase + numbers + symbols;
var passw_history = document.querySelector(".passwdhistory");
var svg = document.querySelector("svg");
var clear_history = document.querySelector(".clearhistory");
var scorevalue = document.querySelector(".scorevalue");

function createrandomPassword() {
  var count = 0;
  var passw = "";
  var clicked_box = "";
  if (
    document.getElementById("uppercase").checked ||
    document.getElementById("lowercase").checked ||
    document.getElementById("numbers").checked ||
    document.getElementById("symbols").checked
  ) {
    count++;
  }
  if (document.getElementById("uppercase").checked) {
    clicked_box += upperCase;
  }
  if (document.getElementById("lowercase").checked) {
    clicked_box += lowerCase;
  }
  if (document.getElementById("numbers").checked) {
    clicked_box += numbers;
  }
  if (document.getElementById("symbols").checked) {
    clicked_box += symbols;
  }
  if (clicked_box === "") {
    clicked_box = allSymbols;
  }

  // if (count === 1) {
  //   svg = (
  //     <svg
  //       xmlns='http://www.w3.org/2000/svg'
  //       width='24'
  //       height='24'
  //       viewBox='0 0 24 24'
  //       fill='none'>
  //       <rect x='2' y='18' width='20' height='3' fill='#FF003C' />
  //       <rect x='2' y='13' width='20' height='3' fill='#FF003C' />
  //       <rect x='2' y='8' width='20' height='3' fill='#00F0FF' />
  //       <rect x='2' y='3' width='20' height='3' fill='#00F0FF' />
  //     </svg>
  //   );
  // }
  for (let i = 0; i < +range_number.value; i++) {
    passw += clicked_box[Math.round(Math.random() * clicked_box.length)];
  }
  return passw;
}

generate_password.addEventListener("click", () => {
  writeData(createrandomPassword());
});
range_number.addEventListener("change", () => {
  writeData(createrandomPassword());
});

function writeData(password) {
  input_search.innerHTML = password;
  input_search.style.color = "white";

  var historyItem = document.createElement("div");
  historyItem.textContent = password;
  historyItem.innerHTML = `<div>${password}</div>
  <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M21.375 22.5H6.375C6.07663 22.5 5.79048 22.3815 5.5795 22.1705C5.36853 21.9595 5.25 21.6734 5.25 21.375V6C5.25 5.80109 5.32902 5.61032 5.46967 5.46967C5.61032 5.32902 5.80109 5.25 6 5.25H21.375C21.6734 5.25 21.9595 5.36853 22.1705 5.5795C22.3815 5.79048 22.5 6.07663 22.5 6.375V21.375C22.5 21.6734 22.3815 21.9595 22.1705 22.1705C21.9595 22.3815 21.6734 22.5 21.375 22.5Z" fill="#FAFAFA"/>
  <path d="M5.25 3.75H18.75V2.625C18.75 2.32663 18.6315 2.04048 18.4205 1.8295C18.2095 1.61853 17.9234 1.5 17.625 1.5H2.8125C2.4644 1.5 2.13056 1.63828 1.88442 1.88442C1.63828 2.13056 1.5 2.4644 1.5 2.8125V17.625C1.5 17.9234 1.61853 18.2095 1.8295 18.4205C2.04048 18.6315 2.32663 18.75 2.625 18.75H3.75V5.25C3.75 4.85218 3.90804 4.47064 4.18934 4.18934C4.47064 3.90804 4.85218 3.75 5.25 3.75Z" fill="#FAFAFA"/>
</svg></div>`;
  passw_history.style.textalign = "center";
  historyItem.style.display = "flex";
  historyItem.style.justifyContent = "space-between";
  passw_history.appendChild(historyItem);
  passw_history.scrollTop = passw_history.scrollHeight;
}

clear_history.addEventListener("click", () => {
  passw_history.innerHTML = "<div>Password History</div>";
});

copy_passw.addEventListener("click", () => {
  navigator.clipboard.writeText(input_search.innerHTML);
  alert("copied");
});

var scorevalue = document.querySelector(".scorevalue");

range_number.addEventListener("mousemove", () => {
  scorevalue.innerHTML = `${range_number.value} `;
  scorevalue.style.display = "flex";
  scorevalue.style.justifyContent = "center";
  scorevalue.style.alignItems = "center";
  scorevalue.style.color = "var(--Black, #000)";
});
