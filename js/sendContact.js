const form = document.querySelector("#contactForm");

async function sendData() {
  const formData = new FormData(form);
  const value = Object.fromEntries(formData.entries());
  // Associate the FormData object with the form element

  try {
    const response = await fetch(
      "https://dxiz2vvqs4cxkploqr2eydgwiy0rwtva.lambda-url.eu-west-1.on.aws/",
      {
        method: "POST",
        // Set the FormData instance as the request body
        body: JSON.stringify({
          name: value.name,
          email: value.email,
          message: value.message,
        }),
      }
    );

    console.log(await response.json());
    alert("Your message was sent. Thank you for your feedback.");
  } catch (e) {
    console.error(e);
    alert("Your message was not sent. Please try again later.");
  }
}

// Take over form submission
form.addEventListener("submit", (event) => {
  sendData();
});
