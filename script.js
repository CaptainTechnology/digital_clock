let hour=document.getElementById("hour")
let minut=document.getElementById("minut")
let second =document.getElementById("second");


function time(){
    let date=new Date;
     hour.innerHTML=(date.getHours()<10?"0":"")+date.getHours();
     minut.innerHTML=(date.getMinutes()<10?"0":"")+date.getMinutes();
     second.innerHTML=(date.getSeconds()<10?"0":"")+date.getSeconds();
    }

setInterval(time,1000)
