const canvas = document.getElementById("snakegamecanvas");
const ctx = canvas.getContext("2d");
const scoreAttended = document.getElementById("attended");
const scoreRight = document.getElementById("right");
const scoreWrong = document.getElementById("wrong");
const backMusic = new Audio('https://raw.github.com/fmaxsavio/mcq-tvsts/main/BGM.mp3');
const answerRight = new Audio('https://raw.github.com/fmaxsavio/mcq-tvsts/main/Right.mp3');
const answerWrong = new Audio('https://raw.github.com/fmaxsavio/mcq-tvsts/main/Wrong.mp3');
canvas.width = 900;
canvas.height = 400;
let snake = [{ x: 10, y: 10 }];
let snakeLength = 1;
let direction = { x: 0, y: 0 };
let food = { x: 15, y: 15, type: "" };
let score = 0;
let currentQuestion = 0;
let playerName = "";
let playerName1 = "";
let foods = [];
let foodXCoordinate = [];
let foodYCoordinate = [];
let correctFood = { x: 15, y: 15, type: "" };
let isGameEnded = false;
let timer = null;
let isShuffled = false;
let attended = 0;
let right = 0;
let wrong = 0;
let questionLog = [];
let startTime, endTime, timePlayed;
function startGame() {
  startTime = new Date();
  console.log("Game started at: " + startTime);
  playerName = document.getElementById("playerName").value;
  playerName1 = document.getElementById("playerName1").value;
  backMusic.volume = 0.10;
  backMusic.loop = true;  // Ensure the bgm loops continuously
  backMusic.play();
  if (!playerName) {
    alert("Please enter your register number to start the game.");
    return;
  }
  if (!playerName1) {
    alert("Please enter your name to start the game.");
    return;
  }
  document.getElementById("nameEntry").style.display = "none";
  document.getElementById("generalInstructions").style.display = "none";
  document.getElementById("subjectDetails").style.display = "none";
  document.getElementById("gamePage").style.display = "flex";
  document.getElementById("gameHeader").style.display = "flex";
  document.getElementById("player").innerText = playerName;
  console.log("Game Started with player name:", playerName); // Debugging line
  loadQuestion();
  gameLoop();
}
function loadQuestion() {
  const score = document.getElementById("score");
  shuffleArray(questions);
    const questionObj = questions[currentQuestion];
  document.getElementById("question").innerText = questionObj.q;
  const optionsContainer = document.getElementById("options");
  optionsContainer.innerHTML = "";
  const shapes = ["square", "circle", "diamond", "triangle"];
  // shuffleArray(shapes);
  foods = [];
  foodXCoordinate = [];
  foodYCoordinate = [];
  questionObj.options.forEach((option, index) => {
    const div = document.createElement("div");
    div.classList.add("optionwrapper");
    const li = document.createElement("div");
    div.appendChild(li);
    li.classList.add(shapes[index]);
    li.dataset.index = index;
    const span = document.createElement("span");
    div.appendChild(span);
    span.innerText = option;
    optionsContainer.appendChild(div);
    placeFood(index, shapes);
  });
  let correctIndex = questionObj.answer;
  correctFood = {
    x: foods[correctIndex].x,
    y: foods[correctIndex].y,
    type: foods[correctIndex].type,
  };
  }
