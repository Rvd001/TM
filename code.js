

var viz;
var workbook;
var activeSheet;
var username;


// $.getScript('${tabLibUrl}',



function firstviz() {
    var containerDiv = document.getElementById("vizContainer2"),
    // url = "${tabVizUrl}",
        url = "https://public.tableau.com/views/ProfitSalesPerStateinUSA_/CountryOverview",
        options = {
            hideTabs: false,
            toolbarPosition: tableau.ToolbarPosition.TOP
        
                    }

        viz = new tableauSoftware.Viz(containerDiv, url, options);


        }
    // );


