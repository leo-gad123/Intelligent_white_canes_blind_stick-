// Dummy Login & Signup
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simple check for demo (replace with backend validation)
    if(email === "leogad@gmail.com" && password === "123") {
        window.location.href = "admin.html";
    } else {
        alert("Invalid login credentials!");
    }
});

document.getElementById('signupForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Signup successful! Redirecting to login...");
    window.location.href = "index.html";
});

// Dummy admin dashboard data
const users = [
    {name: "John Doe", email: "john@example.com", status: "Active"},
    {name: "Jane Smith", email: "jane@example.com", status: "Inactive"},
];

const tbody = document.getElementById('userTableBody');
if(tbody) {
    users.forEach(u => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${u.name}</td><td>${u.email}</td><td>${u.status}</td><td><button>Delete</button></td>`;
        tbody.appendChild(tr);
    });
}

// Logout button
document.getElementById('logoutBtn')?.addEventListener('click', () => {
    window.location.href = "index.html";
});