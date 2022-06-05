divisibleby8=(a)=>
{
if(a%8==0)
{
return "divisible by 8"
}

else{
return "not divisible by 8"
}
}

var x=16
var result=divisibleby8(x)
console.log(result)