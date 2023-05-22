let iconHeader = document.getElementById("iconHeader");

iconHeader.addEventListener("mouseover", function () {
  iconHeader.src = "./assets/imgs/icone-03.png";
  iconHeader.style.scale = "1.1";
});
iconHeader.addEventListener("mouseout", function () {
  iconHeader.src = "./assets/imgs/icone-02.png";
  iconHeader.style.scale = "1";
});
