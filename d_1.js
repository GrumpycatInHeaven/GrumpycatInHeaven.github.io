      google.charts.load('current', {'packages':['corechart', 'bar']});
      google.charts.setOnLoadCallback(drawStuff);

      function drawStuff() {

        var button = document.getElementById('change-chart');
        var chartDiv = document.getElementById('chart_div');

        var data = google.visualization.arrayToDataTable([
          ['Factors', 'Male', 'Female'],
          ['Factor_1', 100, 100],
          ['Factor_2', 100, 100],
          ['Factor_3', 100, 100],
          ['Factor_4', 100, 100],
          ['Factor_5', 100, 100]
        ]);

        var materialOptions = {
          width: 900,
          chart: {
            title: 'Factors',
            subtitle: '---------'
          },
          series: {
            0: { axis: 'male' }, // Bind series 0 to an axis named 'distance'.
            1: { axis: 'female' } // Bind series 1 to an axis named 'brightness'.
          },
          axes: {
            y: {
              male: {label: 'age'}, // Left y-axis.
              female: {side: 'right', label: 'count'} // Right y-axis.
            }
          }
        };

        var classicOptions = {
          width: 900,
          series: {
            0: {targetAxisIndex: 0},
            1: {targetAxisIndex: 1}
          },
          title: 'Факторы',
          vAxes: {
            // Adds titles to each axis.
            0: {title: 'age'},
            1: {title: 'count'}
          }
        };

        function drawMaterialChart() {
          var materialChart = new google.charts.Bar(chartDiv);
          materialChart.draw(data, google.charts.Bar.convertOptions(materialOptions));
          button.innerText = 'Change to Classic';
          button.onclick = drawClassicChart;
        }

        function drawClassicChart() {
          var classicChart = new google.visualization.ColumnChart(chartDiv);
          classicChart.draw(data, classicOptions);
          button.innerText = 'Change to Material';
          button.onclick = drawMaterialChart;
        }

        drawMaterialChart();
    }
