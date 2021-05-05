let Uname=sessionStorage.getItem("keyname");
let Upoint=sessionStorage.getItem("points");
let Utime=sessionStorage.getItem("time");
document.querySelector(".time").innerHTML=Utime;
document.querySelector(".name").innerHTML=Uname;
document.querySelector(".points").innerHTML=Upoint;