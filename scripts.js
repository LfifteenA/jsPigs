/*-------------------------------------
| Pigs Get Wings On Mouse In
-------------------------------------*/

/* Mouse Over Give Wings -------------------------------*/
// function declaration
function giveWings() {
  $('#stage .pigtopleft').attr('src', 'images/pig2wing.png');
  $('#stage .pigmiddle').attr('src', 'images/pig1wing.png');
  $('#stage .pigright').attr('src', 'images/pig3wings.png');
}

//function call
//GiveWings();

// event listener
  $('#stage').mouseover(giveWings);

/*-------------------------------------
| Pigs Lose Wings On Mouse Out
-------------------------------------*/

/* Mouse Out Back To Wingless Pigs -------------------------------*/
//Mouseout version of the above

// function declaration
function noWings() {
  $('#stage .pigtopleft').attr('src', 'images/pig2.png');
  $('#stage .pigmiddle').attr('src', 'images/pig1.png');
  $('#stage .pigright').attr('src', 'images/pig3.png');
}
// event listener
   $('#stage').mouseout(noWings);

 /*-------------------------------------
 | On Click, Pigs Fly!
 -------------------------------------*/
 // function declaration

 //Pig1
 function makePigsFly1() {
   $('#stage .pigtopleft')
     .stop(true)
     .animate({'left':'600px','top':'20px'}, 1000)
     .animate({'left':'600px','top':'400px'}, 1000)
     .animate({'left':'50px','top':'400px'}, 1000)
     .animate({'left':'50px','top':'20px'}, 1000);
 }

//Pig2
 function makePigsFly2() {
   $('#stage .pigmiddle')
     .stop(true)
     .animate({'left':'10px','top':'10px'}, 1000)
     .animate({'left':'550px','top':'10px'}, 1000)
     .animate({'left':'500px','top':'350px'}, 1000)
     .animate({'left':'207px','top':'220px'}, 1000);
 }


//pig3
 function makePigsFly3() {
   $('#stage .pigright')
     .stop(true)
     .animate({'left':'130px','top':'175px'}, 1000)
     .animate({'left':'130px','top':'375px'}, 1000)
     .animate({'left':'390px','top':'305px'}, 1000)
     .animate({'left':'580px','top':'115px'}, 1000);
 }
 //function call
 //none?


 // event listener
 //On click, each flies together
$('#stage').click(makePigsFly1);
$('#stage').click(makePigsFly2);
$('#stage').click(makePigsFly3);
