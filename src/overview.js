var chartsLine = document.querySelectorAll(".chart-line");

chartsLine.forEach(function (chart) {
  if (!chart.getAttribute("data-chart-initialized")) {
    new Chart(chart, {
      type: "line",
      data: {
        labels: ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
          {
            label: "Performance",
            tension: 0.4,
            borderWidth: 4,
            borderColor: "#5e72e4",
            pointRadius: 0,
            backgroundColor: "transparent",
            data: [0, 20, 10, 30, 15, 40, 20, 60, 60],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        tooltips: {
          enabled: true,
          mode: "index",
          intersect: false,
        },
        scales: {
          yAxes: [
            {
              barPercentage: 1.6,
              gridLines: {
                drawBorder: false,
                color: "rgba(29,140,248,0.0)",
                zeroLineColor: "transparent",
              },
              ticks: {
                padding: 0,
                fontColor: "#8898aa",
                fontSize: 13,
                fontFamily: "Open Sans",
              },
            },
          ],
          xAxes: [
            {
              barPercentage: 1.6,
              gridLines: {
                drawBorder: false,
                color: "rgba(29,140,248,0.0)",
                zeroLineColor: "transparent",
              },
              ticks: {
                padding: 10,
                fontColor: "#8898aa",
                fontSize: 13,
                fontFamily: "Open Sans",
              },
            },
          ],
        },
        layout: {
          padding: 0,
        },
      },
    });
    chart.setAttribute("data-chart-initialized", "true");
  }
});

var chartsBar = document.querySelectorAll(".chart-bar");

chartsBar.forEach(function (chart) {
  if (!chart.getAttribute("data-chart-initialized")) {
    new Chart(chart, {
      type: "bar",
      data: {
        labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
          {
            label: "Sales",
            tension: 0.4,
            borderWidth: 0,
            pointRadius: 0,
            backgroundColor: "#fb6340",
            data: [25, 20, 30, 22, 17, 29],
            maxBarThickness: 10,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        tooltips: {
          enabled: true,
          mode: "index",
          intersect: false,
        },
        scales: {
          yAxes: [
            {
              gridLines: {
                borderDash: [2],
                borderDashOffset: [2],
                drawTicks: false,
                drawBorder: false,
                lineWidth: 1,
                zeroLineWidth: 0,
                zeroLineBorderDash: [0],
                zeroLineBorderDashOffset: [2],
              },
              ticks: {
                beginAtZero: true,
                padding: 10,
                fontSize: 13,
                lineHeight: 5,
                fontColor: "#8898aa",
                fontFamily: "Open Sans",
              },
            },
          ],
          xAxes: [
            {
              gridLines: {
                display: false,
                drawBorder: false,
                drawOnChartArea: false,
                drawTicks: false,
              },
              ticks: {
                padding: 20,
                fontSize: 13,
                fontColor: "#8898aa",
                fontFamily: "Open Sans",
              },
            },
          ],
        },
      },
    });
    chart.setAttribute("data-chart-initialized", "true");
  }
});
