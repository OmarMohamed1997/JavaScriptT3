var userName = prompt("Please Enter Username ");
var password = prompt("Please Enter Password ");
var check = confirm("confirm your user name and password");
while(check)
{
    if(userName == "omar" && password == "1234")
        {
            alert("Welcome login success");
            check=false;
        }
    else if(userName != "omar" && password != "1234")
        {
            alert("You Entered Wrong Username and Wrong password \n please enter right username \n please enter right password");
            userName = prompt("Please Enter Username ");
            password = prompt("Please Enter Password ");
        }     
    else if(userName != "omar" )
        {
            alert("You Entered Wrong Username \n please enter right username");
            userName = prompt("Please Enter Username ");
        }   
    else if( password != "1234")
        {
            alert("You Entered Wrong Password \n please enter right password");
            password = prompt("Please Enter Password ");
        }       
      
}    