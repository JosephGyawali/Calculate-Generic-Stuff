function calculateTip(){
    var principal = document.getElementById("principal-amount").value;
    var percentage = document.getElementById("percent").value;

    if(principal === "" || percentage === 0){
        alert("Invalid inputs.");
    }

    var tip = (principal*percentage);
    tip = Math.round(tip)/100;
    tip = tip.toFixed(2);


    var total = parseFloat(principal)+parseFloat(tip);

    console.log("total:  "+total);
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = tip;
    document.getElementById("total").innerHTML = total;
  

}

document.getElementById("principal-amount").style.display = "";
document.getElementById("percent").style.display = "";

//click to call function
document.getElementById("calculate").onclick = function() {
    calculateTip();
    document.getElementById("principal-amount").value = '';
    document.getElementById("percent").value = '';
  };



