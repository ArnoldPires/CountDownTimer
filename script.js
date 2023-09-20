let countdown;
const timerDisplay = document.getElementById('timer');
const minutesInput = document.getElementById('minutesInput');
const secondsInput = document.getElementById('secondsInput');
const startButton = document.getElementById('startButton');

function updateTimerDisplay(minutes, seconds) {
  const display = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  timerDisplay.textContent = display;
}

function startTimer(minutes, seconds) {
  if (minutes === 0 && seconds === 0) return;

  clearInterval(countdown);

  let remainingMinutes = minutes;
  let remainingSeconds = seconds;
  updateTimerDisplay(remainingMinutes, remainingSeconds);

  countdown = setInterval(() => {
    if (remainingMinutes === 0 && remainingSeconds === 0) {
      clearInterval(countdown);
      // Play the alarm sound
      const alarmSound = document.getElementById('alarmSound');
      alarmSound.play();
      
      // Delay the alert by a few seconds to allow the sound to play
      setTimeout(() => {
        alert('Time is up!');
      }, 2000); // Adjust the delay time as needed (e.g., 2000 milliseconds = 2 seconds)
    } else {
      if (remainingSeconds === 0) {
        remainingMinutes--;
        remainingSeconds = 59;
      } else {
        remainingSeconds--;
      }
      updateTimerDisplay(remainingMinutes, remainingSeconds);
    }
  }, 1000);
}

startButton.addEventListener('click', () => {
  const minutes = parseInt(minutesInput.value, 10);  // Use value instead of ariaValueMax
  const seconds = parseInt(secondsInput.value, 10);  // Use value instead of ariaValueMax
  startTimer(minutes, seconds);
});

document.getElementById('preset5').addEventListener('click', () => {
  minutesInput.value = 5;
  secondsInput.value = 0;
});
document.getElementById('preset10').addEventListener('click', () => {
  minutesInput.value = 10;
  secondsInput.value = 0;
});
document.getElementById('preset20').addEventListener('click', () => {
  minutesInput.value = 20;
  secondsInput.value = 0;
});
document.getElementById('preset45').addEventListener('click', () => {
  minutesInput.value = 45;
  secondsInput.value = 0;
});
document.getElementById('preset60').addEventListener('click', () => {
  minutesInput.value = 60;
  secondsInput.value = 0;
});