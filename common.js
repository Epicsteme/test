//ADD HEADER NAVIGATION
class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <header id="header">
        
        <nav class="navbar navbar-expand-lg py-0 mx-0 my-0" aria-label="Primary navigation">
            
            <a href="./" class="navbar-brand" aria-current="page">
                
                <h1 class="text-start" aria-hidden="true">
                    Epicsteme
                </h1>
                
            </a>
            
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#toggleMobileMenu" aria-controls="toggleMobileMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="toggleMobileMenu">
                <ul class="navbar-nav ms-auto" role="menubar">
                    <li class="ms-3 mb-3" role="none">
                        <a class="text-black hover-underline" href="./" role="menuitem"> Home </a>
                    </li>
                    <li class="ms-3 mb-3" role="none">
                        <a class="text-black hover-underline" href="blog.html" role="menuitem"> Blog </a>
                    </li>
                    <li class="ms-3 mb-3" role="none">
                        <a class="text-black hover-underline" href="literature.html" role="menuitem"> Literature </a>
                    </li>
                    <li class="ms-3 mb-3" role="none">
                        <a class="text-black hover-underline" href="3d-models.html" role="menuitem"> 3D Models </a>
                    </li>
                    <li class="ms-3 mb-3" role="none">
                        <a class="text-black hover-underline" href="https://pikonparadox.itch.io/" target="_blank" rel="noopener noreferrer" role="menuitem"> Games </a>
                    </li>
                    <li class="ms-3 mb-3" role="none">
                        <a class="text-black hover-underline" href="about.html" role="menuitem"> About </a>
                    </li>
                </ul>
            </div>
        </nav>
        <hr class="mt-0 mb-2">
    </header> `;
  }
}

//IMPLEMENT FUNCTION HEADER
customElements.define("my-header", MyHeader);

//

//ADD FOOTER NAVIGATION
class FooterNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<footer class="container-lg text-center mb-3" aria-label="Footer navigation">
    <hr class="container-lg">
    <nav aria-label="Footer site links">
        <ul class="list-inline mb-0" role="menubar">
            <li class="list-inline-item hover-underline" role="link"><a class="text-black" href="./" role="menuitem">Home</a></li>
            <li class="list-inline-item hover-underline" role="link"><a class="text-black" href="blog.html" role="menuitem">Blog</a></li>
            <li class="list-inline-item hover-underline" role="link"><a class="text-black" href="literature.html" role="menuitem">Literature</a></li>
            <li class="list-inline-item hover-underline" role="link"><a class="text-black" href="3d-models.html" role="menuitem">3D Models</a></li>
            <li class="list-inline-item hover-underline" role="link"><a class="text-black" href="https://pikonparadox.itch.io/" target="_blank" rel="noopener noreferrer" role="menuitem">Games</a></li>
            <li class="list-inline-item hover-underline" role="link"><a class="text-black" href="about.html" role="menuitem">About</a></li>
        </ul>
    </nav>
</footer>
        `;
  }
}

//IMPLEMENT FUNCTION FOOTER
customElements.define("footer-nav", FooterNav);

//LOAD BOOTSTRAP CSS AND JS FROM A CDN
class SiteAssets extends HTMLElement {
  connectedCallback() {
    // Add Bootstrap CSS CDN
    if (!document.getElementById("bootstrap-css-cdn")) {
      const link = document.createElement("link");
      link.id = "bootstrap-css-cdn";
      link.rel = "stylesheet";
      link.href =
        "https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css";
      link.integrity =
        "sha384-LN+7fdVzj6u52u30Kp6M/trliBMCMKTyK833zpbD+pXdCLuTusPj697FH4R/5mcr";
      link.crossOrigin = "anonymous";
      document.head.appendChild(link);
    }

    // Add BOOTSTRAP JS CDN
    if (!document.getElementById("bootstrap-js-cdn")) {
      const script = document.createElement("script");
      script.id = "bootstrap-js-cdn";
      script.src =
        "https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js";
      script.integrity =
        "sha384-ndDqU0Gzau9qJ1lfW4pNLlhNTkCfHzAVBReH9diLvGRem5+R9g2FzA8ZGN954O5Q";
      script.crossOrigin = "anonymous";
      script.onload = () => {
        // Dispatch a custom event when Bootstrap JS is loaded
        document.dispatchEvent(new Event("bootstrap:loaded"));
      };
      document.head.appendChild(script);
    } else {
      // If already loaded, dispatch immediately
      document.dispatchEvent(new Event("bootstrap:loaded"));
    }
  }
}

// IMPLEMENT FUNCTION TO LOAD BOOTSTRAP ASSETS
customElements.define("site-assets", SiteAssets);

// WAIT TO SHOW INDEX PAGE CONTENTS
// this seems to be tied to "fade-content" and "fade-content.visible" in custom.css
window.addEventListener("load", () => {
  // Fade in homeintro after 0.25 seconds (250 ms)
  setTimeout(() => {
    document.getElementById("homebody").classList.add("visible");
  }, 250);

  /* Fade in hometitles after 1.0 seconds (1000 ms)
  setTimeout(() => {
    document.getElementById("hometitles").classList.add("visible");
  }, 2000);*/
});

