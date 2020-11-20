	const canvas = document.getElementById('canvas');
	const ctx = canvas.getContext('2d');
	const pix = 80;
	canvas.width = 1650;
	canvas.height = 810;
			
	this.drowGrid = function() {
		this.SquarePaint(0,0,canvas.width,canvas.height,'#72747a');
		const w = canvas.width;
		const h = canvas.height;
		const p = w / pix;
		const xStep = w / p;
		const yStep = h / p;


			for( let x = 0; x<w; x+= xStep){this.Square(x,0,x,h,'#9d9c9a');}
			for( let y = 0; y<w; y+= xStep){this.Square(0,y,w,y,'#9d9c9a');}
			for( let b = 0; b<w; b+= xStep*3){
			for( let b1 = 0; b1<h; b1+= xStep*3){
				this.SquarePaint( b-pix/8, b1-pix/8, pix/4,pix/4,'#9d9c9a',2);
			}}}