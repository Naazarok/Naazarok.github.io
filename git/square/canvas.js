	const canvas = document.getElementById('canvas');
	const ctx = canvas.getContext('2d');
	canvas.width = 800;
	canvas.height = 600;

	

	
			const Square = function(x1,y1,x2,y2,color = 'black'){
						ctx.fillStyle = color;
						ctx.fillRect(x1, y1, x2, y2)
					}

	
	 let Main = function() {

		new Square(1,1,122,122,'black')
		new Square(1,122,122,122,'red')
		}	
			Main()
			
	/* let UpDate = function() {
		 Main()
	
	 }
	setInterval(function() {
			UpDate()
			},1000/60);*/