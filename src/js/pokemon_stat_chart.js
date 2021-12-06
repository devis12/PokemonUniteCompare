const { render } = require("react-dom");

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels:{ color: 'white', font: {size: 16}}
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
        font: {
            size: 18, 
        },
        color: 'white'
      }
    },
    scales: {
        y: {  
          ticks: {
            color: "white",
            font: {
              size: 15, 
            }
          },
          //grid:{color: (context) => ((context.tick.value == 0)? "white" : "#faf0f5")}
        },
        x: { 
          ticks: {
            color: "white", 
            font: {
              size: 15 
            }
          },
          //grid:{color: function(context){return "white"}}
        }
      }
    };


export default class PokemonStatChart extends React.Component {
    constructor(props) {
        super(props);
    }

    extractStatsCol(pkm, stat){
        let data = []
        for(let lv of this.props.levels)
            data.push(pkm.stats[lv][stat])
        return data
    }

    render(){
        const labels = (this.props.levels.map(l => l+1));
        const selPkm1RGB = "220,53,69";
        const selPkm2RGB = "255,193,7";
        const selPkm3RGB =  "13,202,240"
        
        let optionsStat = JSON.parse(JSON.stringify(options))
        optionsStat.plugins.title.text = this.props.title
        let dataStat = {
            labels,
            datasets: [
              {
                label: (this.props.selPkm1)? this.props.selPkm1.name : "-",
                data: (this.props.selPkm1)? this.extractStatsCol(this.props.selPkm1, this.props.stat) : [],
                borderColor: 'rgb('+selPkm1RGB+')',
                backgroundColor: 'rgba('+selPkm1RGB+', 0.32)',
              },
              {
                label: (this.props.selPkm2)? this.props.selPkm2.name : "-",
                data: (this.props.selPkm2)? this.extractStatsCol(this.props.selPkm2, this.props.stat) : [],
                borderColor: 'rgb('+selPkm2RGB+')',
                backgroundColor: 'rgba('+selPkm2RGB+', 0.32)',
              },
              {
                label: (this.props.selPkm3)? this.props.selPkm3.name : "-",
                data: (this.props.selPkm3)? this.extractStatsCol(this.props.selPkm3, this.props.stat) : [],
                borderColor: 'rgb('+selPkm3RGB+')',
                backgroundColor: 'rgba('+selPkm3RGB+', 0.32)',
              }
            ],
          };

        return(
            <Line options={optionsStat} data={dataStat} />
        )
    }

}