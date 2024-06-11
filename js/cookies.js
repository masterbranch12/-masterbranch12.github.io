const consentBox = document.getElementById("consentBox");
const acceptBtn = document.querySelector(".consentButton");
const rejectBtn = document.querySelector(".rejectButton");

acceptBtn.onclick = () => {
  document.cookie = encodeURIComponent(
    "CookieConsentNS; max-age=63072000; Secure; SameSite=None; path=/"
  );
  if (document.cookie) {
    consentBox.classList.add("hide");
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-6R6TCGNXDC");
  }
};

rejectBtn.onclick = () => {
  consentBox.classList.add("hide");
};

let checkCookie = document.cookie.indexOf("CookieConsentNS");
checkCookie !== -1
  ? consentBox.classList.add("hide")
  : consentBox.classList.remove("hide");
