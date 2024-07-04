/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
var showControllersOnly = false;
var seriesFilter = "";
var filtersOnlySampleSeries = true;

/*
 * Add header in statistics table to group metrics by category
 * format
 *
 */
function summaryTableHeader(header) {
    var newRow = header.insertRow(-1);
    newRow.className = "tablesorter-no-sort";
    var cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Requests";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 3;
    cell.innerHTML = "Executions";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 7;
    cell.innerHTML = "Response Times (ms)";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Throughput";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 2;
    cell.innerHTML = "Network (KB/sec)";
    newRow.appendChild(cell);
}

/*
 * Populates the table identified by id parameter with the specified data and
 * format
 *
 */
function createTable(table, info, formatter, defaultSorts, seriesIndex, headerCreator) {
    var tableRef = table[0];

    // Create header and populate it with data.titles array
    var header = tableRef.createTHead();

    // Call callback is available
    if(headerCreator) {
        headerCreator(header);
    }

    var newRow = header.insertRow(-1);
    for (var index = 0; index < info.titles.length; index++) {
        var cell = document.createElement('th');
        cell.innerHTML = info.titles[index];
        newRow.appendChild(cell);
    }

    var tBody;

    // Create overall body if defined
    if(info.overall){
        tBody = document.createElement('tbody');
        tBody.className = "tablesorter-no-sort";
        tableRef.appendChild(tBody);
        var newRow = tBody.insertRow(-1);
        var data = info.overall.data;
        for(var index=0;index < data.length; index++){
            var cell = newRow.insertCell(-1);
            cell.innerHTML = formatter ? formatter(index, data[index]): data[index];
        }
    }

    // Create regular body
    tBody = document.createElement('tbody');
    tableRef.appendChild(tBody);

    var regexp;
    if(seriesFilter) {
        regexp = new RegExp(seriesFilter, 'i');
    }
    // Populate body with data.items array
    for(var index=0; index < info.items.length; index++){
        var item = info.items[index];
        if((!regexp || filtersOnlySampleSeries && !info.supportsControllersDiscrimination || regexp.test(item.data[seriesIndex]))
                &&
                (!showControllersOnly || !info.supportsControllersDiscrimination || item.isController)){
            if(item.data.length > 0) {
                var newRow = tBody.insertRow(-1);
                for(var col=0; col < item.data.length; col++){
                    var cell = newRow.insertCell(-1);
                    cell.innerHTML = formatter ? formatter(col, item.data[col]) : item.data[col];
                }
            }
        }
    }

    // Add support of columns sort
    table.tablesorter({sortList : defaultSorts});
}

