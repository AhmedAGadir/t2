import * as agCharts from "ag-charts-community";
import { revenueData } from './services-data';

var myTheme = {
  overrides: {
    cartesian: {
      series: {
        column: {
          highlightStyle: {
            fill: 'rgba(0,0,0,0)',
          },
        },
      },
    },
  },
};

var options = {
  theme: myTheme,
  container: document.getElementById('myChart'),
  title: {
    text: "Apple's revenue by product category",
  },
  subtitle: {
    text: 'in billion U.S. dollars',
  },
  data: revenueData,
  series: [
    {
      type: 'column',
      xKey: 'quarter',
      yKeys: ['iphone', 'mac', 'wearables', 'services'],
    },
  ],
};

agCharts.AgChart.create(options);
