import React, {Component} from 'react';
import 'react-cytoscape';
import {Chart} from "react-google-charts";
import './graph.scss'


class GraphDataProcessed extends Component {
  color2="#065A82";
  color3="#1C7293";
  color4="#9EB3C2";

  render() {
    const options = {
      backgroundColor: '#2F3139',
      legendTextStyle: { color: '#FFF' },
      legend: { position: 'in'},
      titleTextStyle: { color: '#FFF' },
      hAxis: {
        title: 'Last hour',
        textStyle:{color: '#FFF'},
        titleTextStyle: {
          color: '#FFF',
          fontSize: 12
        },
        gridlines: {
          color: 'transparent'
        }
      },
      vAxis: {
        title: 'Data processed',
        textStyle:{color: '#FFF'},
        titleTextStyle: {
          color: '#FFF',
          fontSize: 12
        },
        gridlines: {
          color: 'transparent'
        }
      },
      width: this.props.width,
      height: this.props.height,
      chartArea: {'width': '90%', 'height': '80%'},
      titlePosition: 'in',
      axisTitlesPosition: 'in',
      colors: [this.color2, this.color3, this.color4],
      lineWidth: 3,
      axisFontSize : 0
    };

    const chartOrNoChart = this.props.last_edges.length > 1 ? ( <Chart
      chartType="AreaChart"
      data={this.props.last_edges}
      options={options}
      legendToggle
    />) : ('');

    return (
      <div>
        <div class="header-1">
          <span>Graph Metrics</span>
        </div>
        {chartOrNoChart}
      </div>
    );
  }
}

export default GraphDataProcessed;
