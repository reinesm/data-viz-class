var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Blinding Lights by The Weeknd', 'Watermelon Sugar by Harry Styles', 'Mood (feat. iann dior) by 24kGoldn', 'Someone You Loved by Lewis Capaldi', 'Perfect by Ed Sheeran'],
        datasets: [{
            label: 'Danceability',
            data: [51, 55, 70, 50, 60],
            backgroundColor: [
                '#D70040'
            ]
        },
        {
          label: 'Energy',
          data: [73, 82, 72, 41, 45],
          backgroundColor: [
            '#378805'
          ]
        },
        {
          label: 'Liveness',
          data: [9, 34, 32, 11, 11],
          backgroundColor: [
              '#0096FF'
          ]
        },
        {
          label: 'Valence',
          data: [33, 56, 73, 45, 17],
          backgroundColor: [
            '#800080'
          ]
        },
    ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Top 5 most streamed Spotify songs, as of Oct. 2021 ',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: ['The top five most streamed Spotify songs are ranked in popularity, from left to right.','Blinding Lights is the most popular streamed song and ranks lowest in liveness, which is the presence of an audience in the recording, according to The Verge.', 'Watermelon Sugar is the most energetic song, while Mood (feat. iann dior) ranks highest in valance and danceability. The Verge defines valence as musical positivenss conveyed by the song.'],
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        },
    },
});
