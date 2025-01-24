/** hamburger meny start */
const navEl = document.querySelector(".nav");
const hamburgerEl = document.querySelector(".hamburger");

hamburgerEl.addEventListener("click", () => {
  navEl.classList.toggle("nav--open");
  hamburgerEl.classList.toggle("hamburger--open");
});

navEl.addEventListener("click", () => {
  navEl.classList.remove("nav--open");
  hamburgerEl.classList.remove("hamburger--open");
});
/** hamburger meny slutt */


/** bord booking start */
document.getElementById('reservation-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  const numPeople = document.getElementById('num-people').value;

  // Validation for date in DD/MM/YYYY format
  const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/; // DD/MM/YYYY

  if (!dateRegex.test(date)) {
      alert('Please enter a valid date in the format DD/MM/YYYY.');
      return;
  }

  // Validation for time in HH:MM format
  const timeRegex = /^\d{2}:\d{2}$/; // HH:MM

  if (!timeRegex.test(time)) {
      alert('Please enter a valid time in the format HH:MM.');
      return;
  }

  const reservationList = document.getElementById('reservations');
  const reservationItem = document.createElement('li');
  reservationItem.textContent = `${name} - ${date} ${time} - ${numPeople} people`;

  reservationList.appendChild(reservationItem);

  // Clear the form
  document.getElementById('reservation-form').reset();
});



/**bord booking slutt */