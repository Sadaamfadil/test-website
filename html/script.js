document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const errorMessage = document.getElementById('error-message');

  if (username === "" || password === "") {
    errorMessage.textContent = "Username dan password harus diisi.";
    errorMessage.style.display = "block";
    return;
  }

  // Contoh validasi username dan password
  if (username === "admin" && password === "12345") {
    alert("Login berhasil!");
    errorMessage.style.display = "none";
    // Redirect atau proses lebih lanjut
    window.location.href = "dashboard.html";
  } else {
    errorMessage.textContent = "Username atau password salah.";
    errorMessage.style.display = "block";
  }
});

