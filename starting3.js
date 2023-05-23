const url="data.json"

function formatJSON(json){
    let ap=json.april;
    let may=json.may;
    let june=json.june;
    let ap_weeks=[ap[0],ap[1],ap[2],ap[3],ap[4]];
    let may_weeks=[may[0],may[1],may[2],may[3],may[4]];
    let june_weeks=[june[0],june[1],june[2],june[3],june[4]];
    //タグを格納する用，ループごとに値が変化する
    let mon;
    let tue;
    let wed;
    let thu;
    let fri;
    let sat;
    let sun;
    let Month=[];
    let year=[ap_weeks,may_weeks,june_weeks];
    
    let result=[];
console.log(year[0]);
console.log('Fri[2]の中身'+year[0][0].Fri[2]);
console.log(year[0]);
console.log(year[0][0]);

    //外側のネストm:月
    //内側のネストi:第何週か
    //switch:m月の第i週の各曜日の2番目の要素(勝敗)
    for(var m=0;m<3;m++){
        let win=0;
        let lose=0;
        for(var i=0;i<5;i++){
            switch(year[m][i].Mon[2]){
                case '〇':{
                    mon= `<td style="background-color: rgba(255,0,255,0.6)">${year[m][i].Mon[0]}<br>${year[m][i].Mon[1]}<br>${year[m][i].Mon[2]}</td>`;
                    win+=1;
                    break}
                case '×':{
                    mon=`<td style="background-color: rgba(138,43,226,0.6)">${year[m][i].Mon[0]}<br>${year[m][i].Mon[1]}<br>${year[m][i].Mon[2]}</td>`;
                    lose+=1;
                    break}
                default:
                    mon=`<td>${year[m][i].Mon[0]}<br>${year[m][i].Mon[1]}<br>${year[m][i].Mon[2]}</td>`;
                    break;
                }
            switch(year[m][i].Tue[2]){
                case '〇':{
                    tue=`<td style="background-color: rgba(255,0,255,0.6)">${year[m][i].Tue[0]}<br>${year[m][i].Tue[1]}<br>${year[m][i].Tue[2]}</td>`;
                    win+=1;
                    break}
                case '×':{
                    tue=`<td style="background-color: rgba(138,43,226,0.6)">${year[m][i].Tue[0]}<br>${year[m][i].Tue[1]}<br>${year[m][i].Tue[2]}</td>`;
                    lose+=1;
                    break}
                default:
                    tue=`<td>${year[m][i].Tue[0]}<br>${year[m][i].Tue[1]}<br>${year[m][i].Tue[2]}</td>`;
                    break;
                }
            switch(year[m][i].Wed[2]){
                case '〇':{
                    wed=`<td style="background-color: rgba(255,0,255,0.6)">${year[m][i].Wed[0]}<br>${year[m][i].Wed[1]}<br>${year[m][i].Wed[2]}</td>`;
                    win+=1;
                    break}
                case '×':{
                    wed=`<td style="background-color: rgba(138,43,226,0.6)">${year[m][i].Wed[0]}<br>${year[m][i].Wed[1]}<br>${year[m][i].Wed[2]}</td>`;
                    lose+=1;
                    break}
                default:
                    wed=`<td>${year[m][i].Wed[0]}<br>${year[m][i].Wed[1]}<br>${year[m][i].Wed[2]}</td>`;
                    break;
                }
            switch(year[m][i].Thu[2]){
                case '〇':{
                    thu=`<td id='win' style="background-color: rgba(255,0,255,0.6)">${year[m][i].Thu[0]}<br>${year[m][i].Thu[1]}<br>${year[m][i].Thu[2]}</td>`;
                    win+=1;
                    break}
                case '×':{
                    thu=`<td style="background-color: rgba(138,43,226,0.6)">${year[m][i].Thu[0]}<br>${year[m][i].Thu[1]}<br>${year[m][i].Thu[2]}</td>`;
                    lose+=1;
                    break}
                default:
                    thu=`<td>${year[m][i].Thu[0]}<br>${year[m][i].Thu[1]}<br>${year[m][i].Thu[2]}</td>`;
                    break;
                }
            switch(year[m][i].Fri[2]){
                case '〇':{
                    fri=`<td style="background-color: rgba(255,0,255,0.6)">${year[m][i].Fri[0]}<br>${year[m][i].Fri[1]}<br>${year[m][i].Fri[2]}</td>`;
                    win+=1;
                    break}
                case '×':{
                    fri=`<td style="background-color: rgba(138,43,226,0.6)">${year[m][i].Fri[0]}<br>${year[m][i].Fri[1]}<br>${year[m][i].Fri[2]}</td>`;
                    lose+=1;
                    break}
                default:
                    fri=`<td>${year[m][i].Fri[0]}<br>${year[m][i].Fri[1]}<br>${year[m][i].Fri[2]}</td>`;
                    break;
                }
            switch(year[m][i].Sat[2]){
                case '〇':{
                    sat=`<td style="background-color: rgba(255,0,255,0.6)">${year[m][i].Sat[0]}<br>${year[m][i].Sat[1]}<br>${year[m][i].Sat[2]}</td>`;
                    win+=1;
                    break}
                case '×':{
                    sat=`<td style="background-color: rgba(138,43,226,0.6)">${year[m][i].Sat[0]}<br>${year[m][i].Sat[1]}<br>${year[m][i].Sat[2]}</td>`;
                    lose+=1;
                    break}
                default:
                    sat=`<td>${year[m][i].Sat[0]}<br>${year[m][i].Sat[1]}<br>${year[m][i].Sat[2]}</td>`;
                    break;
                }
            switch(year[m][i].Sun[2]){
                case '〇':{
                    sun=`<td style="background-color: rgba(255,0,255,0.6)">${year[m][i].Sun[0]}<br>${year[m][i].Sun[1]}<br>${year[m][i].Sun[2]}</td>`;
                    win+=1;
                    break}
                case '×':{
                    sun=`<td style="background-color: rgba(138,43,226,0.6)">${year[m][i].Sun[0]}<br>${year[m][i].Sun[1]}<br>${year[m][i].Sun[2]}</td>`;
                    lose+=1;
                    break}
                default:
                    sun=`<td>${year[m][i].Sun[0]}<br>${year[m][i].Sun[1]}<br>${year[m][i].Sun[2]}</td>`;
                    break;
                }
            Month.push(mon+tue+wed+thu+fri+sat+sun);
        }
        result.push(`<h2>${win}勝,${lose}敗</h2>`);
    }

    console.log('monthの中身:'+Month);
    console.log('month[1]の中身:'+Month[1]);
    console.log('month[0]の中身:'+Month[0]);
    console.log('month[15]の中身'+Month[15]);

        document.getElementById("result4").innerHTML=result[0];
        document.getElementById("result5").innerHTML=result[1];
        document.getElementById("result6").innerHTML=result[2];



        document.getElementById("result4_1").innerHTML=Month[0];
        document.getElementById("result4_2").innerHTML=Month[1];
        document.getElementById("result4_3").innerHTML=Month[2];
        document.getElementById("result4_4").innerHTML=Month[3];
        document.getElementById("result4_5").innerHTML=Month[4];
        document.getElementById("result5_1").innerHTML=Month[5];
        document.getElementById("result5_2").innerHTML=Month[6];
        document.getElementById("result5_3").innerHTML=Month[7];
        document.getElementById("result5_4").innerHTML=Month[8];
        document.getElementById("result5_5").innerHTML=Month[9];
        document.getElementById("result6_1").innerHTML=Month[10];
        document.getElementById("result6_2").innerHTML=Month[11];
        document.getElementById("result6_3").innerHTML=Month[12];
        document.getElementById("result6_4").innerHTML=Month[13];
        document.getElementById("result6_5").innerHTML=Month[14];
};
   
    
    
    window.addEventListener("load",()=>{
        fetch(url)
         .then((response)=>response.json())
         .then((data)=>formatJSON(data))
         document.getElementById(`april`).style.display = "";
         document.getElementById(`may`).style.display = "none";
         document.getElementById(`june`).style.display = "none";
    });




//strを使った変数ではobjectは呼び出せない
//ex.m=[Mon,Tue,Wed]を使ってap[0].weeks[0]として中身を呼び出すことはできない(ap[0].Monはok)
//objectは要素番号では呼び出せない
//switchかforを1週間分作って条件分岐する?(曜日ごとに作らないとダメそう)
/*
    for (let weeks[i] of json.buffaloes){
        if(weeks[i].Tue[2]=="〇"){
            weeks.push(
                `<td style="background-color: rgba(255,0,255,0.6)">${weeks[i].Tue[0]}<br>${weeks[i].Tue[1]}<br>${weeks[i].Tue[2]}</td>`
            );
        }else if(weeks[i].Tue=="×"){
            weeks.push(
                `<td style="background-color: rgba(138,43,226,0.6)">${weeks[i].Tue[0]}<br>${weeks[i].Tue[1]}<br>${weeks[i].Tue[2]}</td>`
            );  
        }else{
            weeks.push(
                `<td>${weeks[i].Tue[0]}<br>${weeks[i].Tue[1]}<br>${weeks[i].Tue[2]}</td>`
            )
        }
        }
*/
