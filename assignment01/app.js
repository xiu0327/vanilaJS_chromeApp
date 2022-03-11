const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/

const hello = document.querySelector("h2");
const superEventHandler = {
  handelMounseEnter: () => {
    hello.style.color = colors[0];
    hello.innerText = "The Mouse is here!";
  },
  handelMouseLeave: () => {
    hello.style.color = colors[1];
    hello.innerText = "The Mouse is gone!";
  },
  handelResize: () => {
    hello.style.color = colors[2];
    hello.innerText = "You just resized!";
  },
  handelContextmenu: () => {
    hello.style.color = colors[3];
    hello.innerText = "That was right click!";
  }
};

hello.addEventListener("mouseenter", superEventHandler.handelMounseEnter);
hello.addEventListener("mouseleave", superEventHandler.handelMouseLeave);
window.addEventListener("resize", superEventHandler.handelResize);
window.addEventListener("contextmenu", superEventHandler.handelContextmenu);
