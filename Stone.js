class Stone{
    constructor(x,y,radius){
        var options = {
            restitution : 0,
            friction : 1,
            density:1.2
        }
        this.stony = loadImage('Plucking mangoes/stone.png');
        
        this.Stone = Bodies.circle(x,y,radius, options);
        World.add(world, this.Stone);
        this.r = radius 
    }

    display(){
        imageMode (CENTER)
        image(this.stony,this.Stone.position.x,this.Stone.position.y,this.r, this.r );  
        
        }
    }
    
