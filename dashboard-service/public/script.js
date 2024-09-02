document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Parse repositories and display a bar chart based on their stargazers, forks, open issues
        const repoResponse = await fetch('/api/repositories');
        const repos = await repoResponse.json();

        const ctx = document.getElementById('repoChart').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: repos.map(repo => repo.name),
                datasets: [
                    {
                        label: 'Stars',
                        data: repos.map(repo => repo.stargazers_count),
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1
                    },
                    {
                        label: 'Forks',
                        data: repos.map(repo => repo.forks_count),
                        backgroundColor: 'rgba(255, 159, 64, 0.2)',
                        borderColor: 'rgba(255, 159, 64, 1)',
                        borderWidth: 1,
                        barThickness: 10
                    },
                    {
                        label: 'Open Issues',
                        data: repos.map(repo => repo.open_issues_count),
                        backgroundColor: 'rgba(153, 102, 255, 0.2)',
                        borderColor: 'rgba(153, 102, 255, 1)',
                        borderWidth: 1,
                        barThickness: 10
                    }
                ]
            },
            options: {
                scales: {
                    x: 
                    {
                        stacked: false,
                    },
                    y: 
                    {
                        beginAtZero: true,
                        stacked: false,
                    }
                }
            }
        });

    } catch (error) {
        console.log('Error loading data:', error);
    }
});
