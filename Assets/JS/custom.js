/* navigation */
/*jshint esnext: true */
const toggler = document.getElementById("toggler");
const mNav = document.getElementById("mobile__nav");
const close = document.getElementById("toggler__expanded");
const overlay = document.getElementById("overlay");
const body = document.getElementsByTagName("body")[0];

toggler.addEventListener("click", () => {
  mNav.classList.remove("-translate-y-full");
  overlay.classList.remove("hidden");
  body.classList.add("overflow-hidden");
});

close.addEventListener("click", () => {
  mNav.classList.add("-translate-y-full");
  overlay.classList.add("hidden");
  body.classList.remove("overflow-hidden"); 
});

/* tables */
let cell, i, j0, j1, j2;
document.querySelector('#table1').onmouseover = (event) => {
  cell = event.target;
  if (cell.tagName.toLowerCase() != 'td')
    return;
  i = cell.parentNode.children[0];
  j0 = cell.cellIndex;  
  j1 = document.querySelector("#head1");
  j2 = j1.children[j0];
  j2.classList.add("text-[#F7931E]");
  i.classList.add("text-[#F7931E]");
}
document.querySelector('#table1').onmouseout = (event) => {
  j2.classList.remove("text-[#F7931E]");
  i.classList.remove("text-[#F7931E]");
}
let cell2, i2, j02, j12, j22;
document.querySelector('#table2').onmouseover = (event) => {
  cell2 = event.target;
  if (cell2.tagName.toLowerCase() != 'td')
    return;
  i2 = cell2.parentNode.children[0];
  j02 = cell2.cellIndex;  
  j12 = document.querySelector("#head2");
  j22 = j12.children[j02];
  j22.classList.add("text-[#F7931E]");
  i2.classList.add("text-[#F7931E]");
}
document.querySelector('#table2').onmouseout = (event) => {
  j22.classList.remove("text-[#F7931E]");
  i2.classList.remove("text-[#F7931E]");
}
