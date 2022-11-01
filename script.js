const feliratok=['x',...Array(10).keys(),'+','-','*','/','^','ˇ','sin','cos','tan','(',')','C','R'];
let gombok="";
feliratok.forEach(function(item){
    gombok+=('<button>'+item+'</button>');
}
);
document.getElementById('gombok').innerHTML=gombok;
let tartalom="";
let felirat="";
document.querySelectorAll('button').forEach(
    gomb=>{
        gomb.addEventListener("click",function(){
            felirat=gomb.innerText;
            if(felirat=='C'){
                document.querySelector('#szoveg').value="";
            }
            else if(felirat=='R'){
                const torol=tartalom.substring(0,tartalom.length-1);
                document.querySelector('#szoveg').value=torol;
                tartalom=torol;
            }
            else{
                document.querySelector('#szoveg').value+=felirat;
                tartalom=document.querySelector('#szoveg').value;
            }
        });
    }
)
document.getElementById("futtat").addEventListener('click',function(){
    tartalom=tartalom.replaceAll('sin','Math.sin');
    tartalom=tartalom.replaceAll('cos','Math.cos');
    tartalom=tartalom.replaceAll('tan','Math.tan');
    tartalom=tartalom.replaceAll('ˇ','Math.sqrt');
    tartalom=tartalom.replaceAll('^','**');
    let x1=0;
    let y1=0;
    let x2=0;
    let y2=0;
    while(x2<100){
        fv=tartalom.replaceAll('x',''+(x2-50));
        y2=50-eval(fv);
        document.querySelector('svg').innerHTML+=('<line x1="'+x1+'%" y1="'+y1+'%" x2="'+x2+'%" y2="'+y2+'%" style="stroke:rgb(0,0,255);stroke-width:1" />');
        x1=x2;
        x2+=0.5;
        y1=y2;
        
    }
})
