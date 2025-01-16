const cont=document.querySelector('.container');
function creategrid(){
    cont.style.display = 'grid';
    cont.style.gridTemplateColumns = 'repeat(16, 1fr)';
    cont.style.gridTemplateRows = 'repeat(16, 1fr)';
    cont.style.gap = '1px';
    cont.style.backgroundColor = 'black';
    cont.style.width = '550px';
    cont.style.height = '550px';
    for(let i=0;i<16*16;i++){
        const k= document.createElement('div');
        k.style.border='1px solid black';
        k.style.backgroundColor='white';
        cont.appendChild(k);
    }}
    creategrid();
    function resizegrid(x,y){
      cont.innerHTML='';
        cont.style.display = 'grid';
        cont.style.gridTemplateColumns = `repeat(${x}, 1fr)`;
        cont.style.gridTemplateRows = `repeat(${y}, 1fr)`;
        cont.style.gap = '1px';
        cont.style.backgroundColor = 'black';
        cont.style.width = '550px';
        cont.style.height = '550px';
  
        for(let i=0;i<x*y;i++){
            const k= document.createElement('div');
            k.style.border='1px solid black';
            k.style.backgroundColor='white';
            cont.appendChild(k);
        }
    }
    const inputwid=document.querySelector('.width');
    const inputheight=document.querySelector('.height');
    const btn=document.querySelector('.button');
    btn.addEventListener('click',()=>{
      const x=inputwid.value;
      const y=inputheight.value;
      if (isNaN(x) || isNaN(y) || x <= 0 || y <= 0) {
    alert('Please enter valid positive numbers for width and height!');
    return;
  }
      resizegrid(x,y);
    });
  
    const draw=document.querySelector('.draw');
     
    draw.addEventListener('click',fill);
    function fill(){
        const divs=document.querySelectorAll('.container div');
        divs.forEach((div)=>{
            div.addEventListener('mouseover',()=>{
                let red=Math.floor(Math.random()*256);
                let green=Math.floor(Math.random()*256);
                let blue=Math.floor(Math.random()*256);
                div.style.backgroundColor=`rgb(${red},${green},${blue})`;
            });
        });
    }
    function erase(){
        const divs=document.querySelectorAll('.container div');
        divs.forEach((div)=>{
            div.addEventListener('mouseover',()=>{
                div.style.backgroundColor='white';
            });
        }); 
    }
    const erasebtn=document.querySelector('.erase');
    erasebtn.addEventListener('click',erase);
    const clearbtn=document.querySelector('.clear');
    clearbtn.addEventListener('click',clear);
    function clear(){
        const divs=document.querySelectorAll('.container div');
        divs.forEach((div)=>{
            div.style.backgroundColor='white';
        });
    }





  
 

