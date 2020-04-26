class FGF {
    constructor(name, cases) {
        this.name = name;
        this.cases = cases;
    }
};
var xmlhttp = new XMLHttpRequest();
var myObj;
var list = [];
var c = document.getElementById('myDropdown');
xmlhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
    myObj = JSON.parse(this.responseText);
    list = Object.keys(myObj[0]);



 

}
console.log(myObj);
};
xmlhttp.open("GET", `./covid_data.json`, true);
xmlhttp.send(); 


