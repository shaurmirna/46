class Random{
    constructor(x,y){
        var  options={
            restitution:0.5,
            friction:1,
            density:0.5
        }
        this.body=Bodies.rectangle(x,y,180,80,options);
        this.width = 180;
        this.height = 80;
        this.image = loadImage("dimond.png");
        World.add(world,this.body)

    }
    display(){
        push();
        imageMode(CENTER);
        image(this.image, 10, 10, this.width, this.height);
        pop();
      }  
}