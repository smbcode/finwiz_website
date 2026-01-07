const API = "http://localhost:5000";

console.log("auth.js loaded");

// ================= LOGIN =================
document.getElementById("loginForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = e.target.querySelector('input[type="email"]').value.trim();
  const password = e.target.querySelector('input[type="password"]').value.trim();

  const res = await fetch(`${API}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();

  if (data.token) {
    localStorage.setItem("token", data.token);
    window.location.href = "index.html";
  } else {
    alert(data.message);
  }
});

// ================= SIGNUP =================
document.getElementById("signupForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = e.target.querySelector('input[type="text"]').value.trim();
  const email = e.target.querySelector('input[type="email"]').value.trim();
  const password = e.target.querySelector('input[type="password"]').value.trim();

  const res = await fetch(`${API}/auth/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password })
  });

  const data = await res.json();
  alert(data.message || "Signup successful");
  window.location.href = "login.html";
});

// ================= FORGOT PASSWORD =================
document.getElementById("forgotForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = e.target.querySelector('input[type="email"]').value.trim();

  const res = await fetch(`${API}/auth/forgot-password`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email })
  });

  const data = await res.json();
  alert(data.message);

  // store email for reset step
  localStorage.setItem("resetEmail", email);

  window.location.href = "reset-password.html";
});

// ================= RESET PASSWORD =================
document.getElementById("resetForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const otp = e.target.querySelector('input[placeholder="OTP"]').value.trim();
  const newPassword = e.target
    .querySelector('input[placeholder="New password"]')
    .value.trim();

  const email = localStorage.getItem("resetEmail");

  const res = await fetch(`${API}/auth/reset-password`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email,
      otp,
      newPassword   // ✅ VERY IMPORTANT
    })
  });

  const data = await res.json();
  alert(data.message);

  if (res.ok) {
    localStorage.removeItem("resetEmail");
    window.location.href = "login.html";
  }
});
