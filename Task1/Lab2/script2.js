var sum      = (n1,n2) =>  n1+n2;
var sub      = (n1,n2) =>  n1-n2;
var multi    = (n1,n2) =>  n1*n2;
var division = (n1,n2) =>  n1/n2;
var mod      = (n1,n2) =>  n1%n2;
var setNumbers = () =>
{
    var n1 = Number(prompt("Please Enter First Number"));
    var n2 = Number(prompt("Please Enter Second Number"));
    return [n1,n2];
}
var check = true;
var numbers; 
while(check)
{
    var operation = prompt("Please Enter Operation You Want\n Enter '+ 'to sum \n Enter '-' to subtract \n Enter '*' to multi  \n Enter '/' to division \n Enter '%' to moduls \n Enter 'q' to Exit ");
    
    switch(operation[0])
    {
        case '+':
          numbers=setNumbers(); 
          alert("sum of two numbers = :" + sum(numbers[0],numbers[1]));
          
          break;
        case '-':
          numbers=setNumbers(); 
          alert("sub of two numbers = :" + sub(numbers[0],numbers[1]));
          break;
        case '*':
          numbers=setNumbers();   
          alert("sub of two numbers = :" + multi(numbers[0],numbers[1]));
        break; 
        case '/':
            numbers=setNumbers(); 
          alert("division of two numbers = :" + division(numbers[0],numbers[1]));
        break;
        case '%':
            numbers=setNumbers(); 
          alert("moduls of two numbers = :" + mod(numbers[0],numbers[1]));
        break;
        case 'q':
          check= false;  
        break;
        default:
           alert("Invalid choice"); 

    }
}

