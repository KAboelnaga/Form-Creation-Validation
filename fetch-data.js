document.addEventListener('DOMContentLoaded', function () {
    async function fetchUserData() {
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';
        const dataContainer = document.getElementById('api-data');
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            const userList = data.map(user => `<li>${user.name} (${user.email})</li>`).join('');
            const list = document.createElement('ul');
            list.appendChild(document.createRange().createContextualFragment(userList));
            dataContainer.innerHTML = '';
        } catch (error) {
            console.error('Fetch error:', error);
            dataContainer.innerHTML = '<p>Failed to load user data.</p>';
        }
    }
    fetchUserData();
});