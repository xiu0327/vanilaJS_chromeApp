const h1 = document.querySelector(".hello");
const standard = [900, 1400];
window.onresize = function () {
  const innerSize = window.innerWidth;
  if (innerSize <= standard[0]) {
    document.body.style.backgroundColor = "cornflowerblue";
  } else if (innerSize > standard[0] && innerSize <= standard[1]) {
    document.body.style.backgroundColor = "purple";
  } else {
    document.body.style.backgroundColor = "darkgoldenrod";
  }
};
