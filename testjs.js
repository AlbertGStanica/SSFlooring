document.getElementById("quoteForm").addEventListener("submit", async function(e) {
  e.preventDefault(); // stops page reload

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const response = await fetch("/api/sendQuote", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, message })
  });

  const data = await response.json();

  if (data.success) {
    alert("Quote request sent!");
    this.reset();
  } else {
    alert("Error sending quote.");
  }
});