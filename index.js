var stations = {
    "Miyapur":{'JNTU College': 3},
    "JNTU College":{'Miyapur': 3, 'KPHB Colony': 3},
    "KPHB Colony":{'JNTU College': 3, 'Kukatpally': 3},
    "Kukatpally":{'KPHB Colony': 3, 'Balanagar': 2},
    "Balanagar":{'Kukatpally': 2, 'Moosapet': 2},
    "Moosapet":{'Balanagar': 2, 'Bharat Nagar': 2},
    "Bharat Nagar":{'Moosapet': 2, 'Erragadda Road': 2},
    "Erragadda Road":{'Bharat Nagar': 2, 'ESI Hospital': 3},
    "ESI Hospital": {"Erragadda Road": 3, "SR Nagar": 2},
    "SR Nagar": {"ESI Hospital": 2, "Ameerpet": 2},
    "Ameerpet": {"SR Nagar": 2, "Punjagutta": 2, "Madhura Nagar": 2, "Begumpet": 2},
    "Punjagutta": {"Ameerpet": 2, "Irrum Manzil": 2},
    "Irrum Manzil": {"Punjagutta": 2, "Khairatabad": 3},
    "Khairatabad": {"Irrum Manzil": 3, "Lakdikapul": 3},
    "Lakdikapul": {"Khairatabad": 3, "Assembly": 2},
    "Assembly": {"Lakdikapul": 2, "Nampally": 3},
    "Nampally": {"Assembly": 3, "Gandhi Bhavan": 2},
    "Gandhi Bhavan": {"Nampally": 2, "Osmania Medical College": 3},
    "Osmania Medical College": {"Gandhi Bhavan": 3, "MG Bus Station": 2},
    "MG Bus Station": {"Osmania Medical College": 3, "Malakpet": 2, "Sultan Bazar": 2},
    "Malakpet": {"MG Bus Station": 2, "New Market": 2},
    "New Market": {"Malakpet": 2, "Musarambagh": 2},
    "Musarambagh": {"New Market": 2, "Dilsukhnagar": 3},
    "Dilsukhnagar": {"Musarambagh": 3, "Chaitanyapuri": 2},
    "Chaitanyapuri": {"Dilsukhnagar": 2, "Victoria Memorial": 2},
    "Victoria Memorial": {"Chaitanyapuri": 2, "LB Nagar": 3},
    "LB Nagar": {"Victoria Memorial": 3},
    "JBS": {"Secunderabad West": 2,"Parade Grounds":10},
    "Parade Grounds": {"JBS": 10,"Paradise":2,"Secunderabad East":3},
    "Secunderabad West": {"JBS": 2, "Gandhi Hospital": 2},
    "Gandhi Hospital": {"Secunderabad West": 2, "Musheerabad": 2},
    "Musheerabad": {"Gandhi Hospital": 2, "RTC Cross Roads": 2},
    "RTC Cross Roads": {"Musheerabad": 2, "Chikkadpally": 2},
    "Chikkadpally": {"RTC Cross Roads": 2, "Narayanguda": 2},
    "Narayanguda": {"Chikkadpally": 2, "Sultan Bazar": 4},
    "Sultan Bazar": {"Narayanguda": 4, "MG Bus Station": 2},
    "Nagole": {"Uppal": 2},
    "Uppal": {'Nagole': 2, 'Stadium': 2},
    "Stadium": {'Uppal': 2, 'NGRI': 2},
    "NGRI": {'Stadium': 2, 'Habsiguda': 2},
    "Habsiguda": {'NGRI': 2, 'Tarnaka': 3},
    "Tarnaka": {'Habsiguda': 3, 'Mettuguda': 2},
    "Mettuguda": {'Tarnaka': 2, 'Secunderabad East': 3},
    "Secunderabad East": {'Mettuguda': 3, 'Parade Grounds': 3},
    
    "Paradise": {"Parade Grounds": 2, "Rasoolpura": 2},
    "Rasoolpura": {"Paradise": 2, "Prakesh Nagar": 2},
    "Prakesh Nagar": {"Begumpet": 2, "Rasoolpura": 2},
    "Begumpet": {"Prakesh Nagar": 2, "Ameerpet": 2},
    "Madhura Nagar": {'Ameerpet': 2, 'Yusufguda': 2},
    "Yusufguda": {'Madhura Nagar': 2, 'Jubilee Hills Road No.5': 2},
    "Jubilee Hills Road No.5": {'Yusufguda': 2, 'Jubilee Hills Check Post': 3},
    "Jubilee Hills Check Post": {'Jubilee Hills Road No.5': 3, 'Pedamma Temple': 2},
    "Pedamma Temple": {'Jubilee Hills Check Post': 3, 'Madhapur': 2},
    "Madhapur": {'Pedamma Temple': 2, 'Durgam Chervu': 2},
    "Durgam Chervu": {'Madhapur': 3, 'HITEC City': 3},
    "HITEC City": {'Durgam Chervu': 3, 'Raidurg': 3},
    "Raidurg": {'HITEC City': 3}
};
d = {"Miyapur": "red_line", "JNTU College": "red_line","KPHB Colony": "red_line","Kukatpally": "red_line","Balanagar": "red_line","Moosapet": "red_line","Bharat Nagar": "red_line",
     "Erragadda Road": "red_line","ESI Hospital": "red_line","SR Nagar": "red_line","Ameerpet": "red_line","Punjagutta": "red_line","Irrum Manzil": "red_line","Khairatabad": "red_line",
     "Lakdikapul": "red_line","Assembly": "red_line","Nampally": "red_line","Gandhi Bhavan": "red_line","Osmania Medical College": "red_line",
     "Malakpet": "red_line","New Market": "red_line","Musarambagh": "red_line","Dilsukhnagar": "red_line","Chaitanyapuri": "red_line","Victoria Memorial": "red_line",
     "LB Nagar": "red_line","Nagole": "blue_line",
    "Uppal": "blue_line","Stadium": "blue_line","NGRI": "blue_line","Habsiguda": "blue_line","Tarnaka": "blue_line","Mettuguda": "blue_line","Secunderabad East": "blue_line",
      "Paradise": "blue_line","Rasoolpura": "blue_line","Prakesh Nagar": "blue_line","Begumpet": "blue_line",
    "Madhura Nagar": "blue_line","Yusufguda": "blue_line","Jubilee Hills Road No.5": "blue_line","Jubilee Hills Check Post": "blue_line","Pedamma Temple": "blue_line",
    "Madhapur": "blue_line","Durgam Chervu": "blue_line","HITEC City": "blue_line","Raidurg": "blue_line","JBS": "green_line",
    "Secunderabad West": "green_line","Gandhi Hospital": "green_line","Musheerabad": "green_line","RTC Cross Roads": "green_line","Chikkadpally": "green_line",
    "Narayanguda": "green_line","Sultan Bazar": "green_line","Parade Grounds":"blue_line","MG Bus Station":"red_line"}
