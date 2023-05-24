function viewChange(){
    if(document.getElementById('month')){
        id = document.getElementById('month').value;
        if(id == 'april'){
            document.getElementById(`april`).style.display = "";
            document.getElementById(`may`).style.display = "none";
            document.getElementById(`june`).style.display = "none";
        }else if(id == 'may'){
            document.getElementById(`april`).style.display = "none";
            document.getElementById(`may`).style.display = "";
            document.getElementById(`june`).style.display = "none";
        }
        else if(id == 'june'){
            document.getElementById(`april`).style.display = "none";
            document.getElementById(`may`).style.display = "none";
            document.getElementById(`june`).style.display = "";
        }
    };

window.onload = viewChange;
};
/*
document.getElementById('result4_1').style.display = "";
document.getElementById('result4_2').style.display = "";
document.getElementById('result4_3').style.display = "";
document.getElementById('result4_4').style.display = "";
document.getElementById('result4_5').style.display = "";
document.getElementById('result5_1').style.display = "none";
document.getElementById('result5_2').style.display = "none";
document.getElementById('result5_3').style.display = "none";
document.getElementById('result5_4').style.display = "none";
document.getElementById('result5_5').style.display = "none";
document.getElementById('result6_1').style.display = "none";
document.getElementById('result6_2').style.display = "none";
document.getElementById('result6_3').style.display = "none";
document.getElementById('result6_4').style.display = "none";
document.getElementById('result6_5').style.display = "none";
*/
