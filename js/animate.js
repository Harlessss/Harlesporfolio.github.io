let text="_Harles Kevin Mednoza Cancha";
let i=0;
function write(){
    document.body.innerText=text.slice(0,i);
    if(i>text-length){
        i=0
    }
}
setInterval(writeText,100);