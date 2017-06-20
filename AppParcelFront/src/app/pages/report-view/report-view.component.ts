import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import {Ng2Highcharts, Ng2Highmaps, Ng2Highstocks} from 'ng2-highcharts';

@Component({
  selector: 'app-report-view',
  templateUrl: './report-view.component.html',
  styleUrls: ['./report-view.component.css']
})
export class ReportViewComponent implements OnInit {

  chartOptions = {
    chart: {
      type: 'line'
    },
    title: {
      text: 'Fruit Consumption'
    },
    xAxis: {
      categories: ['Apples', 'Bananas', 'Oranges']
    },
    yAxis: {
      title: {
        text: 'Fruit eaten'
      }
    },
    series: [{
      name: 'Jane',
      data: [1, 0, 4]
    }, {
      name: 'John',
      data: [5, 7, 3]
    }]
  };
  chartBar = {
    chart: {
      type: 'column'
    },
    xAxis: {
      categories: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    },
    series: [
      {
        name: 'NC',
        data: [7057, 6858, 6643, 6570, 6115, 107, 31, 635, 203, 2, 2]
      }, {
        name: 'OK',
        data: [54047, 52484, 50591, 49479, 46677, 33, 156, 947, 408, 6, 2]
      }, {
        name: 'KO',
        data: [11388, 11115, 10742, 10757, 10290, 973, 914, 4054, 732, 34, 2]
      }, {
        name: 'VALID',
        data: [8836, 8509, 8255, 7760, 7621, 973, 914, 4054, 732, 34, 2]
      }, {
        name: 'CHECK',
        data: [115, 162, 150, 187, 172, 973, 914, 4054, 732, 34, 2]
      }, {
        name: 'COR',
        data: [12566, 12116, 11446, 10749, 10439, 973, 914, 4054, 732, 34, 2]
      }
    ]
  };
  chartPie = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: 'Browser market shares January, 2015 to May, 2015'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %',
          style: {
            color: 'black'
          }
        }
      }
    },
    series: [{
      name: 'Brands',
      colorByPoint: true,
      data: [{
        name: 'Microsoft Internet Explorer',
        y: 56.33
      }, {
        name: 'Chrome',
        y: 24.03,
        sliced: true,
        selected: true
      }, {
        name: 'Firefox',
        y: 10.38
      }, {
        name: 'Safari',
        y: 4.77
      }, {
        name: 'Opera',
        y: 0.91
      }, {
        name: 'Proprietary or Undetectable',
        y: 0.2
      }]
    }]
  }
  chartMulti = {
    chart: {
      zoomType: 'xy'
    },
    title: {
      text: 'Average Monthly Weather Data for Tokyo'
    },
    subtitle: {
      text: 'Source: WorldClimate.com'
    },
    xAxis: [{
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      crosshair: true
    }],
    yAxis: [{ // Primary yAxis
      labels: {
        format: '{value}°C',
        style: {
          color: '#0000FF'
        }
      },
      title: {
        text: 'Temperature',
        style: {
          color: '#FFFF00'
        }
      },
      opposite: true

    }, { // Secondary yAxis
      gridLineWidth: 0,
      title: {
        text: 'Rainfall',
        style: {
          color: '#00FFFF'
        }
      },
      labels: {
        format: '{value} mm',
        style: {
          color: '#FF00FF'
        }
      }

    }, { // Tertiary yAxis
      gridLineWidth: 0,
      title: {
        text: 'Sea-Level Pressure',
        style: {
          color: '#FF0000'
        }
      },
      labels: {
        format: '{value} mb',
        style: {
          color: '#00FF00'
        }
      },
      opposite: true
    }],
    tooltip: {
      shared: true
    },
    legend: {
      layout: 'vertical',
      align: 'left',
      x: 80,
      verticalAlign: 'top',
      y: 55,
      floating: true,
      backgroundColor: '#FFFFFF'
    },
    series: [{
      name: 'Rainfall',
      type: 'column',
      yAxis: 1,
      data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
      tooltip: {
        valueSuffix: ' mm'
      }

    }, {
      name: 'Sea-Level Pressure',
      type: 'spline',
      yAxis: 2,
      data: [1016, 1016, 1015.9, 1015.5, 1012.3, 1009.5, 1009.6, 1010.2, 1013.1, 1016.9, 1018.2, 1016.7],
      marker: {
        enabled: false
      },
      dashStyle: 'shortdot',
      tooltip: {
        valueSuffix: ' mb'
      }

    }, {
      name: 'Temperature',
      type: 'spline',
      data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
      tooltip: {
        valueSuffix: ' °C'
      }
    }]
  }
  chart3D = {
    chart: {
      renderTo: 'container',
      margin: 100,
      type: 'scatter',
      options3d: {
        enabled: true,
        alpha: 10,
        beta: 30,
        depth: 250,
        viewDistance: 5,
        fitToPlot: false,
        frame: {
          bottom: { size: 1, color: 'rgba(0,0,0,0.02)' },
          back: { size: 1, color: 'rgba(0,0,0,0.04)' },
          side: { size: 1, color: 'rgba(0,0,0,0.06)' }
        }
      }
    },
    title: {
      text: 'Draggable box'
    },
    subtitle: {
      text: 'Click and drag the plot area to rotate in space'
    },
    plotOptions: {
      scatter: {
        width: 10,
        height: 10,
        depth: 10
      }
    },
    yAxis: {
      min: 0,
      max: 10,
      title: null
    },
    xAxis: {
      min: 0,
      max: 10,
      gridLineWidth: 1
    },
    zAxis: {
      min: 0,
      max: 10,
      showFirstLabel: false
    },
    legend: {
      enabled: false
    },
    series: [{
      name: 'Reading',
      colorByPoint: true,
      data: [[1, 6, 5], [8, 7, 9], [1, 3, 4], [4, 6, 8], [5, 7, 7], [6, 9, 6], [7, 0, 5], [2, 3, 3], [3, 9, 8], [3, 6, 5], [4, 9, 4], [2, 3, 3], [6, 9, 9], [0, 7, 0], [7, 7, 9], [7, 2, 9], [0, 6, 2], [4, 6, 7], [3, 7, 7], [0, 1, 7], [2, 8, 6], [2, 3, 7], [6, 4, 8], [3, 5, 9], [7, 9, 5], [3, 1, 7], [4, 4, 2], [3, 6, 2], [3, 1, 6], [6, 8, 5], [6, 6, 7], [4, 1, 1], [7, 2, 7], [7, 7, 0], [8, 8, 9], [9, 4, 1], [8, 3, 4], [9, 8, 9], [3, 5, 3], [0, 2, 4], [6, 0, 2], [2, 1, 3], [5, 8, 9], [2, 1, 1], [9, 7, 6], [3, 0, 2], [9, 9, 0], [3, 4, 8], [2, 6, 1], [8, 9, 2], [7, 6, 5], [6, 3, 1], [9, 3, 1], [8, 9, 3], [9, 1, 0], [3, 8, 7], [8, 0, 0], [4, 9, 7], [8, 6, 2], [4, 3, 0], [2, 3, 5], [9, 1, 4], [1, 1, 4], [6, 0, 2], [6, 1, 6], [3, 8, 8], [8, 8, 7], [5, 5, 0], [3, 9, 6], [5, 4, 3], [6, 8, 3], [0, 1, 5], [6, 7, 3], [8, 3, 2], [3, 8, 3], [2, 1, 6], [4, 6, 7], [8, 9, 9], [5, 4, 2], [6, 1, 3], [6, 9, 5], [4, 8, 2], [9, 7, 4], [5, 4, 2], [9, 6, 1], [2, 7, 3], [4, 5, 4], [6, 8, 1], [3, 4, 0], [2, 2, 6], [5, 1, 2], [9, 9, 7], [6, 9, 9], [8, 4, 3], [4, 1, 7], [6, 2, 5], [0, 4, 9], [3, 5, 9], [6, 9, 1], [1, 9, 2]]
    }]
  }
  chartGauge = {
    chart: {
      type: 'gauge',
      plotBackgroundColor: null,
      plotBackgroundImage: null,
      plotBorderWidth: 0,
      plotShadow: false
    },

    title: {
      text: 'Speedometer'
    },

    pane: {
      startAngle: -150,
      endAngle: 150,
      background: [{
        backgroundColor: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
          stops: [
            [0, '#FFF'],
            [1, '#333']
          ]
        },
        borderWidth: 0,
        outerRadius: '109%'
      }, {
        backgroundColor: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
          stops: [
            [0, '#333'],
            [1, '#FFF']
          ]
        },
        borderWidth: 1,
        outerRadius: '107%'
      }, {
        // default background
      }, {
        backgroundColor: '#DDD',
        borderWidth: 0,
        outerRadius: '105%',
        innerRadius: '103%'
      }]
    },

    // the value axis
    yAxis: {
      min: 0,
      max: 200,

      minorTickInterval: 'auto',
      minorTickWidth: 1,
      minorTickLength: 10,
      minorTickPosition: 'inside',
      minorTickColor: '#666',

      tickPixelInterval: 30,
      tickWidth: 2,
      tickPosition: 'inside',
      tickLength: 10,
      tickColor: '#666',
      labels: {
        step: 2,
        rotation: 'auto'
      },
      title: {
        text: 'km/h'
      },
      plotBands: [{
        from: 0,
        to: 120,
        color: '#55BF3B' // green
      }, {
        from: 120,
        to: 160,
        color: '#DDDF0D' // yellow
      }, {
        from: 160,
        to: 200,
        color: '#DF5353' // red
      }]
    },

    series: [{
      name: 'Speed',
      data: [80],
      tooltip: {
        valueSuffix: ' km/h'
      }
    }]
  }
  chartMap = {};
  mapData = [
    {
      'code': 'DE.SH',
      'value': 728
    },
    {
      'code': 'DE.BE',
      'value': 710
    },
    {
      'code': 'DE.MV',
      'value': 963
    },
    {
      'code': 'DE.HB',
      'value': 541
    },
    {
      'code': 'DE.HH',
      'value': 622
    },
    {
      'code': 'DE.RP',
      'value': 866
    },
    {
      'code': 'DE.SL',
      'value': 398
    },
    {
      'code': 'DE.BY',
      'value': 785
    },
    {
      'code': 'DE.SN',
      'value': 223
    },
    {
      'code': 'DE.ST',
      'value': 605
    },
    {
      'code': 'DE.',
      'value': 361
    },
    {
      'code': 'DE.NW',
      'value': 237
    },
    {
      'code': 'DE.BW',
      'value': 157
    },
    {
      'code': 'DE.HE',
      'value': 134
    },
    {
      'code': 'DE.NI',
      'value': 136
    },
    {
      'code': 'DE.TH',
      'value': 704
    }
  ];
  chartStock = {};

  constructor(private http: Http) { }

  ngOnInit(): any {
    setInterval(() => {
      this.chartOptions = {
        chart: {
          type: 'line'
        },
        title: {
          text: 'Fruit Consumption'
        },
        xAxis: {
          categories: ['Apples', 'Bananas', 'Oranges']
        },
        yAxis: {
          title: {
            text: 'Fruit eaten'
          }
        },
        series: [{
          name: 'Jane',
          data: [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]
        }, {
          name: 'John',
          data: [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]
        }]
      };
    }, 3000);

    //Stock
    this.http.get('./assets/data/aapl-c.json').subscribe(
      (aaplc: any) => {
        this.chartStock = {
          rangeSelector: {
            selected: 1
          },
          title: {
            text: 'AAPL Stock Price'
          },
          series: [{
            name: 'AAPL',
            data: aaplc.json(),
            tooltip: {
              valueDecimals: 2
            }
          }]
        };
      },
      (err: any) => {
        console.error('Somethin went wrong', err);
      }
    );

    //Map
    this.http.get('./assets/data/geojson.json').subscribe(
      (geojson: any) => {
        this.chartMap = {
          title: {
            text: 'GeoJSON in Highmaps'
          },
          mapNavigation: {
            enabled: true,
            buttonOptions: {
              verticalAlign: 'bottom'
            }
          },
          colorAxis: {
          },
          series: [{
            data: this.mapData,
            mapData: geojson.json(),
            joinBy: ['code_hasc', 'code'],
            name: 'Random data',
            states: {
              hover: {
                color: '#BADA55'
              }
            },
            dataLabels: {
              enabled: true,
              format: '{point.properties.postal}'
            }
          }]
        };
      },
      (err: any) => {
        console.error('Somethin went wrong', err);
      }
    );
  }
}
