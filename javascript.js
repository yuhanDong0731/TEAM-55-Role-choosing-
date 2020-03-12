


var pickYourLuckuNumber=prompt ("Please enter a number from 1-100");

function finalRole (){

  let positionList = ["Team Leader","Solution Tester","Solution Developer"];
  let finalRole1 = positionList [Math.floor(Math.random()*positionList.length)];
  alert ("Your role is :"+' '+finalRole1 );



}
finalRole();
