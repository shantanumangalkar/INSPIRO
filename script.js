
const kpiData = {
    feedbackCount: 120,
    engagementRate: 65,
    popularResources: 300,
};

document.getElementById('feedbackCount').innerHTML = kpiData.feedbackCount;
document.getElementById('engagementRate').innerHTML = kpiData.engagementRate;
document.getElementById('popularResources').innerHTML = kpiData.popularResources;


const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Performance Over Time',
            data: [65, 59, 80, 81, 56, 55, 40],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            fill: false,
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
