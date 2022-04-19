var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'scatter',
          data: {
            datasets: [{
                data: [
                  {x: 73, y: 51},
                ],
                label: "Blinding Lights",
                borderColor: "rgba(255, 8, 0)",
                backgroundColor: "rgb(255, 8, 0, 0.1)",
                borderWidth:2,

              }, {
                data: [
                  {x: 82, y: 55},
                ],
                label: "Watermelon Sugar",
                borderColor: "rgba(255, 165, 0)",
                backgroundColor: "rgb(255, 165, 0, 0.1)",
                borderWidth:2,

              }, {
                data: [
                {x: 72, y: 70},
                ],
                label: "Mood (feat. iann dior)",
                borderColor: "rgba(75, 119, 190)",
                backgroundColor:"rgb(75, 119, 190, 0.1)",
                borderWidth:2,

              }, {
                data: [
                {x: 41, y: 50},
                ],
                label: "Someone You Loved",
                borderColor: "rgba(147, 112, 219)",
                backgroundColor: "rgba(147, 112, 219, 0.1)",
                borderWidth: 2,

              }, {
                data: [
                {x: 45, y: 60},
                ],
                label: "Perfect",
                borderColor: "rgba(38, 166, 91)",
                backgroundColor: "rgba(38, 166, 91, 0.1)",
                borderWidth: 2,

              }, {
                data: [
                {x: 78, y: 78},
                ],
                label: "Believer",
                borderColor: "rgba(0, 0, 205)",
                backgroundColor: "rgba(0, 0, 205, 0.1)",
                borderWidth: 2,

              }, {
                data: [
                {x: 30, y: 35},
                ],
                label: "lovely (with Khalid)",
                borderColor: "rgba(0, 100, 0)",
                backgroundColor: "rgba(0, 100, 0, 0.1)",
                borderWidth: 2,

              }, {
                data: [
                {x: 76, y: 70},
                ],
                label: "Circles",
                borderColor: "rgba(196, 77, 86)",
                backgroundColor: "rgba(196, 77, 86, 0.1)",
                borderWidth: 2,

              }, {
                data: [
                {x:65, y: 83},
                ],
                label: "Shape of You",
                borderColor: "rgba(139, 0, 139)",
                backgroundColor: "rgba(139, 0, 139, 0.1)",
                borderWidth: 2,
              }, {
                data: [
                {x: 33, y: 78},
                ],
                label: "Memories",
                borderColor: "rgba(139, 0, 139)",
                backgroundColor: "rgba(139, 0, 139, 0.1)",
                borderWidth: 2
              },
            ]
          },
          options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: "Top 10 most streamed Spotify songs' energy and danceability scores",
                    font: {
                        size: 18
                    }
                },
                subtitle: {
                    display: true,
                    text: ['According to a Spotify API, a majority of the top 10 most streamed Spotify songs have both high energy and danceability rates. However, there is not a clear correlation between energy and danceability.','Memories by Marron 5 has a low energy score of 33 but a high danceability measure of 78. Meanwhile, Watermelon Sugar by Harry Styles has a high energy score of 82 but an average danceability measure of 55.'],
                }
            },
            scales: {
              y: {
                title: {
                  display: true,
                  text: 'Danceability'
                }
              },
              x: {
                  title: {
                      display: true,
                      text: 'Energy'
                  }
              }
            }
          }
        });
