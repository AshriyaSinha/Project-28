class Mango{
    constructor(x,y,radius){
        var options = {
            isStatic : true,
            restitution : 0,
            friction : 1,
        }
        this.mangi = loadImage('Plucking mangoes/mango.png');
        
        this.mango = Bodies.circle(x,y,radius, options);
        World.add(world, this.mango);
        this.r = radius 
    }

    display(){
        imageMode (CENTER)
        image(this.mangi,this.mango.position.x,this.mango.position.y,this.r, this.r );  
        
        }
    }
    
