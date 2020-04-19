var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

c.fillStyle = 'rgba(255,0,0,.7)';
//c.fillRect(200, 300, 30, 40);

//lines
// c.beginPath();
// c.moveTo(50,300);
// c.lineTo(300,100);
// c.stroke();

//arcs and circles\

/*
c.beginPath();
c.arc(300, 300, 30, 0, Math.PI*2, false);
c.strokeStyle = 'blue';
c.stroke();
*/

// for(var i = 0; i<100; i++){
// 	var x = Math.random() * window.innerWidth;
// 	var y = Math.random() * window.innerHeight;
// 	//let col = parseInt(Math.random() * 16777215).toString(16);
// 	var r = parseInt(Math.random()*256);
// 	var g = parseInt(Math.random()*256);
// 	var b = parseInt(Math.random()*256);
// 	var a = Math.random()*.7;
// 	c.beginPath();
// 	c.arc(x, y, 30, 0, Math.PI*2, false);
// 	c.strokeStyle = 'rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')';
// 	//c.strokeStyle = 'rgba(255, 0, 0, .5)';
// 	c.lineWidth = 10;
// 	c.stroke();
// }

// }

// c.arc(200, 200, 30, 0, Math.PI*2, false);
// c.strokeStyle = 'blue';
// c.stroke();
var numCircles = 150;
// var g = .5;

var xArr = [];
var yArr = [];
var dxArr = [];
var dyArr = [];
var rArr = [];
var redArr = [];
var greenArr = [];
var blueArr = [];
var alphaArr = [];
// var gArr = [];

for(var i = 0; i < numCircles; i++){
	rArr.push(Math.random()*10 + 15);
	xArr.push(Math.random()*(innerWidth - rArr[i]*2) + rArr[i]);
	yArr.push(Math.random()*(innerHeight - rArr[i]*2	) + rArr[i]);
	dxArr.push(Math.random()*6 - 3);
	dyArr.push(Math.random()*6 - 3);
	redArr.push(parseInt(Math.random()*256));
	greenArr.push(parseInt(Math.random()*256));
	blueArr.push(parseInt(Math.random()*256));
	alphaArr.push(Math.random()*.7);
}

function animate(){
	requestAnimationFrame(animate);
	c.clearRect(0,0,innerWidth,innerHeight);
	for(var i = 0; i < numCircles; i++){
		c.beginPath();
		c.arc(xArr[i], yArr[i], rArr[i], 0, Math.PI*2, false);
		c.strokeStyle = 'rgba(' + redArr[i] + ', ' + greenArr[i] + ', ' + blueArr[i] + ', ' + alphaArr[i] + ')';
		c.fillStyle = 'rgba(' + redArr[i] + ', ' + greenArr[i] + ', ' + blueArr[i] + ', ' + alphaArr[i] + ')';
		c.fill(); 
		if(xArr[i] + rArr[i]>innerWidth || xArr[i] - rArr[i] < 0){
			dxArr[i] *=-1;
		}

		if(yArr[i] + rArr[i] > innerHeight || yArr[i] - rArr[i]<0){
			dyArr[i]*=-1;
		}

		xArr[i]+=dxArr[i];
		yArr[i]+=dyArr[i];

		// c.lineWidth = 10;
		c.stroke();
	}
}

animate();