const L = require('leaflet');
const Highcharts = require('highcharts');
const timeLineData = require('../../../server/assets/timeline');

const LeafletMap = function (container, button){
    this.container = container;
    this.button = button;
};

function setUpMap(){


    var mymap = L.map('mapid').setView([51.505, -0.09], 13);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
            '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox.streets'
    }).addTo(mymap);

    L.marker([51.5, -0.09]).addTo(mymap)
        .bindPopup("<b>Hello world!</b><br />I am a popup.").openPopup();

    L.circle([51.508, -0.11], 500, {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5
    }).addTo(mymap).bindPopup("I am a circle.");

    L.polygon([
        [51.509, -0.08],
        [51.503, -0.06],
        [51.51, -0.047]
    ]).addTo(mymap).bindPopup("I am a polygon.");


    var popup = L.popup();

    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(mymap);
    }

    mymap.on('click', onMapClick);
}

function processTimeLine(){
    let lastYear;
    let yearData = [];
    let papersCount = [];
    timeLineData.forEach((item) => {
        function pushTheData() {
            yearData.push(item.year*1);
            papersCount.push(item.count*1);
            lastYear = item.year;
        }
        if (yearData.length === 0){
            pushTheData();
        } else {
            let gap = lastYear - item.year;

            if (gap === 1){
                pushTheData()
            } else {
                for(let i = 1; i < gap; i++) {
                    lastYear = lastYear - 1;
                    yearData.push(lastYear);
                    papersCount.push(0);
                }
                pushTheData()
            }
        }
    });

    return [yearData.reverse(), papersCount.reverse()];
}



function setUpChart(){

    let [years, papers] = processTimeLine();

    console.log(years);
    console.log(papers);

    var myChart = Highcharts.chart('chart', {
        title: {
            text: 'Number of Research papers per year on Cisblatin'
        },

        subtitle: {
            text: 'Source: pubmed.gov'
        },

        yAxis: {
            title: {
                text: 'Number of published papers'
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },

        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                pointStart: years[0]
            }
        },

        series: [{
            name: 'Research Papers',
            data: papers
        }],

        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }
    });
}

LeafletMap.prototype.bindEvents = function() {
    this.button.addEventListener('click', (event) => {
        console.log('I got clicked');
        this.container.innerHTML = "";

        // We want to create a div "<div id=\"mapid\"></div>
        const leafletDev = document.createElement('div');
        leafletDev.id = "mapid";

        this.container.appendChild(leafletDev);

        const chartdiv = document.createElement('div');
        chartdiv.id = "chart";
        chartdiv.style = "width:100%; height:400px;"

        this.container.appendChild(chartdiv);

        setUpMap();
        setUpChart();
    })
};


module.exports = LeafletMap;
