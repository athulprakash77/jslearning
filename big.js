bigest3number=(a,b,c)=>
{

if(a>b)

{
   if(a>c)
   return a 
}
if(b>a)
{
    if(b>c)
    return b
}
if(c>a)
{
    if(c>b)
    return c
}
  
}


var x=1000
var y=200
var z=30
var z=bigest3number(x,y,z)
console.log(z)