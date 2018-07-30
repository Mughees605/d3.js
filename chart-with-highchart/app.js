
Highcharts.chart('container', {

    credits: {
        enabled: false
    },
    exporting: { enabled: false },

    title: {
        text: 'Estimation of clinical trial success rates and related parameters 2005-2015'
    },

    subtitle: {
        text: 'POS for all drugs and indications'
    },

    xAxis: {
        categories: ["2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015"]
    },

    yAxis: {
        floor: 0,
        ceiling: 100,
        title: {
            text: 'Percentage'
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
        }
    },

    series: [{
        name: 'Phase1',
        data: [46.2, 48.1, 48.5, 46.8, 42.7, 39.4, 36.3, 33.6, 32.5, 32.4, 39.2]
    }, {
        name: 'Phase2',
        data: [42.4, 41.0, 38.6, 35.0, 32.2, 30.1, 29.2, 27.5, 26.0, 29.0, 38.1]
    }, {
        name: 'Phase3',
        data: [56.9, 56.7, 57.1, 56.2, 56.8, 57.5, 57.9, 56.9, 61.3, 71.2, 92.6]
    }, {
        name: 'Overall',
        data: [11.2, 11.2, 10.7, 9.2, 7.8, 6.8, 6.1, 5.3, 5.2, 6.7, 13.8]
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