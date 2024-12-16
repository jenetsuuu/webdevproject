var tablinks = document.getElementsByClassName("tablinks");
var tabcontents = document.getElementsByClassName("tabcontents");

function opentab(tabname) {
    // Hide all tab contents
    for (let i = 0; i < tabcontents.length; i++) {
        tabcontents[i].classList.remove("activetab");
    }

    // Remove active class from all tab links
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("activelink");
    }

    // Show the clicked tab content
    document.getElementById(tabname).classList.add("activetab");

    // Add active class to the clicked tab link
    for (let i = 0; i < tablinks.length; i++) {
        if (tablinks[i].innerText.toLowerCase() === tabname) {
            tablinks[i].classList.add("activelink");
        }
    }
}
/*------contact----*/
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Send data to server (replace with your server-side code)
  fetch('/your-server-endpoint', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, message })
  })
  .then(response => {
    if (response.ok) {
      alert('Message sent successfully!');
      form.reset();
    } else {
      alert('Error sending message.');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('An error occurred. Please try again later.');
  });
});

//para sa gamay screen

var sm = document.getElementById("sidemenu");
function openmenu() {
  sm.style.right = "0";
}
function closemenu() {
  sm.style.right = "-200px";
}
const scriptURL = 'https://script.google.com/macros/s/AKfycbywpj3FKvKZMvSw72R9ab7Ght6v8y0x6Sq7LnK3CrPfk9-hdMll-YNsaKe-vcJRh4Pqhg/exec'
const formss = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

formss.addEventListener('submit', (e) => {
  e.preventDefault() // Prevent default form submission

  // Ask for confirmation before submitting
  const confirmation = confirm("Are you sure you want to submit the form?");

  if (confirmation) {
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => {
        msg.innerHTML = "Message sent successfully!";
        setTimeout(function(){
          msg.innerHTML = "";
        }, 5000)
        formss.reset();
      })
      .catch(error => console.error('Error!', error.message))
  } else {
    // User canceled submission
    console.log("Submission cancelled by user.");
  }
})