
//make a grid
//be able to input either X or O with a click in grid square (first player will be X)
//Declare a winner when either X or O are three in a row
//be able to reset board

function makeGrid() {
    var str = "";
    var obj = document.getElementById("main_container");

    for (var i = 0; i < 3; i++) {
        str += "<div class='row' id='test_row" + i + "'>";
        var str2 = "";
      


        for (var j = 0; j < 3; j++) {
           


            var key = "index" + String(i) + String(j);
            str2 += "<div class='col' id='test_col" + key + "'>";
            var key2 = "btn" + String(i) + String(j);


            str2 += "<button type='button' id='" + key2 + "' class='btn btn-secondary' onclick=addValue('" + key + "','" + key2 + "')></button>";
            str2 += "</div>";
        }

        str += str2;
        str += "</div>";


    }
    console.log(str);
    obj.innerHTML = str;

}


var alreadyClicked = [];
var count = 0;



 function addValue(b, v) {

   

     console.log(b);
     console.log(v);

   var obj = document.getElementById(v);

   console.log(count);

     if ((count % 2 == 0) && (!alreadyClicked.includes(b))) {
console.log(count);
        count++;
         alreadyClicked.push(b);
         obj.innerHTML = "X";


     } else if ((count % 2 == 1) && (!alreadyClicked.includes(b))) {
console.log(count);
         count++;
         alreadyClicked.push(b);
        obj.innerHTML = "O";


   }
 }





    //figure out what button was clicked
    //make sure button has not already been clicked
    //make each button X or O when clicked on 
        //Have counter count number of clicks
        //on ODD clicks, button display X
        //on EVEN click, button display O








