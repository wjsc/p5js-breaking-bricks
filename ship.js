function Ship(){
	this.height=30;
	this.width=250;
	this.pos=createVector(windowWidth/2,windowHeight-this.height*10);
	this.color=color(random(255),random(255),random(255));
	this.vel=createVector(0,0);
	const a = this.pos.x-this.width/2;
	const b = this.pos.x+this.width/2
	const c = this.pos.y-this.height/2;
	const d = this.pos.y+this.height/2;

	this.edges=function()
	{
		if(this.pos.x+this.width/2>windowWidth || this.pos.x-this.width/2<0){
			this.vel=createVector(0,0);
			this.pos.x
		}
	}
	this.move=function(vel)
	{	
		this.vel=vel;
	}
	this.update=function()
	{
		this.vel.setMag(15);
		this.pos.add(this.vel);
	}
	this.show=function(){
		noStroke();
		fill(this.color);
		quad(
			a,c,
			a,d,
			b,d,
			b,c
		);
	}
	
}
