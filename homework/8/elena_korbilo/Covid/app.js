$.getJSON('Covid.json', function(data) {
  console.log(data);  
  console.log(data.cases["9/15/20"]);

      var app = [['Date', 'Cases', 'Deaths', 'Recovered']];
      var day = 15;
      var month = 9;

      for (let index = 0; index < 29; index++) {
        let arr = [`${day}/${month}`, data.cases[`${month}/${day}/20`], data.deaths[`${month}/${day}/20`], data.recovered[`${month}/${day}/20`]];
        app.push(arr);
        day++;

        if(day === 30){
          day = 1;
          month++;
        }
      }

      google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable(app);

        var options = {
          chart: {
            title: 'Covid-19',
            subtitle: 'Cases, Deaths, and Recovered: 15/09/20 - 14/10/20',
          }
        };

        var chart = new google.charts.Bar(document.getElementById('histogram'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }

});