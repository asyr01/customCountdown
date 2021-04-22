const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdownForm');
const dateEl = document.getElementById('date-picker');

const countdownEl = document.getElementById('countdown');
const countdownElTitle = document.getElementById('countdown-title');
const countdownBtn = document.getElementById('countdown-button');
const timeElements = document.querySelectorAll('span');

// Global variables for title and date
let countdownTitle = '';
let countdownDate = '';
let countdownValue = Date;

// Set date input min with today's date

const today = new Date().toISOString().split('T')[0];
dateEl.setAttribute('min', today);

// Take values from form input
function updateCountdown(e) {
  e.preventDefault();
  countdownTitle = e.srcElement[0].value;
  countdownDate = e.srcElement[1].value;
  // Get number version of current date, updateDOM.
  countdownValue = new Date(countdownDate).getTime();
}

// Event listeners
countdownForm.addEventListener('submit', updateCountdown);
