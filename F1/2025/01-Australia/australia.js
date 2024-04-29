  // Set the dates for each event
  var eventDates = [
    new Date("Jan 16, 2024 00:23:00").getTime(),
    new Date("Mar 14, 2024 01:30:00").getTime(),
    new Date("Mar 14, 2024 05:00:00").getTime(),
    new Date("Mar 15, 2024 01:30:00").getTime(),
    new Date("Mar 15, 2024 05:00:00").getTime(),
    new Date("Mar 16, 2024 04:00:00").getTime(),
    // ... add more dates for events up to 120
  ];

  // Set the titles for each event
  var eventTitles = [
    "F1",
    "FP1",
    "FP2",
    "FP3",
    "Qualifying",
    "Race",
    // ... add more titles for events up to 120
  ];

  // Initialize the index for the current event
  var currentIndex = 0;

  // Function to update the countdown
function updateCountdown() {
  // Get the current date/time in the user's local time zone
  var now = new Date().getTime();

  // Get the user's timezone offset in milliseconds
  var userTimezoneOffset = new Date().getTimezoneOffset() * 60000;

  // Adjust the current time to the user's timezone
  now += userTimezoneOffset;

  var distance = eventDates[currentIndex] - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  var countdownText = eventTitles[currentIndex] + ": " + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  document.getElementById("countdown").innerHTML = countdownText;

  if (distance < 0) {
    // Move to the next event
    currentIndex++;

    // Check if there are more events
    if (currentIndex < eventDates.length) {
      // Set the interval for the next event
      setTimeout(updateCountdown, 1000);
    } else {
      // All events are done
      document.getElementById("countdown").innerHTML = "RACE WEEKEND FINISHED";
    }
  } else {
    // Schedule the next update
    setTimeout(updateCountdown, 1000);
  }
}

// Start the countdown for the first event
updateCountdown();