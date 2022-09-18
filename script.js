var data1= 
{ name:"samsung",model:"Galaxy",memory:64, price:15000,
chk:"<input type='checkbox' id='p2'>",}
var data2= 
{ name:"nokia",model:"S730",memory:128, price:22000,
chk:"<input type='checkbox' id='p3'>",}
var data3= 
{ name:"xiomi",model:"note",memory:32, price:12000,
chk:"<input type='checkbox' id='p4'>",}
var data4= 
{ name:"motorala",model:"G10",memory:32, price:15000,
chk:"<input type='checkbox' id='p5'>",}
var data5= 
{ name:"apple",model:"S12",memory:64, price:25000,
chk:"<input type='checkbox' id='p6'>",}


var arr=[data1,data2,data3,data4,data5]
function show(){
    table="<table><tr><th>Company</th><th>Model</th><th>Memory</th><th>Price</th><th>Action</th></tr>"
    arr.forEach(element => {
        table+="<tr><td>"+
        element.name+
        "</td><td>"+
        element.model+
        "</td><td>"+
        element.memory+
        "</td><td>"+
        element.price+
        "</td><td>"+
        element.chk+
        "</td></tr>"


    
      
        


    });
    table+="</table>"
    document.getElementById("p1").innerHTML=table
}
function fun(){
    var x1= document.getElementById("p2").checked;
    var x2= document.getElementById("p3").checked;
    var x3= document.getElementById("p4").checked;
    var x4= document.getElementById("p5").checked;
    var x5= document.getElementById("p6").checked;
if (x1==true){
    delete arr[0]
} 
else if (x2==true){
    delete arr[1]
}
else if (x3==true){
    delete arr[2]
}
else if (x4==true){
    delete arr[3]
}
else if (x5==true){
    delete arr[4]
}
table="<table><tr><th>Company</th><th>Model</th><th>Memory</th><th>Price</th><th>Action</th></tr>"
    arr.forEach(element => {
        table+="<tr><td>"+
        element.name+
        "</td><td>"+
        element.model+
        "</td><td>"+
        element.memory+
        "</td><td>"+
        element.price+
        "</td><td>"+
        element.chk+
        "</td></tr>"
});
table+="</table>"
document.getElementById("p1").innerHTML=table
}
