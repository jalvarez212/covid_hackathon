class FGF {
    constructor(name, cases) {
        this.name = name;
        this.cases = cases;
    }
};
var xmlhttp = new XMLHttpRequest();
var myObj;
xmlhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
    myObj = JSON.parse(this.responseText);

 

}
console.log(myObj);
};
xmlhttp.open("GET", `./covid_data.json`, true);
xmlhttp.send(); 