const form = document.querySelector("form");
    const outputDiv = document.querySelector("#output");

    form.addEventListener("submit", function(event) {
    event.preventDefault();


    const startStation = document.querySelector("#Start_Station").value;
    const destinationStation = document.querySelector("#Destination_Station").value;
    const showTableBtn = document.querySelector("#submit_button");
    const infoTable = document.querySelector("#info-table");
    const numStationsCell = document.querySelector("#num-stations");
    const estimateTimeCell = document.querySelector("#estimate-time");
    const numInterchangesCell = document.querySelector("#num-interchanges");
    const numLineChangesCell = document.querySelector("#num-line-changes");
    const estimateCostCell = document.querySelector("#estimate-cost");
    var startInput = document.getElementById("Start_Station");
    var destInput = document.getElementById("Destination_Station");
     
    const distances = {};
    const visitedStations = {};
    const predecessors = {};
    if (startInput.value === "" || destInput.value === "") {
        alert("Please fill out both station inputs.");
      }
      
      // Check if both inputs have the same value
      else if (startInput.value === destInput.value) {
        alert("Start and Destination Stations cannot be the same.");
    }

    for (let station in stations) {
        distances[station] = Infinity;
    }

    distances[startStation] = 0;

    while (Object.keys(visitedStations).length < Object.keys(stations).length) {
        let currentStation = null;
        let shortestDistance = Infinity;

        for (let station in stations) {
        if (!visitedStations[station] && distances[station] < shortestDistance) {
            currentStation = station;
            shortestDistance = distances[station];
        }
        }

        for (let neighbor in stations[currentStation]) {
        let tentativeDistance = distances[currentStation] + stations[currentStation][neighbor];
        if (tentativeDistance < distances[neighbor]) {
            distances[neighbor] = tentativeDistance;
            predecessors[neighbor] = currentStation;
        }
        }

        visitedStations[currentStation] = true;
    }

    let path = [destinationStation];
    let predecessor = predecessors[destinationStation];

    while (predecessor) {
        path.unshift(predecessor);
        predecessor = predecessors[predecessor];
    }
    let interchanges=["Ameerpet", "Parade Grounds", "MG Bus Station"];
    let c=path.length-1;
    let a=1;
    let b=0;
    let path2=[];
    let inter=[];
    let interjunction=[];
    let lne=[];

    while (a<=c) {
        if (!interchanges.includes(path[b])) {
            path2.push(path[b]);
        }
        if (interchanges.includes(path[a]) && a < c) {
            if (d[path[a+1]] !== d[path[b]]) {
                path2.push(path[a]+ "("+"Interchange to "+d[path[a+1]]+")");
                interjunction.push(path[a]+ "("+"Interchange to "+d[path[a+1]]+")");
                inter.push(path[a]+ "("+"change here to "+d[path[a+1]]+")");
                if (!lne.includes(d[path[a + 1]])) {
                    lne.push(d[path[a + 1]]);
                }
            } else {
                path2.push(path[a]);
                b+=1;
                a+=1;
            }
        }
        if (a==c) {
            path2.push(path[a]);
        }
        b+=1;
        a+=1;
    }
    let output = document.querySelector("#output");
    outputDiv.innerHTML = "";


// create a box for each station in the path
    for (let i = 0; i < path2.length; i++) {
    let station = path2[i];

    // create a new div element
    let div = document.createElement("div");

    // add the "box" class to the div
    div.classList.add("box");

    // add the appropriate class for the station type
    if (d[station] == "blue_line") {
        div.classList.add("blue");
    } else if (d[station] == "red_line") {
        div.classList.add("red");
    }
      else if (d[station] == "green_line") {
        div.classList.add("green");
    }
      else if (interjunction.includes(station)) {
        div.classList.add("interchange");
    }

    // add the station name to the div
    div.textContent = station;

    // add the div to the output element
    output.appendChild(div);

    // add the connection arrow if it's not the last station in the path
    if (i < path2.length - 1) {
        let arrow = document.createElement("div");
        arrow.textContent = " -->";
        arrow.style.marginTop="15px"
        arrow.style.display = "inline-block";
        arrow.style.textAlign = "center";
        arrow.style.lineHeight = "20px";
        arrow.style.padding = "0 5px";
        arrow.style.color="white"
        output.appendChild(arrow);
    }
    }
    infoTable.style.display ="block";
    tableheadinh.style.display="block";
    color.style.display="block";
    info.style.display="block";

    // update table cells with values
    numStationsCell.textContent = path2.length;
    estimateTimeCell.textContent = distances[destinationStation];
    if (inter.length > 0) {
        numInterchangesCell.textContent = inter;
      } else {
        numInterchangesCell.textContent = 0;
    }
    
    numLineChangesCell.textContent = lne.length;
    estimateCostCell.textContent = "---";
});
function scrollToOutput() {
  var outputDiv = document.getElementById("dn");
  outputDiv.scrollIntoView();
}
$("#menu").click(function(){
    $(".nav ul").addClass("activer")
  })
$("#close").click(function(){
    $(".nav ul").removeClass("activer") 
})
function showAlert() {
    alert("Hello!  Accounts will available soon..");
} 







