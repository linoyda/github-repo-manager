document.addEventListener('DOMContentLoaded', async () => {
    try {
        const repoResponse = await fetch('http://localhost:3001/api/repositories/top');
        const repos = await repoResponse.json();

        const ctx = document.getElementById('repoChart').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: repos.map(repo => repo.name),
                datasets: [{
                    label: 'Stars',
                    data: repos.map(repo => repo.stars),
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        // Fetch and display user favorites
        const favoritesResponse = await fetch('http://localhost:3002/api/users/linoyda/favorites');
        const favorites = await favoritesResponse.json();
        const favoritesList = document.getElementById('favoritesList');
        favorites.forEach(fav => {
            const li = document.createElement('li');
            li.textContent = fav;
            favoritesList.appendChild(li);
        });

    } catch (error) {
        console.error('Error loading data:', error);
    }
});
