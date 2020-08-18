class Dustbin{

    constructor(x,y,width,height){
    
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.image = loadImage("images/dustbingreen_Image.png");
        
    
        this.width = 100;
        this.height = 100;
    }
        display(){
            var pos = this.body.position;
    
            fill ("green");
    
            imageMode(CENTER);
            image(this.image,pos.x,pos.y,this.width,this.height);
    
    
        }
    }