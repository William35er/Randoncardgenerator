/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  document.querySelector(".card").innerHTML = genNum();
  document.querySelector(".card").classList.add(genSuit());
};
let genNum = () => {
  let number = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let randNum = Math.floor(Math.random() * number.length);
  return number[randNum];
};
let genSuit = () => {
  let suit = ["spade", "clubs", "hearts", "diamonds"];
  let ransuit = Math.floor(Math.random() * suit.length);
  return suit[ransuit];
};
