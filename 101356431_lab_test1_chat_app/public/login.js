
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value
    
    localStorage.setItem('user', username)
    window.location.href = 'chat.html'
})
