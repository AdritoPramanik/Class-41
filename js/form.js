class Form{
    constructor(){
        this.input = createInput("Name")
        this.button = createButton("Play")
        this.greeting = createElement("h3")
        this.title = createElement("h2")
        this.rank_element = createElement("h3")
        this.reset = createButton('Reset');

    }
    hide(){
        this.greeting.hide()
        this.button.hide()
        this.input.hide()
    }
    static showRank(name){
        console.log(name)
        this.rank_element.html(name+" is the winner")
        this.rank_element.position(displayWidth/2-20, 0)
    }
    display(){
        
        this.title.html("Car Racing Game")
        this.title.position(displayWidth/2-50, 0)
        console.log(player.rank)
        
        this.input.position(displayWidth/2-40, displayHeight-80)
        this.button.position(displayWidth/2+30, displayHeight/2)
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            player.name = this.input.value()
            playerCount+=1
            player.index=playerCount
            player.update()
            player.updateCount(playerCount)
            this.greeting.html("Hello "+player.name)
            this.greeting.position(displayWidth/2-70, displayHeight/4)
            
        })
        this.reset.mousePressed(()=>{
            player.updateCount(0); 
            game.update(0); 
            });

    }
    
}