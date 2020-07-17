var playing=false;
var score;
var action;
var timerem;
var correctans;

// If we click on Start
document.getElementById("start-reset").onclick=
function() {

  if(playing==true)                                                     //if we are playing
  {
      location.reload();                                                //to reload the page
  }
  else                                                                  //if we are playing
  {
      playing=true;
      score=0;                                                          //to set score to 0
      document.getElementById("score-value").innerHTML=score;

      document.getElementById("time-box").style.display="block";        //to display the time box

      timerem=60;                                                      //to set time to 10 after start
      document.getElementById("sec-box").innerHTML=timerem;

      document.getElementById("gameover-box").style.display="none";

      document.getElementById("start-reset").innerHTML="Reset Game";    //to change the start game button

      startCountdown();

      generateQA();
    }


}
for(i=1;i<5;i++)
{
  document.getElementById("box"+i).onclick=
  function()
  {
    if(playing==true)
    {
      if(this.innerHTML==correctans)
      {

        score++;
        document.getElementById("score-value").innerHTML=score;
        document.getElementById("wrong-message").style.display="none";
        document.getElementById("correct-message").style.display="block";
        setTimeout(function(){
            document.getElementById("correct-message").style.display="none";
        },1000);

        generateQA();
      }
      else {
          document.getElementById("correct-message").style.display="none";
        document.getElementById("wrong-message").style.display="block";
        setTimeout(function(){
            document.getElementById("wrong-message").style.display="none";
        },1000);
      }
    }
  }
}




//function

function startCountdown()                                                 //startCountdown
{
  action=setInterval(function()
{
  timerem-=1;

  document.getElementById("sec-box").innerHTML=timerem;

  if(timerem==0)
  {
    stopCountdown();                                                      //stopCountdown
    document.getElementById("gameover-box").style.display="block";
    document.getElementById("gameover-box").innerHTML="<p>Game Over</p><p> Your score is" +  score  +  "</p>"

    document.getElementById("time-box").style.display="none";
    document.getElementById("correct-message").style.display="none";
    document.getElementById("wrong-message").style.display="none";
    playing=false;
    document.getElementById("start-reset").innerHTML="Start Game";

  }

},1000);
}

function stopCountdown()
{
  clearInterval(action);
}

function generateQA()
{
  var x=1+Math.round(9*Math.random());
  var y=1+Math.round(9*Math.random());
  correctans=x*y;
  document.getElementById("question-box").innerHTML=x + "*" + y;
  var correctpos=1+Math.round(3*Math.random());
  document.getElementById("box"+correctpos).innerHTML=correctans;
  for(i=1;i<5;i++)
  {
    if(i!=correctpos)
    {
      var wrongans=1+Math.round(9*Math.random())*1+Math.round(9*Math.random());
      document.getElementById("box"+i).innerHTML=wrongans;
    }
  }
}
