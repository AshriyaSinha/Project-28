class String{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB : pointB,
            stiffness: 0.04,
            length: 2
        }
        //this.stone = loadImage('stone.png/PluckingMangoes');
        
        this.string = Constraint.create(options);
        World.add(world, this.string);
    }

    display(){
        stroke ("white");
        if(this.string.bodyA != null)
        line (this.string.bodyA.position.x, this.string.bodyA.position.y, this.string.pointB.x, this.string.pointB.y )  
        
        }

    Detach () {
        this.string.bodyA = null
    }
    }
    