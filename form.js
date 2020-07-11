class Form {
    constructor(){
        this.title=createElement('h1')
        this.ib=createInput("PUT YO NAME IN SO WE CAN GET ALL YOU INFORMATION MWAHAHAHAHA")
        this.pb=createButton("VOOOOOOOOOOOOOOOOOOOOOOOOOOOM")
        this.GO=createElement ('h4')

    }
    display(){
        this.title.html("CARS GO VOOOOOOOOOOM")
        this.title.position (240,0)
        this.ib.position(150,160)
        this.pb.position(260,190)
        this.pb.mousePressed(()=>{
            this.ib.hide()
            this.pb.hide()
            player.name=this.ib.value()
            playerCount=playerCount+1
            player.index=playerCount
            player.updateplayerinfo()
            player.updateplayercount(playerCount)

            this.GO.html("HELLO NOOB GET READY")
            this.GO.position(130,160)
        })
    }
    hide(){
        this.GO.hide()
        this.ib.hide()
        this.pb.hide()
    }
}
