/*
u = up;
d = down;
l = left;
r = right;
通过按键记录位移更新试图
*/
var q=u=d=l=r=f=0;
var v , w;
var tick = setInterval(function(e){
    f || (
      navigator.platform[x = y = a = 15],
      onkeydown=e=>this[`lurdl*d*l*ur*u`[(e.which+3)%20]]=1,
      onkeyup=e=>this[`lurdl*d*l*ur*u`[(e.which+3)%20]]=0
    );
    for(i in m=[511999, 278672, 278672, 278672, 806815,280720,280720,280720,524191]){
      for(j=20;j--;){
        f||(
          document.getElementById('s').innerHTML += 
          m[i]>>j & 1?
          `<div style=position:fixed;padding:1.51in;background:#929190;transform:translate3D(${j * 3 + .5}in,${i * 3 + .5}in,0)>`
          :q++ && q%8?
          `<div style=position:fixed;font:7em'' id=t${i+'-'+j}>`+[...`🏠🌳🏡️🏨🏢⛪🏭🏫🏦🌺`][q%10]
          :``
        ),
        this[`t${i+'-'+j}`]&&(
          this[`t${i+'-'+j}`].style.transform=`translate3D(${j*3+1.5}in,${i*3+1}in,2in) rotateZ(${-a}rad) rotateX(5rad) rotateY(${this[`t${i+'-'+j}`]
            .onkeyup?Math.sin(f/5)/5:0}rad)scale(2.5)`,
          x>58?(
            this[`t${i+'-'+j}`].style.transition=this[`t${i+'-'+j}`].onkeyup?a=0:s.style.transition=`5s`,
            s.style.transform=`rotateX(.5rad) translate3D(-24in,-24in,-24in)`
            //alert('开饭了!')
          ) 
          :s.style.transform=`rotateX(.7rad) rotateZ(${a}rad) translate3D(${-x}in,${-y}in,0)`
        );
      }
    }
    v=x,
    w=y,//坐标初始化视口
    x+=(d-u)/9*Math.sin(a+=(l-r)/30),
    y+=(d-u)/9*Math.cos(a),
    x>0 && y>0 && (m[~~(y/3)]>> x/3 & 1)||(x=v,y=w),
    t.style.transform=`translate3D(${x}in, ${y}in, ${3+Math.sin(f/5)}em ) rotateZ(${-a}rad) rotateX(5rad)`,
    f++
},40);