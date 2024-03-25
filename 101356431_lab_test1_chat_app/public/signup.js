document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm')
    const signupMessage = document.getElementById('signupMessage')

    signupForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = {
            username: document.getElementById('username').value,
            firstname: document.getElementById('firstname').value,
            lastname: document.getElementById('lastname').value,
            password: document.getElementById('password').value,
        };

        try {
            const response = await fetch('/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                window.location.href = '/login.html'
            } else {
                signupMessage.textContent = result.message
            }
        } catch (error) {
            console.error('Signup failed:', error)
        }
    })
})
