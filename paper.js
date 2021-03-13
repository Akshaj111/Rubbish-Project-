class paper
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic: false 			
			}
		
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);
        this.image = loadImage("paper.png"); 
	}
	display()
	{
			
			var paperPos=this.body.position;		

			push()
			translate(paperPos.x, paperPos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			rect(this.x,this.y,this.w, this.h);
			pop()
			
	}

}