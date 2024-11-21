window.onload = function () {
  var c = document.getElementById("theCanvas");
  var cxt = c.getContext("2d");

  var square1 = new Square(0, 0, 150, 150, "0000ff");
  var square2 = new Square(150, 0, 150, 150, "00ff00");
  var square4 = new Square(0, 150, 150, 150, "ff0000");
  var square3 = new Square(150, 150, 150, 150, "ff00ff");
  var t;
  var timer_is_on = 0;

  function drawCanvas() {
    square1.draw(cxt);
    square2.draw(cxt);
    square3.draw(cxt);
    square4.draw(cxt);
  }

  function swapColor(square1, square2) {
    var tempColor = square1.getBackgroundColor();
    square1.setColor(square2.getBackgroundColor());
    square2.setColor(tempColor);
  }

  function swapSquares() {
    swapColor(square1, square2);
    swapColor(square2, square3);
    swapColor(square3, square4);

    drawCanvas();
  }

  function animate() {
    swapSquares();
    setTimeout(function () {
      animate();
    }, 1000);
  }

  function doTimer() {
    if (!timer_is_on) {
      timer_is_on = 1;
      animate();
    }
  }
  doTimer();

  // 다크 모드 토글 버튼 추가
  const themeToggle = document.getElementById("themeToggle");
  const body = document.body;

  // 저장된 테마 불러오기
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
  }

  // 테마 토글 이벤트
  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // 현재 테마를 localStorage에 저장
    const currentTheme = body.classList.contains("dark-mode") ? "dark" : "light";
    localStorage.setItem("theme", currentTheme);

    
  });
};
