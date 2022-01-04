import React from 'react';
import Chart from "react-apexcharts";


export const ChartElement = React.memo( function ChartElement(props) {
            function createData(data, dataVal){
                const normalData = []
                console.log(data)
                if(dataVal == 'clicks'){
                    data.forEach(el => {
                        normalData.push({x:new Date(el.date).getTime(),
                            y: el.clicks})
                    })
                } else if(dataVal == 'page_views'){
                    data.forEach(el => {
                        normalData.push({x:new Date(el.date).getTime(),
                            y: el.page_views})
                    })
                }

                return normalData
            }

            const series = [{
                name: props.dataVal == 'clicks' ? 'Clicks' : "Vievs",
                data: createData(props.stats,props.dataVal)
            }]
            const options = {
                chart: {
                    type: 'area',
                    stacked: false,
                    height: 320,
                    zoom: {
                        type: 'x',
                        enabled: true,
                        autoScaleYaxis: true
                    },
                    toolbar: {
                        autoSelected: 'zoom'
                    }
                },
                dataLabels: {
                    enabled: false
                },
                markers: {
                    size: 0,
                },
                title: {
                    text: props.dataVal == 'clicks' ? 'Clicks' : "Vievs",
                    align: 'left'
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shadeIntensity: 1,
                        inverseColors: false,
                        opacityFrom: 0.5,
                        opacityTo: 0,
                        stops: [0, 90, 100]
                    },
                },
                yaxis: {
                    labels: {
                        formatter: function (val) {
                            return (val / 1).toFixed(0);
                        },
                    },
                    title: {
                        text: ''
                    },
                },
                xaxis: {
                    type: 'datetime',
                },
                tooltip: {
                    shared: false,
                    y: {
                        formatter: function (val) {
                            return (val / 1).toFixed(0)
                        }
                    }
                }
            }


        return (
            <div id="chart">
                <Chart options={options} series={series} type="area" height={350} />
            </div>
        );

});

export default ChartElement;