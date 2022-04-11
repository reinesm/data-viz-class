var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'scatter',
          data: {
            datasets: [{
                data: [
                  {x: 71.5, y: 3678},
                ],
                label: "China",
                borderColor: "rgba(255, 8, 0)",
                backgroundColor: "rgb(255, 8, 0, 0.1)",
                borderWidth:2,

              }, {
                data: [
                  {x: 61.1, y: 2548},
                ],
                label: "India",
                borderColor: "rgba(255, 165, 0)",
                backgroundColor: "rgb(255, 165, 0, 0.1)",
                borderWidth:2,

              }, {
                data: [
                {x: 77.1, y: 45986},
                ],
                label: "U.S.",
                borderColor: "rgba(75, 119, 190)",
                backgroundColor:"rgb(75, 119, 190, 0.1)",
                borderWidth:2,

              }, {
                data: [
                {x: 68.3, y: 5878},
                ],
                label: "Indonesia",
                borderColor: "rgba(147, 112, 219)",
                backgroundColor: "rgba(147, 112, 219, 0.1)",
                borderWidth: 2,

              }, {
                data: [
                {x: 71.9, y: 11461},
                ],
                label: "Brazil",
                borderColor: "rgba(38, 166, 91)",
                backgroundColor: "rgba(38, 166, 91, 0.1)",
                borderWidth: 2,

              }, {
                data: [
                {x: 65.4, y: 13173},
                ],
                label: "Russia",
                borderColor: "rgba(0, 0, 205)",
                backgroundColor: "rgba(0, 0, 205, 0.1)",
                borderWidth: 2,

              }, {
                data: [
                {x: 62.6, y: 3366},
                ],
                label: "Pakistan",
                borderColor: "rgba(0, 100, 0)",
                backgroundColor: "rgba(0, 100, 0, 0.1)",
                borderWidth: 2,

              }, {
                data: [
                {x: 65.8, y: 1632},
                ],
                label: "Bangladesh",
                borderColor: "rgba(196, 77, 86)",
                backgroundColor: "rgba(196, 77, 86, 0.1)",
                borderWidth: 2,

              }, {
                data: [
                {x: 81.1, y: 32193},
                ],
                label: "Japan",
                borderColor: "rgba(139, 0, 139)",
                backgroundColor: "rgba(139, 0, 139, 0.1)",
                borderWidth: 2
              }
            ]
          },
          options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: "Largest nations' life expectancy and GDP per capita",
                    font: {
                        size: 18
                    }
                },
                subtitle: {
                    display: true,
                    text: 'According to Gapminder, the U.S. has the highest GDP per capita, while Japan has the highest life expectancy age of about 81 years.',
                }
            },
            scales: {
              y: {
                title: {
                  display: true,
                  text: 'GDP per Capita'
                }
              },
              x: {
                  title: {
                      display: true,
                      text: 'Life Expectancy'
                  }
              }
            }
          }
        });
