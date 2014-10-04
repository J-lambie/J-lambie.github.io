
var notwinner = false;

window.onload = function () {
  "use strict";
   $("start").onclick = StartUP;
   $("end").onmouseover = EndNOW;
    
    var maze = $$(".boundary");
    for (var i = 0; i <maze.length; i++) {
        maze[i].observe("mouseover",Lose);
        
    }
    

};

function Lose()
{
    notwinner=true;
    var boundary = $$(".boundary");
    for (var i = 0; i <boundary.length; i++) {
        boundary[i].addClassName("youlose");
    }

}

function StartUP()
{
    notwinner=false;
    var boundary = $$(".boundary");
    for (var i = 0; i <boundary.length; i++) {
        boundary[i].removeClassName("youlose");
}}

function EndNOW(){
    if (!notwinner)
    {
        alert("you win");}
    else{
        alert("you lose");}}