import inquirer from "inquirer";

let answer:{
    NumberOne:number,
    NumberTwo:number,
    Operator:string,
}= await inquirer.prompt([
    {
        type:"number",
        name:"NumberOne",
        message:"Please selected your first number",
    },
    {
        type:"number",
        name:"NumberTwo",
        message:"Please selected your second number",
    },
    {
        type:"list",
        name:"Operator",
        choices:["Addition(+)", "Subtraction(-)", "Multiplication(*)", "Division(/)"],
        message:"Please selected your operator",
    }
])
let{NumberOne,NumberTwo,Operator} = answer;

if(NumberOne && NumberTwo && Operator){
    let result:number=0
    if(Operator === "Addition(+)"){
        result=NumberOne+NumberTwo
    }else if (Operator === "Subtraction(-)"){
        result=NumberOne-NumberTwo
    }else if (Operator === "Multiplication(*)"){
        result=NumberOne*NumberTwo  
    }else if (Operator === "Division(/)"){
        result=NumberOne/NumberTwo 
    }
    console.log("Your result is:",result)
}else(console.log("Please selected valid input"))