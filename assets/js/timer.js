let dt=new Date(new Date().setTime(0));
let time=dt.getTime();
let second=Math.floor((time%(100*60))/1000);
let minute=Math.floor((time%(1000*60*60))/(1000*60));

let timex=0;


let mytime=setInterval(()=>{
    if(second<59)
    {
        second++;
    }else{
        minute++;
        second=0;
    }
    let formatted_sec=second < 10? `0${second}`: `${second}`;
    let formatted_mint=minute < 10? `0${minute}`: `${minute}`;
        // console.log(formatted_sec,formatted_mint);
        document.querySelector(".time").innerHTML=`${formatted_mint} : ${formatted_sec}`;
},1000);