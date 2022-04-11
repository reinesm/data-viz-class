var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['America', 'East Asia & Pacific', 'Europe & Central Asia', 'Middle East & North Africa', 'South Asia', 'Sub-Saharan Africa'],
        datasets: [{
            label: 'Average of GDP per capita',
            data: [18791.13, 14480.30, 20818.45, 13856.00, 2505.17, 2569.00],
            backgroundColor: [
                '#378805'
            ]
        },
    ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'GDP per capita by region',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'Europe & Central Asia have the greatest average GPD per capita.'
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        },
    },
});
