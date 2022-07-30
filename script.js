const myDivs = document.querySelectorAll(".game div");
const conclusion = document.querySelector(".conclusion");

class Shape {
  constructor(value, divId) {
    this.value = value;
    this.divId = divId;
  }
  draw() {
    const dv = document.getElementById(this.divId);
    const i = document.createElement("i");
    i.classList.add("material-symbols-outlined");
    i.classList.add("icon");
    i.style.fontSize = "100px";
    i.textContent = this.value;
    dv.appendChild(i);
    dv.classList.remove("off");
    dv.classList.add("on");
  }
}

myDivs.forEach((div) => {
  div.classList.add("off");
  div.addEventListener("click", () => {
    if (div.classList.value === "off") {
      const shape = new Shape("circle", div.id);
      shape.draw();
    }
    let arr = [];
    myDivs.forEach((dv) => {
      if (dv.classList.value === "on") {
        arr.push(Number(dv.id));
      }
    });
    if (arr.length <= 8) {
      let random = Math.floor(Math.random() * 9) + 1;
      while (arr.includes(random)) {
        random = Math.floor(Math.random() * 9) + 1;
      }
      const shape = new Shape("close", random);
      shape.draw();
    }
    if (
      (myDivs[0].textContent === "circle" &&
        myDivs[1].textContent === "circle" &&
        myDivs[2].textContent === "circle") ||
      (myDivs[3].textContent === "circle" &&
        myDivs[4].textContent === "circle" &&
        myDivs[5].textContent === "circle") ||
      (myDivs[6].textContent === "circle" &&
        myDivs[7].textContent === "circle" &&
        myDivs[8].textContent === "circle") ||
      (myDivs[0].textContent === "circle" &&
        myDivs[3].textContent === "circle" &&
        myDivs[6].textContent === "circle") ||
      (myDivs[1].textContent === "circle" &&
        myDivs[4].textContent === "circle" &&
        myDivs[7].textContent === "circle") ||
      (myDivs[2].textContent === "circle" &&
        myDivs[5].textContent === "circle" &&
        myDivs[8].textContent === "circle") ||
      (myDivs[0].textContent === "circle" &&
        myDivs[4].textContent === "circle" &&
        myDivs[8].textContent === "circle") ||
      (myDivs[2].textContent === "circle" &&
        myDivs[4].textContent === "circle" &&
        myDivs[6].textContent === "circle")
    ) {
      setTimeout(() => {
        myDivs.forEach((div) => {
          div.textContent = "";
          div.classList.remove("on");
          div.classList.add("off");
        });
        alert("You win!");
      }, 300);
    } else if (
      (myDivs[0].textContent === "close" &&
        myDivs[1].textContent === "close" &&
        myDivs[2].textContent === "close") ||
      (myDivs[3].textContent === "close" &&
        myDivs[4].textContent === "close" &&
        myDivs[5].textContent === "close") ||
      (myDivs[6].textContent === "close" &&
        myDivs[7].textContent === "close" &&
        myDivs[8].textContent === "close") ||
      (myDivs[0].textContent === "close" &&
        myDivs[3].textContent === "close" &&
        myDivs[6].textContent === "close") ||
      (myDivs[1].textContent === "close" &&
        myDivs[4].textContent === "close" &&
        myDivs[7].textContent === "close") ||
      (myDivs[2].textContent === "close" &&
        myDivs[5].textContent === "close" &&
        myDivs[8].textContent === "close") ||
      (myDivs[0].textContent === "close" &&
        myDivs[4].textContent === "close" &&
        myDivs[8].textContent === "close") ||
      (myDivs[2].textContent === "close" &&
        myDivs[4].textContent === "close" &&
        myDivs[6].textContent === "close")
    ) {
      setTimeout(() => {
        myDivs.forEach((div) => {
          div.textContent = "";
          div.classList.remove("on");
          div.classList.add("off");
        });
        alert("You lose!");
      }, 300);
    } else if (arr.length === 9) {
      setTimeout(() => {
        myDivs.forEach((div) => {
          div.textContent = "";
          div.classList.remove("on");
          div.classList.add("off");
        });
        alert("You tied");
      }, 300);
    }
  });
});