function placeFood(index, shapes) {
  const correctShape = shapes[index];
  const randomX = Math.floor(Math.random() * (canvas.width / 10)) * 10;
  const randomY = Math.floor(Math.random() * (canvas.height / 10)) * 10;
  food = { x: randomX, y: randomY, type: correctShape };
  foods.push(food);
  foodXCoordinate.push(food.x);
  foodYCoordinate.push(food.y);
  drawShape(food);
}
function gameLoop() {
  updateSnake();
  const isOver = isGameOver();
  if (isGameEnded) {
    return;
  }
  render();
  timer = setTimeout(gameLoop, 200);
}
//click on the screen to pause/resume
function wait() {
  if (timer) {
    clearTimeout(timer);
    timer = null;
  } else {
    timer = setTimeout(gameLoop, 100);
  }
}
function updateSnake() {
  let growing = false;
  let shrinking = false;
  let updatedX = snake[0].x + direction.x * 10;
  updatedX =
    updatedX > canvas.width ? 0 : updatedX < 0 ? canvas.width : updatedX;
  let updatedY = snake[0].y + direction.y * 10;
  updatedY =
    updatedY > canvas.height ? 0 : updatedY < 0 ? canvas.height : updatedY;
  const head = { x: updatedX, y: updatedY };
  // console.log("head====" + head.x + "," + head.y);
  // console.log("correctFood====" + correctFood.x + "," + correctFood.y);
  // console.log("food====" + foodXCoordinate + "," + foodYCoordinate);
  snake.unshift(head);
  document.getElementById("currentScore").innerText = score;
  scoreAttended.innerText = attended;
  scoreRight.innerText = right;
  scoreWrong.innerText = wrong;
  if (head.x === correctFood.x && head.y === correctFood.y) {
    console.log("snake growing...");
    growing = true;
    answerRight.play();
    snakeLength++;
    score++;
    attended++;
    right++;
    wrong;
    const selectedAnswer = foods.findIndex((param) => param.x === head.x);
    const ansIndex = questions[currentQuestion].answer;
    questionLog.push({
      question: questions[currentQuestion].q,
      selectedAnswer: questions[currentQuestion].options[selectedAnswer],
      rightAnswer: questions[currentQuestion].options[ansIndex],
    });
    currentQuestion++;
    console.log("score--", score);
    if (snakeLength > 1) {
      clearTimeout(timer);
      loadQuestion();
    } else {
      clearTimeout(timer);
      timer = null;
      endGame(true);
    }
    // } else if (snake.length < snakeLength) {
    //   console.log("snake shrinking...");
    //   snake.pop(); //removes
  } else if (
    (foodXCoordinate[0] === head.x && foodYCoordinate[0] === head.y) ||
    (foodXCoordinate[1] === head.x && foodYCoordinate[1] === head.y) ||
    (foodXCoordinate[2] === head.x && foodYCoordinate[2] === head.y) ||
    (foodXCoordinate[3] === head.x && foodYCoordinate[3] === head.y)
  ) {
    console.log("snake shrinking...");
    snake = [...snake.slice(0, snake.length - 2)]; //removes
    shrinking = true;
    answerWrong.play();
    snakeLength--;
    score;
    attended++;
    wrong++;
    right;
    const selectedAnswer = foods.findIndex((param) => param.x === head.x);
    const ansIndex = questions[currentQuestion].answer;
    questionLog.push({
      question: questions[currentQuestion].q,
      selectedAnswer: questions[currentQuestion].options[selectedAnswer],
      rightAnswer: questions[currentQuestion].options[ansIndex],
    });
    currentQuestion++;
    if (snakeLength > 1) {
      clearTimeout(timer);
      loadQuestion();
    } else {
      clearTimeout(timer);
      timer = null;
      endGame(true);
    }
  } else snake.pop(); //removes
}
function render() {
  ctx.fillStyle = "black"; // Or any other colora
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "red";
  var img = new Image(); // Create new img element
  img.src =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAMAAAC67D+PAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAA21BMVEXoTTvqTTzpUD7nTjzmTTvrUkDpTjzmSznUPSrVPCrnTDrSOSfTOizlTDrvoJnoqJ/pVkTmU0P5urH1p53mSTjjPiv7nZF0f4NZaGvpn5b9s6qDl5iira/+nI/jPirkPyz7lop+iYtleHzsnpT7raOTpqqqtbf4lovnSjf0lorylonpSDbnTDj5oZf2mIzlSDXkOyjIY1vrd2rrWEbZZ1zYQDLsTTroTz/lRjPalY7+///////j19fVSz7tTjvmTjntRjPialzZhH3sVkXsSzniRTTYQTDmSTbmTT3qb45jAAAAAWJLR0Q7OQ70bAAAAAd0SU1FB+QEDw4AEYzMSFoAAABvSURBVAjXY2BgZGJiZmFlZWNgYGDn4GTn4ubhBTJZ+PgFBIWERdgYRMXEJSSlpGVk5RjkFRSVlFVU1dTlGRg0NLW0dXT19JkZGNgMDI2MTUzNgNrMLSytrG1s7eyBbGYHRydnFwYwYHN1c/dgYAAAtKsKjnGo4BwAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDQtMTVUMTQ6MDA6MTctMDQ6MDAVi7z/AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA0LTE1VDE0OjAwOjE3LTA0OjAwZNYEQwAAAABJRU5ErkJggg==";

  for (var i = 0; i < snake.length; i++) {
    //  if (!i) {
    ctx.drawImage(img, snake[i].x, snake[i].y, 12, 12);
  }
  // snake.forEach((part) => ctx.fillRect(part.x, part.y, 10, 10));
  ctx.fillStyle = getShapeColor(food.type);
  drawShape(food);
  foods.forEach((f) => {
    drawShape(f);
  });
}
function drawShape(food) {
  const x = food.x + 5;
  const y = food.y + 5;
  ctx.save();
  ctx.fillStyle = getShapeColor(food.type);
  switch (food.type) {
    case "square":
      ctx.fillRect(food.x, food.y, 10, 10);
      break;
    case "circle":
      ctx.beginPath();
      ctx.arc(x, y, 5, 0, 2 * Math.PI);
      ctx.fill();
      break;
    case "diamond":
      ctx.translate(x, y);
      ctx.rotate((45 * Math.PI) / 180);
      ctx.fillRect(-5, -5, 10, 10);
      break;
    case "triangle":
      ctx.beginPath();
      ctx.moveTo(food.x + 5, food.y);
      ctx.lineTo(food.x + 10, food.y + 10);
      ctx.lineTo(food.x, food.y + 10);
      ctx.closePath();
      ctx.fill();
      break;
  }
  ctx.restore();
}
function getShapeColor(shape) {
  switch (shape) {
    case "square":
      return "chartreuse";
    case "circle":
      return "gold";
    case "diamond":
      return "azure";
    case "triangle":
      return "orange";
  }
}
function isGameOver() {
  const head = snake[0];
    if (
    head.x < 0 ||
    head.x >= canvas.width ||
    head.y < 0 ||
    head.y >= canvas.height ||
    snake.some(
      (part, index) => index !== 0 && part.x === head.x && part.y === head.y
    )
  ) {
    return true;
  }
  return false;
}
function endGame(won = false) {
  endTime = new Date(); // Capture the current time
  console.log("Game ended at: " + endTime);
  timePlayed = (endTime - startTime) / 1000; // Divide by 1000 to convert milliseconds to seconds
  backMusic.pause();
  backMusic.currentTime = 0;
  console.log("Time played: " + timePlayed + " seconds");
  isGameEnded = true;
  document.getElementById("game-screen").style.display = "none";
  document.getElementById("game-over-screen").style.display = "flex";
  document.getElementById("regNo").innerText = playerName1;
  document.getElementById("name").innerText = playerName;
  document.getElementById("finalScore").innerText = score < 0 ? 0 : score;
  document.getElementById("finalAttended").innerText = attended;
  document.getElementById("finalRight").innerText = right;
  document.getElementById("finalWrong").innerText = wrong;
  }
function generatePDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  const pageHeight = doc.internal.pageSize.height; // Get page height in mm
  const marginTop = 20;
  const lineSpacing = 8;
  const blockSpacing = 25; // Space between questions
  let yPos = marginTop;

  const now = new Date();
  const date = now.toLocaleDateString();
  const time = now.toLocaleTimeString();

  // --- Header ---
  doc.setFontSize(12);
  doc.text(20, yPos, `Student Details: ${playerName} ${playerName1}`);
  yPos += lineSpacing;
  doc.text(20, yPos, "Subject Details: EC2801 Electromagnetic Theory");
  yPos += lineSpacing;
  doc.text(20, yPos, "Assessment & CO : Skill Assessment | CO1");
  yPos += lineSpacing;
  doc.text(20, yPos, `Time played: ${timePlayed} seconds`);
  yPos += lineSpacing;
  doc.text(20, yPos, "Course Trainer: Mr. F. Max Savio, AP/EEE");
  yPos += 15; // Extra gap before questions

  // --- Questions Section ---
  questionLog.forEach((entry, index) => {
    // If nearing bottom of page, add new page
    if (yPos + blockSpacing * 2 > pageHeight - 20) {
      doc.addPage();
      yPos = marginTop;
    }

    doc.setFontSize(12);
    doc.text(20, yPos, `Q${index + 1}: ${entry.question}`);
    yPos += lineSpacing + 2;
    doc.text(20, yPos, `Selected Answer: ${entry.selectedAnswer}`);
    yPos += lineSpacing + 2;
    doc.text(20, yPos, `Correct Answer: ${entry.rightAnswer}`);
    yPos += blockSpacing;
  });

  // --- Save PDF ---
  doc.save(`${playerName}_game_results.pdf`);
}
function updateGoogleSheet(name, score) {
  const url =
    "https://script.google.com/macros/s/AKfycbwBpK8vLV96Dl_ZNWh4R07YONFsvhoO-_efEjevmG9T-hmM4IHEI9n_6tEla9SYAWS7/exec";
  const data = { name: name, score: score };
  fetch(url, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log("Success:", result);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
function shuffleArray(array) {
  if (isShuffled){
    return array;
  }
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
window.addEventListener("blur", (e) => {
  if (document.getElementById("gamePage").checkVisibility()) {
    clearTimeout(timer);
    timer = null;
    endGame(true);
  }
});
window.addEventListener("resize", (e) => {
  if (document.getElementById("gamePage").checkVisibility()) {
    clearTimeout(timer);
    timer = null;
    endGame(true);
  }
});
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});
document.addEventListener("keydown", (e) => {
  if (e.key == "F12") {
    e.preventDefault();
  }
  switch (e.key) {
    case "ArrowUp":
      if (direction.y === 0) direction = { x: 0, y: -1 };
      break;
    case "ArrowDown":
      if (direction.y === 0) direction = { x: 0, y: 1 };
      break;
    case "ArrowLeft":
      if (direction.x === 0) direction = { x: -1, y: 0 };
      break;
    case "ArrowRight":
      if (direction.x === 0) direction = { x: 1, y: 0 };
      break;
  }
});


