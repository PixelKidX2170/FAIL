var gameState=0
var playerCount=0
var form
var player
var game
var database
var distance=0
var all
var C_1, C_2
var carset=[]




function setup (){
    createCanvas (displayWidth-30, displayHeight-160)
    //CanvasPattern ("black")
    database= firebase.database ();
    game=new Game()
    game.getgamestate()
    game.start()
}
function draw (){
    background (128)
    if(playerCount===2){
        game.updategamestate(1)
    }
    if(gameState===1){
        clear()
        game.play()
    }
    drawSprites();
}