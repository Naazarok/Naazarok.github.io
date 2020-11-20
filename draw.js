					this.SquarePaint = function(x1,y1,x2,y2,color = 'black', b = 0){
						ctx.shadowColor = color;
						ctx.shadowBlur = b;
						ctx.fillStyle = color;
						ctx.fillRect(x1, y1, x2, y2)
					}

					this.SquareBorder = function (x, y, w, h, r, color='black',b=0, paint = true){
						if (w < 2 * r) r = w / 2;
						if (h < 2 * r) r = h / 2;
						ctx.beginPath();
						ctx.fillStyle = color;
						ctx.strokeStyle = color;
						ctx.shadowColor = color;
						ctx.moveTo(x+r, y);
						ctx.arcTo(x+w, y, x+w, y+h, r);
						ctx.arcTo(x+w, y+h, x, y+h, r);
						ctx.arcTo(x, y+h, x, y, r);
						ctx.arcTo(x, y, x+w, y, r);
						ctx.shadowBlur = b;
							if(paint == true){
								ctx.fill();
									}else{
								ctx.stroke();
								}
						ctx.closePath();
					return ctx;
					}


					this.Square = function(x1,y1,x2,y2,color = 'black', size = 1, b=0){
						ctx.lineWidth = size;
						ctx.strokeStyle = color;
						ctx.shadowColor = color;
						ctx.shadowBlur = b;
						ctx.moveTo(x1, y1);
						ctx.strokeRect(x1, y1, x2, y2);
					}
		
					this.Line = function(x1,y1,x2,y2,color = 'black', size = 1, b=0){
					ctx.beginPath();
					ctx.lineWidth = size;
					ctx.strokeStyle = color;
					ctx.shadowColor = color;
					ctx.shadowBlur = b;
					ctx.moveTo(x1, y1);
					ctx.lineTo(x2, y2);
					ctx.stroke();
					}
					
this.ClearSquare = function(x,y,w,h){
ctx.clearRect(x-w/2, y-h/2, w, h);
return ctx;
}

this.clearArc = function(x, y, radius) {
  ctx.save();
  ctx.globalCompositeOperation = 'destination-out';
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
  ctx.fill();
  ctx.restore();
}
const ElementToDraw = [
						'and.png','capacitor.png',
						'constant.png','cut.png',
						'dc.png','delete.png',
						'diode.png','flip.png',
						'ground.png','inductor.png',
						'insert.png','isrc.png',
						'load.png','mail.png','nand.png',
						'nmos.png','nor.png','not.png','opamp.png','or.png',
						'param.png','pause.png','pmos.png',
						'potentiometer.png','pulse.png',
						'resistor.png','symbol_rotate.png',
						'symbol_save.png','symbol_saw.png',
						'symbol_sine.png','symbol_vsrc.png','symbol_vsrcsine.png',
						'xnor.png','xor.png'
						
						
						];
						
	this.drowElements = function(x,y,e){
		var img = new Image();
			img.src = 'img/'+ElementToDraw[e];
			img.onload = function() {
				ctx.drawImage(img, x-pix, y-pix, pix*2, pix*2);
			};
	}
	
	
	
			
						
	
			
