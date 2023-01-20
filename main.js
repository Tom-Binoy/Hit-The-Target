
// Create canvas variable
canvas = new fabric.Canvas('myCanvas')
//Set initial positions for ball and hole images.
b_y = 225;
b_x = 100;
h_y = 50;
h_x = 1000;

bm = 1;

block_image_width = 5;
block_image_height = 5;

function load_img(){
	// write code to Upload golf image on the canvas
	fabric.Image.fromURL("Target.png",function(Img){
		h_o =Img;
		h_o.scaleToWidth(300);
		h_o.scaleToHeight(300);
		h_o.set({
			top : h_y,
			left : h_x
		});
		canvas.add(h_o);
	});
	new_image();
}

function new_image()
{
	// write code to Upload ball image on canvas
	fabric.Image.fromURL("ball.png",function(Img){
		b_o =Img;
		b_o.scaleToWidth(50);
		b_o.scaleToHeight(50);
		b_o.set({
			top : b_y,
			left : b_x
		});
		canvas.add(b_o);
	});
	
}

function new()
{	canvas.remove(b_o);
	// write code to Upload ball image on canvas
	fabric.Image.fromURL("ball.png",function(Img){
		b_o =Img;
		b_o.scaleToWidth(50);
		b_o.scaleToHeight(50);
		b_o.set({
			top : b_y,
			left : b_x
		});
		canvas.add(b_o);
	});
	
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	if(b_x == h_x && b_y == h_y){
		canvas.remove(b_o)
		document.getElementById("myCanvas").style.borderColour= "green";
		document.getElementById("myCanvas").style.backgroundURL="Goal.jpg";
	}
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
}	
	function up()
	{
		// Write a code to move ball upward.
		if(b_y >0){
		 b_y = b_y-block_image_height;
		 console.log("Up arrow key is pressed, Y ="+b_y)
		 new();
		 }
	}

	function down()
	{
		 // Write a code to move ball downward.
		 if(b_y <=450){
		 b_y+=block_image_height;
		 console.log("Down arrow key is pressed, Y ="+b_y)
		 new();
		 }
	}

	function left()
	{
		if(b_x >5)
		{
		b_x-=block_image_height;
		console.log("Left arrow key is pressed, X ="+b_x)
		new();
		}
	}

	function right()
	{    
		if(b_x < 1050){
		console.log("r okay");
		b_x+=block_image_height;
		console.log("Right arrow key is pressed, X ="+b_x)
		new();
		}
	}
	


