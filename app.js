const span = document.querySelectorAll("span");
const outPut = document.getElementById("outPut");
const equal = document.querySelector(".equal");
const reset = document.querySelector(".reset");
const clear = document.getElementById("clear");

span.forEach((s) => {
  s.addEventListener("click", () => {
    outPut.value += s.innerHTML;
  });
});

equal.addEventListener("click", () => {
  let box;
  box = outPut.value;
  outPut.value = eval(box);
});

reset.addEventListener("click", () => {
  outPut.value = "";
});

clear.addEventListener("click", () => {
  outPut.value = outPut.value.slice(0,-1)
});

