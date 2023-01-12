var count = Number(prompt("Enter number of numbers you want to enter "));
var num , sum =0, avg=0;

var numbers=[];
for(let i=0;i<count;i++)
    { 
        num = Number(prompt("Please enter " + (i+1) + " number : "));
        numbers.push(num);
    }

    for(let i=0;i<count;i++)
    { 
        sum += numbers[i];
        
    }
    alert ("Sum of numbers is "+ sum + "\n Average of numbers is " + (sum/count));