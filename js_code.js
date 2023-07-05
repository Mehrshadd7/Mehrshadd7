//bitcoin
function show_td_details(element , id){
    var details_row = document.getElementById(id);
    if (details_row.style.display === "none") {
        details_row.style.display = "table-row";
        document.getElementById(element.id).innerHTML = "Hide details";
    } else {
       details_row.style.display = "none";
        document.getElementById(element.id).innerHTML = "Show details";
    }
    
}


