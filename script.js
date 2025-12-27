document.getElementById("whatsappForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;

  const phoneNumber = "917709450974"; // apna WhatsApp number (country code ke sath)

  const whatsappMessage = 
    `Hello, my name is ${name}. I would like to discuss a project.\n\nMessage: ${message}`;

  const whatsappURL = 
    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  window.open(whatsappURL, "_blank");
});
