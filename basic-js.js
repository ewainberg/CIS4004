"use strict";

function getCounter() {
  const el = document.getElementById("counter");
  const n = parseInt(el.textContent, 10);
  return Number.isFinite(n) ? n : 0;
}

function setCounter(n) {
  document.getElementById("counter").textContent = String(n);
}

function tickUp() {
  setCounter(getCounter() + 1);
}

function tickDown() {
  setCounter(getCounter() - 1);
}

function runForLoop() {
  const max = getCounter();
  const out = [];
  for (let i = 0; i <= max; i++) out.push(i);
  document.getElementById("forLoopResult").textContent = out.join(" ");
}

function showOddNumbers() {
  const max = getCounter();
  const out = [];
  for (let i = 1; i <= max; i += 2) out.push(i);
  document.getElementById("oddNumberResult").textContent = out.join(" ");
}

function addMultiplesToArray() {
  const max = getCounter();
  const arr = [];
  for (let i = Math.floor(max / 5) * 5; i >= 5; i -= 5) arr.push(i);
  console.log(arr);
}

function printCarObject() {
  const cType = document.getElementById("carType").value;
  const cMPG = document.getElementById("carMPG").value;
  const cColor = document.getElementById("carColor").value;
  console.log({ cType, cMPG, cColor });
}

function loadCar(n) {
  let car;
  if (n === 1) car = carObject1;
  else if (n === 2) car = carObject2;
  else if (n === 3) car = carObject3;
  else return;

  document.getElementById("carType").value = car.cType ?? "";
  document.getElementById("carMPG").value = car.cMPG ?? "";
  document.getElementById("carColor").value = car.cColor ?? "";
}

function changeColor(n) {
  const p = document.getElementById("styleParagraph");
  if (n === 1) p.style.color = "red";
  else if (n === 2) p.style.color = "green";
  else if (n === 3) p.style.color = "blue";
}