//LOOP CAROUSEL OF TITLES ON HOME PAGE
// List of titles to cycle through
const hometitles = [
  "Artist",
  "Educator",
  "Amateur Writer",
  "Amateur Philosopher",
  "Indie Game Developer",
];

// Configuration variables (all times in milliseconds)
const homeTitlesFadeTime = 250; // duration of fade in/out
const hometitlesHoldTime = 2000; // time title stays fully visible
const homeTitlesWaitTime = 0; // time to wait before showing the next title

// Select the HTML element where the titles will appear
const titleEl = document.querySelector(".hometitles");

// Update the CSS transition property based on fadeTime
// This makes the fade duration dynamic based on our configuration
titleEl.style.transition = `opacity ${homeTitlesFadeTime / 1000}s`;

// Index to keep track of the current title in the array
let homeTitlesIndex = 0;

// Function to show the next title
function showNextTitle() {
  // Set the current title text
  titleEl.textContent = hometitles[homeTitlesIndex];

  // Fade in the title by setting opacity to 1
  titleEl.style.opacity = 1;

  // After the title has been visible for 'hometitlesHoldTime', start fading out
  setTimeout(() => {
    titleEl.style.opacity = 0; // fade out

    // Wait for the fade out to finish before moving to the next title
    setTimeout(() => {
      // Move to the next title in the array
      homeTitlesIndex = (homeTitlesIndex + 1) % hometitles.length;

      // Wait 'homeTitlesWaitTime' before starting fade-in for the next title
      setTimeout(showNextTitle, homeTitlesWaitTime);
    }, homeTitlesFadeTime); // this delay matches the fade-out duration
  }, hometitlesHoldTime); // this delay matches the hold duration
}
// Start the loop for cycling titles
showNextTitle();

//SUBSCRIBE
// URL of your Google Apps Script Web App
// This is where all form data will be sent
const SCRIPT_URL = "PASTE_YOUR_WEBAPP_URL_HERE";

// Attach click event listeners to the Subscribe and Unsubscribe buttons
// ?. ensures this only runs if the element exists on the page
document.getElementById("subscribeBtn")?.addEventListener("click", subscribe);
document.getElementById("unsubscribeBtn")?.addEventListener("click", unsubscribe);

// Function to handle subscription
function subscribe() {
  // Get the email input field
  const emailField = document.getElementById("email");

  // Get all checkboxes with the class "category"
  const checkboxes = document.querySelectorAll(".category");

  // Object to store which categories the user selected
  const selected = {};

  // Flag to check if at least one checkbox is selected
  let atLeastOneChecked = false;

  // Loop through all checkboxes
  checkboxes.forEach(cb => {
    // Store "yes" if checked, "no" if not
    selected[cb.id] = cb.checked ? "yes" : "no";
    // Update flag if at least one is checked
    if (cb.checked) atLeastOneChecked = true;
  });

  // Validate email field
  if (!emailField.value) {
    document.getElementById("response").innerText = "Please enter a valid email.";
    return; // Stop function if email is empty
  }

  // Validate that at least one checkbox is selected
  if (!atLeastOneChecked) {
    document.getElementById("response").innerText = "Please select at least one category.";
    return; // Stop function if none selected
  }

  // Create data object to send to Google Apps Script
  const data = {
    email: emailField.value,
    ...selected, // Add all checkbox selections
    action: "subscribe" // Action type for the backend
  };

  // Send subscription data to Google Apps Script
  fetch(SCRIPT_URL, {
    method: "POST", // Using POST to send data
    body: JSON.stringify(data) // Convert data object to JSON string
  })
  .then(res => res.text()) // Read response as text
  .then(txt => {
    // Show success message
    document.getElementById("response").innerText = "Subscription successful! Thank you.";

    // Clear the email input field
    emailField.value = "";

    // Uncheck all checkboxes
    checkboxes.forEach(cb => cb.checked = false);
  })
  .catch(err => {
    // Handle any errors (e.g., network issues)
    console.error(err);
    document.getElementById("response").innerText = "An error occurred. Please try again.";
  });
}

// Function to handle unsubscription
function unsubscribe() {
  // Get the unsubscribe email input field
  const emailField = document.getElementById("unsubscribeEmail");

  // Validate email input
  if (!emailField.value) {
    document.getElementById("response").innerText = "Please enter a valid email.";
    return; // Stop function if empty
  }

  // Create data object for unsubscription
  const data = {
    email: emailField.value,
    action: "unsubscribe" // Action type for backend
  };

  // Send unsubscribe request to Google Apps Script
  fetch(SCRIPT_URL, {
    method: "POST", // POST request
    body: JSON.stringify(data) // Convert data to JSON string
  })
  .then(res => res.text()) // Read response as text
  .then(txt => {
    // Show success message
    document.getElementById("response").innerText = "Unsubscribed successfully.";

    // Clear the unsubscribe email input field
    emailField.value = "";
  })
  .catch(err => {
    // Handle any errors
    console.error(err);
    document.getElementById("response").innerText = "An error occurred. Please try again.";
  });
}