$(document).ready(function() {

    // Customize table sorter default options
    $.extend( $.tablesorter.defaults, {
        theme: 'blue',
        cssInfoBlock: "tablesorter-no-sort",
        widthFixed: true,
        widgets: ['zebra']
    });

    var data = {"OkPercent": 100.0, "KoPercent": 0.0};
    var dataset = [
        {
            "label" : "FAIL",
            "data" : data.KoPercent,
            "color" : "#FF6347"
        },
        {
            "label" : "PASS",
            "data" : data.OkPercent,
            "color" : "#9ACD32"
        }];
    $.plot($("#flot-requests-summary"), dataset, {
        series : {
            pie : {
                show : true,
                radius : 1,
                label : {
                    show : true,
                    radius : 3 / 4,
                    formatter : function(label, series) {
                        return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'
                            + label
                            + '<br/>'
                            + Math.round10(series.percent, -2)
                            + '%</div>';
                    },
                    background : {
                        opacity : 0.5,
                        color : '#000'
                    }
                }
            }
        },
        legend : {
            show : true
        }
    });

    // Creates APDEX table
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.9393939393939394, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [1.0, 500, 1500, "NIRFpage"], "isController": false}, {"data": [1.0, 500, 1500, "Reserchpage-0"], "isController": false}, {"data": [1.0, 500, 1500, "NAACpage"], "isController": false}, {"data": [0.5, 500, 1500, "Reserchpage-1"], "isController": false}, {"data": [1.0, 500, 1500, "IQACpage"], "isController": false}, {"data": [1.0, 500, 1500, "Studentcornerpage-1"], "isController": false}, {"data": [1.0, 500, 1500, "Bestpracticespage"], "isController": false}, {"data": [1.0, 500, 1500, "Studentcornerpage-0"], "isController": false}, {"data": [1.0, 500, 1500, "IQACpage-0"], "isController": false}, {"data": [1.0, 500, 1500, "IQACpage-1"], "isController": false}, {"data": [0.5, 500, 1500, "Reserchpage"], "isController": false}, {"data": [1.0, 500, 1500, "NAACpage-0"], "isController": false}, {"data": [1.0, 500, 1500, "Bestpracticespage-0"], "isController": false}, {"data": [1.0, 500, 1500, "Bestpracticespage-1"], "isController": false}, {"data": [1.0, 500, 1500, "Gallerypage"], "isController": false}, {"data": [1.0, 500, 1500, "NAACpage-1"], "isController": false}, {"data": [0.5, 500, 1500, "Homepage-1"], "isController": false}, {"data": [1.0, 500, 1500, "Homepage-0"], "isController": false}, {"data": [1.0, 500, 1500, "Coursepage"], "isController": false}, {"data": [0.5, 500, 1500, "Homepage"], "isController": false}, {"data": [1.0, 500, 1500, "Aluminipage"], "isController": false}, {"data": [1.0, 500, 1500, "Studentcornerpage"], "isController": false}, {"data": [1.0, 500, 1500, "Contactpage"], "isController": false}, {"data": [1.0, 500, 1500, "Contactpage-0"], "isController": false}, {"data": [1.0, 500, 1500, "Contactpage-1"], "isController": false}, {"data": [1.0, 500, 1500, "Coursepage-0"], "isController": false}, {"data": [1.0, 500, 1500, "Coursepage-1"], "isController": false}, {"data": [1.0, 500, 1500, "Aluminipage-0"], "isController": false}, {"data": [1.0, 500, 1500, "Aluminipage-1"], "isController": false}, {"data": [1.0, 500, 1500, "NIRFpage-1"], "isController": false}, {"data": [1.0, 500, 1500, "Gallerypage-1"], "isController": false}, {"data": [1.0, 500, 1500, "Gallerypage-0"], "isController": false}, {"data": [1.0, 500, 1500, "NIRFpage-0"], "isController": false}]}, function(index, item){
        switch(index){
            case 0:
                item = item.toFixed(3);
                break;
            case 1:
            case 2:
                item = formatDuration(item);
                break;
        }
        return item;
    }, [[0, 0]], 3);

    // Create statistics table
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 33, 0, 0.0, 212.4545454545455, 54, 1176, 109.0, 846.2, 1005.8999999999993, 1176.0, 9.38566552901024, 545.7240116609784, 1.7242605233219568], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["NIRFpage", 1, 0, 0.0, 117.0, 117, 117, 117.0, 117.0, 117.0, 117.0, 8.547008547008549, 183.88588408119656, 2.3203792735042734], "isController": false}, {"data": ["Reserchpage-0", 1, 0, 0.0, 62.0, 62, 62, 62.0, 62.0, 62.0, 62.0, 16.129032258064516, 19.12172379032258, 2.2523941532258065], "isController": false}, {"data": ["NAACpage", 1, 0, 0.0, 137.0, 137, 137, 137.0, 137.0, 137.0, 137.0, 7.299270072992701, 157.5901003649635, 1.9103558394160582], "isController": false}, {"data": ["Reserchpage-1", 1, 0, 0.0, 809.0, 809, 809, 809.0, 809.0, 809.0, 809.0, 1.2360939431396785, 687.9792278275648, 0.17261858776266994], "isController": false}, {"data": ["IQACpage", 1, 0, 0.0, 114.0, 114, 114, 114.0, 114.0, 114.0, 114.0, 8.771929824561402, 213.3275082236842, 2.29577850877193], "isController": false}, {"data": ["Studentcornerpage-1", 1, 0, 0.0, 105.0, 105, 105, 105.0, 105.0, 105.0, 105.0, 9.523809523809526, 491.19233630952385, 1.3392857142857144], "isController": false}, {"data": ["Bestpracticespage", 1, 0, 0.0, 187.0, 187, 187, 187.0, 187.0, 187.0, 187.0, 5.347593582887701, 142.56768048128342, 1.5562332887700534], "isController": false}, {"data": ["Studentcornerpage-0", 1, 0, 0.0, 63.0, 63, 63, 63.0, 63.0, 63.0, 63.0, 15.873015873015872, 18.833705357142858, 2.232142857142857], "isController": false}, {"data": ["IQACpage-0", 1, 0, 0.0, 54.0, 54, 54, 54.0, 54.0, 54.0, 54.0, 18.51851851851852, 21.79181134259259, 2.423321759259259], "isController": false}, {"data": ["IQACpage-1", 1, 0, 0.0, 59.0, 59, 59, 59.0, 59.0, 59.0, 59.0, 16.949152542372882, 392.2470868644068, 2.2179555084745766], "isController": false}, {"data": ["Reserchpage", 1, 0, 0.0, 871.0, 871, 871, 871.0, 871.0, 871.0, 871.0, 1.1481056257175661, 640.3682459098737, 0.3206623134328358], "isController": false}, {"data": ["NAACpage-0", 1, 0, 0.0, 66.0, 66, 66, 66.0, 66.0, 66.0, 66.0, 15.151515151515152, 17.829663825757574, 1.982717803030303], "isController": false}, {"data": ["Bestpracticespage-0", 1, 0, 0.0, 128.0, 128, 128, 128.0, 128.0, 128.0, 128.0, 7.8125, 9.307861328125, 1.13677978515625], "isController": false}, {"data": ["Bestpracticespage-1", 1, 0, 0.0, 59.0, 59, 59, 59.0, 59.0, 59.0, 59.0, 16.949152542372882, 431.67372881355936, 2.466234110169492], "isController": false}, {"data": ["Gallerypage", 1, 0, 0.0, 273.0, 273, 273, 273.0, 273.0, 273.0, 273.0, 3.663003663003663, 448.7465659340659, 1.015911172161172], "isController": false}, {"data": ["NAACpage-1", 1, 0, 0.0, 70.0, 70, 70, 70.0, 70.0, 70.0, 70.0, 14.285714285714285, 291.6155133928571, 1.8694196428571426], "isController": false}, {"data": ["Homepage-1", 1, 0, 0.0, 933.0, 933, 933, 933.0, 933.0, 933.0, 933.0, 1.0718113612004287, 37.85671221864951, 0.14025656484458734], "isController": false}, {"data": ["Homepage-0", 1, 0, 0.0, 240.0, 240, 240, 240.0, 240.0, 240.0, 240.0, 4.166666666666667, 4.903157552083334, 0.5452473958333334], "isController": false}, {"data": ["Coursepage", 1, 0, 0.0, 138.0, 138, 138, 138.0, 138.0, 138.0, 138.0, 7.246376811594203, 168.40749547101447, 2.122961956521739], "isController": false}, {"data": ["Homepage", 1, 0, 0.0, 1176.0, 1176, 1176, 1176.0, 1176.0, 1176.0, 1176.0, 0.8503401360544217, 31.03492373511905, 0.22254995748299322], "isController": false}, {"data": ["Aluminipage", 1, 0, 0.0, 164.0, 164, 164, 164.0, 164.0, 164.0, 164.0, 6.097560975609756, 275.0809832317073, 1.6792111280487805], "isController": false}, {"data": ["Studentcornerpage", 1, 0, 0.0, 168.0, 168, 168, 168.0, 168.0, 168.0, 168.0, 5.952380952380952, 314.0578497023809, 1.6741071428571428], "isController": false}, {"data": ["Contactpage", 1, 0, 0.0, 163.0, 163, 163, 163.0, 163.0, 163.0, 163.0, 6.134969325153374, 168.2083972392638, 1.7014953987730062], "isController": false}, {"data": ["Contactpage-0", 1, 0, 0.0, 55.0, 55, 55, 55.0, 55.0, 55.0, 55.0, 18.18181818181818, 21.537642045454547, 2.5213068181818183], "isController": false}, {"data": ["Contactpage-1", 1, 0, 0.0, 108.0, 108, 108, 108.0, 108.0, 108.0, 108.0, 9.25925925925926, 242.90183738425927, 1.2839988425925926], "isController": false}, {"data": ["Coursepage-0", 1, 0, 0.0, 61.0, 61, 61, 61.0, 61.0, 61.0, 61.0, 16.393442622950822, 19.547259221311474, 2.4013831967213117], "isController": false}, {"data": ["Coursepage-1", 1, 0, 0.0, 77.0, 77, 77, 77.0, 77.0, 77.0, 77.0, 12.987012987012989, 286.3357345779221, 1.9023944805194806], "isController": false}, {"data": ["Aluminipage-0", 1, 0, 0.0, 55.0, 55, 55, 55.0, 55.0, 55.0, 55.0, 18.18181818181818, 21.519886363636363, 2.5035511363636362], "isController": false}, {"data": ["Aluminipage-1", 1, 0, 0.0, 109.0, 109, 109, 109.0, 109.0, 109.0, 109.0, 9.174311926605505, 403.02465596330273, 1.263259747706422], "isController": false}, {"data": ["NIRFpage-1", 1, 0, 0.0, 62.0, 62, 62, 62.0, 62.0, 62.0, 62.0, 16.129032258064516, 327.9517389112903, 2.189390120967742], "isController": false}, {"data": ["Gallerypage-1", 1, 0, 0.0, 218.0, 218, 218, 218.0, 218.0, 218.0, 218.0, 4.587155963302752, 556.5286338876147, 0.6361095183486238], "isController": false}, {"data": ["Gallerypage-0", 1, 0, 0.0, 55.0, 55, 55, 55.0, 55.0, 55.0, 55.0, 18.18181818181818, 21.537642045454547, 2.5213068181818183], "isController": false}, {"data": ["NIRFpage-0", 1, 0, 0.0, 55.0, 55, 55, 55.0, 55.0, 55.0, 55.0, 18.18181818181818, 21.484375, 2.468039772727273], "isController": false}]}, function(index, item){
        switch(index){
            // Errors pct
            case 3:
                item = item.toFixed(2) + '%';
                break;
            // Mean
            case 4:
            // Mean
            case 7:
            // Median
            case 8:
            // Percentile 1
            case 9:
            // Percentile 2
            case 10:
            // Percentile 3
            case 11:
            // Throughput
            case 12:
            // Kbytes/s
            case 13:
            // Sent Kbytes/s
                item = item.toFixed(2);
                break;
        }
        return item;
    }, [[0, 0]], 0, summaryTableHeader);

    // Create error table
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": []}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 33, 0, "", "", "", "", "", "", "", "", "", ""], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
