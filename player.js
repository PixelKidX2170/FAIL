class Player {
    constructor(){
        this.index=null
        this.name=null
        this.distance=0
    }
    getplayercount (){
        var playerref=database.ref('playerCount')
        playerref.on("value", function(data){
            playerCount=data.val()
        })
    }
    updateplayercount(count){
        var playerref=database.ref('/')
        playerref.update({
            playerCount:count
        })
    }
    updateplayerinfo (){
    var playin="players/player"+this.index 
    var ref=database.ref (playin)
    ref.set ({
    name:this.name,
    distance:this.distance
                                            })

    }
   static getallplayersinfo(){
    var allplayersinforef=database.ref('players')
    allplayersinforef.on("value",(data)=>{
        all=data.val()
    })
    }
}