const sliderFill = document.querySelector(".fill");
const timeLeftText = document.querySelector("#time-left");
let startCount = 5;
let timeLeft = startCount;

timerId = setInterval(() => {
  timeLeft--;
  timeLeftText.textContent = timeLeft;
  sliderFill.style.width = (timeLeft / startCount) * 100 + "%";
  if (timeLeft <= 0) {
    clearInterval(timerId);
    timeLeftText.textContent = "Fine";
    surprise()
  }
}, 1000);

function surprise() {
  const colors = [
    "rgba(177, 53, 117, 0.5)",
    "rgba(177, 53, 117, 0.5)",
    "rgba(60, 157, 227, 0.5)",
    "rgba(227, 60, 188, 0.5)",
    "rgba(12, 240, 240, 0.8)",
    'rgba(255, 69, 0, 0.8)'
  ];
  for (let i = 0; i < 500; i++) {
  setTimeout(() => {
   const circleElement =  document.createElement('div')
   circleElement.classList.add('circle')
   circleElement.style.left = Math.floor(Math.random() * 100) + '%'
   circleElement.style.top = Math.floor(Math.random() * 100) + '%'
   circleElement.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
   timeLeftText.append(circleElement)
  }, i * 5);

  }

}
