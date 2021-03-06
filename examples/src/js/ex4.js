FusionCharts.ready(function () {
    var props_column_chart = {
        id: "column_chart",
        renderAt: "column_chart_container",
        type: "column2d",
        width:600,
        height: 400,
        dataFormat: "jsonurl",
        dataSource: "../data/data.json"
    };
    React.render(
        <react_fc.FusionCharts {...props_column_chart} />,
        document.getElementById('fc_react_app')
    );
})