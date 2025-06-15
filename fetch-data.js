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
            dataContainer.innerHTML = data.map(user => `<p>${user.name} - ${user.email}</p>`).join('');
        } catch (error) {
            console.error('Fetch error:', error);
            dataContainer.innerHTML = '<p>Error fetching data. Please try again later.</p>';
        }
    }
    fetchUserData();
});