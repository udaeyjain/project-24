class Rubber{
constructor(x,y,r){
    var options={
restitution:0.3,
friction:5,
dencity:1
}
this.body=Bodies.circle(x,y,5,options);
World.add(world,this.body);
}
display(){
    var pos =this.body.position;
    rectMode(CENTER);;
    push();
    translate(pos.x, pos.y);
    fill("red");
    ellipse(0,0,this.r, this.r)
    pop();
}

}