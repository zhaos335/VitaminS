
const images = [
  "Images/A.jpg", //A
  "Images/B.jpg", //B
  "Images/C.jpg", //C
  "Images/D.jpg", //D
  "Images/E.jpg", //E
  "Images/F.png", //F
  "Images/G.jpg", //G
  "Images/H.jpg", //H
  "Images/I.png", //I
  "Images/J.jpg", //J
  "Images/K.jpg", //K
  "Images/L.jpg", //L
  "Images/M.jpg", //M
  "Images/N.jpg", //N
  "Images/O.jpg", //O
  "Images/P.jpg", //P
  "Images/Q.jpg", //Q
  "Images/R.jpg", //R
  "Images/S.jpg", //S
  "Images/T.jpg", //T
  "Images/U.png", //U
  "Images/V.png", //V
  "Images/W.jpg", //W
  "Images/X.png", //X
  "Images/Y.jpg", //Y
  "Images/Z.jpg"  //Z
];

function displayImage() {
  const input = document.getElementById("charInput").value.toUpperCase();
  const imgElement = document.getElementById("displayedImage");

  const index = input.charCodeAt(0) - 65;

  // 切换为非封面模式
  imgElement.classList.remove("cover");

  if (index >= 0 && index < images.length) {
    imgElement.src = images[index];
  } else {
    imgElement.src = "Images/cover.png";
  }
}

function goHome() {
  const imgElement = document.getElementById("displayedImage");
  const input = document.getElementById("charInput");

  imgElement.src = "Images/cover.png";
  imgElement.classList.add("cover"); // 恢复全屏封面
  input.value = ""; // 清空输入框
}