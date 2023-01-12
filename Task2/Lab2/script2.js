var contactElement = [];
function addContact()
{
  var contact = {name : prompt("Please Enter Your Name ") , phone : prompt("Please Enter Your Phone number ") };
  contactElement.push(contact);
}
function searchContact()
{
    var contain = false;
    var search=prompt("Enter Name you want to search");
    for(let i=0 ;i<contactElement.length;i++)
    {
        if(search == contactElement[i].name)
        {
           alert("Details of contact : " + "\n name of contact Is "+ contactElement[i].name + "\n phone number of contact is "+ contactElement[i].phone ); 
           contain=true;
           break; 
        }
        
    }
    if(!contain)
       alert("contact not valid");

}
var check= true;
while(check)
{
var operation = prompt("enter add to add new contact \n enter search to search for a contact \n enter exit ");
if(operation=="add")
    {
         addContact();
    }
else if (operation=="search")
    {
       searchContact();    
    }
    else if (operation=="exit")
    {
       check=false;    
    }
    else
    {
        alert("you Enterd invalid word");
    }

}