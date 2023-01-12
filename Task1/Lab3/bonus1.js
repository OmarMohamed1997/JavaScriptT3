var sum      = (n1,n2) =>  n1+n2;
var sub      = (n1,n2) =>  n1-n2;
var multi    = (n1,n2) =>  n1*n2;
var division = (n1,n2) =>  n1/n2;
var mod      = (n1,n2) =>  n1%n2;

var check = true;
var result;
var count=0;
var number1 =Number(prompt("Please Enter First Number"));
var operation = prompt("Please Enter Operation You Want\n Enter '+ 'to sum \n Enter '-' to subtract \n Enter '*' to multi  \n Enter '/' to division \n Enter '%' to moduls ");
var number2 =Number(prompt("Please Enter Second Number"));
while(check)
{
    //console.log(check);
   if(count==1)
   {
    
    operation = prompt("Please Enter Operation You Want\n Enter '+ 'to sum \n Enter '-' to subtract \n Enter '*' to multi  \n Enter '/' to division \n Enter '%' to moduls \n Enter 'q' to Exit ");
    if(operation[0]!='q')
    {
    number1=result;
    number2 =Number(prompt("Please Enter Number"));
    }
    
   }
switch(operation[0])
    {
        case '+':
           
          result= number1+number2;
          alert("sum of two numbers = :" + result);
          
          break;
        case '-':
            result= number1-number2;
          alert("sub of two numbers = :" +result);
          break;
        case '*':
            result= number1*number2; 
          alert("multi of two numbers = :" +result);
        
        break;
        
        case '/':
            result= number1/number2;
          alert("division of two numbers = :" + result);
        break;
        case '%':
            result= number1%number2; 
          alert("moduls of two numbers = :" + result);
        break;
        case 'q':
          check = false; 
          console.log(check);
          break;
        default:
           alert("Invalid choice"); 
    }
    if(check==false)
       { 
        break;
      }
      
    count=1;
   

}
