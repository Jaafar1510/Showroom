document.addEventListener("DOMContentLoaded", function() {
      // Check if the user has visited before
      const hasVisited = localStorage.getItem("visited");

      if (!hasVisited) {
        // If not, prompt for the name
        const userName = prompt("Please enter your name:");

        // Greet the user with a personalized message
        if (userName) {
          alert("Welcome, " + userName + "!");
          // Set the "visited" flag in local storage
          localStorage.setItem("visited", "true");


          // Update the page content with the welcome message
          const welcomeMessage = document.createElement("p");
          welcomeMessage.textContent = "Welcome, " + userName + "!";
          document.body.appendChild(welcomeMessage);
        }
      }
    });