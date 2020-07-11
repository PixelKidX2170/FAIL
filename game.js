class Game {
    constructor(){

    }
    getgamestate(){
        var gamestateref=database.ref('gameState')
        gamestateref.on("value", function(data){
          gameState=data.val()  
        })
    }
    updategamestate(state){
        var gamestateref=database.ref('/')
        gamestateref.update({
            gameState:state
        })
    }
    start(){
        if (gameState===0){
            player= new Player()
            player.getplayercount()
            form= new Form()
            form.display()
        }
        C_1=createSprite(300,200)
        C_2=createSprite(600,200)
        carset=[C_1, C_2]
    }

    play(){
        form.hide()
        text("GOOOOOOOOOOOOOOOOOO!!!!", 120,100)
        Player.getallplayersinfo()
        if (all!==undefined){
            var py;
            var px=100
            var index=0
            for(var plr in all){
                py=displayHeight-all[plr].distance
                carset[index].x=px
                carset[index].y=py  
                px=px+201
                index=index+1
                console.log("checkpoint"+carset[index].y);
                if (index===player.index){
                    carset[index-1].shapeColor="blue"
                    camera.position.x=displayWidth/2
                    camera.position.y=carset[index-1].y
                }
            }
        }
        if(keyIsDown(UP_ARROW)&& player.index!==null){
            player.distance=player.distance+50
            player.updateplayerinfo()
        }
    }
}