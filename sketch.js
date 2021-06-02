const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
   var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
}

function draw(){

    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API

    //change the data in JSON format
    var responseJSON = await response.response.json();
    var datetime = responseJSON.datetime;
    // write code slice the datetime
    hour = datatime.slice(11,13);

    // add conditions to change the background images from sunrise to sunset
    if (hour>=04 && hour<=06){
     bg = sunrise1.png
    }
    if (hour>=06 && hour<=08){
        bg = sunrise2.png
       }
       if (hour>=08 && hour<=010){
        bg = sunrise3.png
       }
       if (hour>=10 && hour<=12){
        bg = sunrise4.png
       }
       if (hour>=012 && hour<=14){
        bg = sunrise5.png
       }
       if (hour>=14 && hour<=16){
        bg = sunrise6.png
       }
       if (hour>=16 && hour<=18){
        bg = sunrise7.png
       }
       if (hour>=18 && hour<=20){
        bg = sunrise8.png
       } 
       if (hour>=20 && hour<=22){
        bg = sunrise9.png
       }
       if (hour>=22 && hour<=24){
        bg = sunrise10.png
       }
    //load the image in backgroundImg variable here
    background = loadImage(bg)
}
