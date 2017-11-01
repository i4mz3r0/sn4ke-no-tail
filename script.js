var drt; const 
canvas=document.querySelector('canvas'); 
const c=canvas.getContext("2d"); 
window.addEventListener('keydown',function(e){
            switch(e.keycode){
                case 87:
                    drt="t";
                    break;
                case 83:
                    drt="d";
                    break;
                case 65:
                    drt="l";
                    break;
                case 68:
                    drt="r";
                    break;
            }
        })
        
    function apple(){
        this.draw=function(x,y){
            c.fillStyle="#ff0000";
            c.fillRect(x,y,10,10);
        }
    }
    function snake(){
        this.draw=function(x,y){
            c.fillStyle="#fff";
            c.fillRect(x,y,10,10);
        }
    }
function randx(){
    x=(Math.floor((Math.random() * 
34) + 1))*10;
    return x;
}
function randy(){
    y=(Math.floor((Math.random() * 
39) + 1))*10; return y;
}
rx=randx(); ry=randy(); jx=randx(); 
jy=randy(); s = new snake(); a = 
new apple(); ax=rx ay=ry const v=2; 
var score=0; var tail=[]; ir=0; 
function frame(){
 requestAnimationFrame(frame);
 tail.push([ax,ay]);
 switch(drt){
    case 'l':
         if(ax<1){
            ax=350;
         }else{
             ax-=v;
         }
         break;
    case 'r':
         if(ax>349){
             ax=0;
         }else{
             ax+=v;
         }
         break;
    case 't':
        if(ay<1){
            ay=400;
        }else{
            ay-=v;
        }
        break;
    case 'd':
        if(ay>399){
            ay=0
        }else{
            ay+=v;
        }
        break;
    default:
        break;
 }
 //if(ir%50==0){
 c.clearRect(0,0,350,400);
 for(var i=0; i<tail.length-1;i++){
     tail[i]=tail[i+1];
 }
 s.draw(ax,ay);
 a.draw(jx,jy);
 if(ax<jx+10 & ax>jx-10 & jy-10<ay 
& ay<jy+10){
     score++;
     jx=randx();
     jy=randy();
    
 }
 c.font="20px Sans";
 c.fillStyle="#fff";
 c.fillText(score,10,20);
}
frame();
