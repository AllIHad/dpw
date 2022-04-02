var b;
 b="aku"
let a;
a = 1;
console.log(typeof a);
console.log(typeof b);

var mantanku=["rakha","juan"];
for(let i=0;i<2;i++){
    console.log(mantanku[i]);
}

var c=6/2;
if(c==3)console.log("benar");
else console.log("salah");



// manipulation mode
var e=document.createElement("h1");
e.innerHTML="hallo selamat pagi";

document.body.append(e);
// manipulation ke tempat yang kita inginkan
var f=document.createElement("h2");
var g=document.createTextNode("halo selamat sore");
f.appendChild(g);
const h8=document.getElementById("coba");
h8.appendChild(g);


