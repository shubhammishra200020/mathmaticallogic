console.log('hii')
document.getElementsByClassName("dss").innerHTML = "red";

function fac()
{
    var num=parseInt(document.getElementById('nm').value,10);
    if(isNaN(num))
    {
        document.getElementById('ans').style.color = 'red';
        document.getElementById('ans').innerHTML="Enter Integer*";
    }
    else
    {
        let a;
        a=num.toString(16);
        document.getElementById('ans').innerHTML="Hexadecimal:"+a;
        var decimal = parseInt(num,2);
        document.getElementById('bintodes').innerHTML="Hexadecimal:"+decimal;
    }
}
function bin()
{
    DAT=parseInt(document.getElementById('num1').value);
   bi=DAT.toString(2);
   if(isNaN(DAT))
   {
    document.getElementById('aa').style.color = 'red';
    document.getElementById('aa').innerHTML="Enter Decimal Integers* ";
   }
   else
   document.getElementById('aa').innerHTML="Binery:"+bi;
}
function bin1()
{
    dat=parseInt(document.getElementById('num2').value);
    oc=dat.toString(8);
    if(isNaN(dat))
    {
     document.getElementById('aa1').style.color = 'red';
     document.getElementById('aa1').innerHTML="Enter Decimal Integers* ";
    }
    else
    document.getElementById('aa1').innerHTML="Octal:"+oc;
}
const DA=document.getElementById('bintodes').value;
var d;
function nd(val)
{
    d=parseInt(document.getElementById('bintodes').value);  
    document.getElementById('bintodes').innerHTML+=val;
}
function C()
{
    document.getElementById('bintodes').innerHTML=" ";
}
function f()
{
    d=(document.getElementById('bintodes').value);
    var decimal = parseInt(d,2);
    if(isNaN(DA))
    {
        document.getElementById('bintodes').innerHTML+="Not Show Result";
    }
    else
    document.getElementById('bintodes').innerHTML+=decimal;
}