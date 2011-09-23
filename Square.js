	//Constructor
        function Square(start_x, start_y, width, height, backgroundColor){
		
		//properties
		this.start_x = start_x;
		this.start_y = start_y;
		this.width = width;
		this.height = height;
		this.backgroundColor = backgroundColor;
		
		//functions
		this.setPosition = setPosition;
		this.setWidth = setWidth;
		this.setHeight = setHeight;
		this.setColor = setColor;

		this.getXPosition = getXPosition;
		this.getYPosition = getYPosition;
		this.getWidth = getWidth;
		this.getHeight = getHeight;
		this.getBackgroundColor = getBackgroundColor;
		this.draw = draw;
	}
	
	//set the Position
	function setPosition(new_x, new_y){
		this.start_x = new_x;
		this.start_y = new_y;
	}

	//set the width
	function setWidth(newWidth){
		this.width = newWidth;	
	}

	//set the height
	function setHeight(newHeight){
		this.height = newHeight;
	}

	//set the fill color
	function setColor(newColor){
		this.backgroundColor = newColor;	
	}
	
	//return the x position
	function getXPosition(){
		return this.start_x;	
	}

	//return the y position
	function getYPosition(){
		return this.start_y;
	}
	
	// return the width
	function getWidth(){
		return this.width;
	}
	
	//return the height
	function getHeight(){
		return this.height;
	}

	//return the background color
	function getBackgroundColor(){
		return this.backgroundColor;
	}	

	//draw the object
	function draw(drawingContext){
		drawingContext.fillStyle = this.backgroundColor;
		drawingContext.fillRect(this.start_x, this.start_y, this.width, this.height); 
	
	}