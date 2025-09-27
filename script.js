// Toggle project descriptions
document.querySelectorAll(".toggle-btn").forEach(button => {
  button.addEventListener("click", () => {
    const description = button.nextElementSibling;

    if (description.style.display === "block") {
      description.style.display = "none";
      button.textContent = "View Details";
    } else {
      description.style.display = "block";
      button.textContent = "Hide Details";
    }
  });
});

document.getElementById("contactForm").addEventListener("submit", function(e) {
      e.preventDefault();

      let valid = true;

      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const message = document.getElementById("message");

      // reset placeholders
      name.placeholder = "Your Name";
      email.placeholder = "Your Email";
      message.placeholder = "Your Message";

      // validate name (not empty, letters only)
      if (name.value.trim() === "" || !/^[A-Za-z\s]+$/.test(name.value)) {
        name.value = "";
        name.placeholder = "⚠️ Enter a valid name (letters only)";
        valid = false;
      }

      // validate email (basic pattern)
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (email.value.trim() === "" || !emailPattern.test(email.value)) {
        email.value = "";
        email.placeholder = "⚠️ Enter a valid email";
        valid = false;
      }

      // validate message (min 10 chars)
      if (message.value.trim().length < 10) {
        message.value = "";
        message.placeholder = "⚠️ Message must be at least 10 characters";
        valid = false;
      }

      // if all valid
      if (valid) {
        alert("✅ Message sent successfully!");
        this.reset();
      }
    });
document.addEventListener("DOMContentLoaded", () => {
  const progressBars = document.querySelectorAll(".skill-progress");
  progressBars.forEach(bar => {
    const width = bar.style.width;   // get target width from HTML
    bar.style.width = "0";           // start from 0
    setTimeout(() => {
      bar.style.width = width;       // animate to target width
    }, 600);
  });
});


