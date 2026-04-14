var num1 = 10;
var c1=0;
//console.log(num1 + num2);
//console.log(typeof num1);
//if(num1 === num2) console.log(-1);
 //console.log(2 ** 3);
 
//  for( var i = 2;i<=num1;i++)
//  {   var c = 0;
//     for(var j = 2;j <= i;j++)
//     {
//         if(i % j == 0)
//         {
//             c++;
//         }
//     }
//     if(c == 1)
//     {

//         console.log(i);
//     }
//  }
// const obj={
//     id:1,
//     name:"koushik",
//     mydata:[30,"hello","bye bye"]
// }
// console.log(obj.l);
// obj.l="Hyd"
// console.log(obj);
// console.log(obj.a);
// obj.a=[20,30,40]
// console.log(obj);
// console.log(obj.mydata);


// const a = [
// {
//     id : 1,
//     name:"koushik",
//     salary:56.0
// },
// {
//     id:2,
//     name:"kanna",
//     salary:30.0
// }  
// ]
// console.log(a[1].name);
//forin-arrays
//forof-objects

// function myclass(a,b)
// {
//     return a+b;
// }
// function sub(a,b)
// {
//     return a-b;
// }
// console.log(sub(20,12));
let a;
let b;
let op;
function doMath(a,b,op)
{
    
    switch(op)
    {
        case '+': console.log(`first no${a}. second is ${b} sum of ${a+b}`);
                    break;
        case '-':  console.log(`first no${a}. second is ${b} sum of ${a-b}`);
                    break;
        case '*':   console.log(`first no${a}. second is ${b} sum of ${a*b}`);
                    break;
        case '/':   console.log(`first no${a}. second is ${b} sum of ${a/b}`);
                    break;
        default:    console.log(`invalid number`);
                    break;
    }
}



// let name="koushik";
// let age="22";
// console.log(`My...name is ${name}. my age is ${age}`);
// console.log("My...name is "+name+". my age is "+age);

