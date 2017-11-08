var drt; 
const canvas=document.querySelector('canvas'); 
const c=canvas.getContext("2d"); 
window.addEventListener('keydown',function(e){
            if(e.keyCode==87 || e.keycode==38) drt="t";
            if(e.keyCode==65 || e.keycode==37) drt="l";
            if(e.keyCode==83 || e.keycode==40) drt="d";
            if(e.keyCode==68 || e.keycode==39) drt="r";
        })
	function apple(){
		this.draw=function(x,y){
			c.fillStyle="#f00";
			c.fillRect(x,y,20,20);
		}
	}
	function snake(){
		this.draw=function(x,y){
			c.fillStyle="#fff";
			c.fillRect(x,y,20,20);
		}
	}
function randpos(){
	x=(Math.floor((Math.random() * 78) + 1))*10;
	return x;
}
rx=randpos(); 
ry=randpos(); 
jx=randpos(); 
jy=randpos(); 
s = new snake();
a = new apple(); 
var v=1; 
var score=0;
function frame(){
	requestAnimationFrame(frame);
	switch(drt){
		case 'l':
			rx=(rx<1)?799:rx-v;
			break;
		case 'r':
			rx=(rx>799)?0:rx+v;
			break;
		case 't':
			ry=(ry<1)?799:ry-v;
			break;
		case 'd':
			ry=(ry>799)?0:ry+v;
			break;
		default:
			break;
	}
	c.clearRect(0,0,800,800);
	s.draw(rx,ry);
	a.draw(jx,jy);
	if(rx<jx+20 & rx>jx-20 & jy-20<ry & ry<jy+20){
		score++;
		jx=randpos();
		jy=randpos();
		v=v+0.5;
	}
	c.font="30px Sans";
	c.fillStyle="#fff";
	c.fillText(score,10,30);
}
frame();
